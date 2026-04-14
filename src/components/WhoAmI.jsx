import { motion } from 'framer-motion';

export function WhoAmI({ skills }) {
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

  const skillCategories = [
    { label: 'LANGUAGES', items: skills.languages },
    { label: 'FRAMEWORKS', items: skills.frameworks },
    { label: 'ARCHITECTURES', items: skills.architectures },
    { label: 'DATA ENGINEERING', items: skills.dataEngineering },
    { label: 'DATA TOOLS', items: skills.dataTools },
    { label: 'ORCHESTRATION', items: skills.orchestration },
    { label: 'CLOUD & DEVOPS', items: skills.cloudDevOps },
    { label: 'CERTIFICATIONS', items: skills.certifications },
    { label: 'VISUALIZATION', items: skills.visualization },
    { label: 'TOOLS', items: skills.tools },
    { label: 'AI (EXPLORING)', items: skills.aiExploring },
    { label: 'CONCEPTS', items: skills.concepts },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-12"
          >
            Who Am I
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 max-w-3xl leading-relaxed"
          >
            I'm a Backend & Data Engineer with expertise in building scalable distributed systems, 
            robust data infrastructure, and enterprise-grade ETL/ELT pipelines. Proficient in cloud 
            platforms (AWS, GCP), microservices architecture, and modern data platforms like Snowflake. 
            Passionate about API design, data quality, and leveraging emerging technologies like AI agents and RAG workflows.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.label}
              variants={itemVariants}
              className="space-y-3"
            >
              <h3 className="text-sm font-mono font-semibold text-gray-600 tracking-widest uppercase">
                {category.label}
              </h3>
              <p className="text-base leading-relaxed text-gray-800">
                {category.items.join(' · ')}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
