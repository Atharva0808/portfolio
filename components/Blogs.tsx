"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Blogs = () => {
    return (
        <section id="blogs" className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-start mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-8 tracking-tighter pb-2">
                        Writing
                    </h2>
                    <p className="text-neutral-500 text-xl max-w-lg font-light leading-relaxed">
                        Reflections on design, engineering, and the spaces in between.
                    </p>
                </div>

                <div className="space-y-20">
                    {Object.entries(groupedPosts).map(([year, posts], sectionIndex) => (
                        <div
                            key={year}
                            className="flex flex-col md:flex-row gap-8 md:gap-32 relative"
                        >
                            {/* Sticky Year */}
                            <div className="md:w-32 flex-shrink-0 pt-2 md:sticky md:top-32 self-start">
                                <span className="text-6xl md:text-8xl font-bold text-neutral-100 dark:text-neutral-900 leading-none select-none">
                                    {year}
                                </span>
                            </div>

                            {/* Posts for this year */}
                            <div className="flex-grow flex flex-col">
                                {posts.map((post, i) => (
                                    <Link href={post.link} key={i} className="group block cursor-pointer">
                                        <div className="py-10 border-b border-neutral-100 dark:border-white/5 flex flex-col gap-4 transition-all duration-500 hover:border-neutral-300 dark:hover:border-white/20">

                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 uppercase tracking-wider">
                                                    <span>{post.date}</span>
                                                    <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                                                    <span>{post.readTime}</span>
                                                </div>
                                                <span className="px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-[10px] uppercase tracking-widest font-medium text-neutral-500">
                                                    {post.tag}
                                                </span>
                                            </div>

                                            <div className="flex items-baseline justify-between gap-8">
                                                <div className="max-w-xl">
                                                    <h3 className="text-2xl font-medium text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-2">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-neutral-500 text-base font-light leading-relaxed line-clamp-2">
                                                        {post.excerpt}
                                                    </p>
                                                </div>

                                                <div className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 ease-out flex-shrink-0 self-center">
                                                    <ArrowRight className="w-5 h-5 text-neutral-900 dark:text-white" />
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Group posts by year
const groupedPosts = {
    "2025": [
        {
            title: "The Beauty of Invisibility",
            excerpt: "Why the best interfaces are the ones you don't notice. A deep dive into implicit interactions and anticipatory design patterns.",
            date: "Jan 12",
            readTime: "5 min",
            tag: "Design",
            link: "#"
        },
        {
            title: "Crafting Resilient Systems",
            excerpt: "Lessons learned from scaling distributed architectures to millions of active users. Handling failure gracefully.",
            date: "Feb 04",
            readTime: "8 min",
            tag: "Engineering",
            link: "#"
        },
        {
            title: "React Server Components",
            excerpt: "Understanding the paradigm shift in frontend mental models, data fetching strategies, and the blurring line between client and server.",
            date: "Mar 20",
            readTime: "12 min",
            tag: "Frontend",
            link: "#"
        }
    ],
    "2024": [
        {
            title: "Design is How it Works",
            excerpt: "Moving beyond aesthetics to solve fundamental user problems through engineering. The intersection of form and function.",
            date: "Nov 15",
            readTime: "6 min",
            tag: "Philosophy",
            link: "#"
        },
        {
            title: "The Future of AI Agents",
            excerpt: "How autonomous systems will reshape the way we write and maintain software. Preparing for the age of agents.",
            date: "Oct 02",
            readTime: "10 min",
            tag: "AI",
            link: "#"
        }
    ]
};
