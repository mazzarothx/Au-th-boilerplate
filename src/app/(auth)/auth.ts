import { PrismaAdapter } from "@auth/prisma-adapter";
import type { UserRole } from "@prisma/client";
import NextAuth from "next-auth";

import { getTwoFactorConfirmationByUserId } from "@/app/(auth)/data/two-factor-confirmation";
import { db } from "@/app/(auth)/lib/db";
import authConfig from "./auth.config";
import { getAccountByUserId } from "./data/account";
import { getUserById } from "./data/user";

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
	unstable_update,
} = NextAuth({
	pages: {
		signIn: "/login",
		error: "/error",
	},
	events: {
		async linkAccount({ user }) {
			await db.user.update({
				where: { id: user.id },
				data: { emailVerified: new Date() },
			});
		},
	},
	callbacks: {
		async signIn({ user, account }) {
			// Allow OAuth without email verification
			if (account?.provider !== "credentials") return true;

			const existingUser = await getUserById(user.id);

			// Prevent sign in without email verification
			if (!existingUser?.emailVerified) return false;

			if (existingUser.isTwoFactorEnabled) {
				const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

				if (!twoFactorConfirmation) return false;

				// Delete two factor confirmation for next sign in
				await db.twoFactorConfirmation.delete({
					where: { id: twoFactorConfirmation.id },
				});
			}

			return true;
		},
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}

			if (token.role && session.user) {
				session.user.role = token.role as UserRole;
			}

			if (session.user) {
				session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
			}

			if (session.user) {
				session.user.name = token.name;
				session.user.email = token.email as string;
				session.user.isOAuth = token.isOAuth as boolean;
			}

			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token;

			const existingUser = await getUserById(token.sub);

			if (!existingUser) return token;

			const existingAccount = await getAccountByUserId(existingUser.id);

			token.isOAuth = !!existingAccount;
			token.name = existingUser.name;
			token.email = existingUser.email;
			token.role = existingUser.role;
			token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

			return token;
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
});
