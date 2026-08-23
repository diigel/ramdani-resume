"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { recommendations } from "@/lib/content";

export default function Recommendations() {
	if (recommendations.length === 0) return null;
	return (
		<section
			id="recommendations"
			className="mx-auto max-w-content px-6 py-20 md:py-28"
		>
			<div className="mb-12">
				<span className="section-label">05 · Words</span>
				<h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
					Recommendations
				</h2>
				<p className="mt-2 text-muted max-w-xl">
					From colleagues &amp; managers on LinkedIn.
				</p>
			</div>
			<div className="grid gap-5 md:grid-cols-2">
				{recommendations.map((r, i) => (
					<motion.figure
						key={r.name}
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.45, delay: i * 0.06 }}
						className="card p-6 relative"
					>
						<Quote className="h-5 w-5 text-brand opacity-60 mb-3" />
						<blockquote className="text-sm md:text-base leading-relaxed text-fg/90">
							{r.quote}
						</blockquote>
						<figcaption className="mt-5 pt-4 border-t border-[var(--border)]">
							<div className="font-semibold text-sm">{r.name}</div>
							<div className="text-xs text-muted mt-0.5">{r.role}</div>
						</figcaption>
					</motion.figure>
				))}
			</div>
		</section>
	);
}
