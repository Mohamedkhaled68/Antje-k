"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    // Initialize with false to avoid hydration mismatch
    const [scrolled, setScrolled] = useState(false);
    // Add a state to track if component is mounted
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Mark component as mounted
        setMounted(true);

        // Function to handle scroll
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Set initial state based on current position
        handleScroll();

        // Add event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Return a simplified version during server-side rendering
    // This ensures hydration match
    if (!mounted) {
        return (
            <nav className="fixed z-10 px-10 w-full">
                <div className="flex justify-between items-center w-full pt-[70px]">
                    <h1 className="text-[28px] font-normal">Antje-k</h1>
                    <nav>
                        <ul className="flex gap-11">
                            <li>
                                <a
                                    href="/"
                                    className="text-xl font-semibold font-sans"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="text-xl font-semibold font-sans"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-xl font-semibold font-sans"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/paintings"
                                    className="text-xl font-semibold font-sans"
                                >
                                    Paintings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        );
    }

    return (
        <motion.nav
            className={`fixed z-10 transition-all duration-500 ease-in-out ${
                scrolled
                    ? "top-[30px] left-6 w-[100px] h-[100px] rounded-full bg-[#fcfcfc5b] flex items-center justify-center overflow-hidden shadow-md"
                    : "px-10 w-full"
            }`}
        >
            {scrolled ? (
                <h1 className="text-[28px] font-normal">Antje-k</h1>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    className="flex justify-between items-center w-full pt-[70px]"
                >
                    <h1 className="text-[28px] font-normal">Antje-k</h1>
                    <nav>
                        <ul className="flex gap-11">
                            <li>
                                <a
                                    href="/"
                                    className="transition-all duration-300 hover:opacity-75 text-xl font-semibold font-sans"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="transition-all duration-300 hover:opacity-75 text-xl font-semibold font-sans"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="transition-all duration-300 hover:opacity-75 text-xl font-semibold font-sans"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/paintings"
                                    className="transition-all duration-300 hover:opacity-75 text-xl font-semibold font-sans"
                                >
                                    Paintings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
