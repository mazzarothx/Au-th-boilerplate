import { auth } from "@/app/(auth)/auth";
import { redirect } from "next/navigation";

interface AdminDashboardLayoutProps {
	children: React.ReactNode;
}

export default async function AdminDashboardLayout({
	children,
}: {
	children: React.ReactNode;
	params: { storeId: string };
}) {
	const session = await auth();

	if (session?.user?.role !== "ADMIN") {
		redirect("/auth/login");
	}

	return <main className="min-h-screen">{children}</main>;
}
