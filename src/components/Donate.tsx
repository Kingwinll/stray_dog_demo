"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaw, FaHeart, FaDog } from 'react-icons/fa';

const Donate = () => {
  const [amount, setAmount] = useState('500');

  const handleAmountClick = (value: string) => {
    setAmount(value);
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const donationOptions = [
    { value: '300', label: 'NT$300', description: '提供一隻流浪狗一週的食物' },
    { value: '500', label: 'NT$500', description: '提供一隻流浪狗基本醫療檢查' },
    { value: '1000', label: 'NT$1,000', description: '資助一隻流浪狗絕育手術' },
    { value: '2000', label: 'NT$2,000', description: '為五隻流浪狗提供一個月的庇護所' },
  ];

  return (
    <section id="donate" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              愛心支持
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              您的每一筆捐款，都能幫助我們救助更多流浪狗，讓牠們擁有更好的未來。
            </motion.p>
          </div>

          <motion.div 
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">選擇捐款金額</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {donationOptions.map((option) => (
                <div
                  key={option.value}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    amount === option.value 
                      ? 'border-amber-600 bg-amber-50' 
                      : 'border-gray-200 hover:border-amber-400'
                  }`}
                  onClick={() => handleAmountClick(option.value)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xl font-medium">{option.label}</span>
                    {amount === option.value && <FaPaw className="text-amber-600" />}
                  </div>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <label htmlFor="customAmount" className="block text-gray-700 mb-2">
                或輸入自訂金額
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">NT$</span>
                <input
                  type="number"
                  id="customAmount"
                  value={amount}
                  onChange={handleCustomAmount}
                  className="w-full border border-gray-300 rounded-lg py-3 px-10 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  min="100"
                />
              </div>
            </div>

            <div className="space-y-4">
              <motion.button
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaHeart /> 立即捐款支持
              </motion.button>
              
              <motion.button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDog /> 訂購愛心商品
              </motion.button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                您的捐款將用於流浪狗的救助、醫療、照顧和推廣認養活動。
                <br />
                我們承諾透明使用每一筆捐款，並定期公布使用狀況。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Donate; 