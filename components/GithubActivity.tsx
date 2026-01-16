"use client";
import React, { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export const GithubActivity = () => {
    const { theme } = useTheme();
    const [data, setData] = useState<any[]>([]);
    const [totalContributions, setTotalContributions] = useState(0);
    const [loading, setLoading] = useState(true);
    const [currentRepo, setCurrentRepo] = useState<string | null>(null);
    const [lastEvent, setLastEvent] = useState<string | null>(null);
    const [repoLink, setRepoLink] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch contribution graph data
                const currentYear = new Date().getFullYear();
                const contribResponse = await fetch(`https://github-contributions-api.jogruber.de/v4/Atharva0808?y=${currentYear}`);
                const contribJson = await contribResponse.json();

                if (contribJson.contributions) {
                    setData(contribJson.contributions);
                    const total = contribJson.contributions.reduce((acc: number, curr: any) => acc + curr.count, 0);
                    setTotalContributions(total);
                }

                // Fetch latest events for "Currently working on"
                const eventsResponse = await fetch('https://api.github.com/users/Atharva0808/events/public?per_page=5');
                const eventsJson = await eventsResponse.json();

                if (Array.isArray(eventsJson) && eventsJson.length > 0) {
                    // Find the first PushEvent or CreateEvent to show active work
                    const activeEvent = eventsJson.find((e: any) => e.type === 'PushEvent' || e.type === 'CreateEvent') || eventsJson[0];

                    if (activeEvent) {
                        // repo.name is "Atharva0808/repo-name" -> we want just "repo-name" usually, or full is fine
                        const fullName = activeEvent.repo.name;
                        const simpleName = fullName.split('/')[1] || fullName;
                        setCurrentRepo(simpleName);
                        setRepoLink(`https://github.com/${fullName}`);

                        if (activeEvent.type === 'PushEvent' && activeEvent.payload.commits && activeEvent.payload.commits.length > 0) {
                            setLastEvent(activeEvent.payload.commits[activeEvent.payload.commits.length - 1].message);
                        } else {
                            setLastEvent(activeEvent.type === 'WatchEvent' ? 'Starred a repo' : 'Active on GitHub');
                        }
                    }
                }

            } catch (error) {
                console.error("Failed to fetch GitHub data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Determine color scheme based on current theme, defaulting to dark if undefined
    const colorScheme = theme === 'light' ? 'light' : 'dark';

    // Calculate date range text
    const startDate = data.length > 0 ? new Date(data[0].date) : null;
    const endDate = data.length > 0 ? new Date(data[data.length - 1].date) : null;

    const dateRangeText = startDate && endDate
        ? startDate.getFullYear() === endDate.getFullYear()
            ? `in ${startDate.getFullYear()}`
            : `in ${startDate.getFullYear()} - ${endDate.getFullYear()}`
        : "in the last year";

    return (
        <section className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 text-left w-full">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-4">
                            GitHub Activity
                        </h2>
                        <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                            <span className="text-black dark:text-white font-bold">
                                {loading ? "..." : totalContributions.toLocaleString()}
                            </span> contributions {dateRangeText}
                        </p>
                    </div>

                    {currentRepo ? (
                        <a href={repoLink || "#"} target="_blank" rel="noopener noreferrer" className="mr-6 group flex items-center gap-2.5 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md py-1.5 px-3 rounded-full border border-neutral-200 dark:border-white/10 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:-translate-y-0.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>

                            <div className="flex items-center gap-2 text-xs">
                                <span className="text-neutral-600 dark:text-neutral-400 font-medium">Working on</span>

                                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/5 group-hover:bg-neutral-200 dark:group-hover:bg-white/10 transition-colors">
                                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current text-black dark:text-white" aria-hidden="true">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.055-3.33 .72-4.035-1.605-4.035-1.605-.54-1.38-1.335-1.755-1.335-1.755-1.087-.75.075-.735.075-.735 1.2.09 1.83 1.245 1.83 1.245 1.065 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.84.57A12.005 12.005 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                    <span className="font-semibold text-black dark:text-white">{currentRepo}</span>
                                </div>

                                {lastEvent && (
                                    <span className="hidden md:flex items-center gap-1.5 text-[10px] text-neutral-400">
                                        <span className="w-0.5 h-0.5 rounded-full bg-neutral-400"></span>
                                        <span className="truncate max-w-[150px]" title={lastEvent}>{lastEvent}</span>
                                    </span>
                                )}
                            </div>
                        </a>
                    ) : (
                        <div className="flex items-center gap-2 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md py-1.5 px-3 rounded-full border border-neutral-200 dark:border-white/5 border-dashed">
                            <span className="relative flex h-2 w-2">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-400"></span>
                            </span>
                            <span className="text-xs text-neutral-500 font-medium">Fetching status...</span>
                        </div>
                    )}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center text-neutral-400"
                >
                    {!loading && data.length > 0 && (
                        <ActivityCalendar
                            data={data}
                            theme={{
                                light: ["#e0e0e0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                                dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                            }}
                            colorScheme={colorScheme as "light" | "dark"}
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