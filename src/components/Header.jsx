import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full shadow-sm bg-white/90 backdrop-blur-sm">
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-gray-800">John Veetle</h1>
          </motion.div>

          <nav className="hidden space-x-8 md:flex">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="flex space-x-4">
            <SocialIcon href="https://github.com/skytech2510" icon={<FaGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/john-veetle-461334347/" icon={<FaLinkedin />} />
            <SocialIcon href="https://twitter.com" icon={<FaTwitter />} />
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-600 transition-colors hover:text-gray-900"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-xl text-gray-600 hover:text-gray-900"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default Header;