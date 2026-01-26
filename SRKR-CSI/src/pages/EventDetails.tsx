import React from 'react';
import { useParams, Link } from 'react-router-dom';
import eventsDataRaw from '../data/events.json';
import { type Event } from '../types';

const eventsData: Event[] = eventsDataRaw as unknown as Event[];

const EventDetails: React.FC = () => {
  // useParams returns string | undefined for route parameters
  const { id } = useParams<{ id: string }>();
  
  const event = eventsData.find((e) => e.id.toString() === id);

  if (!event) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-700">Event not found!</h2>
        <Link to="/events" className="text-blue-500 hover:underline mt-4 block">Return to Events</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link to="/events" className="text-gray-500 hover:text-blue-600 mb-6 inline-flex items-center gap-1">
        <span>←</span> Back to Events
      </Link>
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{event.title}</h1>
      <p className="text-gray-600 mb-8 flex items-center gap-4">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Date: {event.date}</span>
        <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">Year: {event.year}</span>
      </p>

      {/* Gallery / Main Image */}
      <div className="mb-10 w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center border border-gray-300">
        <span className="text-gray-500">Event Gallery / Banner Placeholder</span>
      </div>

      {/* Description */}
      <div className="prose max-w-none mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Event</h2>
        <p className="text-gray-700 whitespace-pre-line">{event.fullDescription}</p>
      </div>

      {/* Coordinators Grid */}
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {/* Faculty */}
        <div>
          <h3 className="text-xl font-bold border-b-2 border-orange-500 inline-block mb-4">Faculty Coordinators</h3>
          <ul className="space-y-3">
            {event.facultyCoordinators?.map((name, index) => (
              <li key={index} className="flex items-center text-gray-700 bg-white p-3 rounded shadow-sm border border-gray-100">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Students */}
        <div>
          <h3 className="text-xl font-bold border-b-2 border-orange-500 inline-block mb-4">Student Coordinators</h3>
          <ul className="space-y-3">
            {event.studentCoordinators?.map((student, index) => (
              <li key={index} className="flex justify-between items-center text-gray-700 bg-white p-3 rounded shadow-sm border border-gray-100">
                <span className="font-medium">{student.name}</span>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-wider">
                  {student.role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Winners Section (Conditional) */}
      {event.winners && event.winners.length > 0 && (
        <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200">
          <h2 className="text-2xl font-bold text-yellow-800 mb-8 text-center flex justify-center items-center gap-2">
            <span>🏆</span> Prize Winners
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {event.winners.map((winner, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-3">
                  {winner.position === '1st' || idx === 0 ? '🥇' : 
                   winner.position === '2nd' || idx === 1 ? '🥈' : '🥉'}
                </div>
                <h4 className="font-bold text-lg text-gray-900">{winner.name}</h4>
                <p className="text-sm text-gray-500 font-medium">{winner.position} Place</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
