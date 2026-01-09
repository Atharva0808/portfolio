"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight, Cpu, Layout, Server, FileText, Database } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Projects = () => {
    return (
        <section id="projects" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-start mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-6 pb-2 tracking-tighter">
                        Featured Projects
                    </h2>
                    <p className="text-neutral-500 text-lg max-w-lg">
                        Selected works showcasing my journey in engineering and design.
                    </p>
                </div>

                <div className="flex flex-col gap-20 md:gap-32">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={cn(
                                "flex flex-col md:flex-row gap-10 md:gap-20 items-center relative group",
                                i % 2 === 1 ? "md:flex-row-reverse" : ""
                            )}
                        >
                            {/* Background Number Watermark */}
                            <span className={cn(
                                "absolute -top-12 text-[120px] font-bold text-neutral-100 dark:text-neutral-900/50 pointer-events-none select-none z-0",
                                i % 2 === 1 ? "-right-12" : "-left-12"
                            )}>
                                0{i + 1}
                            </span>

                            {/* Image Section - Browser Window Style */}
                            <div className="w-full md:w-[55%] relative z-10 perspective-1000">

                                <div className="relative rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl overflow-hidden transition-all duration-500 ease-out">
                                    {/* Browser Header */}
                                    <div className="h-8 bg-neutral-800/50 backdrop-blur-sm border-b border-white/5 flex items-center px-4 gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>

                                    {/* Content/Placeholder */}
                                    <div className="aspect-[16/10] bg-neutral-900 relative flex items-center justify-center p-8">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10`} />
                                        {/* Grid Pattern */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                                        <div className="relative z-10 text-center">
                                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg">
                                                {item.icon}
                                            </div>
                                            <p className="text-sm font-medium text-neutral-400 font-mono">{item.title}.app</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-[45%] flex flex-col items-start relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-8 h-[2px] bg-gradient-to-r ${item.gradient}`} />
                                    <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                                        {item.category}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6 leading-tight tracking-tight">
                                    {item.title}
                                </h3>

                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 text-lg font-medium">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {item.stack.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6">
                                    <Link href={item.links.demo} className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-bold text-sm tracking-wide hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl">
                                        Live Demo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link href={item.links.github} className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors text-sm">
                                        <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" /> Source
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const items = [
    {
        title: "SatvikScan AI",
        description: "An AI-powered food validation platform that uses Computer Vision and LLMs to detect non-vegetarian ingredients in packaged food in real-time.",
        category: "Computer Vision",
        gradient: "from-purple-500 to-indigo-500",
        icon: <Cpu className="w-8 h-8 text-white" />,
        stack: ["Next.js", "Python", "TensorFlow", "Vision API"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "CampusSync",
        description: "A comprehensive academic management suite featuring automated scheduling, role-based access control, and complex resource allocation logic.",
        category: "Architecture",
        gradient: "from-blue-500 to-cyan-500",
        icon: <Layout className="w-8 h-8 text-white" />,
        stack: ["React", "Node.js", "PostgreSQL", "Redis"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "APSIT Notifier",
        description: "High-throughput asynchronous notification service delivering real-time university updates to thousands of students via multi-channel bots.",
        category: "Backend Ops",
        gradient: "from-green-500 to-emerald-500",
        icon: <Server className="w-8 h-8 text-white" />,
        stack: ["Express", "Puppeteer", "Telegram API", "Cron"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "Auto Bills AI",
        description: "Financial utility that automates expense tracking by extracting structured data from receipts and invoices using advanced OCR pipelines.",
        category: "Automation",
        gradient: "from-orange-500 to-red-500",
        icon: <FileText className="w-8 h-8 text-white" />,
        stack: ["FastAPI", "OCR", "OpenAI", "React"],
        links: { github: "#", demo: "#" }
    },
    {
        title: "CIN Scout",
        description: "Corporate Intelligence search engine designed for rapid analysis of Indian company registries, serving financial analysts and legal teams.",
        category: "Data Tool",
        gradient: "from-pink-500 to-rose-500",
        icon: <Database className="w-8 h-8 text-white" />,
        stack: ["Python", "FastAPI", "BeautifulSoup", "Pandas"],
        links: { github: "#", demo: "#" }
    },
];
