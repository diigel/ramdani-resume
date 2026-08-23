"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowRight } from "lucide-react";
import { profile } from "@/lib/content";

export default function Contact() {
	return (
		<section id="contact" className="mx-auto max-w-content px-6 py-24 md:py-32">
			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-center"
			>
				<span className="section-label justify-center">04 · Contact</span>
				<h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
					Let&apos;s build <span className="gradient-text">something</span>.
				</h2>
				<p className="mt-5 text-muted max-w-xl mx-auto leading-relaxed">
					Open to Mobile Developer roles, Flutter contracts, and IoT / hardware
					integration projects. Fast to reply.
				</p>

				<a
					href={`mailto:${profile.email}`}
					className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-brand px-6 py-3.5 text-slate-950 font-semibold hover:opacity-90 transition"
				>
					<Mail className="h-4 w-4" />
					{profile.email}
					<ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
				</a>

				<div className="mt-6 flex flex-wrap justify-center gap-3">
					<a
						href={profile.github}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-card/40 backdrop-blur px-5 py-2.5 text-sm hover:border-brand hover:text-brand transition"
					>
						<Github className="h-4 w-4" /> GitHub
					</a>
					<a
						href={profile.linkedin}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-card/40 backdrop-blur px-5 py-2.5 text-sm hover:border-brand hover:text-brand transition"
					>
						<Linkedin className="h-4 w-4" /> LinkedIn
					</a>
				</div>

				<p className="mt-10 text-xs text-muted inline-flex items-center gap-1.5">
					<MapPin className="h-3.5 w-3.5" /> {profile.location}
				</p>
			</motion.div>

			<footer className="mt-20 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted font-mono">
				<span>
					© {new Date().getFullYear()} {profile.name}
				</span>
				<span>
					Designed &amp; built with Next.js · Framer Motion · Tailwind
				</span>
			</footer>
		</section>
	);
}
