  import React, { useEffect, useState } from 'react';
  import { useParams, Link } from 'react-router-dom';
import eventsDataRaw from '../data/events.json';
import { type Event, type EventYear } from '../types';

const eventsData: EventYear[] = (eventsDataRaw as any).years;
const allEvents: Event[] = eventsData.flatMap(yearGroup => yearGroup.events);

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
    const event = allEvents.find((e) => e.id.toString() === id);

    // Image carousel state
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasImages = !!(event?.images && event.images.length > 0);
    const images = hasImages ? (event!.images as string[]) : [];

    useEffect(() => {
      if (!hasImages || images.length <= 1) return;

      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [hasImages, images.length]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100">
        <h2 className="text-2xl font-bold mb-2">Event not found</h2>
        <p className="text-slate-400 mb-4">The event you are looking for does not exist or has been removed.</p>
        <Link
          to="/events"
          className="text-sm font-semibold text-indigo-300 hover:text-white border border-indigo-400/60 px-4 py-2 rounded-lg"
        >
          ← Back to Events
        </Link>
      </div>
    );
  }

  

  const getCategoryLabel = (category?: string) => {
    if (!category) return 'Event';
    const cat = category.toLowerCase();
    if (cat.includes('hackathon')) return 'Hackathon';
    if (cat.includes('workshop')) return 'Workshop';
    if (cat.includes('symposium')) return 'Symposium';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute -top-40 left-0 w-96 h-96 bg-indigo-500/20 blur-[110px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/20 blur-[110px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Back link */}
        <div className="mt-3 mb-6">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white"
          >
            <span className="text-lg">←</span>
            <span className="font-medium">Back to Events</span>
          </Link>
        </div>

        {/* Header / Hero */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-xs font-semibold tracking-[0.18em] uppercase">
              {getCategoryLabel(event.category)}
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/40 text-indigo-200 font-semibold">
                {event.date}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-600 text-slate-200 font-semibold">
                {event.venue}
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {event.title}
          </h1>

          <p className="text-slate-300 text-sm md:text-base max-w-3xl">
            {event.description}
          </p>
        </header>

        {/* Hero image / gallery (carousel) */}
        <section className="mb-10">
          <div className="w-full h-72 md:h-80 rounded-2xl border border-slate-700/70 bg-slate-900/80 overflow-hidden flex items-center justify-center relative">
            {hasImages ? (
              <div className="relative w-full h-full">
                {/* Slides */}
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={event.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full border border-white/50 transition-all ${idx === currentIndex ? 'bg-white' : 'bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center">
                <span className="text-slate-500 text-sm mb-2">Event Gallery</span>
                <span className="text-slate-600 text-xs">
                  (Add images for this event in the JSON file)
                </span>
              </div>
            )}
          </div>
        </section>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-3">About the Event</h2>
          <p className="text-slate-200 text-sm md:text-base leading-relaxed whitespace-pre-line">
            {event.fullDescription || event.description}
          </p>
        </section>

        {/* Meta info + Coordinators */}
        <section className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Event meta */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">
              Event Snapshot
            </h3>
            <dl className="space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-slate-400">Category</dt>
                <dd className="text-slate-100">{getCategoryLabel(event.category)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-400">Date</dt>
                <dd className="text-slate-100">{event.date}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-400">Academic Year</dt>
                <dd className="text-slate-100">
                  {
                    eventsData.find((y) =>
                      y.events.some((e) => e.id === event.id)
                    )?.academicYear
                  }
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-400">Year</dt>
                <dd className="text-slate-100">{event.year}</dd>
              </div>
              {event.venue && (
                <div className="flex justify-between">
                  <dt className="text-slate-400">Venue</dt>
                  <dd className="text-slate-100 text-right max-w-[60%]">
                    {event.venue}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Coordinators */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 border-b-2 border-indigo-500 inline-block pb-1">
                Faculty Coordinators
              </h3>
              <ul className="space-y-2">
                {event.facultyCoordinators?.map((name, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-slate-100 bg-slate-900/80 p-3 rounded-xl border border-slate-700/70"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-400 mr-3" />
                    {name}
                  </li>
                ))}
                {(!event.facultyCoordinators ||
                  event.facultyCoordinators.length === 0) && (
                  <li className="text-slate-500 text-sm italic">
                    Details will be updated soon.
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 border-b-2 border-emerald-500 inline-block pb-1">
                Student Coordinators
              </h3>
              <ul className="space-y-2">
                {event.studentCoordinators?.map((student, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-sm text-slate-100 bg-slate-900/80 p-3 rounded-xl border border-slate-700/70"
                  >
                    <span className="font-medium">{student.name}</span>
                    <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded uppercase tracking-[0.18em]">
                      {student.role}
                    </span>
                  </li>
                ))}
                {(!event.studentCoordinators ||
                  event.studentCoordinators.length === 0) && (
                  <li className="text-slate-500 text-sm italic">
                    Student coordinator details will be announced.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Winners */}
        {event.winners && event.winners.length > 0 && (
          <section className="mb-16 bg-amber-950/40 border border-amber-500/30 rounded-2xl p-7">
            <h2 className="text-xl md:text-2xl font-semibold text-amber-100 mb-6 flex items-center justify-center gap-2">
              <span>🏆</span>
              <span>Prize Winners</span>
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {event.winners.map((winner, idx) => {
                const pos = winner.position?.toLowerCase();
                const medal =
                  pos === '1st' || pos === 'winners'
                    ? '🥇'
                    : pos === '2nd' || pos === 'runners'
                    ? '🥈'
                    : '🥉';

                return (
                  <div
                    key={idx}
                    className="bg-slate-900/90 border border-amber-500/40 rounded-xl p-5 text-center shadow-sm"
                  >
                    <div className="text-3xl mb-2">{medal}</div>
                    <h4 className="font-semibold text-sm md:text-base text-amber-50 mb-1">
                      {winner.name}
                    </h4>
                    <p className="text-[11px] text-amber-200 uppercase tracking-[0.16em] mb-1">
                      {winner.position}
                    </p>
                    {winner.prize && (
                      <p className="text-xs text-amber-100/90 font-medium">
                        {winner.prize}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
