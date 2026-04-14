import { motion } from 'framer-motion';

export function RightNow({ data }) {
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

  const items = [
    { title: 'LISTENING', data: data.listening },
    { title: 'READING', data: data.reading },
    { title: 'BUILDING', data: data.building },
    { title: 'WEARING', data: data.wearing },
    { title: 'CITY', data: data.city },
    { title: 'WORKING', data: data.working },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-16"
        >
          Right Now
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="space-y-3"
            >
              <h3 className="text-sm font-mono font-semibold text-gray-600 tracking-widest uppercase">
                {item.title}
              </h3>
              <div className="space-y-1">
                {item.data.title && (
                  <p className="text-lg font-semibold text-gray-900">
                    {item.data.title}
                  </p>
                )}
                {item.data.artist && (
                  <p className="text-gray-700">{item.data.artist}</p>
                )}
                {item.data.author && (
                  <p className="text-gray-700">{item.data.author}</p>
                )}
                {item.data.company && (
                  <p className="text-gray-700">{item.data.company}</p>
                )}
                {item.data.place && (
                  <p className="text-gray-700">{item.data.place}</p>
                )}
                {item.data.note && (
                  <p className="text-sm text-gray-600 italic">{item.data.note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
