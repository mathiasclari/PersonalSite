/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { useState } from 'react';

const Home: React.FC = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleLogoClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount >= 9) {
      setShowEasterEgg(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-secondary relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80 animate-parallax"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

{/* Icon Section */}
<div className="absolute top-10 left-0 right-0 flex justify-center">
        <motion.div
          className="rounded-full overflow-hidden cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          onClick={handleLogoClick}
        >
          <Image 
            src="/me.svg" 
            alt="Logo" 
            width="150" 
            height="150" 
          />
        </motion.div>
      </div>

      <div className="relative z-10 p-8 text-center max-w-2xl mx-auto mt-40">
  <motion.h2
    className="text-xl sm:text-2xl font-semibold mb-2 text-accent"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    Software Engineer
  </motion.h2>
  <motion.h1
    className="text-4xl sm:text-5xl font-bold mb-2"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
  >
    Mathias Clari Drenik
  </motion.h1>
  <motion.p
    className="text-md sm:text-lg mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.6 }}
  >
    Creating elegant and performant solutions to complex problems.
  </motion.p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Link href="https://github.com/mathiasclari" passHref>
              <div className="cursor-pointer px-6 py-3 bg-accent text-secondary rounded-lg shadow-md hover:bg-accentDark transition-colors text-center">
                GitHub
              </div>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Link href="https://twitter.com/mathiasclari" passHref>
              <div className="cursor-pointer px-6 py-3 bg-accent text-secondary rounded-lg shadow-md hover:bg-accentDark transition-colors text-center">
                Twitter
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="relative z-10 mt-16 p-8 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-6">I'm a software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.</p>
      </section>

{/* Projects Section */}
<section className="relative z-10 mt-16 p-8 max-w-2xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-4">Projects</h2>
  <p className="text-lg">Projects are coming soon!</p>
</section>

      {/* Skills Section */}
<section className="relative z-10 mt-16 p-8 max-w-2xl mx-auto text-center">
  <h2 className="text-3xl font-bold mb-4">Skills</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
    {/* App Development */}
    <div>
      <h3 className="text-2xl font-semibold mb-2">App Development</h3>
      <motion.div
        className="p-4 bg-secondary bg-opacity-10 rounded-lg shadow-md mb-2"
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-lg">Flutter</p>
      </motion.div>
      <motion.div
        className="p-4 bg-secondary bg-opacity-10 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-lg">Swift</p>
      </motion.div>
    </div>

    {/* Web Development */}
    <div>
      <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
      <motion.div
        className="p-4 bg-secondary bg-opacity-10 rounded-lg shadow-md mb-2"
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-lg">React</p>
      </motion.div>
      <motion.div
        className="p-4 bg-secondary bg-opacity-10 rounded-lg shadow-md mb-2"
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-lg">NextJS</p>
      </motion.div>
      <motion.div
        className="p-4 bg-secondary bg-opacity-10 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-lg">TailwindCSS</p>
      </motion.div>
    </div>

    {/* Other Programming Languages */}
    <div>
      <h3 className="text-2xl font-semibold mb-2">Other Programming Languages</h3>
      <motion.div
        className="p-4 bg-secondary bg-opacity-10 rounded-lg shadow-md mb-2"
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-lg">Java</p>
      </motion.div>
      <motion.div
        className="p-4 bg-secondary bg-opacity-10 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
      >
        <p className="text-lg">C++</p>
      </motion.div>
    </div>
  </div>
</section>

{/* Easter Egg */}
<div className="absolute bottom-5 right-5">
  <motion.div
    className="cursor-pointer p-4 bg-accent text-secondary rounded-full shadow-md"
    onClick={() => setShowEasterEgg(!showEasterEgg)}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    animate={{ rotate: showEasterEgg ? 360 : 0 }}
  >
    {showEasterEgg ? '🥚' : '🐣'}
  </motion.div>
</div>

{/* Hidden Easter Egg Content */}
{showEasterEgg && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
    <div className="text-center text-white">
      <h2 className="text-4xl mb-4">🎉 Congratulations! 🎉</h2>
      <p className="text-lg mb-6">You've found the hidden Easter egg!</p>
      <motion.button
        className="px-6 py-3 bg-accent text-secondary rounded-lg shadow-md hover:bg-accentDark transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowEasterEgg(false)}
      >
        Close
      </motion.button>
    </div>
  </div>
)}

    </div>
  )}
  export default Home;

  
