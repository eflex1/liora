import { motion } from 'framer-motion';

const ImpactSticky = () => {
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

  return (
    <section className="bg-liora-offwhite py-32 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative">
        
        {/* Left Column: Sticky Narrative */}
        <div className="lg:w-5/12">
          <div className="sticky top-32">
            <span className="text-liora-burgundy font-semibold tracking-wider text-sm uppercase mb-4 block">
              Our Impact So Far
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6">
              Creating meaningful and lasting change.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Through education, mentorship, advocacy, and community engagement, we are building a bridge between raw talent and real opportunity.
            </p>
            
            {/* The Massive Data Points */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div>
                <h4 className="text-4xl font-serif text-liora-burgundy mb-2">3,000+</h4>
                <p className="text-sm text-gray-500 font-medium">Digital Advocacy Reach</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-liora-burgundy mb-2">300+</h4>
                <p className="text-sm text-gray-500 font-medium">Young Learners Reached</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Scrolling Pill Cards */}
        <div className="lg:w-7/12 flex flex-col gap-6 pt-12 lg:pt-0">
          {impactPoints.map((point, index) => (
            <motion.div 
              key={point.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row gap-6 md:gap-10 items-start hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
            >
              {/* Massive Number */}
              <span className="text-6xl font-serif text-gray-200 leading-none block shrink-0">
                {point.num}
              </span>
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-serif text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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

export default ImpactSticky;