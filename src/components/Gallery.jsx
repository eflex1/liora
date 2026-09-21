import { ArrowUpRight } from 'lucide-react';

// You now have total control. Just drag and drop these blocks to change the order!
// The one with "isHero: true" will automatically span the full width of the bottom row.
const galleryItems = [
  { id: 1, src: '/src/assets/liora-1.webp', title: 'Masterclass Sessions', subtitle: 'Community in Action' },
  { id: 2, src: '/src/assets/liora-2.webp', title: 'Masterclass Sessions', subtitle: 'Community in Action' },
  { id: 3, src: '/src/assets/liora-3.webp', title: 'Education Outreach', subtitle: 'Community in Action' },
  { id: 4, src: '/src/assets/liora-4.webp', title: 'Education Outreach', subtitle: 'Community in Action' },
  { id: 5, src: '/src/assets/liora-5.webp', title: 'Education Outreach', subtitle: 'Community in Action' },
  { id: 6, src: '/src/assets/liora-6.webp', title: 'Education Outreach', subtitle: 'Community in Action' },
  { id: 7, src: '/src/assets/liora-7.webp', title: 'Masterclass Sessions', subtitle: 'Community in Action' },
  { id: 9, src: '/src/assets/liora-9.webp', title: 'Education Outreach', subtitle: 'Community in Action' },
  { id: 10, src: '/src/assets/liora-10.webp', title: 'Education Outreach', subtitle: 'Community in Action' },
  
  // Image 7 moved to the end and set as the massive Hero shot!
  { 
    id: 8, 
    src: '/src/assets/liora-8.webp', 
    title: 'Masterclass Sessions', 
    subtitle: 'United for Change',
    isHero: true 
  }
];

const Gallery = () => {
  return (
    <section className="py-20 md:py-24 bg-white px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-liora-burgundy font-bold text-xs tracking-widest uppercase">
                ✧ Gallery
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">
              Impact in Action.
            </h2>
          </div>
          <a href="#" className="text-gray-900 font-bold text-sm flex items-center gap-1 hover:text-liora-burgundy transition-colors pb-1">
            Follow our journey <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`group cursor-pointer flex flex-col ${
                item.isHero ? 'lg:col-span-3 md:col-span-2' : 'col-span-1'
              }`}
            >
              <div 
                className={`overflow-hidden rounded-3xl bg-gray-100 mb-4 ${
                  item.isHero ? 'aspect-[21/9] md:aspect-[21/7]' : 'aspect-[4/5]'
                }`}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              
              <div className="flex justify-between items-start gap-4 px-1">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-gray-900 mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-bold text-xs tracking-wide uppercase">
                    {item.subtitle}
                  </p>
                </div>
                <div className="text-gray-300 group-hover:text-liora-burgundy transition-colors">
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;