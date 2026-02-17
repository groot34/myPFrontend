import React, { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 30;

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

    // Preload all images — race both possible delay suffixes per frame
    useEffect(() => {
        let cancelled = false;

        const loadFrame = (i) => {
            return new Promise((resolve) => {
                const idx = String(i).padStart(3, "0");
                let resolved = false;

                // Race both possible suffixes — first to load wins
                ["0.067s", "0.066s"].forEach((suffix) => {
                    const img = new Image();
                    img.src = `/sequence/frame_${idx}_delay-${suffix}.png`;
                    img.onload = () => {
                        if (!resolved) {
                            resolved = true;
                            imagesRef.current[i] = img;
                            resolve();
                        }
                    };
                    img.onerror = () => {
                        setTimeout(() => {
                            if (!resolved) {
                                resolved = true;
                                console.warn(`Frame ${idx} failed to load`);
                                resolve();
                            }
                        }, 100);
                    };
                });
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
