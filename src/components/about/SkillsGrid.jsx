import React from 'react';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';

const SkillsGrid = () => {
  const skills = [
    "Solidity", "Anchor", "Ethereum", "Web3.js",
    "IPFS", "DeFi", "NFTs", "DeApp",
    "Python", "Django", "Selenium", "Beautiful Soup", "Pandas",
    "PHP", "CI", "Laravel", "CakePHP", "WordPress",
    "JavaScript", "React", "Next.js", "Node.js", "TypeScript", "Supabase", "GraphQL",
    "SQL", "MongoDB", "PostgreSQL", "Oracle", "MySQL",

  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className=" relative rounded-lg scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-300 bg-gray-50 dark:bg-gray-800 h-[500px] overflow-auto"
    >
      <h3 className="sticky top-0 mb-6 p-8 backdrop:blur-lg w-full text-2xl font-bold dark:text-white bg-[#ffffffb7] dark:bg-[#000000b7]">Skills & Technologies</h3>
      <div className="grid grid-cols-2 gap-4 p-8">
        {skills.map((skill, index) => (
          <SkillCard key={skill} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsGrid;