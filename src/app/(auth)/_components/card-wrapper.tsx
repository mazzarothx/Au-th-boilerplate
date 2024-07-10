"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header";
import { Social } from "./social";

interface CardWrapperProps {
	children: React.ReactNode;
	headerTitle: string;
	headerSubtitle: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
}

export const CardWrapper = ({
	children,
	headerTitle,
	headerSubtitle,
	backButtonLabel,
	backButtonHref,
	showSocial,
}: CardWrapperProps) => {
	return (
		<Card className="w-[400px] shadow-md bg-transparent border-none">
			<CardHeader>
				<Header title={headerTitle} subtitle={headerSubtitle} />
			</CardHeader>
			<CardContent>{children}</CardContent>
			<div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-full" />
			{showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			<CardFooter>
				<BackButton label={backButtonLabel} href={backButtonHref} />
			</CardFooter>
		</Card>
	);
};
