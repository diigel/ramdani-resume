"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/content";

export default function Certifications() {
	if (certifications.length === 0) return null;
	return (
		<section id="certifications" className="mx-auto max-w-content px-6 py-20 md:py-28">
			<div className="mb-12">
				<span className="section-label">04 · Credentials</span>
				<h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
					Licenses &amp; Certifications
				</h2>
			</div>
			<div className="grid gap-4 sm:grid-cols-2">
				{certifications.map((c, i) => (
					<motion.a
						key={c.name}
						href={c.url ?? "#"}
						target={c.url ? "_blank" : undefined}
						rel="noreferrer"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-60px" }}
						transition={{ duration: 0.4, delay: i * 0.05 }}
						className="card group flex items-start gap-4 p-5"
					>
						<div className="h-10 w-10 flex-shrink-0 rounded-lg border border-[var(--border)] bg-[var(--border)]/30 flex items-center justify-center">
							<Award className="h-5 w-5 text-brand" />
						</div>
						<div className="flex-1 min-w-0">
							<h3 className="font-semibold group-hover:text-brand transition-colors">
								{c.name}
							</h3>
							<p className="text-sm text-muted mt-0.5">{c.issuer}</p>
							<p className="text-xs font-mono text-muted mt-1">{c.year}</p>
						</div>
						{c.url && <ExternalLink className="h-4 w-4 text-muted flex-shrink-0" />}
					</motion.a>
				))}
			</div>
		</section>
	);
}
