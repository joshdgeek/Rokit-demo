import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import solanaLogo from "../../assets/logos/sol.svg";
import polygonLogo from "../../assets/logos/polygon.svg";
import ethLogo from "../../assets/logos/eth.svg";
import bnbLogo from "../../assets/logos/bnb.svg";


const networks = [
    { name: "Solana", logo: solanaLogo },
    { name: "Ethereum", logo: ethLogo },
    { name: "Polygon", logo: polygonLogo },
    { name: "BNB Chain", logo: bnbLogo },
    { name: "Base", logo: "/logos/base.svg" },
];

const SupportedNetworks: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current!;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    };

    const scroll = (direction: "left" | "right") => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = direction === "left" ? -250 : 250;
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <section className="w-full py-16 flex flex-col items-center bg-black">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
                Supported Networks
            </h2>

            <div className="relative w-full max-w-5xl bg-black">
                {/* Left Arrow */}
                {canScrollLeft && (
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md p-2 rounded-full z-10"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                )}

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-4"
                >
                    {networks.map((n) => (
                        <div
                            key={n.name}
                            className="min-w-[180px] md:min-w-[220px] bg-black text-white backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm flex flex-col items-center justify-center p-6 hover:shadow-md transition"
                        >
                            <img
                                src={n.logo}
                                alt={n.name}
                                className="w-12 h-12 object-contain mb-3"
                            />
                            <p className="font-semibold text-gray-100">{n.name}</p>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                {canScrollRight && (
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md p-2 rounded-full z-10"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                )}
            </div>
        </section>
    );
};

export default SupportedNetworks;
