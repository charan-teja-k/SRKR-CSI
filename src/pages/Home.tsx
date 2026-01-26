import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, type Variants } from 'framer-motion';
import { ArrowRight, Code, Users, Award, ChevronRight } from 'lucide-react';
import PixelBlast from '../components/PixelBlast';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Navbar } from '../components/layout';
import KineticFooter from '../components/KineticFooter';

// --- Utility for cleaner classes ---
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// --- Animations Config ---
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

// --- Sub-components ---

const HeroButton = ({
    to,
    variant = 'primary',
    children
}: {
    to: string;
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}) => (
    <Link to={to} className="group relative z-10">
        <button className={cn(
            "flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95",
            variant === 'primary'
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-white/5 text-white backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30"
        )}>
            {children}
            {variant === 'primary' && (
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
        </button>
    </Link>
);

const FeatureCard = ({
    icon: Icon,
    title,
    desc,
    colorClass
}: {
    icon: React.ElementType;
    title: string;
    desc: string;
    colorClass: string;
}) => (
    <motion.div
        variants={fadeInUp}
        whileHover={{ y: -5 }}
        className="relative group p-8 rounded-3xl bg-gray-900/40 backdrop-blur-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
    >
        <div className={cn(
            "absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-500",
            colorClass
        )} />

        <div className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/5 bg-white/5 group-hover:scale-110 transition-transform duration-300"
        )}>
            <Icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
            {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            {desc}
        </p>
    </motion.div>
);

const StatItem = ({ value, label }: { value: string; label: string }) => (
    <div className="text-center px-6 py-4 border-r border-white/10 last:border-0">
        <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
        <div className="text-xs uppercase tracking-wider text-gray-400">{label}</div>
    </div>
);

// --- Main Component ---

const Home: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -50]), {
        stiffness: 100,
        damping: 30
    });

    return (
        <div ref={containerRef} className="relative min-h-screen w-full overflow-x-hidden selection:bg-blue-500/30">

            {/* --- 1. Fixed Interactive Background --- */}
            <div className="fixed inset-0 z-0 bg-gray-900 pointer-events-auto">
                <PixelBlast
                    variant="square"
                    pixelSize={6}
                    color="#2f6de8"
                    patternScale={4}
                    patternDensity={1}
                    pixelSizeJitter={0}
                    enableRipples
                    rippleSpeed={0.3}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid={false}
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={4}
                    speed={0.3}
                    edgeFade={0.15}
                    transparent
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-[1] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-transparent to-gray-900 z-[1] pointer-events-none" />
            </div>

            {/* --- 2. Scrollable Content Wrapper --- */}
            <div className="relative z-10 pointer-events-none">

                {/* Hero Section */}
                <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
                    <motion.div
                        style={{ y }}
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-5xl mx-auto text-center"
                    >
                       

                        <motion.h1
                            variants={fadeInUp}
                            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.9] tracking-tighter"
                        >
                            SRKR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient-x">CSI</span>
                            <br />
                            <span className="text-4xl md:text-6xl lg:text-7xl text-gray-400 font-medium block mt-2">
                                Student Chapter
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg md:text-2xl text-gray-300/80 mb-12 max-w-2xl mx-auto leading-relaxed"
                        >
                            Architecting the future of technology through student leadership, innovation, and community-driven development.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto"
                        >
                            <HeroButton to="/events">Explore Events</HeroButton>
                            <HeroButton to="/about" variant="secondary">Our Mission</HeroButton>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="mt-20 pt-10 border-t border-white/5 grid grid-cols-3 gap-4 max-w-3xl mx-auto pointer-events-auto bg-black/20 backdrop-blur-sm rounded-2xl"
                        >
                            <StatItem value="500+" label="Members" />
                            <StatItem value="50+" label="Events" />
                            <StatItem value="24/7" label="Support" />
                        </motion.div>
                    </motion.div>
                </section>

                {/* Feature Cards Section */}
                <section className="py-24 px-4 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Why Join <span className="text-blue-500">CSI?</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            We provide the platform, you bring the passion. Here is how we help you accelerate your career.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid md:grid-cols-3 gap-8 pointer-events-auto"
                    >
                        <FeatureCard
                            icon={Code}
                            title="Technical Excellence"
                            desc="Master modern stacks through rigorous bootcamps and hackathons designed to simulate real-world engineering challenges."
                            colorClass="bg-blue-600"
                        />
                        <FeatureCard
                            icon={Users}
                            title="Elite Network"
                            desc="Access a curated network of alumni at top product companies and connect with peers who share your drive."
                            colorClass="bg-purple-600"
                        />
                        <FeatureCard
                            icon={Award}
                            title="Leadership Core"
                            desc="Go beyond coding. Learn to manage teams, organize large-scale summits, and drive initiatives from scratch."
                            colorClass="bg-orange-600"
                        />
                    </motion.div>
                </section>

                {/* Footer Section - Moved inside the flow but pointer-events enabled */}
                <div className="relative pointer-events-auto mt-20">
                    <KineticFooter />
                </div>

            </div>
        </div>
    );
};

export default Home;
