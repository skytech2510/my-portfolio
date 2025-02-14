import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';
import SkillsGrid from './SkillsGrid';
const openCV = () => {
  window.open("https://drive.google.com/file/d/1tSGowHTZwYT4gfyvXyN59hGY_JUlDgYS/view", "_blank");
}
const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-6 mx-auto">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <AboutContent />
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
};

const AboutContent = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="mb-6 text-4xl font-bold dark:text-white">About Me</h2>
    <p className="mb-6 text-gray-600 dark:text-gray-300">
      I am a dynamic Full-stack Web Developer and Blockchain Engineer with over 5 years of experience in designing and developing innovative blockchain applications and user-centric web solutions. I have a proven track record of enhancing efficiency and reducing costs through the implementation of smart contracts and decentralized applications.
    </p>
    <p className="mb-8 text-gray-600 dark:text-gray-300">
      My expertise spans both frontend and backend technologies, emphasizing React, Solidity, and various blockchain platforms. I am committed to leveraging technology to create impactful solutions in the Web3 and FinTech sectors. Throughout my career, I have played pivotal roles in projects that drive forward the intersection of blockchain and traditional finance, always striving for excellence and continuous improvement in every endeavor.
    </p>
    <Button onClick={() => openCV()} variant="primary">Show CV</Button>
  </motion.div>
);

export default About;