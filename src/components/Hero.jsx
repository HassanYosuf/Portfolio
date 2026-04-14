import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen pt-24 flex flex-col justify-center items-center px-6"
    >
      <div className="max-w-4xl text-center space-y-8">
        <motion.p
          variants={itemVariants}
          className="text-sm font-mono text-gray-600 tracking-widest uppercase"
        >
          VOL. 01 / 2026
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
        >
          HASSAN YOSUF
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-700 font-light"
        >
          BACKEND ENGINEER
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          Building scalable backend systems and robust APIs that power modern applications.
          Microservices architecture, cloud-native development, Spring Boot, and enterprise-grade infrastructure.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="pt-6"
        >
          <motion.a
            href="#work"
            className="inline-flex items-center gap-3 px-6 py-3 border border-black rounded-lg hover:bg-black hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Scroll to explore</span>
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>
      </div>

    </motion.section>
  );
}
