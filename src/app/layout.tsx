import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Con cariño, al futuro.",
	description: "Para mi persona significante",
	icons: {},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es" data-theme="cmyk">
			<head>
				<link
					rel="icon"
					href="/icon?<generated>"
					type="image/svg"
					sizes="any"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
