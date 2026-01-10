"use client";

import { useEffect, useRef } from "react";

export const Oneko = () => {
    const nekoEl = useRef<HTMLDivElement>(null);
    const nekoPosX = useRef(32);
    const nekoPosY = useRef(32);
    const mousePosX = useRef(0);
    const mousePosY = useRef(0);
    const frameCount = useRef(0);
    const idleTime = useRef(0);
    const idleAnimation = useRef<string | null>(null);
    const idleAnimationFrame = useRef(0);
    const nekoSpeed = 5;

    // Sprite config
    const spriteSets: { [key: string]: number[][] } = {
        idle: [[-3, -3]],
        alert: [[-7, -3]],
        scratchSelf: [[-5, 0], [-6, 0], [-7, 0]],
        scratchWallN: [[0, 0], [0, -1]],
        scratchWallS: [[-7, -1], [-6, -2]],
        scratchWallE: [[-2, -2], [-2, -3]],
        scratchWallW: [[-4, 0], [-4, -1]],
        tired: [[-3, -2]],
        sleeping: [[-2, 0], [-2, -1]],
        N: [[-1, -2], [-1, -3]],
        NE: [[0, -2], [0, -3]],
        E: [[-3, 0], [-3, -1]],
        SE: [[-5, -1], [-5, -2]],
        S: [[-6, -3], [-7, -2]],
        SW: [[-5, -3], [-6, -1]],
        W: [[-4, -2], [-4, -3]],
        NW: [[-1, 0], [-1, -1]],
    };

    useEffect(() => {
        const isReducedMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
        if (isReducedMotion) return;

        const neko = nekoEl.current;
        if (!neko) return;

        // Create the cat element styling dynamically or via CSS class. 
        // We'll set inline styles for positioning.
        neko.style.width = "32px";
        neko.style.height = "32px";
        neko.style.position = "fixed";
        neko.style.backgroundImage = "url('https://raw.githubusercontent.com/adryd325/oneko.js/master/oneko.gif')";
        neko.style.imageRendering = "pixelated";
        neko.style.left = "16px";
        neko.style.top = "16px";
        neko.style.zIndex = "9999";
        neko.style.pointerEvents = "none"; // Let clicks pass through

        const onMouseMove = (e: MouseEvent) => {
            mousePosX.current = e.clientX;
            mousePosY.current = e.clientY;
        };

        window.addEventListener("mousemove", onMouseMove);

        let animationFrameId: number;

        const frame = () => {
            frameCount.current += 1;
            const diffX = nekoPosX.current - mousePosX.current;
            const diffY = nekoPosY.current - mousePosY.current;
            const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

            if (distance < nekoSpeed || distance < 48) {
                idleTime.current += 1;

                // Idle animations logic
                if (idleTime.current > 10) {
                    if (idleAnimation.current == null) {
                        const idleOptions = ["sleeping", "scratchSelf"];
                        idleAnimation.current = idleOptions[Math.floor(Math.random() * idleOptions.length)];
                    }
                }

                // Apply idle animation frame
                if (idleAnimation.current) {
                    const frames = spriteSets[idleAnimation.current];
                    const frameIdx = Math.floor(frameCount.current / 4) % frames.length; // Slower idle
                    const [gx, gy] = frames[frameIdx];
                    neko.style.backgroundPosition = `${gx * 32}px ${gy * 32}px`;
                } else {
                    // Just reset to idle sprite
                    neko.style.backgroundPosition = "-96px -96px";
                }

            } else {
                idleAnimation.current = null;
                idleTime.current = 0;

                // Move logic
                if (idleTime.current > 1) {
                    neko.style.backgroundPosition = "-96px -96px";
                } else {
                    // Determine direction
                    let direction = "";
                    const vy = diffY / distance;
                    const vx = diffX / distance;

                    if (vy > 0.5) direction = "N";
                    else if (vy < -0.5) direction = "S";

                    if (vx > 0.5) direction += "W";
                    else if (vx < -0.5) direction += "E";

                    if (direction === "") direction = "idle";

                    // Animation
                    const frames = spriteSets[direction] || spriteSets["idle"];
                    const frameIdx = Math.floor(frameCount.current / 4) % frames.length;
                    const [gx, gy] = frames[frameIdx];
                    neko.style.backgroundPosition = `${gx * 32}px ${gy * 32}px`;

                    // Move
                    nekoPosX.current -= (diffX / distance) * nekoSpeed;
                    nekoPosY.current -= (diffY / distance) * nekoSpeed;

                    neko.style.left = `${nekoPosX.current - 16}px`;
                    neko.style.top = `${nekoPosY.current - 16}px`;
                }
            }

            animationFrameId = window.requestAnimationFrame(frame);
        };

        animationFrameId = window.requestAnimationFrame(frame);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <div ref={nekoEl} id="oneko" aria-hidden="true" />;
};
