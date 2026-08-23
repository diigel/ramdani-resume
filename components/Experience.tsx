"use client";
import { motion } from "framer-motion";
import { experiences } from "@/lib/content";

export default function Experience() {
	return (
		<section
			id="experience"
			className="mx-auto max-w-content px-6 py-20 md:py-28"
		>
			<div className="mb-12">
				<span className="section-label">01 · Career</span>
				<h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
					Work Experience
				</h2>
				<p className="mt-2 text-muted max-w-xl">
					Six years shipping production apps across fintech, telemedicine, IoT
					and enterprise.
				</p>
			</div>

			<ol className="relative border-l border-[var(--border)] pl-8 space-y-12">
				{experiences.map((e, i) => (
					<motion.li
						key={e.company}
						initial={{ opacity: 0, x: -16 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{
							duration: 0.5,
							delay: i * 0.06,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="group"
					>
						<span
							aria-hidden
							className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-2 border-brand bg-bg group-hover:bg-brand transition-colors"
						/>
						<div className="flex flex-wrap items-baseline justify-between gap-2">
							<h3 className="font-semibold text-lg">
								{e.role}
								<span className="text-muted font-normal"> @ {e.company}</span>
							</h3>
							<span className="text-xs text-muted font-mono tabular">
								{e.period}
							</span>
						</div>
						<ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
							{e.bullets.map((b) => (
								<li key={b} className="flex gap-2.5">
									<span className="text-brand mt-1.5 flex-shrink-0">▹</span>
									<span>{b}</span>
								</li>
							))}
						</ul>
					</motion.li>
				))}
			</ol>
		</section>
	);
}
