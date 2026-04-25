import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const tools = [
  { name: 'After Effects', level: 95, color: '#9999FF' },
  { name: 'Color Grading', level: 92, color: '#FF4D1C' },
  { name: 'Motion Graphics', level: 80, color: '#A8DAFF' },
];

const services = [
  {
    num: '01',
    title: 'Video Editing',
    desc: 'Professional editing for music videos, events, and corporate content with cinematic quality.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 8h20v14H4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 8V6M19 8V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 14l5 3-5 3v-6z" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Color Grading',
    desc: 'Expert color correction and grading to bring footage to life with cinematic looks and moods.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 4v20M4 14h20" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Motion Graphics',
    desc: 'Dynamic motion graphics, visual effects, and rhythm-synced animations for music videos and promos.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 22L14 6l8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 17h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Corporate Videos',
    desc: 'Professional content for brands including documentaries, promos, and identity films.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 12l4-3v10l-4-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-24 px-6 md:px-12 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-ember" />
            <span className="font-mono text-xs text-ember tracking-widest uppercase">Expertise</span>
          </div>
          <h2 className="text-display text-[clamp(3rem,7vw,6rem)] leading-none text-white">
            TOOLS &amp;
            <br />
            <span className="text-white/20">SERVICES</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-1">
            {services.map((service, i) => (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex gap-6 p-6 border border-white/5 hover:border-ember/30 hover:bg-ember/3 transition-all duration-500 cursor-default"
                data-hover
              >
                <div className="text-display text-3xl text-white/10 group-hover:text-ember/30 transition-colors shrink-0 w-10">
                  {service.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-white/50 group-hover:text-ember transition-colors">{service.icon}</span>
                    <h3 className="text-lg font-medium text-white group-hover:text-ember transition-colors">{service.title}</h3>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-sm font-mono text-white/30 tracking-widest uppercase mb-10"
            >
              Software Proficiency
            </motion.h3>

            <div className="space-y-8">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-sm text-white/70 font-medium">{tool.name}</span>
                    <span className="font-mono text-xs text-white/30">{tool.level}%</span>
                  </div>
                  <div className="h-px w-full bg-white/10 relative overflow-hidden">
                    <motion.div
                      className="h-full absolute top-0 left-0"
                      style={{ background: tool.color }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${tool.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full -translate-x-1"
                      style={{ background: tool.color, boxShadow: `0 0 8px ${tool.color}` }}
                      initial={{ left: 0 }}
                      animate={inView ? { left: `${tool.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
