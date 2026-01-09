"use client";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
export const TypewriterEffect = ({
    words,
    className,
    cursorClassName,
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // Flatten words into characters, handling spaces
    const chars = words.flatMap((word, wordIndex) => {
        const wordChars = word.text.split("").map((char) => ({
            char,
            className: word.className,
        }));
        // Add space after word if it's not the last one
        if (wordIndex < words.length - 1) {
            wordChars.push({ char: "\u00A0", className: word.className });
        }
        return wordChars;
    });

    const [displayedCount, setDisplayedCount] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    useEffect(() => {
        if (!isInView) return;

        let timeout: NodeJS.Timeout;

        const runTypingEffect = () => {
            if (!isDeleting) {
                // Typing Phase
                if (displayedCount < chars.length) {
                    timeout = setTimeout(() => {
                        setDisplayedCount((prev) => prev + 1);
                    }, 100);
                } else {
                    // Finished typing, pause before deleting
                    timeout = setTimeout(() => {
                        setIsDeleting(true);
                    }, 3000);
                }
            } else {
                // Deleting Phase
                if (displayedCount > 0) {
                    timeout = setTimeout(() => {
                        setDisplayedCount((prev) => prev - 1);
                    }, 50);
                } else {
                    // Finished deleting, restart cycle
                    setIsDeleting(false);
                }
            }
        };

        runTypingEffect();

        return () => clearTimeout(timeout);
    }, [displayedCount, isDeleting, isInView, chars.length]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "font-bold text-center",
                className
            )}
        >
            {chars.slice(0, displayedCount).map((item, idx) => (
                <span key={idx} className={item.className}>
                    {item.char}
                </span>
            ))}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={cn(
                    "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 align-middle ml-1",
                    cursorClassName
                )}
            ></motion.span>
        </div>
    );
};