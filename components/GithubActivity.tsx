"use client";
import React, { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
// Generate fake data for the last 365 days
const generateData = () => {
    const data = [];
    const now = new Date();
    for (let i = 365; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split("T")[0];

        // Realistic contribution pattern mimics developer activity
        const dayOfWeek = date.getDay(); // 0 is Sunday, 6 is Saturday
        let isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

        let count = 0;
        const random = Math.random();

        // More active on weekdays
        if (!isWeekend) {
            if (random > 0.2) count = Math.floor(Math.random() * 15) + 1; // 80% chance of contribution
            if (random > 0.8) count = Math.floor(Math.random() * 25) + 5; // Bursts
        } else {
            if (random > 0.6) count = Math.floor(Math.random() * 10) + 1; // Less likely on weekends
        }

        data.push({
            date: dateString,
            count,
            level: count === 0 ? 0 : count < 3 ? 1 : count < 8 ? 2 : count < 15 ? 3 : 4,
        });
    }
    return data;
};
export const GithubActivity = () => {
    const { theme } = useTheme();
    const [data, setData] = useState<any[]>([]);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setData(generateData());
        setMounted(true);
    }, []);
    return (
        <section className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 text-left w-full">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-4">
                            GitHub Activity
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                            <span className="text-black dark:text-white font-bold">1,897</span> contributions in the last year
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-2 bg-white/60 dark:bg-black/40 backdrop-blur-xl py-2.5 px-5 rounded-full border border-neutral-200/50 dark:border-white/10 shadow-sm transition-transform hover:scale-[1.01] active:scale-[0.99] duration-300 ease-out">
                        <div className="flex items-center gap-2.5 text-[13px] text-neutral-600 dark:text-neutral-300 font-medium tracking-wide">
                            <span className="opacity-80">Currently coding in</span>
                            <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-label="Cursor Logo">
                                <path d="M21 7.5L12 2.5L3 7.5L12 12.5L21 7.5Z" fill="#FFFFFF" className="dark:fill-white fill-black" />
                                <path d="M21 7.5V17.5L12 22.5V12.5L21 7.5Z" fill="#A3A3A3" />
                                <path d="M3 17.5L12 12.5V22.5L3 17.5Z" fill="#737373" />
                                <path d="M3 7.5L12 12.5L3 17.5V7.5Z" fill="#e5e5e5" className="dark:fill-white fill-black" />
                            </svg>
                            <span className="font-bold text-black dark:text-white">Cursor</span>
                            <span className="text-neutral-400">|</span>
                            <span>Thinking & coding...</span>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center text-neutral-400"
                >
                    {data.length > 0 && (
                        <ActivityCalendar
                            data={data}
                            theme={{
                                light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                            }}
                            colorScheme="dark"
                            blockSize={12}
                            blockMargin={4}
                            fontSize={12}
                            renderBlock={(block, activity) =>
                                React.cloneElement(block, {
                                    "data-tooltip-id": "github-tooltip",
                                    "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
                                })
                            }
                        />
                    )}
                    <ReactTooltip id="github-tooltip" />
                </motion.div>
            </div>
        </section>
    );
};