"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaDog, FaHeartBroken, FaClinicMedical, FaHome } from 'react-icons/fa';
import { useInView } from 'framer-motion';

const Problems = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const problems = [
    {
      icon: <FaDog size={38} />,
      title: '數量龐大',
      description: '台灣流浪狗數量超過十萬隻，公立收容所無法容納這麼多流浪動物，資源嚴重不足。'
    },
    {
      icon: <FaHeartBroken size={38} />,
      title: '生活困境',
      description: '流浪狗每天面臨食物短缺、車禍威脅、疾病風險，生存條件十分惡劣。'
    },
    {
      icon: <FaClinicMedical size={38} />,
      title: '醫療需求',
      description: '許多流浪狗患有皮膚病、寄生蟲感染等疾病，需要及時的醫療和照顧。'
    },
    {
      icon: <FaHome size={38} />,
      title: '缺乏家園',
      description: '流浪狗缺乏安全的居所，特別在惡劣天氣下更加脆弱，需要穩定的庇護所。'
    }
  ];

  return (
    <section id="problems" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            流浪狗面臨的困境
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            流浪狗每天都在與生存搏鬥，面臨著諸多挑戰和困難，需要我們共同關注和解決。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="text-amber-600 mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            這些問題不僅影響流浪狗的生存，也影響社區環境與公共衛生。解決流浪狗問題，需要社會各界的共同努力和關注。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problems; 