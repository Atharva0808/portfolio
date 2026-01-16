"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/magicui/Dock";
import { Home, Folder, Briefcase, Mail, Github, Linkedin, Twitter, BookOpen } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const Navbar = () => {
    return (
        <>
            <MobileNavbar />
            <DesktopNavbar />
        </>
    );
};

const MobileNavbar = () => {
    return (
        <div className="md:hidden fixed top-4 inset-x-0 z-50 mx-auto w-max">
            <div className="flex items-center gap-5 px-5 py-2.5 bg-white/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-white/10 rounded-full shadow-xl backdrop-blur-xl">
                <a href="#" aria-label="Home">
                    <Home className="size-5 text-neutral-600 dark:text-neutral-300" />
                </a>
                <a href="#projects" aria-label="Projects">
                    <Folder className="size-5 text-neutral-600 dark:text-neutral-300" />
                </a>
                <a href="#blogs" aria-label="Writing">
                    <BookOpen className="size-5 text-neutral-600 dark:text-neutral-300" />
                </a>
                <a href="mailto:hello@atharva.dev" aria-label="Contact">
                    <Mail className="size-5 text-neutral-600 dark:text-neutral-300" />
                </a>
                <div className="w-[1px] h-4 bg-neutral-200 dark:bg-neutral-800" />
                <ThemeToggle />
            </div>
        </div>
    );
};

const DesktopNavbar = () => {
    return (
        <div className="hidden md:flex fixed top-2 inset-x-0 z-50 mx-auto w-max">
            <Dock magnification={60} distance={100} className="bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 shadow-lg backdrop-blur-md">
                <DockIcon label="Home">
                    <a href="#" aria-label="Home">
                        <Home className="size-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors" />
                    </a>
                </DockIcon>
                <DockIcon label="Projects">
                    <a href="#projects" aria-label="Projects">
                        <Folder className="size-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors" />
                    </a>
                </DockIcon>
                <DockIcon label="Experience">
                    <a href="#work" aria-label="Experience">
                        <Briefcase className="size-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors" />
                    </a>
                </DockIcon>
                <DockIcon label="Writing">
                    <a href="#blogs" aria-label="Writing">
                        <BookOpen className="size-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors" />
                    </a>
                </DockIcon>
                <DockIcon label="Contact">
                    <a href="mailto:hello@example.com" aria-label="Contact">
                        <Mail className="size-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors" />
                    </a>
                </DockIcon>

                <Separator />

                <DockIcon label="GitHub">
                    <a href="https://github.com/Atharva0808" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="size-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors" />
                    </a>
                </DockIcon>
                <DockIcon label="LinkedIn">
                    <a href="https://www.linkedin.com/in/atharva-bamgude/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="size-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors" />
                    </a>
                </DockIcon>
                <DockIcon label="Twitter">
                    <a href="https://x.com/__thefiasco" target="_blank" rel="noopener noreferrer" aria-label="X">
                        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                    </a>
                </DockIcon>
                <DockIcon className="hidden md:flex" label="Discord">
                    <a href="#" aria-label="Discord" title="starlex0470">
                        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2763-3.68-.2763-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1892.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.1023.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.5382-9.6752-3.567-13.6654a.0729.0729 0 00-.0312-.0278zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" /></svg>
                    </a>
                </DockIcon>
                <DockIcon className="hidden md:flex" label="Medium">
                    <a href="https://medium.com/@bamgudeatharva" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" /></svg>
                    </a>
                </DockIcon>
                <DockIcon className="hidden md:flex" label="Hashnode">
                    <a href="https://hashnode.com/@Atharva088" target="_blank" rel="noopener noreferrer" aria-label="Hashnode">
                        <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"><path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" /></svg>
                    </a>
                </DockIcon>

                <Separator />

                <DockIcon label="Theme">
                    <ThemeToggle />
                </DockIcon>
            </Dock>
        </div>
    );
};

const Separator = () => {
    return (
        <div className="h-8 w-[1px] bg-neutral-200 dark:bg-white/10 mx-2 self-center" />
    );
};