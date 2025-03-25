"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Solutions = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const solutions = [
    {
      title: '建立收容場所',
      description: '我們致力於建立安全、舒適的臨時收容所，為流浪狗提供庇護、食物和基本照顧。',
      imageSrc: '/images/shelter.jpg',
      imageAlt: '流浪狗收容所'
    },
    {
      title: '醫療救助',
      description: '提供流浪狗必要的醫療服務，包括疫苗接種、絕育手術、疾病治療等，改善牠們的健康狀況。',
      imageSrc: '/images/medical.jpg',
      imageAlt: '流浪狗醫療救助'
    },
    {
      title: '推廣認養',
      description: '積極推廣認養代替購買，為流浪狗尋找永久的家，讓牠們重獲愛與關懷。',
      imageSrc: '/images/adoption.jpg',
      imageAlt: '流浪狗認養活動'
    }
  ];

  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            我們的解決方案
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            我們正在採取有效措施，幫助流浪狗改善生活，找到永久的家。
          </motion.p>
        </div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <div className="md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src={solution.imageSrc} 
                    alt={solution.imageAlt} 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{solution.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                <div className="w-20 h-1 bg-amber-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            這些解決方案需要資金支持才能持續進行。您的每一筆捐款，都能幫助更多流浪狗獲得照顧和愛。
          </p>
          <motion.a 
            href="#donate" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full inline-block font-medium text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            立即支持
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions; 