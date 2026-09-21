import { motion } from 'framer-motion';

const impactPoints = [
  {
    num: "01",
    title: "Education for All Community Outreach",
    desc: "Educational engagement, inspiration, and awareness activities reached 80–100 young learners and reinforced the importance of quality education."
  },
  {
    num: "02",
    title: "Digital Advocacy on Child Marriage",
    desc: "The campaign reached an estimated 1,500–2,000 people, raised awareness of the effects of child marriage, and championed keeping girls in school."
  },
  {
    num: "03",
    title: "Girls’ Education Initiative",
    desc: "Sanitary pads were distributed to help remove menstrual-health barriers that can prevent girls from attending school with confidence and dignity."
  },
  {
    num: "04",
    title: "Host Tribe Event Nigeria",
    desc: "We connected with changemakers, expanded strategic networks, and represented its commitment to educational and social impact."
  },
  {
    num: "05",
    title: "Light Mentorship Program",
    desc: "Our flagship Four-weeks mentorship initiative provides young people with guidance, leadership development, and practical skills for personal and academic growth."
  },
  {
    num: "06",
    title: "Educational Webinars",
    desc: "The webinars brought participants together to learn from experts and discuss education, leadership, and youth development."
  }
];

const Impact = () => {
  return (
    <section id="impact" className="py-20 md:py-24 bg-white px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start relative">
        
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-liora-burgundy font-bold text-xs tracking-widest uppercase">
              Our Impact So Far
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 leading-[1.1] mb-6">
            Creating meaningful and lasting change.
          </h2>
          <p className="text-gray-500 text-base font-medium leading-relaxed mb-10 max-w-md">
            Through education, mentorship, advocacy, and community engagement, we are building a bridge between raw talent and real opportunity.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
            <div>
              <h4 className="text-3xl md:text-4xl font-black tracking-tighter text-liora-burgundy mb-1">2k-3k</h4>
              <p className="text-xs text-gray-900 font-bold uppercase tracking-wide">Digital Reach</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-4xl font-black tracking-tighter text-liora-burgundy mb-1">200+</h4>
              <p className="text-xs text-gray-900 font-bold uppercase tracking-wide">Learners Reached</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 flex flex-col gap-5">
          {impactPoints.map((point, index) => (
            <motion.div 
              key={point.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              // Reduced padding and rounded corners
              className="bg-gray-50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start hover:shadow-lg hover:shadow-gray-200/50 transition-shadow duration-300"
            >
              <span className="text-5xl md:text-6xl font-black tracking-tighter text-gray-200 leading-none shrink-0">
                {point.num}
              </span>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed text-sm">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Impact;