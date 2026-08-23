"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/content";

export default function Skills() {
	const groups = Object.entries(skills);
	return (
		<section id="skills" className="mx-auto max-w-content px-6 py-20 md:py-28">
			<div className="mb-12">
				<span className="section-label">03 · Toolbox</span>
				<h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
					Tech Stack &amp; Skills
				</h2>
				<p className="mt-2 text-muted max-w-xl">
					The languages, frameworks and tools I reach for on production work.
				</p>
			</div>
			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{groups.map(([group, items], i) => (
					<motion.div
						key={group}
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.4, delay: i * 0.05 }}
						className="card p-5"
					>
						<h3 className="font-mono text-[11px] tracking-widest uppercase text-brand">
							{group}
						</h3>
						<ul className="mt-4 flex flex-wrap gap-1.5">
							{items.map((s) => (
								<li
									key={s}
									className="text-xs px-2.5 py-1 rounded-md border border-[var(--border)] text-muted hover:text-fg hover:border-brand/50 transition"
								>
									{s}
								</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
		</section>
	);
}
