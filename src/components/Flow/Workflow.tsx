import React from "react";
import { Code2, Coins, Zap } from "lucide-react";

const Workflow: React.FC = () => {
    const steps = [
        {
            title: "Integrate in Minutes",
            description:
                "Drop the RokitPay SDK or widget into your website or app. Go live without complex setup.",
            icon: <Code2 className="w-10 h-10 text-indigo-600" />,
        },
        {
            title: "Accept Stablecoins",
            description:
                "Receive USDC, USDT, or other supported tokens directly on-chain — fast, borderless, and secure.",
            icon: <Coins className="w-10 h-10 text-green-600" />,
        },
        {
            title: "Instant Settlement",
            description:
                "Get payments directly in your wallet — no middlemen, no chargebacks, no waiting.",
            icon: <Zap className="w-10 h-10 text-yellow-500" />,
        },
    ];

    return (
        <section className="w-full bg-black py-14 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                    How RokitPay Works
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                    A seamless payment flow built for the next generation of global
                    businesses — fast, transparent, and developer-friendly.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-black backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-all"
                        >
                            <div className="flex flex-col items-center">
                                <div className="mb-6">{step.icon}</div>
                                <h3 className="text-xl font-semibold mb-3 text-gray-100">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
