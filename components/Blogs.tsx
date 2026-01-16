"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tag: string;
    link: string;
    originalDate: Date; // Keep date object for sorting if needed
}

interface GroupedPosts {
    [year: string]: BlogPost[];
}

export const Blogs = () => {
    const [posts, setPosts] = useState<GroupedPosts>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(
                    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@bamgudeatharva"
                );
                const data = await res.json();

                if (data.items) {
                    const formattedPosts: BlogPost[] = data.items.map((item: any) => {
                        // Create a DOMParser to strip HTML from description for excerpt
                        const doc = new DOMParser().parseFromString(item.description || "", 'text/html');
                        const textContent = doc.body.textContent || "";
                        // Limit excerpt to ~150 chars
                        const excerpt = textContent.slice(0, 150) + (textContent.length > 150 ? "..." : "");

                        const pubDate = new Date(item.pubDate);

                        return {
                            title: item.title,
                            excerpt: excerpt,
                            date: pubDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit' }),
                            readTime: "5 min", // Medium RSS doesn't give read time, defaulting
                            tag: item.categories.length > 0 ? item.categories[0] : "Blog",
                            link: item.link,
                            originalDate: pubDate,
                        };
                    });

                    if (formattedPosts.length > 0) {
                        // Fun override: Make the first two posts appear as 2025
                        formattedPosts[0].originalDate.setFullYear(2025);
                        if (formattedPosts.length > 1) {
                            formattedPosts[1].originalDate.setFullYear(2025);
                        }
                    }

                    // Group by year
                    const grouped = formattedPosts.reduce((acc: GroupedPosts, post) => {
                        const year = post.originalDate.getFullYear().toString();
                        if (!acc[year]) acc[year] = [];
                        acc[year].push(post);
                        return acc;
                    }, {});

                    setPosts(grouped);
                }
            } catch (error) {
                console.error("Failed to fetch Medium posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <section id="blogs" className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-pulse space-y-8">
                        <div className="h-12 w-64 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                        <div className="h-4 w-96 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                        <div className="space-y-4 pt-12">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="h-32 bg-neutral-100 dark:bg-neutral-900 rounded-lg"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Sort years ascending (so 2025 appears above 2026)
    const sortedYears = Object.keys(posts).sort((a, b) => parseInt(a) - parseInt(b));

    return (
        <section id="blogs" className="py-24 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-start mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-8 tracking-tighter pb-2">
                        Thoughts
                    </h2>
                    <p className="text-neutral-500 text-xl max-w-lg font-light leading-relaxed">
                        Reflections on design, engineering, and the spaces in between.
                    </p>
                </div>

                <div className="space-y-20">
                    {sortedYears.length > 0 ? (
                        sortedYears.map((year) => (
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
                                    {posts[year].map((post, i) => (
                                        <Link href={post.link} key={i} target="_blank" className="group block cursor-pointer">
                                            <div className="py-10 border-b border-neutral-100 dark:border-white/5 flex flex-col gap-4 transition-all duration-500 hover:border-neutral-300 dark:hover:border-white/20">

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 uppercase tracking-wider">
                                                        <span>{post.date}</span>
                                                    </div>
                                                    <span className="px-2 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-[10px] uppercase tracking-widest font-medium text-neutral-500 truncate max-w-[150px]">
                                                        {post.tag}
                                                    </span>
                                                </div>

                                                <div className="flex items-baseline justify-between gap-8">
                                                    <div className="max-w-xl">
                                                        <h3 className="text-2xl font-medium text-neutral-900 dark:text-white transition-colors duration-300 mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-300">
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
                        ))
                    ) : (
                        <div className="text-neutral-500 text-lg">
                            No posts found. Check out my <a href="https://medium.com/@bamgudeatharva" className="underline hover:text-black dark:hover:text-white">Medium profile</a>.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
