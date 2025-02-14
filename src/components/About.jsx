import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    "React", "JavaScript", "TypeScript", "Node.js",
    "HTML5", "CSS3", "Tailwind CSS", "Git"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-4xl font-bold">About Me</h2>
            <p className="mb-6 text-gray-600">
              I'm a passionate frontend developer with 5 years of experience building
              modern web applications. I specialize in creating responsive, user-friendly
              interfaces that provide exceptional user experiences.
            </p>
            <p className="mb-8 text-gray-600">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge through
              technical blog posts.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Download CV
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-lg bg-gray-50"
          >
            <h3 className="mb-6 text-2xl font-bold">Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 bg-white rounded-lg shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;