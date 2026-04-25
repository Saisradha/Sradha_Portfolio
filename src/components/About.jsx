import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-display text-5xl md:text-6xl text-white">
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-24 px-6 md:px-12 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #FF4D1C, transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <motion.img
                ref={imageRef}
                src="/images/SaiSradha.webp"
                alt="SaiSradha"
                className="w-full h-full object-cover object-top"
                style={{ y: imageY }}
              />
              <div className="absolute inset-0 border border-white/10" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-void to-transparent" />

              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-ember" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-ember" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-ember" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-ember" />
            </div>

            <motion.div
              className="absolute -right-4 bottom-16 glass-warm px-5 py-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="font-mono text-[10px] text-ember tracking-widest uppercase">Available for Projects</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/60">Open to Work</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-ember" />
              <span className="font-mono text-xs text-ember tracking-widest uppercase">About Me</span>
            </div>

            <h2 className="text-display text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-white mb-8">
              CRAFTING
              <br />
              VISUAL
              <br />
              <span className="text-white/20">STORIES</span>
            </h2>

            <div className="space-y-5 text-white/55 leading-relaxed">
              <p>
                I'm <span className="text-white font-medium">SaiSradha</span>, a passionate video editor dedicated
                to transforming raw footage into compelling visual narratives.
              </p>
              <p>
                With expertise in cinematic storytelling, color grading, and post-production,
                I bring stories to life through meticulous editing and creative vision.
              </p>
              <p>
                Every project is an opportunity to craft something extraordinary. From music videos
                to promotional edits, I approach each cut with precision, creativity, and a deep
                understanding of visual storytelling.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10">
              {[
                { end: 20, suffix: '+', label: 'Projects' },
                { end: 3, suffix: '+', label: 'Years Exp.' },
                { end: 30, suffix: '+', label: 'Clients' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <Counter end={stat.end} suffix={stat.suffix} />
                  <div className="font-mono text-xs text-white/30 tracking-widest uppercase mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 flex gap-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <a
                href="https://www.linkedin.com/in/saisradha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-ember text-white text-sm font-medium tracking-wide hover:bg-ember/80 transition-colors"
                data-hover
              >
                LinkedIn
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="https://instagram.com/sai_sradha_8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 glass border border-white/10 text-white/70 text-sm font-medium tracking-wide hover:text-white hover:border-white/30 transition-colors"
                data-hover
              >
                Instagram
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
