import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <img 
              src="/liora-logo.png" 
              alt="The Liora Initiative" 
              className="h-10 w-auto object-contain mb-6" 
            />
            <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
              Empowering boys and girls through quality education, health awareness, mentorship, and community-driven programs that inspire positive change.
            </p>
            {/* Social Icons - Using Raw SVG to bypass Lucide version error */}
            <div className="flex items-center gap-4 text-gray-400">
              {/* Instagram */}
              <a href="https://www.instagram.com/liorainitiative_/" className="hover:text-liora-burgundy transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/theliorainitiative/" className="hover:text-liora-burgundy transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm tracking-widest uppercase mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {['About Us', 'Our Programs', 'Upcoming Events', "Founder's Corner", 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-liora-burgundy text-sm font-medium transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-gray-900 font-bold text-sm tracking-widest uppercase mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm font-medium">
                <Mail size={18} className="text-liora-burgundy shrink-0 mt-0.5" />
                <a href="mailto:liorainitiative@gmail.com" className="hover:text-liora-burgundy transition-colors">
                  liorainitiative@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm font-medium">
                <MapPin size={18} className="text-liora-burgundy shrink-0 mt-0.5" />
                <span>Nigeria</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Volunteer Callout */}
          <div className="bg-gray-50 rounded-3xl p-6 flex flex-col justify-center items-center text-center border border-gray-100">
            <h4 className="text-gray-900 font-bold text-lg tracking-tight mb-2">
              Join the Mission
            </h4>
            <p className="text-gray-500 text-sm font-medium mb-4">
              Help us bridge the gap between raw talent and real opportunity.
            </p>
            <button className="bg-white border-2 border-liora-burgundy text-liora-burgundy font-bold text-sm px-6 py-2.5 rounded-full hover:bg-liora-burgundy hover:text-white transition-all w-full">
              Volunteer
            </button>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-medium text-center md:text-left">
            © 2026 The Liora Initiative. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-400 text-sm font-medium">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;