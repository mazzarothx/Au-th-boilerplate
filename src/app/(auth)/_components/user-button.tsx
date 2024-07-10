"use client";

import { IoIosExit } from "react-icons/io";

import { FaAlignJustify, FaLock } from "react-icons/fa";

import { useCurrentUser } from "@/app/(auth)/hooks/use-current-user";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserRole } from "@prisma/client";
import { CommandIcon } from "lucide-react";
import Link from "next/link";
import { LogoutButton } from "./logout-button";

export const UserButton = () => {
	const user = useCurrentUser();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				{/* <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar> */}
				<CommandIcon className="size-4" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40" align="end">
				{user?.role === UserRole.ADMIN && (
					<DropdownMenuItem>
						<FaAlignJustify className="h-4 w-4 mr-2" />
						<Link href="/dashboard">Dashboard</Link>
					</DropdownMenuItem>
				)}

				<DropdownMenuItem>
					<FaLock className="h-4 w-4 mr-2" />
					<Link href="/">Home</Link>
				</DropdownMenuItem>
				<LogoutButton>
					<DropdownMenuItem>
						<IoIosExit className="h-4 w-4 mr-2" />
						Logout
					</DropdownMenuItem>
				</LogoutButton>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
