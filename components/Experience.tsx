"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

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
                                {exp.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[11px] font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
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
