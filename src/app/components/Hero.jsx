"use client";
import Link from 'next/link';
import React from 'react';
import { RiCodeBlock } from "react-icons/ri";
import { motion } from 'framer-motion';
import { BsPersonLinesFill } from "react-icons/bs";
import './shine.css'; // Importing the shine.css

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };


  return (
    <motion.section
      id="Hero"
      className="relative bg-cover w-screen bg-center h-full flex"
      style={{
        backgroundImage: "url('/herobackground.png')", // Adjust to your actual image path
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="absolute inset-0 bg-black bg-opacity-70"></motion.div>

      <motion.div className="z-10 mx-auto mt-4 md:mt-12 px-4 sm:px-8 md:px-12 h-full">
        <motion.div className="flex flex-row justify-between items-center mb-10">
          {/* SVG Logo */}
          <motion.object
            data="/logo.svg" // Adjust this to the actual path
            type="image/svg+xml"
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-6 md:mb-0"
            variants={fadeInUpVariants}
          />

          {/* Button Group */}
          <motion.div
            className="flex flex-row items-center mb-3 md:mt-0"
            variants={buttonVariants}
          >
            {/* Donate Button for Medium Screens */}
            <Link
              href="/AccountDetails"
              target='_blank'
              className="shine-effect hidden bg-[#007F40] hover:bg-green-700 group md:flex items-center hover:px-14 text-white font-bold py-3 px-8 rounded-sm text-xl transition-all duration-300 relative overflow-hidden mr-2"
            >
              DONATE NOW
            </Link>

            {/* Profile Button */}
            {/* Removed profile button as requested */}
          </motion.div>
        </motion.div>

        {/* Small Screen Donate Button with Animation */}
        <motion.div
          className="flex justify-center mb-4 md:hidden" // Centered and only shown on small screens
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="https://digitalindiahack.org/AccountDetails"
            target='_blank'
            className="shine-effect bg-[#007F40] hover:bg-green-700 group items-center hover:px-8 text-white font-bold py-2 px-6 rounded-sm text-lg transition-all duration-300 relative overflow-hidden" // Smaller size
          >
            DONATE NOW
          </Link>
        </motion.div>

        <motion.h1
          className="text-white text-center font-extrabold text-4xl md:text-5xl lg:text-7xl"
          variants={fadeInUpVariants}
        >
          DIGITAL INDIA 
        </motion.h1>
        <motion.h1
          className="text-white text-center font-extrabold text-4xl md:text-5xl lg:text-7xl md:mb-10"
          variants={fadeInUpVariants}
        >
          HACK-A-THON 
        </motion.h1>
        <motion.p
          className="text-white mb-5  md:mb-14 text-lg md:text-2xl text-center max-w-5xl mx-auto"
          variants={fadeInUpVariants}
        >
          We are hosting a Hybrid Web- Mobile- Digital Media DAPP Hack-a-thon at Hauz Khas Social designed for Blockchain (Web3)/ AI/ ML, SaaS entrepreneurs and Legal domain professionals focused in Defence, DeepTech, and Women-led enterprises.
        </motion.p>
        <motion.div
          className=" flex flex-col md:flex-row mb-5 space-y-4 md:space-y-0 space-x-4 items-center justify-center"
          variants={buttonVariants}
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfP41BuCh8rOMrqnawlc-aEvKz7X3_HikLZVVwDDB3bYxqznA/viewform"
            target='_blank'
            className="shine-effect bg-[#007F40] hover:bg-green-700 group flex items-center hover:px-14 text-white font-bold py-3 px-8 rounded-sm text-xl transition-all duration-300 relative overflow-hidden"
          >
            REGISTER NOW
            <RiCodeBlock className="ml-5 hidden group-hover:block transition-all duration-1000 group-hover:translate-x-2 transform" />
          </Link>

          <Link
            href="/AccountDetails"
            target="_blank"
            className="shine-effect bg-[#007F40] hover:bg-green-700 group flex items-center hover:px-14 text-white font-bold py-3 px-8 rounded-sm text-xl transition-all duration-300 relative overflow-hidden"
          >
            PAY NOW
          </Link>
        </motion.div>
        <motion.div
          className=" "
          variants={fadeInUpVariants}
        >
          <div className='flex flex-col items-center' >
          <Link href="#hello" className="text-xl font-semibold underline mb-10 text-white">
            INTERESTED IN SPONSORING?
          </Link>

          <div
  onClick={() => window.open('/CODE OF CONDUCT.pdf', '_blank')}
  className="text-xl cursor-pointer font-semibold underline mb-10 text-white"
>
  CODE OF CONDUCT
</div>


          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
