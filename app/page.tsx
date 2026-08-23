import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";

export default function Home() {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<Experience />
				<Projects />
				<Skills />
				<Certifications />
				<Recommendations />
				<Contact />
			</main>
		</>
	);
}
