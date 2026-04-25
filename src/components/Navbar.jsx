import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 md:top-1 left-0 right-0 z-50 px-6 md:px-12 py-5"
      >
        <div className="flex items-center justify-end max-w-7xl mx-auto">
          <motion.a
            href="mailto:saisradha888@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 glass-warm text-ember text-sm font-medium rounded-full hover:bg-ember hover:text-white transition-all duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            data-hover
          >
            Hire Me
          </motion.a>
        </div>
      </motion.nav>
    </>
  );
}
