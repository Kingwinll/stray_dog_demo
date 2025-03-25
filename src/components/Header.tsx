"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-amber-600">
          浪浪之家
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#story" className="text-gray-700 hover:text-amber-600 transition-colors">
                故事
              </Link>
            </li>
            <li>
              <Link href="#problems" className="text-gray-700 hover:text-amber-600 transition-colors">
                困境
              </Link>
            </li>
            <li>
              <Link href="#solutions" className="text-gray-700 hover:text-amber-600 transition-colors">
                解決方案
              </Link>
            </li>
            <li>
              <Link href="#donate" className="text-gray-700 hover:text-amber-600 transition-colors">
                愛心支持
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header; 