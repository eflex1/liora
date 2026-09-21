import { ArrowRight, HeartPulse, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.webp" 
          alt="Children smiling" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-12">
        
        {/* Left Column */}
        <div className="w-full lg:w-3/5 text-left">
          {/* Scaled down text from 5rem to 4rem */}
          <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-black tracking-tighter text-white leading-[1.1] mb-5">
            Empowering Young People Through <span className="text-liora-gold">Education & Opportunity.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-lg font-medium leading-relaxed">
            The Liora Initiative empowers boys and girls through quality education, health awareness, mentorship, and community-driven programs that inspire positive change.
          </p>
          
          {/* Scaled down buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-liora-burgundy text-white font-bold text-base px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              Become a Volunteer
              <ArrowRight size={18} strokeWidth={3} />
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-base px-6 py-3 rounded-full hover:bg-white/20 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/5 flex flex-col gap-4">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transform transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/20 p-2.5 rounded-full text-white">
                <HeartPulse size={20} />
              </div>
              <h3 className="text-white font-bold tracking-tight text-lg">SDG 3 <span className="block text-xs font-medium text-gray-300">Good Health & Well-being</span></h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Supporting young people through health awareness, mental wellness, and community care.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 transform transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-white/20 p-2.5 rounded-full text-white">
                <BookOpen size={20} />
              </div>
              <h3 className="text-white font-bold tracking-tight text-lg">SDG 4 <span className="block text-xs font-medium text-gray-300">Quality Education</span></h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Promoting access to learning, mentorship, and educational support for children and youth.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;