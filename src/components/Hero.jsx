import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 400], [0, 8]);

  const handleScrollDown = () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-start overflow-hidden pt-0 pb-16 md:pb-20">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-top"
          src="/videos/Premisthunna_MH.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/90 via-void/70 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/85 via-transparent to-void/85" />
        <div className="absolute inset-0 bg-void/25" />
      </div>

      <motion.div className="relative z-20 px-6 md:px-12 max-w-6xl mx-auto w-full mt-12 md:mt-16 pb-12 md:pb-16" style={{ y: contentY }}>
        <div className="mb-5 flex items-center gap-3 pt-0">
          <div className="h-px w-12 bg-ember/70" />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-ember/90">
            Video Editor · Color Grading · Motion Design · Motion Graphics · Video Editor · Color Grading
          </span>
        </div>

        <div className="max-w-4xl pt-0 md:pt-1">
          <h1 className="text-display text-white leading-[0.88] text-[clamp(4.5rem,13vw,12rem)] max-w-4xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            SaiSradha
            <span className="block text-white/25">Video Editor</span>
          </h1>

          <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed">
            I'm Sai Sradha, a passionate video editor and motion designer dedicated to crafting
            compelling visual stories. With a keen eye for detail and a love for storytelling, I bring
            creativity and precision to every project, transforming raw footage into captivating
            narratives that resonate with audiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 mb-8 md:mb-10">
            <button
              onClick={handleScrollDown}
              className="px-8 py-3 bg-ember text-white text-sm font-medium tracking-widest uppercase hover:bg-ember/85 transition-colors"
            >
              Explore Edits
            </button>
            <a
              href="mailto:saisradha888@gmail.com"
              className="px-8 py-3 glass border border-white/10 text-white/70 text-sm font-medium tracking-widest uppercase hover:text-white hover:border-white/30 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-t border-b border-white/5 py-3 bg-void/40">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-display text-5xl text-white/10 pr-16 shrink-0">
                MOTION  ·  EDITING FLOW  ·  CUTS · Transitions · COLOR · GRADING · MOTION  ·  EDITING FLOW  ·  CUTS · Transitions · COLOR · GRADING
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
