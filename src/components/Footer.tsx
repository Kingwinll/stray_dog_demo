"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">浪浪之家</h3>
            <p className="text-gray-300 mb-4">
              我們致力於幫助台灣的流浪狗，為牠們提供醫療、庇護和尋找永久的家。
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <FaInstagram size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <FaTwitter size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-amber-500 transition-colors">
                <FaYoutube size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">聯絡資訊</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-amber-500" />
                <span className="text-gray-300">台北市中正區愛心路123號</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-amber-500" />
                <span className="text-gray-300">(02) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-500" />
                <span className="text-gray-300">info@straydoghome.tw</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#story" className="text-gray-300 hover:text-amber-500 transition-colors">
                  浪浪的故事
                </Link>
              </li>
              <li>
                <Link href="#problems" className="text-gray-300 hover:text-amber-500 transition-colors">
                  面臨的困境
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="text-gray-300 hover:text-amber-500 transition-colors">
                  解決方案
                </Link>
              </li>
              <li>
                <Link href="#donate" className="text-gray-300 hover:text-amber-500 transition-colors">
                  愛心支持
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} 浪浪之家. 版權所有。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 