import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});
const mono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Muhammad Ramdani — Mobile Developer",
	description:
		"Mobile Developer specializing in Android (Kotlin, Jetpack Compose), Flutter, Clean Architecture, and IoT / Bluetooth integrations.",
	metadataBase: new URL("https://ramdani.dev"),
	openGraph: {
		title: "Muhammad Ramdani — Mobile Developer",
		description:
			"6+ years building scalable mobile apps across fintech, telemedicine, IoT & enterprise.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${inter.variable} ${mono.variable}`}
		>
			<body className="font-sans">
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<div className="aurora" aria-hidden />
					<div className="grid-bg fixed inset-0 -z-10" aria-hidden />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
