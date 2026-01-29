import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Github, Twitter } from 'lucide-react';

const KineticFooter = () => {
  const currentYear = new Date().getFullYear();
  
  // UPDATED: 3x3 Grid (9 items total)
  
  // Pattern: C S I repeating
  const chars = ["C", "S", "I", "C", "S", "I", "C", "S", "I"];

  const socialLinks = [
    { Icon: Linkedin, url: "https://www.linkedin.com/company/csi-srkrit/posts/?feedView=all" },
    { Icon: Instagram, url: "https://www.instagram.com/srkr_it_csi?igsh=MWN5a3R5MjltbWc3Nw==" },
    { Icon: Github, url: "https://github.com/srkr-csi" },
    { Icon: Twitter, url: "https://twitter.com/srkr_csi" },
  ];

  return (
    <footer className="relative bg-[#030817]/40  backdrop-blur-md text-white overflow-hidden pt-10 px-0  border-t border-white/5">
      
      <div className="min-w-full mx-auto flex flex-col lg:flex-row gap-2"> 
        
        {/* LEFT COLUMN: Links & Info (Unchanged) */}
        <div className="flex flex-col justify-center text-center lg:w-3/4 z-10 flex flex-col justify-between h-full min-h-[400px] mx-auto">
          <div>
            <h2 className="flex flex-col justify-center text-center text-5xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">
              <br />Let there be <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                 Innovation.<br />
              </span>
            </h2>

            <div className="grid grid-cols-2 gap-x-2 gap-y-6 mb-16 ">
              <div className="flex flex-col gap-4 justify-start items-start mx-auto">
                 <Link to="/about" className="hover:translate-x-1 hover:text-blue-400 transition-all duration-300 text-gray-400 font-medium">About Us</Link>
                 <Link to="/events" className="hover:translate-x-1 hover:text-blue-400 transition-all duration-300 text-gray-400 font-medium">Events</Link>
                 <Link to="/members" className="hover:translate-x-1 hover:text-blue-400 transition-all duration-300 text-gray-400 font-medium">Our Team</Link>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start mx-auto">
                 <Link to="/privacy" className="hover:translate-x-1 hover:text-blue-400 transition-all duration-300 text-gray-400 font-medium">Privacy Policy</Link>
                 <Link to="/terms" className="hover:translate-x-1 hover:text-blue-400 transition-all duration-300 text-gray-400 font-medium">Terms of Use</Link>
                 <Link to="/contact" className="hover:translate-x-1 hover:text-blue-400 transition-all duration-300 text-gray-400 font-medium">Contact</Link>
              </div>
            </div>
          </div>

          <div className="space-y-8 mx-auto">
            <div className="flex gap-5">
              {socialLinks.map(({ Icon, url }, i) => (
                <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300 text-gray-300 hover:text-white group">
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <div className="fixed bottom-0 text-sm text-gray-500 font-medium tracking-wide mx-auto">
              © {currentYear} SRKR CSI Student Chapter.
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The 3x3 Kinetic "CSI" Animation */}
        <div className="w-full lg:w-1/2 relative h-[450px] lg:h-auto flex items-center justify-center lg:justify-end">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          
          {/* UPDATED: 3 cols grid */}
          <div className="grid grid-cols-3 gap-4 p-4 relative z-10 mr-0 md:mr-28">
            {chars.map((char, i) => (
              <FlipChar key={i} char={char} delay={i * 0.05} />
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

// Sub-component (Larger blocks for 3x3 grid)
const FlipChar = ({ char, delay }: { char: string, delay: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      // Increased size for 3x3 layout: w-24 h-32 -> lg:w-32 lg:h-40
      className="mx-auto w-24 h-32 md:w-28 md:h-36 lg:w-32 lg:h-40 flex items-center justify-center text-5xl md:text-6xl lg:text-7xl font-black rounded-xl cursor-pointer select-none perspective-1000"
      initial={{ rotateY: 90, opacity: 0 }} 
      whileInView={{ 
         rotateY: 0,
         opacity: 1,
         transition: { 
           duration: 1, 
           delay: delay,
           ease: [0.23, 1, 0.32, 1],
           repeat: 0 
         }
      }}
      // Interactive Hover Animation
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
      // Dynamic Styles based on hover
      animate={{ 
        rotate: isHovered ? 180 : 0, 
        // rotate: isHovered ? 180 : 0, 
        backgroundColor: isHovered ? "rgba(37, 99, 235, 1)" : "rgba(255, 255, 255, 0.03)", // Blue vs Glass
        color: isHovered ? "#ffffff" : "rgba(255, 255, 255, 0.8)",
        scale: isHovered ? 1.05 : 1,
        borderColor: isHovered ? "rgba(37, 99, 235, 0.5)" : "rgba(255, 255, 255, 0.1)"
      }}
      
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        backdropFilter: 'blur(10px)'
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <span style={{ transform: isHovered ? "rotateY(180deg)" : "none", display: "block" }}>
        {char}
      </span>
    </motion.div>
  );
};

export default KineticFooter;
