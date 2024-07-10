import Image from "next/image";
import Header from "./_components/layout/header";

interface AdminDashboardLayoutProps {
	children: React.ReactNode;
}

export default async function AdminDashboardLayout({
	children,
}: {
	children: React.ReactNode;
	params: { storeId: string };
}) {
	return (
		<body>
			<main className="flex min-h-screen relative ">
				<Header />
				{children}

				<Image
					width={1512}
					height={550}
					className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
					src="/gradient-background-top.png"
					alt=""
					role="presentation"
					priority
				/>
				<Image
					width={1512}
					height={447}
					className="absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2"
					src="/gradient-background-bottom.png"
					alt=""
					role="presentation"
					priority
				/>
			</main>
		</body>
	);
}
