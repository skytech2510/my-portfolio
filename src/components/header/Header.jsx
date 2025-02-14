import React from 'react';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full shadow-sm bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">John Veetle</h1>
          </motion.div>
          <Navigation />
          <div className="flex items-center space-x-6">
            <SocialLinks />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;