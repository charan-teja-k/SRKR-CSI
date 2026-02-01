import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import eventsDataRaw from '../data/events.json';
import { type Event, type EventYear } from '../types';

const eventsData: EventYear[] = (eventsDataRaw as any).years;
const allEvents: Event[] = eventsData.flatMap(yearGroup => yearGroup.events);

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0, 
    transition: { duration: 0.6, ease: easeOut }
  }
};

const Events: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('All');

  const years: string[] = [
    'All',
    ...eventsData
      .map(yearGroup => yearGroup.year)
      .sort((a, b) => parseInt(b) - parseInt(a))
  ];

  const parseDate = (dateStr: string) => {
    if (!dateStr) return 0;
    const [day, month, year] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day).getTime();
  };

  const filteredEvents: Event[] = (selectedYear === 'All'
    ? allEvents
    : allEvents.filter((event) => event.year === selectedYear))
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4 }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  const getCategoryLabel = (category?: string) => {
    if (!category) return 'Event';
    if (category.toLowerCase().includes('hackathon')) return 'Hackathon';
    if (category.toLowerCase().includes('workshop')) return 'Workshop';
    if (category.toLowerCase().includes('symposium')) return 'Symposium';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  const getCategoryColor = (category?: string) => {
    if (!category) return 'bg-slate-800/80 text-slate-100';
    const cat = category.toLowerCase();
    if (cat.includes('hackathon')) return 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/40';
    if (cat.includes('workshop')) return 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/40';
    if (cat.includes('symposium')) return 'bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/40';
    return 'bg-slate-800/80 text-slate-100';
  };

  return (
    <div className="relative min-h-screen w-full bg-[#020617] overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/20 blur-[90px]" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500/20 blur-[90px]" />
      </div>

      <div className="relative z-10 pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-bold font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-4 tracking-tight"
          >
            Moments & Milestones
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-slate-400 font-['Inter'] text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A curated timeline of our workshops, hackathons, and flagship technical events that define the culture of learning at SRKR.
          </motion.p>
        </div>

        {/* Year Filter */}
        <div className="flex justify-center mb-14">
          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex flex-wrap justify-center gap-2 shadow-[0_18px_60px_rgba(15,23,42,0.8)]">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`
                  relative px-6 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300
                  ${selectedYear === year ? 'text-slate-900' : 'text-slate-300 hover:text-white hover:bg-white/5'}
                `}
              >
                {selectedYear === year && (
                  <motion.div
                    layoutId="year-highlight"
                    className="absolute inset-0 bg-white rounded-xl shadow-lg"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 font-['Poppins'] tracking-wide">
                  {year === 'All' ? 'All Years' : `${year}-${parseInt(year) + 1}`}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedYear}
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                layout
                variants={cardVariants}
                exit="exit"
                className="group relative h-full"
              >
                <div className="h-full bg-slate-900/70 backdrop-blur-md rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:border-indigo-400/60 hover:shadow-[0_0_40px_rgba(79,70,229,0.35)] flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    {event.thumbnail ? (
                      <img
                        src={event.thumbnail}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                        <span className="text-white/20 font-['Poppins'] text-2xl font-semibold tracking-[0.3em]">
                          EVENT
                        </span>
                      </div>
                    )}

                    {/* Top Left category */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`absolute top-0.75 left-4 bg-black/65 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-[11px] font-medium text-slate-50 shadow-lg ${getCategoryColor(
                          event.category
                        )}`}
                      >
                        {getCategoryLabel(event.category)}
                      </span>
                    </div>

                    {/* Date badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-[11px] font-medium text-slate-50 shadow-lg">
                      {event.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-grow relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-indigo-500/15 blur-[55px] pointer-events-none" />

                    <h3 className="text-lg md:text-xl font-semibold text-slate-50 mb-2 font-['Poppins'] leading-snug group-hover:text-indigo-300 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 font-['Inter']">
                      {event.shortDesc || event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400 mb-5">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-800/70 border border-slate-700/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {event.venue}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-800/70 border border-slate-700/80">
                        {event.month} {event.year}
                      </span>
                    </div>

                    <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] text-slate-500 font-mono tracking-[0.18em] uppercase">
                        {event.year} Edition
                      </span>

                      <Link
                        to={`/events/${event.id}`}
                        className="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-50 group/btn"
                      >
                        <span>View details</span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-slate-950">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center py-24"
          >
            <div className="inline-block p-6 rounded-full bg-slate-900/70 mb-4 border border-white/10">
              <svg
                className="w-10 h-10 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p className="text-slate-300 font-['Poppins'] text-lg">
              No events found for {selectedYear}.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Events;
