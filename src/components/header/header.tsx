import React from "react";
import { Menu, X } from "lucide-react";
import rokit from '../../assets/logo.png';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Ensure no default body spacing affects layout */}
            <style>{`
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>

            <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
                <header className="w-full sm:w-5/6 md:w-3/4 bg-white/80 backdrop-blur-md shadow-sm rounded-2xl mt-3 mx-auto">
                    <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center space-x-2">
                            <img
                                src={rokit}
                                alt="RokitPay Logo"
                                className="w-20 h-12 object-contain"
                            />
                            <span className="text-2xl font-bold text-[#8247E5] tracking-tight">
                                Rokit Labs
                            </span>
                        </a>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="/" className="text-gray-600 hover:text-gray-900 transition">
                                Home
                            </a>
                            <a href="#demo" className="text-gray-600 hover:text-gray-900 transition">
                                Demo
                            </a>
                            <a href="https://github.com/joshdgeek/Rokit-pay/blob/main/README.md" className="text-gray-600 hover:text-gray-900 transition">
                                Docs
                            </a>
                            <a href="#footer" className="text-gray-600 hover:text-gray-900 transition">
                                Contact
                            </a>

                            <a
                                href="#demo"
                                className="px-4 py-2 bg-[#8247E5] text-white rounded-xl hover:bg-[#450693] transition"
                            >
                                Launch App
                            </a>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-gray-800 focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Nav */}
                    {isOpen && (
                        <div className="md:hidden bg-white border-t border-gray-100 shadow-md rounded-b-2xl">
                            <nav className="flex flex-col items-center space-y-4 py-4">
                                <a
                                    href="/"
                                    className="text-gray-700 hover:text-blue-600 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </a>
                                <a
                                    href="#demo"
                                    className="text-gray-700 hover:text-blue-600 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Demo
                                </a>
                                <a
                                    href="https://github.com/joshdgeek/Rokit-pay/blob/main/README.md"
                                    className="text-gray-700 hover:text-blue-600 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Docs
                                </a>
                                <a
                                    href="#footer"
                                    className="text-gray-700 hover:text-blue-600 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </a>
                                <a
                                    href="#demo"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                                >
                                    Launch App
                                </a>
                            </nav>
                        </div>
                    )}
                </header>
            </div>
        </>
    );
};

export default Header;
