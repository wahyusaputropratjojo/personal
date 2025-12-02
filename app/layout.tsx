import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { geistMono, geistSans } from "@/styles/fonts/geist";
import "./style.css";

export const metadata: Metadata = {
	description: "Personal Site",
	title: "Wahyu Saputro Pratjojo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html
			className={`${geistSans.variable} ${geistMono.variable}`}
			lang="en"
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
