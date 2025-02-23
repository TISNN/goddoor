'use client'

import { motion } from 'framer-motion'

const timelineData = [
  {
    period: '商周时期',
    title: '门神崇拜的起源',
    content: '最早的门神崇拜可以追溯到商周时期，人们开始在门上绘制图案以驱邪避凶。',
    image: '/images/history/shang-zhou.jpg'
  },
  {
    period: '汉代',
    title: '神荼郁垒时期',
    content: '《论衡》中记载，门、户、井、灶、中霤皆有神主。南阳汉画像石中发现了最早的门神图像。',
    image: '/images/history/han.jpg'
  },
  {
    period: '唐代',
    title: '秦叔宝与尉迟恭',
    content: '唐代开始出现以历史人物为门神的传统，秦叔宝与尉迟恭成为最经典的门神形象。',
    image: '/images/history/tang.jpg'
  },
  {
    period: '明清时期',
    title: '年画艺术的繁荣',
    content: '随着印刷技术的发展和元代戏曲、明清小说的普及，门神画题材更加丰富多样。',
    image: '/images/history/ming-qing.jpg'
  },
  {
    period: '近现代',
    title: '新时期的发展',
    content: '20世纪以来，门神画在保持传统的同时，也融入了更多现代元素和时代特色。',
    image: '/images/history/modern.jpg'
  }
]

export default function History() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-song text-center mb-12"
        >
          门神画的历史演变
        </motion.h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

          {/* Timeline items */}
          {timelineData.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 ${
                index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'
                }`}
              >
                <div className="card p-6">
                  <span className="inline-block text-accent font-song text-lg mb-2">
                    {item.period}
                  </span>
                  <h3 className="text-2xl font-song mb-4">{item.title}</h3>
                  <p className="text-primary/80">{item.content}</p>
                </div>
              </div>

              <div
                className={`relative ${
                  index % 2 === 0 ? 'md:pl-12 md:order-2' : 'md:pr-12'
                }`}
              >
                <div className="card overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-accent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-20">
          <h2 className="section-title text-center">门神画的艺术特征</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">造型特点</h3>
              <p className="text-primary/80">
                门神画以"大头小身"的夸张比例著称，突出人物面部表情和性格特征。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">色彩运用</h3>
              <p className="text-primary/80">
                传统门神画多采用红、黄、绿等鲜艳色彩，象征吉祥喜庆。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">题材内容</h3>
              <p className="text-primary/80">
                门神画题材丰富，包括神话传说、历史人物、戏曲故事等多个方面。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 