"use client";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight } from "lucide-react";
import { profile } from "@/lib/content";

const stack = [
	"Kotlin",
	"Jetpack Compose",
	"Flutter",
	"Clean Architecture",
	"IoT / BLE",
];

export default function Hero() {
	return (
		<section className="mx-auto max-w-content px-6 pt-24 pb-20 md:pt-32 md:pb-28 relative">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
			>
				{/* Availability pill */}
				<div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-card/60 px-3 py-1 backdrop-blur">
					<span className="relative flex h-2 w-2">
						<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
						<span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
					</span>
					<span className="text-xs font-mono text-muted">
						Available for opportunities
					</span>
				</div>

				<p className="mt-8 font-mono text-sm text-brand">Hi, my name is</p>
				<h1 className="mt-3 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
					<span className="gradient-text">{profile.name}.</span>
				</h1>
				<h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-muted leading-tight">
					I build mobile apps
					<br className="hidden md:block" /> that actually ship.
				</h2>

				<p className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-muted">
					{profile.summary}
				</p>

				{/* Tech chips */}
				<div className="mt-8 flex flex-wrap gap-2">
					{stack.map((s) => (
						<span
							key={s}
							className="text-xs font-mono px-2.5 py-1 rounded-md border border-[var(--border)] bg-card/40 backdrop-blur"
						>
							{s}
						</span>
					))}
				</div>

				<div className="mt-10 flex flex-wrap gap-3">
					<a
						href={profile.cvUrl}
						download
						className="group inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-slate-950 text-sm font-semibold hover:opacity-90 transition"
					>
						<Download className="h-4 w-4" />
						Download CV
						<ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
					</a>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-card/40 backdrop-blur px-5 py-3 text-sm font-medium hover:border-brand hover:text-brand transition"
					>
						<Mail className="h-4 w-4" /> Get in touch
					</a>
				</div>
			</motion.div>
		</section>
	);
}
