import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const JoinCSI: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#111828]">
      
      {/* Background Layers - Fixed to Viewport */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="gradient-layer-1 absolute inset-0" />
        <div className="gradient-layer-2 absolute inset-0" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 pt-24 pb-16 min-h-screen flex items-center justify-center">
        <motion.div 
          className="text-center px-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
              <svg 
                className="w-12 h-12 text-white/70" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 15v2m0 0v2m0-2h2m-2 0H10m4-6V5a2 2 0 00-2-2H8a2 2 0 00-2 2v6m10 0a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2h12z" 
                />
              </svg>
            </div>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold font-['Poppins'] text-white mb-4 tracking-tight drop-shadow-lg">
            Join CSI
          </h1>

          {/* Status Badge */}
          <motion.div 
            className="inline-block mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold border border-red-500/30">
              Applications Closed
            </span>
          </motion.div>

          {/* Message */}
          <p className="text-base md:text-xl text-gray-300 font-['Inter'] mb-4 leading-relaxed">
            We are currently <span className="text-white font-semibold">not accepting applications</span> for new members.
          </p>
          <p className="text-sm md:text-base text-gray-400 font-['Inter'] mb-8 leading-relaxed">
            Stay tuned for our next recruitment drive! Follow us on social media or check back later for updates on when applications will reopen.
          </p>

          {/* Info Card */}
          <motion.div 
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-white font-semibold mb-3 font-['Poppins']">
              Want to be notified?
            </h3>
            <p className="text-gray-400 text-sm">
              Follow our social media channels to get notified when applications open for the next academic year.
            </p>
          </motion.div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/">
              <button className="px-6 py-3 bg-white text-[#111828] font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Go Home
              </button>
            </Link>
            <Link to="/events">
              <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-200">
                View Events
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinCSI;