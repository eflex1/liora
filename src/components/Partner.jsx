const Partner = () => {
  return (
    <section className="py-20 md:py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Container max-width reduced, padding reduced to p-10 */}
        <div className="bg-liora-burgundy rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center shadow-2xl shadow-liora-burgundy/20">
          
          <div className="w-full md:w-1/2">
            <span className="text-liora-gold font-bold text-xs tracking-widest uppercase mb-3 block">
              Work With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4 leading-[1.1]">
              Partner or collaborate with us.
            </h2>
            <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed max-w-sm">
              You can support The Liora Initiative by giving, partnering with us, or contributing resources to our programs. Share your ideas with us using this form.
            </p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <form 
                action="https://formsubmit.co/ecadeniyi@gmail.com" 
                method="POST" 
                className="flex flex-col gap-4"
              >
                {/* Disable Captcha for a smoother user experience (optional) */}
                <input type="hidden" name="_captcha" value="false" />
                {/* Send them back to your site after submission instead of a blank page */}
                <input type="hidden" name="_next" value={window.location.href} />

                <div>
                  <label className="block text-gray-900 font-bold text-xs mb-1.5">Name <span className="text-red-500">*</span></label>
                  <input type="text" name="name" required className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-liora-burgundy/50 transition-all font-medium text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-gray-900 font-bold text-xs mb-1.5">Email address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" required className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-liora-burgundy/50 transition-all font-medium text-sm" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-gray-900 font-bold text-xs mb-1.5">Your ideas or thoughts <span className="text-red-500">*</span></label>
                  <textarea name="message" required rows="3" className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-liora-burgundy/50 transition-all font-medium text-sm resize-none" placeholder="Tell us how we can work together..."></textarea>
                </div>
                <button type="submit" className="w-full bg-liora-burgundy text-white font-bold text-base px-6 py-3 rounded-full shadow-lg shadow-liora-burgundy/30 hover:scale-105 transition-transform duration-300 mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partner;