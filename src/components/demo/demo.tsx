import { useState } from "react";
import { RokitPayModalEvm } from "rokitpay";
import psnCard from "../../assets/psn.png";
import pubgUC from "../../assets/pubgUC.webp";
import codSkin from "../../assets/cod-skin.png";

const demoProducts = [
    {
        id: 1,
        name: "PlayStation Gift Card - $20",
        image: psnCard,
        price: "$18.00",
        amount: 18.0,
    },
    {
        id: 2,
        name: "Call of Duty Legendary Skin",
        image: codSkin,
        price: "$2.50",
        amount: 2.5,
    },
    {
        id: 3,
        name: "PUBG UC Pack (500 UC) Credit",
        image: pubgUC,
        price: "$9.80",
        amount: 9.8,
    },
];

export default function DemoProduct() {
    const [selectedProduct, setSelectedProduct] = useState<null | (typeof demoProducts)[0]>(null);

    return (
        <section className="w-full py-16 bg-black text-gray-300 flex flex-col items-center" id="demo">
            <h2 className="text-3xl font-bold mb-10 text-center">Demo Store</h2>

            {/* Horizontal scroll container */}
            <div className="flex justify-around w-full max-w-6xl overflow-x-auto scroll-smooth no-scrollbar px-4">
                <div className="flex gap-6 min-w-max">
                    {demoProducts.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#222124] rounded-2xl shadow-sm border border-gray-800 overflow-hidden hover:shadow-md transition-all duration-200 w-[250px] flex-shrink-0"
                        >
                            <div className="w-full h-48 bg-gradient-to-b from-[#222124] to-[#111111] flex items-center justify-center">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="object-contain h-36 w-auto"
                                />
                            </div>

                            <div className="p-5 bg-[#242029] flex flex-col items-center text-center text-white">
                                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                                <p className="text-[#8247E5] font-medium text-xl mb-4">{item.price}</p>

                                {/* Buy button */}
                                <button
                                    onClick={() => setSelectedProduct(item)}
                                    className="px-6 py-2 bg-[#8247E5] text-white font-medium rounded-lg hover:bg-[#6f3cc7] transition-all"
                                >
                                    Buy with Crypto
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <p className="mt-10 text-sm text-gray-500 text-center max-w-lg">
                This demo showcases how RokitPay enables seamless crypto payments for
                everyday digital purchases — no wallet friction, just instant checkout.
            </p>

            {/* RokitPay Modal */}
            {selectedProduct && (
                <RokitPayModalEvm
                    merchant="0xa03ee6691f1287c483511ee6f45a7c9775a02fda"
                    amount={selectedProduct.amount}
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
}
