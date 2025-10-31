import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
    return (
        <section className="w-full flex justify-center pt-32 pb-15 bg-black text-white" id="home">
            <div className="w-11/12 sm:w-5/6 md:w-3/4 text-center flex flex-col items-center">
                {/* Brand */}
                <h2 className="text-base uppercase tracking-[0.3em] font-semibold mb-2">
                    Rokit Technologies Presents
                </h2>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                    Seamless Stablecoin Payments <br />
                    <span className="text-[#8247E5]">for the Modern Web</span>
                </h1>

                {/* Description */}
                <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mb-8">
                    <strong className="text-white">RokitPay</strong> is a crypto payment gateway by{" "}
                    <span className="font-semibold text-gray-100">Rokit Technologies</span>,
                    built to let businesses and creators accept USDC
                    directly on their websites — instantly, securely, and without borders.
                </p>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <a
                        href="#demo"
                        className="px-8 py-3 bg-[#8247E5] text-white font-medium rounded-xl hover:bg-[#450693] transition flex items-center gap-2"
                    >
                        Try the Demo <ArrowRight size={18} />
                    </a>
                    <a
                        href="/docs"
                        className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:border-blue-500 hover:text-blue-600 transition"
                    >
                        View Developer Docs
                    </a>
                </div>

                {/* Visual / Illustration Placeholder 
                <div className="mt-10">
                    <img
                        src={preview}
                        alt="RokitPay interface preview"
                        className="w-full max-w-3xl rounded-2xl shadow-lg border border-gray-100"
                    />
                </div>*/}

                {/* Tagline Footer */}
                <p className="mt-8 text-gray-400 text-sm tracking-wide">
                    Empowering fintechs to go global — one transaction at a time.
                </p>
            </div>
        </section>
    );
};

export default Hero;

