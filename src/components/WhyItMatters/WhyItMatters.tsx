import React from "react";
import { Globe2, Terminal, Users } from "lucide-react";

const WhyItMatters: React.FC = () => {
    const points = [
        {
            title: "Bridging Web2 to Web3",
            description:
                "RokitPay was built to make blockchain payments accessible to every developer — no complex setup, no need for deep Web3 knowledge. Just plug in and start accepting stablecoins.",
            icon: <Terminal className="w-10 h-10 text-indigo-600" />,
        },
        {
            title: "Global Access for Local Builders",
            description:
                "Developers and startups in emerging markets can now reach international customers without struggling with banking restrictions or currency barriers.",
            icon: <Globe2 className="w-10 h-10 text-green-600" />,
        },
        {
            title: "A Simpler Onramp to the Future",
            description:
                "RokitPay removes the friction of crypto payments — turning what used to take weeks of blockchain integration into minutes of setup.",
            icon: <Users className="w-10 h-10 text-yellow-500" />,
        },
    ];

    return (
        <section className="w-full bg-black text-white py-24 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                    Why It Matters
                </h2>
                <p className="text-gray-100 max-w-2xl mx-auto mb-16">
                    The web is evolving — and RokitPay makes it easier for everyday
                    developers and businesses to participate in the Web3 economy without
                    losing simplicity or trust.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {points.map((item, index) => (
                        <div
                            key={index}
                            className="bg-black border border-gray-100 rounded-2xl shadow-sm p-8 hover:shadow-md transition-all"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-100">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyItMatters;
