"use client";

import { logout } from "@/app/(auth)/actions/logout";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
	children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
	const router = useRouter();
	const onClick = () => {
		logout();
		router.refresh();
	};

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<span onClick={onClick} className="cursor-pointer">
			{children}
		</span>
	);
};
