import { CalendarX2 } from 'lucide-react';

const Events = () => {
  return (
    <section id="events" className="py-24 bg-white px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        
        {/* Left Side: Header */}
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-liora-burgundy font-bold text-sm tracking-widest uppercase">
              Upcoming Events
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-4">
            Join the Movement.
          </h2>
          <p className="text-gray-500 font-medium">
            Join us in our upcoming activities and make a difference.
          </p>
        </div>

        {/* Right Side: Empty State (Premium Style) */}
        <div className="w-full md:w-1/2 bg-gray-50 rounded-[2rem] p-10 flex flex-col items-center justify-center text-center border border-gray-100">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-gray-400 shadow-sm mb-4">
            <CalendarX2 size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
            No Scheduled Events
          </h3>
          <p className="text-gray-500 font-medium">
            There are no upcoming events at the moment. Check back soon for updates!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Events;