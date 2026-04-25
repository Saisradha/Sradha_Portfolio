import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:saisradha888@gmail.com?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
  };

  const inputClass = (field) => `
    w-full bg-transparent border-b pb-3 pt-5 text-white text-base font-light outline-none
    transition-all duration-300 placeholder-transparent
    ${activeField === field ? 'border-ember' : 'border-white/15 hover:border-white/30'}
  `;

  const labelClass = (field, value) => `
    absolute left-0 text-sm font-mono tracking-widest uppercase transition-all duration-300
    ${activeField === field || value ? 'top-0 text-[10px] text-ember' : 'top-5 text-white/30'}
  `;

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-5 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #FF4D1C, transparent)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-ember" />
              <span className="font-mono text-xs text-ember tracking-widest uppercase">Get In Touch</span>
            </div>

            <h2 className="text-display text-[clamp(3rem,6vw,5.5rem)] leading-tight text-white mb-8">
              LET'S
              <br />
              CREATE
              <br />
              <span className="text-white/20">TOGETHER</span>
            </h2>

            <p className="text-white/50 leading-relaxed mb-12 max-w-sm">
              Ready to bring your vision to life? Let's collaborate on your next project and create
              something extraordinary together.
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:saisradha888@gmail.com"
                className="flex items-center gap-4 group"
                whileHover={{ x: 6 }}
                data-hover
              >
                <div className="w-10 h-10 glass flex items-center justify-center border border-white/10 group-hover:border-ember/50 group-hover:bg-ember/10 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <rect x="1" y="3" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-white/30 tracking-widest uppercase mb-0.5">Email</div>
                  <div className="text-sm text-white group-hover:text-ember transition-colors">saisradha888@gmail.com</div>
                </div>
              </motion.a>

              <motion.div className="flex items-center gap-4 group" whileHover={{ x: 6 }}>
                <div className="w-10 h-10 glass flex items-center justify-center border border-white/10 group-hover:border-ember/50 group-hover:bg-ember/10 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 2a1 1 0 011-1h2.5l1.5 4-2 1.5a9.5 9.5 0 004 4l1.5-2 4 1.5V13a1 1 0 01-1 1C6 14 2 8 2 3a1 1 0 011-1z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-white/30 tracking-widest uppercase mb-0.5">Phone</div>
                  <div className="text-sm text-white">+91 7981599968</div>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-4 mt-12">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/saisradha/' },
                { name: 'Instagram', url: 'https://instagram.com/sai_sradha_8' },
              ].map((s) => (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 glass border border-white/10 hover:border-ember/50 text-white/50 hover:text-ember text-sm transition-all duration-300"
                  whileHover={{ y: -2 }}
                  data-hover
                >
                  {s.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: ' ' },
                { id: 'email', label: 'Email Address', type: 'email', placeholder: ' ' },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <input
                    type={field.type}
                    id={field.id}
                    value={formData[field.id]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    onFocus={() => setActiveField(field.id)}
                    onBlur={() => setActiveField(null)}
                    placeholder={field.placeholder}
                    className={inputClass(field.id)}
                    required
                    data-hover
                  />
                  <label htmlFor={field.id} className={labelClass(field.id, formData[field.id])}>
                    {field.label}
                  </label>
                </div>
              ))}

              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setActiveField('message')}
                  onBlur={() => setActiveField(null)}
                  rows={4}
                  placeholder=" "
                  className={`${inputClass('message')} resize-none`}
                  required
                  data-hover
                />
                <label htmlFor="message" className={labelClass('message', formData.message)}>
                  Tell Me About Your Project
                </label>
              </div>

              <motion.button
                type="submit"
                className="group relative w-full py-5 bg-ember text-white font-medium text-sm tracking-widest uppercase overflow-hidden"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                data-hover
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Message
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ mixBlendMode: 'difference' }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-28 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="font-mono text-[11px] text-white/20 tracking-widest">© 2025 SAISRADHA — ALL RIGHTS RESERVED</span>
          <span className="font-mono text-[11px] text-white/20 tracking-widest">VIDEO EDITOR · CREATIVE TECHNOLOGIST</span>
        </motion.div>
      </div>
    </section>
  );
}
