import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container px-6 py-24 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl dark:text-white">
            Full Stack<br />
            Blockchain Developer
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600 dark:text-gray-300">
            Designing and developing innovate blockchain applications, and user-centric web solutions.
            Expertise in both front-end and back-end technologies, with a strong focus on React, Solidity, and various blockchain platforms.
          </p>
          <div className="flex justify-center gap-4">
            <Button>View Projects</Button>
            <Button variant="secondary">Read Blog</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;