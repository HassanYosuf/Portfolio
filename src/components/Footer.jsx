import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Download } from 'lucide-react';

export function Footer({ contact }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const iconMap = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Twitter: Twitter,
  };

  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold"
          >
            Let's Make Something<br />That Means Something.
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-6"
          >
            <motion.a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-lg hover:text-gray-300 transition-colors"
              whileHover={{ x: 5 }}
            >
              <Mail size={20} />
              {contact.email}
            </motion.a>
            {contact.resume && (
              <motion.a
                href={contact.resume}
                download
                className="flex items-center gap-2 px-6 py-3 border border-white text-base font-semibold hover:bg-white hover:text-black transition-colors rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            )}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center gap-8 flex-wrap"
          >
            {contact.links.map((link) => {
              const IconComponent = iconMap[link.title] || null;
              return (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="text-sm font-medium hover:text-gray-300 transition-colors flex items-center gap-2"
                  whileHover={{ y: -3 }}
                >
                  {IconComponent && <IconComponent size={16} />}
                  {link.title}
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-sm text-gray-400 pt-8 border-t border-gray-800"
          >
            <p>© 2026 Hassan Yosuf</p>
            <p className="mt-2">BUILT RAW · SHIPPED WITH INTENT</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
