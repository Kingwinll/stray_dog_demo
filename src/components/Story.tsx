"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Story = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="story" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            浪浪的故事
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-gray-600 mb-6">
              在台灣的街頭巷尾，有著無數流浪狗的身影。牠們曾經也有一個溫暖的家，但因為各種原因，被遺棄在了無情的街頭。
            </p>
            <p className="text-xl text-gray-600">
              每一隻流浪狗背後都有一個故事，有的是因為主人無力負擔，有的是因為搬家而被拋棄，有的則是出生就在街頭，從未體驗過家的溫暖。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image 
              src="/images/stray-dog-story.jpg" 
              alt="流浪狗的故事" 
              fill 
              className="object-cover" 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">小黃的故事</h3>
            <p className="text-gray-600 mb-4">
              小黃是一隻溫順的中型米克斯犬，牠曾經有個家，但主人搬家後將牠遺棄在公園。最初的日子，小黃每天都在原地等待，期望主人會回來接牠。
            </p>
            <p className="text-gray-600 mb-4">
              日復一日，風吹雨打，小黃漸漸瘦弱，眼神也失去了光彩。然而，命運總有轉機，一位愛心人士發現了小黃，將牠帶到了我們的收容所。
            </p>
            <p className="text-gray-600">
              經過耐心的照顧和關愛，小黃慢慢恢復了健康和活力。如今的小黃，已經重新找到了屬於自己的幸福家庭，但還有很多像小黃一樣的流浪狗，正在等待被愛和關注。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story; 