"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
	ExternalLink,
	Github,
	X,
	ArrowUpRight,
	Smartphone,
} from "lucide-react";
import { projects, type Project } from "@/lib/content";

export default function Projects() {
	const [active, setActive] = useState<Project | null>(null);

	useEffect(() => {
		if (!active) return;
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [active]);

	return (
		<section
			id="projects"
			className="mx-auto max-w-content px-6 py-20 md:py-28"
		>
			<div className="mb-12">
				<span className="section-label">02 · Portfolio</span>
				<h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
					Featured Projects
				</h2>
				<p className="mt-2 text-muted max-w-xl">
					Selected work across POS, IoT, telemedicine, and fintech. Click a card
					for details.
				</p>
			</div>

			<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{projects.map((p, i) => (
					<motion.button
						key={p.slug}
						onClick={() => setActive(p)}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.45, delay: i * 0.05 }}
						whileHover={{ y: -6 }}
						className="card group text-left p-6 relative overflow-hidden focus-visible:outline-brand"
					>
						<div className="flex items-start justify-between gap-3">
							<div className="flex items-start gap-3 min-w-0">
								{p.image ? (
									<div className="relative h-12 w-12 rounded-xl overflow-hidden border border-[var(--border)] flex-shrink-0">
										<Image
											src={p.image}
											alt={`${p.title} icon`}
											fill
											sizes="48px"
											className="object-cover"
										/>
									</div>
								) : (
									<div className="h-12 w-12 rounded-xl border border-[var(--border)] bg-[var(--border)]/30 flex items-center justify-center flex-shrink-0">
										<Smartphone className="h-5 w-5 text-muted" />
									</div>
								)}
								<div className="min-w-0">
									<div className="font-mono text-[10px] text-brand tracking-widest uppercase flex items-center gap-2">
										<span>{String(i + 1).padStart(2, "0")}</span>
										{p.playStoreUrl && (
											<span className="normal-case tracking-normal text-muted">
												· On Play Store
											</span>
										)}
									</div>
									<h3 className="mt-1 font-semibold text-lg group-hover:text-brand transition-colors truncate">
										{p.title}
									</h3>
								</div>
							</div>
							<ArrowUpRight className="h-4 w-4 text-muted flex-shrink-0 group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
						</div>
						<p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
							{p.tagline}
						</p>
						<div className="mt-5 flex flex-wrap gap-1.5">
							{p.tech.slice(0, 4).map((t) => (
								<span
									key={t}
									className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--border)] text-muted"
								>
									{t}
								</span>
							))}
							{p.tech.length > 4 && (
								<span className="text-[10px] font-mono px-2 py-0.5 text-muted">
									+{p.tech.length - 4}
								</span>
							)}
						</div>
					</motion.button>
				))}
			</div>

			<AnimatePresence>
				{active && (
					<motion.div
						role="dialog"
						aria-modal="true"
						aria-label={active.title}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
						onClick={() => setActive(null)}
					>
						<motion.div
							initial={{ scale: 0.95, y: 24, opacity: 0 }}
							animate={{ scale: 1, y: 0, opacity: 1 }}
							exit={{ scale: 0.95, y: 24, opacity: 0 }}
							transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
							onClick={(e) => e.stopPropagation()}
							className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-2xl bg-card border border-[var(--border)] p-6 md:p-8 shadow-2xl"
						>
							<button
								onClick={() => setActive(null)}
								aria-label="Close"
								className="absolute top-4 right-4 p-2 rounded-lg hover:bg-[var(--border)]/50 transition"
							>
								<X className="h-4 w-4" />
							</button>
							<div className="flex items-center gap-4">
								{active.image && (
									<div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-[var(--border)] flex-shrink-0">
										<Image
											src={active.image}
											alt={`${active.title} icon`}
											fill
											sizes="64px"
											className="object-cover"
										/>
									</div>
								)}
								<div>
									<div className="font-mono text-[10px] text-brand tracking-widest uppercase">
										Case Study
									</div>
									<h3 className="mt-1 text-2xl md:text-3xl font-bold pr-8 tracking-tight">
										{active.title}
									</h3>
								</div>
							</div>
							<p className="mt-4 text-muted">{active.tagline}</p>
							<div className="mt-5 flex flex-wrap gap-1.5">
								{active.tech.map((t) => (
									<span
										key={t}
										className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--border)] text-muted"
									>
										{t}
									</span>
								))}
							</div>
							<div className="mt-6 space-y-3 text-sm leading-relaxed">
								{active.highlights.map((h) => (
									<div key={h} className="flex gap-2.5">
										<span className="text-brand mt-1.5 flex-shrink-0">▹</span>
										<span className="text-muted">{h}</span>
									</div>
								))}
							</div>
							{(active.playStoreUrl || active.githubUrl) && (
								<div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-[var(--border)]">
									{active.playStoreUrl && (
										<a
											href={active.playStoreUrl}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2 text-slate-950 text-sm font-semibold hover:opacity-90"
										>
											<ExternalLink className="h-4 w-4" /> Play Store
										</a>
									)}
									{active.githubUrl && (
										<a
											href={active.githubUrl}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-4 py-2 text-sm font-medium hover:border-brand hover:text-brand"
										>
											<Github className="h-4 w-4" /> Source
										</a>
									)}
								</div>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
