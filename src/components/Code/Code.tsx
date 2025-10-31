// CodeBlock.tsx
import codepen from "../../assets/codepen.png";

export default function CodeBlock() {
    return (
        <section className="w-full bg-black py-20">
            <div className="max-w-5xl mx-auto text-center px-6">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                    Simple Integration in Seconds
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                    Drop in just a few lines of code and start accepting payments with
                    <span className="text-[#8247E5] font-semibold"> ROKITPAY</span> instantly.
                </p>

                {/* Carbon Snapshot Image */}
                <div className="flex justify-center">
                    <img
                        src={codepen}
                        alt="Code Example Snapshot"
                        className="rounded-xl shadow-lg border border-gray-800 w-full max-w-3xl"
                    />
                </div>
            </div>
        </section>
    );
}