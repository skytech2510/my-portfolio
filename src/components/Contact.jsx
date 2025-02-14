import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="mb-16 text-4xl font-bold text-center">Get In Touch</h2>

        <div className="grid max-w-4xl gap-12 mx-auto md:grid-cols-2">
          <div className="space-y-8">
            <ContactInfo
              icon={<FaEnvelope />}
              title="Email"
              content="hello@example.com"
            />
            <ContactInfo
              icon={<FaPhone />}
              title="Phone"
              content="+1 (555) 123-4567"
            />
            <ContactInfo
              icon={<FaMapMarkerAlt />}
              title="Location"
              content="San Francisco, CA"
            />
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 text-white transition-colors bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-4"
  >
    <div className="text-2xl text-indigo-600">{icon}</div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </motion.div>
);

export default Contact;