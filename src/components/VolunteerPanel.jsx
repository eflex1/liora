import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const VolunteerPanel = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-gray-900 text-white shadow-2xl z-[101] overflow-y-auto border-l border-white/10 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <span className="text-liora-gold font-bold text-[10px] tracking-widest uppercase mb-1 block">
                  Get Involved
                </span>
                <h2 className="text-xl font-black tracking-tighter">Become a Volunteer</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-1.5 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 flex-1">
              <p className="text-gray-400 text-sm font-medium mb-6 leading-relaxed">
                Join The Liora Initiative in supporting youth through education, mentorship, health awareness, and community outreach.
              </p>

              <form 
                action="https://formsubmit.co/ecadeniyi@gmail.com" 
                method="POST" 
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="_subject" value="New Volunteer Application!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div>
                  <input type="text" name="name" required placeholder="Full name" className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-liora-gold transition-colors font-medium" />
                </div>
                <div>
                  <input type="email" name="email" required placeholder="Email address" className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-liora-gold transition-colors font-medium" />
                </div>
                <div>
                  <input type="tel" name="phone" placeholder="Phone number" className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-liora-gold transition-colors font-medium" />
                </div>
                <div>
                  <select name="interest" required className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-liora-gold transition-colors font-medium appearance-none" defaultValue="">
                    <option value="" disabled className="text-gray-500">Area of interest</option>
                    <option value="mentorship" className="text-gray-900">Mentorship</option>
                    <option value="events" className="text-gray-900">Events</option>
                    <option value="education" className="text-gray-900">Education support</option>
                    <option value="health" className="text-gray-900">Health awareness</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-liora-gold text-liora-burgundy font-bold text-base px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 mt-2">
                  Submit Interest
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VolunteerPanel;