import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import ContactInfoItem from './ContactInfoItem';

const ContactInfo = () => {
  const contactDetails = [
    { icon: <FaEnvelope />, title: "Email", content: "johnveetle117@gmail.com" },
    { icon: <FaPhone />, title: "Phone", content: "+1 (555) 123-4567" },
    { icon: <FaMapMarkerAlt />, title: "Location", content: "Pahang Kuantan, Malaysia" }
  ];

  return (
    <div className="space-y-8">
      {contactDetails.map((detail, index) => (
        <ContactInfoItem key={index} {...detail} />
      ))}
    </div>
  );
};

export default ContactInfo;