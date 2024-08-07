"use server";

import type * as z from "zod";

import { getUserByEmail } from "@/app/(auth)/data/user";
import { sendPasswordResetEmail } from "@/app/(auth)/lib/mail";
import { generatePasswordResetToken } from "@/app/(auth)/lib/tokens";
import { ResetSchema } from "@/app/(auth)/schemas";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
	const validatedFields = ResetSchema.safeParse(values);

	if (!validatedFields.success) {
		return { error: "Invalid emaiL!" };
	}

	const { email } = validatedFields.data;

	const existingUser = await getUserByEmail(email);

	if (!existingUser) {
		return { error: "Email not found!" };
	}

	const passwordResetToken = await generatePasswordResetToken(email);
	await sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token);

	return { success: "Reset email sent!" };
};
