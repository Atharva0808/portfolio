"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Simple Icon Components - Full Color
const Icons = {
    TypeScript: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className={cn("w-full h-full", className)} alt="TS" />,
    React: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className={cn("w-full h-full", className)} alt="React" />,
    NextJS: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className={cn("w-full h-full dark:invert", className)} alt="Next" />,
    NodeJS: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className={cn("w-full h-full", className)} alt="Node" />,
    Python: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className={cn("w-full h-full", className)} alt="Python" />,
    Postgres: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className={cn("w-full h-full", className)} alt="PG" />,
    Docker: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className={cn("w-full h-full", className)} alt="Docker" />,
    AWS: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className={cn("w-full h-full dark:invert", className)} alt="AWS" />,
    Tailwind: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className={cn("w-full h-full", className)} alt="Tailwind" />,
    MongoDB: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className={cn("w-full h-full", className)} alt="Mongo" />,
    Git: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className={cn("w-full h-full", className)} alt="Git" />,
    Figma: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className={cn("w-full h-full", className)} alt="Figma" />,
    Redis: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" className={cn("w-full h-full", className)} alt="Redis" />,
    GraphQL: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" className={cn("w-full h-full text-pink-500", className)} alt="GraphQL" />,
    Prisma: ({ className }: { className?: string }) => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" className={cn("w-full h-full dark:invert", className)} alt="Prisma" />,
    Vercel: ({ className }: { className?: string }) => <svg viewBox="0 0 24 24" className={cn("w-full h-full fill-black dark:fill-white", className)}><path d="M24 22.525H0l12-21.05 12 21.05z" /></svg>,
};

const row1 = [
    { name: "React", icon: Icons.React },
    { name: "Next.js", icon: Icons.NextJS },
    { name: "TypeScript", icon: Icons.TypeScript },
    { name: "Node.js", icon: Icons.NodeJS },
    { name: "Python", icon: Icons.Python },
    { name: "Tailwind", icon: Icons.Tailwind },
    { name: "Figma", icon: Icons.Figma },
    { name: "Vercel", icon: Icons.Vercel },
];

const row2 = [
    { name: "PostgreSQL", icon: Icons.Postgres },
    { name: "MongoDB", icon: Icons.MongoDB },
    { name: "Redis", icon: Icons.Redis },
    { name: "Docker", icon: Icons.Docker },
    { name: "AWS", icon: Icons.AWS },
    { name: "Git", icon: Icons.Git },
    { name: "GraphQL", icon: Icons.GraphQL },
    { name: "Prisma", icon: Icons.Prisma },
];

export const TechStack = () => {
    return (
        <section className="py-20 bg-white dark:bg-black overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100/50 via-transparent to-transparent dark:from-neutral-900/50 dark:via-transparent dark:to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 mb-12 text-left relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-4 pb-2 tracking-tighter leading-none"
                >
                    Technologies
                </motion.h2>
                <p className="text-neutral-500 max-w-lg">
                    A comprehensive suite of tools powering my development workflow.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-6 flex flex-col gap-8 relative z-10 mask-image-site">
                {/* Row 1 */}
                <Marquee items={row1} direction="left" speed="60s" />

                {/* Row 2 */}
                <Marquee items={row2} direction="right" speed="50s" />
            </div>
        </section>
    );
};

const Marquee = ({ items, direction, speed }: { items: typeof row1, direction: "left" | "right", speed: string }) => {
    return (
        <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div
                className="flex shrink-0 gap-6 py-4 min-w-full animate-scroll"
                style={{
                    animationDirection: direction === "right" ? "reverse" : "normal",
                    animationDuration: speed,
                }}
            >
                {[...items, ...items, ...items, ...items, ...items, ...items].map((tech, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 dark:bg-neutral-900/5 border border-neutral-200/50 dark:border-white/10 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-110 hover:bg-white/10 dark:hover:bg-neutral-800/50 hover:border-neutral-300 dark:hover:border-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
                    >
                        <div className="w-6 h-6 relative">
                            <tech.icon className="w-full h-full" />
                        </div>
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200 whitespace-nowrap">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
