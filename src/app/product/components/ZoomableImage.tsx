"use client";

import Image from "next/image";
import { TbX } from "react-icons/tb";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

interface ZoomableImageProps {
    src: string;
    isOpen: boolean;
    setIsOpen: (src: string | null) => void;
}

export default function ZoomableImage({ src, isOpen, setIsOpen }: ZoomableImageProps) {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setModalRoot(document.getElementById("modal-root"));
    }, []);

    const handleClose = () => setIsOpen(null);

    // Make zoom effect relative to the entire viewport
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setPosition({ x, y });
    };

    const modalContent = isOpen ? (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-[1000] overflow-hidden"
            onClick={(e) => { e.stopPropagation(); handleClose(); }}
            tabIndex={0}
        >
            {/* Close Button */}
            <TbX
                className="absolute top-8 right-8 z-10 text-white text-3xl cursor-pointer hover:scale-125 transition"
                onClick={handleClose}
            />
            <div className="relative flex items-center justify-center overflow-hidden">
                {/* Zoomable Image */}
                <div
                    className="relative cursor-zoom-in flex items-center justify-center overflow-hidden"
                    onMouseMove={handleMouseMove}
                >
                    <Image
                        src={src}
                        alt="Zoomed Image"
                        width={1200}
                        height={800}
                        unoptimized
                        priority
                        style={{
                            transformOrigin: `${position.x}% ${position.y}%`,
                        }}
                        className="object-contain w-fit max-h-[95vh] transition-transform duration-300 hover:scale-[3.75]"
                    />
                </div>
            </div>
        </div>
    ) : null;

    return (
        <>
            {modalRoot ? createPortal(modalContent, modalRoot) : null}
        </>
    );
}
