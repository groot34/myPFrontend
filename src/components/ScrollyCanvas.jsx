import React, { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 30;

// Exact filenames for each frame — eliminates 404s from suffix guessing
const FRAME_FILES = [
    "frame_000_delay-0.067s.png", "frame_001_delay-0.066s.png",
    "frame_002_delay-0.067s.png", "frame_003_delay-0.067s.png",
    "frame_004_delay-0.066s.png", "frame_005_delay-0.067s.png",
    "frame_006_delay-0.067s.png", "frame_007_delay-0.066s.png",
    "frame_008_delay-0.067s.png", "frame_009_delay-0.067s.png",
    "frame_010_delay-0.066s.png", "frame_011_delay-0.067s.png",
    "frame_012_delay-0.067s.png", "frame_013_delay-0.066s.png",
    "frame_014_delay-0.067s.png", "frame_015_delay-0.067s.png",
    "frame_016_delay-0.066s.png", "frame_017_delay-0.067s.png",
    "frame_018_delay-0.067s.png", "frame_019_delay-0.066s.png",
    "frame_020_delay-0.067s.png", "frame_021_delay-0.067s.png",
    "frame_022_delay-0.066s.png", "frame_023_delay-0.067s.png",
    "frame_024_delay-0.067s.png", "frame_025_delay-0.066s.png",
    "frame_026_delay-0.067s.png", "frame_027_delay-0.067s.png",
    "frame_028_delay-0.066s.png", "frame_029_delay-0.067s.png",
];

const ScrollyCanvas = ({ containerRef }) => {
    const canvasRef = useRef(null);
    const imagesRef = useRef([]);
    const currentFrameRef = useRef(0);
    const rafRef = useRef(null);
    const [loaded, setLoaded] = useState(false);

    // Scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, 29]);

    // Preload all images — one request per frame, no guessing
    useEffect(() => {
        let cancelled = false;

        const loadFrame = (i) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = `/sequence/${FRAME_FILES[i]}`;
                img.onload = () => {
                    imagesRef.current[i] = img;
                    resolve();
                };
                img.onerror = () => {
                    console.warn(`Frame ${i} failed to load`);
                    resolve();
                };
            });
        };

        const loadAll = async () => {
            await Promise.all(
                Array.from({ length: TOTAL_FRAMES }, (_, i) => loadFrame(i))
            );

            if (!cancelled) {
                setLoaded(true);
                drawFrame(0);
            }
        };

        loadAll();
        return () => { cancelled = true; };
    }, []);

    // Draw frame at NATIVE image resolution (800x450)
    // Source PNGs are small — upscaling in canvas causes blur.
    // Instead, draw at native size and let CSS object-fit: cover handle the scaling.
    const drawFrame = useCallback((index) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = imagesRef.current[index];
        if (!canvas || !ctx || !img) return;

        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        // Set canvas buffer to source image dimensions — no upscale
        if (canvas.width !== iw || canvas.height !== ih) {
            canvas.width = iw;
            canvas.height = ih;
        }

        ctx.clearRect(0, 0, iw, ih);
        ctx.drawImage(img, 0, 0, iw, ih);
    }, []);

    // Respond to scroll-driven frame changes
    useMotionValueEvent(frameIndex, "change", (latest) => {
        const idx = Math.round(latest);
        if (idx === currentFrameRef.current) return;
        currentFrameRef.current = idx;

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(idx));
    });

    // Redraw on resize
    useEffect(() => {
        const handleResize = () => {
            if (loaded) drawFrame(currentFrameRef.current);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [loaded, drawFrame]);

    return (
        <>
            {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-10 h-10 border-2 border-white/20 border-t-white/80 rounded-full animate-spin" />
                </div>
            )}

            <canvas
                ref={canvasRef}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 30%",
                    display: "block",
                    opacity: loaded ? 1 : 0,
                    transition: "opacity 0.5s ease",
                }}
            />
        </>
    );
};

export default ScrollyCanvas;
