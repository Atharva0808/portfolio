"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : 180,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 m-auto flex items-center justify-center"
            >
                <Moon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "light" ? 1 : 0,
                    rotate: theme === "light" ? 0 : -180,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex items-center justify-center"
            >
                <Sun className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:text-neutral-200" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}