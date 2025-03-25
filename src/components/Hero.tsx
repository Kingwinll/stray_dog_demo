"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-dog.jpg" 
          alt="流浪狗" 
          fill 
          className="object-cover brightness-[0.85]"
          priority
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">每隻流浪狗都值得被愛與照顧</h1>
          <p className="text-xl md:text-2xl mb-8">牠們只是沒有家，不是沒有心。了解流浪狗的故事，幫助改變牠們的命運。</p>
          <motion.a 
            href="#story" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full inline-block font-medium text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            了解更多
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 