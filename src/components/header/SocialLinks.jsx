import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialIcon from './SocialIcon';

const SocialLinks = () => {
  const socialLinks = [
    { href: "https://github.com/skytech2510", icon: <FaGithub /> },
    { href: "https://www.linkedin.com/in/john-veetle-461334347/", icon: <FaLinkedin /> },
    { href: "https://twitter.com", icon: <FaTwitter /> }
  ];
  return (
    <div className="flex space-x-4">
      {socialLinks.map((link, index) => (
        <SocialIcon key={index} href={link.href} icon={link.icon} />
      ))}
    </div>
  );
};

export default SocialLinks;