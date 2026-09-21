import { Quote } from 'lucide-react';

const Founder = () => {
  return (
    <section className="py-20 md:py-24 bg-liora-offwhite px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          <div className="w-full lg:w-5/12 relative">
            <div className="absolute inset-0 bg-liora-burgundy/10 rounded-3xl transform translate-x-3 translate-y-3"></div>
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-200 z-10">
              <img 
                src="/src/assets/founder.webp" 
                alt="Dr. Emilia Manyo, Founder of The Liora Initiative" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col items-start">
            
            <div className="flex items-center gap-2 mb-4">
              <span className="text-liora-burgundy font-bold text-xs tracking-widest uppercase">
                Founder's Corner
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-gray-900 mb-1">
              Dr. Emilia Manyo
            </h2>
            <p className="text-liora-burgundy font-bold uppercase tracking-wider text-xs mb-6">
              Founder
            </p>

            <div className="space-y-4 text-gray-600 font-medium text-base leading-relaxed mb-8 max-w-xl">
              <p>
                The Liora Initiative was founded on November 4th, 2025, by Dr. Emilia Manyo, a passionate advocate for youth empowerment and education. What began as a simple vision to ensure that every young person has the opportunity to learn, grow, and thrive has evolved into a growing movement.
              </p>
              <p>
                The organization was born from Emilia's belief that every young person carries a light within them, a light of potential, purpose, and leadership.
              </p>
              <p>
                The name "Liora," meaning "light," reflects our purpose: to bring knowledge, hope, and inspiration to young people everywhere.
              </p>
            </div>

            <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-2xl">
              <Quote className="absolute top-4 left-4 text-liora-gold/30" size={36} />
              <p className="relative z-10 text-lg font-bold tracking-tight text-gray-900 leading-snug italic pl-4">
                "I started The Liora Initiative because I witnessed firsthand the brilliant potential in underserved communities that was going entirely untapped due to a lack of resources. My goal has always been to build a bridge between raw talent and real opportunity."
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Founder;