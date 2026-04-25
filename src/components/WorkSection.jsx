import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Premisthunna',
    subtitle: 'Music Video Edit',
    category: 'Music Video',
    description:
      'A beautifully crafted music video edit with cinematic visuals, dynamic motion graphics, and cinematic color grading. Shot in 4K.',
    videoSrc: '/videos/Premisthunna_MH.mp4',
    thumb: '/images/premisthunna.jpeg',
    year: '2024',
    tags: ['Color Grading', 'Motion Graphics', '4K'],
  },
  {
    id: 2,
    title: 'MH Title Reveal',
    subtitle: 'Cinematic Title Card',
    category: 'Title Reveal',
    description:
      'A cinematic title card reveal with seamless transitions and motion-synced typography animation.',
    videoSrc: '/videos/MH_Title_Card.mp4',
    thumb: '/images/MH.jpeg',
    year: '2024',
    tags: ['After Effects', 'Typography', 'Transitions'],
  },
  {
    id: 3,
    title: 'Final Cut',
    subtitle: 'Promotional Edit',
    category: 'Promotional',
    description:
      'Professional promotional video showcasing dynamic motion graphics, professional post-production, and polished visual storytelling.',
    videoSrc: '/videos/Final_3_3.mp4',
    thumb: '/images/robo.jpeg',
    year: '2024',
    tags: ['Premiere Pro', 'VFX', 'Promo'],
  },
];

const categories = ['All', 'Music Video', 'Title Reveal', 'Promotional'];

function VideoCard({ project, index, onClick }) {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: '-100px' });

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-hover
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <motion.img
          src={project.thumb}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.video
          ref={videoRef}
          src={project.videoSrc}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="absolute inset-0"
          animate={{
            background: isHovered
              ? 'linear-gradient(to top, rgba(3,3,5,0.95) 0%, rgba(3,3,5,0.3) 50%, transparent 100%)'
              : 'linear-gradient(to top, rgba(3,3,5,0.7) 0%, transparent 60%)',
          }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M6 4l12 6-12 6V4z" fill="white" />
            </svg>
          </div>
        </motion.div>

        <div className="absolute top-4 left-4">
          <span className="font-mono text-[10px] tracking-widest uppercase text-ember px-3 py-1 glass border border-ember/30">
            {project.category}
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <span className="font-mono text-[10px] tracking-widest text-white/40">{project.year}</span>
        </div>
      </div>

      <div className="pt-5 pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-display text-2xl text-white group-hover:text-ember transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-white/40 mt-1">{project.subtitle}</p>
          </div>
          <motion.div
            animate={{ x: isHovered ? 0 : -8, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-1.5 shrink-0"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 16L16 4M16 4H7M16 4v9"
                stroke="#FF4D1C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] tracking-widest text-white/30 uppercase border border-white/10 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function VideoModal({ project, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      style={{ background: 'rgba(3,3,5,0.97)', backdropFilter: 'blur(20px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm"
          data-hover
        >
          <span className="font-mono tracking-widest">ESC</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
          <video ref={videoRef} src={project.videoSrc} controls className="w-full h-full object-cover" />
        </div>

        <div className="mt-6 flex items-start justify-between">
          <div>
            <h2 className="text-display text-3xl text-white">{project.title}</h2>
            <p className="text-white/50 mt-1">{project.description}</p>
          </div>
          <div className="shrink-0 text-right">
            <div className="font-mono text-xs text-ember tracking-widest">{project.category}</div>
            <div className="font-mono text-xs text-white/30 mt-1">{project.year}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true });

  const filtered =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" ref={sectionRef} className="py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-ember" />
              <span className="font-mono text-xs text-ember tracking-widest uppercase">Selected Work</span>
            </div>
            <h2 className="text-display text-[clamp(3rem,7vw,6rem)] leading-none text-white">
              VISUAL
              <br />
              <span className="text-white/20">EDITS</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-ember text-white'
                    : 'glass text-white/50 hover:text-white border border-white/10 hover:border-white/30'
                }`}
                data-hover
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10" layout>
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <VideoCard
                key={project.id}
                project={project}
                index={i}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-24 overflow-hidden border-t border-b border-white/5 py-4">
          <div className="marquee-track">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-display text-6xl text-white/5 pr-20 shrink-0">
                VIDEO EDITING · COLOR GRADING · MOTION GRAPHICS · VISUAL STORYTELLING ·{' '}
              </span>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
