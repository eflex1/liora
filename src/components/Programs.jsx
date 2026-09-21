import { BookOpen, Users, Heart, Zap, MonitorPlay, Globe } from 'lucide-react';

const programs = [
  { id: 1, icon: <BookOpen size={24} />, title: "Education Matters", subtitle: "Expanding access to educational resources.", desc: "We provide educational resources and learning opportunities for young people in underserved areas, helping strengthen access to quality education." },
  { id: 2, icon: <Users size={24} />, title: "Mentorship", subtitle: "Providing guidance and leadership development.", desc: "The Light Mentorship Program is our flagship three-weeks mentorship initiative, providing young people with guidance and practical skills." },
  { id: 3, icon: <Heart size={24} />, title: "Health & Wellness", subtitle: "Supporting physical and mental well-being.", desc: "We promote physical, mental, and emotional well-being to support effective learning and help young people grow with confidence." },
  { id: 4, icon: <Zap size={24} />, title: "Youth Empowerment", subtitle: "Developing confident young changemakers.", desc: "We run free leadership programs that encourage young people to develop essential skills, strong values, and confidence." },
  { id: 5, icon: <MonitorPlay size={24} />, title: "Educational Webinars", subtitle: "Learning from experts through conversations.", desc: "We bring participants together to learn from experts, build knowledge, and engage in conversations on education and leadership." },
  { id: 6, icon: <Globe size={24} />, title: "Community Outreach", subtitle: "Reaching young learners through engagement.", desc: "Through the Education for All Community Outreach, we reach young learners with educational engagement and inspiration." }
];

const Programs = () => {
  return (
    <section id="programs" className="py-20 md:py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-gray-900 mb-3">
            Our Core Programs
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium">
            Comprehensive initiatives designed to support the holistic development of young people.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="bg-gray-50 rounded-3xl p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/50"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-liora-burgundy shadow-sm mb-5">
                {program.icon}
              </div>
              
              <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-1">
                {program.title}
              </h3>
              <p className="text-liora-burgundy font-semibold text-xs uppercase tracking-wide mb-3">
                {program.subtitle}
              </p>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                {program.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;