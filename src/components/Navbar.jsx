import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import VolunteerPanel from './VolunteerPanel';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated to use actual section IDs
  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Events', href: '#events' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-out ${
          isScrolled 
            ? 'py-4 bg-white/80 backdrop-blur-md shadow-sm' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          <a href="#" className="relative z-10 flex items-center">
            <img 
              src="/liora-logo.png" 
              alt="The Liora Initiative" 
              className="h-12 w-auto object-contain" 
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    // Dynamic color: White at the top, Dark Gray when scrolled
                    className={`font-bold text-sm tracking-wide transition-colors hover:text-liora-gold ${
                      isScrolled ? 'text-gray-900' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <button 
              onClick={() => setVolunteerOpen(true)}
              className="px-6 py-2.5 rounded-full font-bold transition-all bg-liora-burgundy text-white hover:bg-liora-burgundy/90 shadow-lg shadow-liora-burgundy/20"
            >
              Become a Volunteer
            </button>
          </div>

          <button 
            // Mobile hamburger icon changes color based on scroll too
            className={`md:hidden relative z-10 p-2 transition-colors ${
              isScrolled ? 'text-gray-900 hover:text-liora-burgundy' : 'text-white hover:text-liora-gold'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden px-6">
            <ul className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full text-center">
                  <a 
                    href={link.href} 
                    className="text-3xl font-black text-gray-900 hover:text-liora-gold block py-2 tracking-tighter"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                setVolunteerOpen(true);
              }}
              className="w-full max-w-xs bg-liora-burgundy text-white py-4 rounded-full font-bold text-lg mt-4 shadow-xl shadow-liora-burgundy/20"
            >
              Become a Volunteer
            </button>
          </div>
        )}
      </nav>

      <VolunteerPanel isOpen={volunteerOpen} onClose={() => setVolunteerOpen(false)} />
    </>
  );
};

export default Navbar;