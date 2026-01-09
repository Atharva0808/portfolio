import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { GithubActivity } from "@/components/GithubActivity";
import { Blogs } from "@/components/Blogs";

export default function Home() {
    return (
        <main className="min-h-screen bg-white dark:bg-black selection:bg-green-500/30 transition-colors duration-300">
            <Navbar />
            <Hero />
            <TechStack />
            <GithubActivity />
            <Projects />
            <Experience />
            <Blogs />
            <Footer />
        </main>
    );
}