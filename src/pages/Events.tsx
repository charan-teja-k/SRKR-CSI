import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import eventsDataRaw from '../data/events.json'; 
import { type Event } from '../types';

const eventsData: Event[] = eventsDataRaw as unknown as Event[];

const Events: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('All');

  // Extract unique years for the filter dropdown
  const years: string[] = ['All', ...Array.from(new Set(eventsData.map((event) => event.year)))];

  const filteredEvents: Event[] = selectedYear === 'All' 
    ? eventsData 
    : eventsData.filter((event) => event.year === selectedYear);

  return (
    <div className="min-h-screen bg-[#030817] text-[#d4defa]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <h1 className="text-3xl font-bold text-white">Events & Activities</h1>
          
          {/* Year Filter */}
          <select 
            className="border border-[#d4defa]/20 rounded-md p-2 bg-[#030817] text-white min-w-[200px] focus:ring-1 focus:ring-[#002a94] focus:border-[#002a94]"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year === 'All' ? 'All Years' : `${year} Academic Year`}
              </option>
            ))}
          </select>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-[#0b1221] rounded-lg shadow-md overflow-hidden hover:shadow-[0_4px_20px_rgba(0,42,148,0.2)] transition flex flex-col border border-[#d4defa]/5">
              <div className="h-48 bg-[#0f172a] relative">
                 {/* Use event.thumbnail here if available */}
                 <div className="absolute inset-0 flex items-center justify-center text-[#d4defa]/40">
                   Image Placeholder
                 </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-xs font-bold text-[#9a429e] uppercase tracking-wide">{event.date}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-white">{event.title}</h3>
                <p className="text-[#d4defa]/70 text-sm mb-4 line-clamp-3 flex-grow">{event.shortDesc}</p>
                <Link 
                  to={`/events/${event.id}`} 
                  className="text-[#002a94] font-semibold hover:text-[#9a429e] hover:underline mt-auto inline-block transition-colors"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
          {filteredEvents.length === 0 && (
            <div className="col-span-full text-center text-[#d4defa]/50 py-10">
              No events found for the selected year.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
