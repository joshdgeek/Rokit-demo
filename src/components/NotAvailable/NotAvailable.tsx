import { motion } from "framer-motion";
import { Hammer, Clock } from "lucide-react";
import Header from '../header/header'

export default function UnderConstruction() {
    return (
        <div>
            <Header />
            <div style={{
                minHeight: "100vh",
                background: "radial-gradient(circle at top left, #8247E5 0%, #1B0E35 80%)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                padding: "2rem",
                fontFamily: "Inter, Poppins, sans-serif",
            }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{
                        background: "rgba(255, 255, 255, 0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "18px",
                        padding: "2.5rem 2rem",
                        backdropFilter: "blur(8px)",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                        maxWidth: "400px",
                        width: "100%",
                    }}
                >
                    <motion.div
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        style={{ display: "inline-block" }}
                    >
                        <Hammer size={48} color="#CBA8FF" />
                    </motion.div>

                    <h1
                        style={{
                            fontSize: "1.8rem",
                            fontWeight: 700,
                            marginTop: "1rem",
                            background: "linear-gradient(90deg, #E0C0FF, #8B5CF6)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        This Site Is Under Construction
                    </h1>

                    <p
                        style={{
                            fontSize: "1rem",
                            color: "rgba(255,255,255,0.8)",
                            marginTop: "0.75rem",
                            lineHeight: 1.6,
                        }}
                    >
                        We’re working hard to bring something awesome your way.
                        Stay tuned — our new experience launches soon.
                    </p>

                    <div
                        style={{
                            marginTop: "1.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                            color: "#D1C1FF",
                            fontWeight: 500,
                            fontSize: "0.9rem",
                        }}
                    >
                        <Clock size={16} />
                        Coming Soon
                    </div>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                        style={{
                            height: "3px",
                            background: "linear-gradient(90deg, #7E22CE, #C084FC)",
                            marginTop: "1.5rem",
                            borderRadius: "2px",
                        }}
                    />
                </motion.div>

                <p
                    style={{
                        marginTop: "2rem",
                        fontSize: "0.85rem",
                        opacity: 0.7,
                    }}
                >
                    © {new Date().getFullYear()} ROKIT Technologies. All rights reserved.
                </p>
            </div>
        </div>
    );
}
