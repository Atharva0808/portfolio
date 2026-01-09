"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Experience = () => {
    return (
        <section id="work" className="py-20 px-6 bg-neutral-50 dark:bg-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-start mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-6 pb-2 tracking-tighter">
                        Experience
                    </h2>
                    <p className="text-neutral-500 text-lg max-w-lg">
                        My professional journey and hackathon wins.
                    </p>
                </div>

                <div className="relative border-l border-neutral-200 dark:border-neutral-800 ml-3 md:ml-4 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600 ring-4 ring-neutral-50 dark:ring-black group-hover:bg-black dark:group-hover:bg-white transition-colors" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                                    {exp.company}
                                </h3>
                                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 uppercase tracking-wide">
                                    <span>{exp.date}</span>
                                    <span>•</span>
                                    <span>{exp.location}</span>
                                </div>
                            </div>

                            <div className="text-base font-medium text-neutral-700 dark:text-neutral-300 mb-4 flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-neutral-400" />
                                {exp.role}
                            </div>

                            <ul className="space-y-2 mb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm marker:text-neutral-300">
                                {exp.points.map((point, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="mt-1.5 min-w-[4px] h-[4px] rounded-full bg-neutral-400 dark:bg-neutral-600" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech) => {
                                    const techInfo = techData[tech] || { icon: "", color: "#808080" };
                                    return (
                                        <span
                                            key={tech}
                                            className="group/tag flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-neutral-600 dark:text-neutral-300 transition-all duration-300 hover:bg-white/10 hover:text-white pr-4 cursor-default hover:scale-105"
                                        >
                                            {techInfo.icon && (
                                                <img
                                                    src={techInfo.icon}
                                                    alt={tech}
                                                    className={cn("w-3.5 h-3.5 transition-transform group-hover/tag:scale-110", tech === "Next.js" && "dark:invert")}
                                                />
                                            )}
                                            {tech}
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const techData: Record<string, { icon: string, color: string }> = {
    "Python": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    "FastAPI": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", color: "#009688" },
    "LangChain": { icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", color: "#ffffff" }, // Placeholder/Generic
    "OpenAI": { icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", color: "#10A37F" },
    "Docker": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
    "Next.js": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#ffffff" },
    "Gemini API": { icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg", color: "#8E75B2" },
    "Twilio": { icon: "https://cdn.iconscout.com/icon/free/png-256/free-twilio-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-7-pack-logos-icons-2945166.png", color: "#F22F46" },
    "PostgreSQL": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
    "GCP": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
    "Cloud Run": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
    "BigQuery": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
    "Vertex AI": { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", color: "#4285F4" },
};

const experiences = [
    {
        company: "BrandLabs",
        role: "GenAI & Backend Developer Intern",
        date: "Jul 2025 - Oct 2025",
        location: "Remote",
        tech: ["Python", "FastAPI", "LangChain", "OpenAI", "Docker"],
        points: [
            "Architected multi-agent automations for image understanding & OCR.",
            "Designed backend pipelines reducing manual data entry by 90%.",
            "Optimized RAG vector search queries improving accuracy by 30%.",
        ],
    },
    {
        company: "Odoo x SPIT Hackathon",
        role: "Winner - First Prize",
        date: "Jan 2025",
        location: "Mumbai",
        tech: ["Next.js", "Gemini API", "Twilio", "PostgreSQL"],
        points: [
            "Built a real-time booking platform with Voice Agents.",
            "Won ₹45,000 first prize for technical excellence.",
            "Implemented pessimistic locking for seat reservations.",
        ],
    },
    {
        company: "Google Cloud",
        role: "Arcade Facilitator",
        date: "2025",
        location: "Remote",
        tech: ["GCP", "Cloud Run", "BigQuery", "Vertex AI"],
        points: [
            "Facilitated learning cohorts for Google Cloud technologies.",
            "Mentored 50+ students in completing cloud labs.",
        ],
    },
];
