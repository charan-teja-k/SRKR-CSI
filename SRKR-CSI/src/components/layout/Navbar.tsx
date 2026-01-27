import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/events', label: 'Events' },
        { path: '/members', label: 'Our Team' },
    ];

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 25);
        };

        // 1. Check IMMEDIATELY on mount (fixes the refresh issue)
        handleScroll();

        // 2. Add event listener for subsequent scrolls
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    // Dynamic Header Classes
    const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b ${isOpen
            ? 'bg-[#030817] border-[#d4defa]/10'
            : scrolled
                ? 'bg-[#030817]/90 backdrop-blur-md border-[#d4defa]/10 shadow-lg'
                : 'bg-[#030817]/40 border-transparent'
        }`;

    return (
        <nav className={headerClasses}>
            <div className="w-full mx-auto px-4 lg:px-10">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <Link
                        to="/"
                        className="flex items-center space-x-3 group"
                        onClick={() => setIsOpen(false)}
                    >
                        <img
                            src='/logos/csi_logo.png'
                            alt="SRKR CSI"
                            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform"
                        />

                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-white leading-none tracking-tight group-hover:text-[#002a94] transition-colors">
                                SRKR CSI
                            </span>
                            <span className="text-[10px] text-[#d4defa]/70 font-medium tracking-wider uppercase">
                                Student Chapter
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-all duration-300 relative py-1 ${location.pathname === link.path
                                        ? 'text-[#2d6cea]'
                                        : 'text-[#d4defa] hover:text-[#002a94]'
                                    }`}
                            >
                                {link.label}
                                {location.pathname === link.path && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#2d6cea] rounded-full shadow-sm" />
                                )}
                            </Link>
                        ))}

                        <Link to="/contact">
                            <button className="px-6 py-2.5 rounded-full bg-[#002a94] text-white text-sm font-semibold hover:bg-[#002a94]/80 hover:shadow-[0_0_20px_rgba(0,42,148,0.5)] transition-all duration-300 active:scale-95 border border-transparent hover:border-[#d4defa]/20">
                                Join Us
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#d4defa] hover:text-white p-2 focus:outline-none transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`absolute top-full left-0 w-full bg-[#030817] border-t border-[#d4defa]/10 shadow-2xl md:hidden flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'h-[calc(100vh-80px)] opacity-100' : 'h-0 opacity-0'
                    }`}
            >
                <div className="px-4 py-6 space-y-3 h-full overflow-y-auto bg-[#030817]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center justify-between px-4 py-4 rounded-xl transition-all duration-200 ${location.pathname === link.path
                                    ? 'bg-[#002a94]/10 text-[#002a94] border border-[#002a94]/20'
                                    : 'text-[#d4defa] hover:bg-[#d4defa]/5 hover:text-[#002a94]'
                                }`}
                        >
                            <span className="font-medium text-lg">{link.label}</span>
                            {location.pathname === link.path && <ChevronRight size={18} />}
                        </Link>
                    ))}

                    <div className="h-px bg-[#d4defa]/10 my-4" />

                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#002a94] to-[#001a5c] text-white font-bold text-lg shadow-lg active:scale-95 transition-transform border border-[#d4defa]/10">
                            Join The Chapter
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
