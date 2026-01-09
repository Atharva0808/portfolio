"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

type Word = {
    text: string;
    className?: string;
};

export const MultiTypewriter = ({
    sequences,
    className,
    cursorClassName,
}: {
    sequences: Word[][];
    className?: string;
    cursorClassName?: string;
}) => {
    const [seqIndex, setSeqIndex] = useState(0);
    const [displayedCount, setDisplayedCount] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    // Current sequence words
    const currentWords = sequences[seqIndex % sequences.length];

    // Flatten current sequence
    const chars = currentWords.flatMap((word, wordIndex) => {
        const wordChars = word.text.split("").map((char) => ({
            char,
            className: word.className,
        }));
        if (wordIndex < currentWords.length - 1) {
            wordChars.push({ char: "\u00A0", className: word.className });
        }
        return wordChars;
    });

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
                    }, 2000); // 2s pause
                }
            } else {
                // Deleting Phase
                if (displayedCount > 0) {
                    timeout = setTimeout(() => {
                        setDisplayedCount((prev) => prev - 1);
                    }, 50);
                } else {
                    // Finished deleting, switch sequence
                    setIsDeleting(false);
                    setSeqIndex((prev) => prev + 1);
                }
            }
        };

        runTypingEffect();

        return () => clearTimeout(timeout);
    }, [displayedCount, isDeleting, isInView, chars.length]);

    return (
        <div ref={containerRef} className={cn("inline-block font-bold text-center", className)}>
            {chars.slice(0, displayedCount).map((item, idx) => (
                <span key={idx} className={item.className}>
                    {item.char}
                </span>
            ))}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500 align-middle ml-1", cursorClassName)}
            />
        </div>
    );
};
