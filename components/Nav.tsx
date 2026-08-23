"use client";
import { useTheme } from "next-themes";
import { Moon, Sun, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/lib/content";

const links = [
	{ href: "#experience", label: "Experience", n: "01" },
	{ href: "#projects", label: "Projects", n: "02" },
	{ href: "#skills", label: "Skills", n: "03" },
	{ href: "#contact", label: "Contact", n: "04" },
];

export default function Nav() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		setMounted(true);
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 transition-all duration-300 ${
				scrolled
					? "backdrop-blur-xl bg-bg/70 border-b border-[var(--border)]"
					: "bg-transparent"
			}`}
		>
			<nav className="mx-auto max-w-content flex items-center justify-between px-6 py-4">
				<a href="#" className="font-mono font-semibold tracking-tight text-sm">
					<span className="text-brand">$</span> ramdani
					<span className="animate-pulse-dot inline-block ml-0.5">_</span>
				</a>
				<ul className="hidden md:flex gap-8 text-sm">
					{links.map((l) => (
						<li key={l.href}>
							<a
								href={l.href}
								className="group inline-flex items-baseline gap-1.5 hover:text-brand transition-colors"
							>
								<span className="font-mono text-[10px] text-brand opacity-70">
									{l.n}.
								</span>
								<span>{l.label}</span>
							</a>
						</li>
					))}
				</ul>
				<div className="flex items-center gap-2">
					<a
						href={profile.github}
						target="_blank"
						rel="noreferrer"
						aria-label="GitHub"
						className="p-2 rounded-lg hover:bg-[var(--border)]/50 hover:text-brand transition"
					>
						<Github className="h-4 w-4" />
					</a>
					<a
						href={profile.linkedin}
						target="_blank"
						rel="noreferrer"
						aria-label="LinkedIn"
						className="p-2 rounded-lg hover:bg-[var(--border)]/50 hover:text-brand transition"
					>
						<Linkedin className="h-4 w-4" />
					</a>
					{mounted && (
						<button
							aria-label="Toggle theme"
							onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
							className="p-2 rounded-lg hover:bg-[var(--border)]/50 hover:text-brand transition"
						>
							{theme === "dark" ? (
								<Sun className="h-4 w-4" />
							) : (
								<Moon className="h-4 w-4" />
							)}
						</button>
					)}
				</div>
			</nav>
		</header>
	);
}
