import { Target, Compass } from 'lucide-react';

const Story = () => {
  return (
    <section id="story" className="py-20 md:py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black tracking-tighter text-gray-900 mb-4 leading-none">
            Our Story & Mission.
          </h2>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Driven by the belief that every young person deserves the opportunity to thrive, learn, and lead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Reduced padding from p-14 to p-8, rounded-3xl instead of 2.5rem */}
            <div className="bg-gray-50 rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-liora-burgundy shadow-sm mb-6">
                <Target size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed text-base">
                The mission of The Liora Initiative is to empower young people through accessible and inclusive education, health awareness, and transformative mentorship. We are committed to creating opportunities that help them develop essential skills, strong values, and the confidence to impact their communities positively.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-liora-burgundy shadow-sm mb-6">
                <Compass size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 mb-4">
                How We Achieve It
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed text-base">
                We provide educational resources and learning opportunities, promote physical, mental, and emotional well-being, run free mentorship and leadership programs, and build partnerships with schools, youth organizations, and community groups.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="pl-0 md:pl-10 border-l-0 md:border-l-2 border-gray-100 flex flex-col gap-12 relative">
              <div className="relative">
                <div className="hidden md:block absolute left-[-49px] top-1 w-4 h-4 rounded-full bg-white border-[3px] border-liora-burgundy"></div>
                <span className="text-liora-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">The Beginning</span>
                <h4 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">A Spark of Hope</h4>
                <p className="text-gray-600 font-medium leading-relaxed text-base">The Liora Initiative was founded on November 4th, 2025, by Emilia Manyo, a passionate advocate for youth empowerment and education.</p>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute left-[-49px] top-1 w-4 h-4 rounded-full bg-white border-[3px] border-liora-gold"></div>
                <span className="text-liora-gold font-bold tracking-widest text-xs uppercase mb-2 block">Growth</span>
                <h4 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Expanding Horizons</h4>
                <p className="text-gray-600 font-medium leading-relaxed text-base">The organization grew from Emilia's belief that every young person carries a light of potential, purpose, and leadership that can illuminate communities and transform lives.</p>
              </div>

              <div className="relative">
                <div className="hidden md:block absolute left-[-49px] top-1 w-4 h-4 rounded-full bg-white border-[3px] border-liora-burgundy"></div>
                <span className="text-liora-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">Today</span>
                <h4 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">A Community United</h4>
                <p className="text-gray-600 font-medium leading-relaxed text-base">With a central focus on SDG 4 (Quality Education), we create a ripple effect of learning, leadership, and compassion that empowers young people to shape a better world.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;