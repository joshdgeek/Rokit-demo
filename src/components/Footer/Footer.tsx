export default function Footer() {
    return (
        <footer className="bg-black text-gray-100 border-t border-gray-800" id="footer">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-[#8247E5] tracking-tight">
                        ROKITPAY
                    </h2>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">
                        The next generation payment module for Web3 commerce — secure, fast,
                        and developer-friendly. Powering digital game economies and more.
                    </p>
                </div>

                {/* Product */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                        Product
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li><a href="#overview" className="hover:text-[#8247E5] transition">Overview</a></li>
                        <li><a href="#demo" className="hover:text-[#8247E5] transition">Demo Store</a></li>
                        <li><a href="#code" className="hover:text-[#8247E5] transition">Integration</a></li>
                        <li><a href="#" className="hover:text-[#8247E5] transition">API Reference</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                        Documentation
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li><a href="#" className="hover:text-[#8247E5] transition">Getting Started</a></li>
                        <li><a href="#" className="hover:text-[#8247E5] transition">SDK Setup</a></li>
                        <li><a href="#" className="hover:text-[#8247E5] transition">Smart Contract</a></li>
                        <li><a href="#" className="hover:text-[#8247E5] transition">FAQs</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                        Connect
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li><a href="https://x.com" target="_blank" className="hover:text-[#8247E5] transition">Twitter / X</a></li>
                        <li><a href="https://t.me" target="_blank" className="hover:text-[#8247E5] transition">Telegram</a></li>
                        <li><a href="https://github.com" target="_blank" className="hover:text-[#8247E5] transition">GitHub</a></li>
                        <li><a href="mailto:team@rokitpay.io" className="hover:text-[#8247E5] transition">team@rokitpay.io</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 mt-10 pt-6 pb-10 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} ROKIT Technologies. All rights reserved.
            </div>
        </footer>
    );
}
