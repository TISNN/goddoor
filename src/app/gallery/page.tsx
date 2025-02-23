'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ImageGenerator } from '@/components/ImageGenerator'

const regions = [
  {
    name: '山东杨家埠',
    description: '以浓艳的色彩和生动的民间风格著称，体现了北方民间艺术的特色。',
    bgColor: '#FFE4E1' // 浅红色
  },
  {
    name: '天津杨柳青',
    description: '色彩艳丽，构图严谨，人物形象丰满，是中国最著名的年画产地之一。',
    bgColor: '#E6F3FF' // 浅蓝色
  },
  {
    name: '河南朱仙镇',
    description: '以浓郁的乡土气息和独特的艺术风格闻名，是中原地区重要的年画产地。',
    bgColor: '#F0FFF0' // 浅绿色
  },
  {
    name: '江苏桃花坞',
    description: '以精细的工艺和典雅的风格著称，体现了江南文化的特色。',
    bgColor: '#FFF0F5' // 浅紫色
  },
  {
    name: '四川绵竹',
    description: '具有浓郁的巴蜀特色，色彩绚丽，构图大胆。',
    bgColor: '#FFFACD' // 浅黄色
  }
]

const classicWorks = [
  {
    title: '绿云巨幅门神',
    period: '中国美术馆藏，清代',
    bgColor: '#E8F5E9'
  },
  {
    title: '钟馗门神',
    period: '明代，纸本设色',
    bgColor: '#FFF3E0'
  },
  {
    title: '武门神：神荼郁垒',
    period: '清代，35.5×22cm，国家图书馆藏',
    bgColor: '#FFEBEE'
  }
]

export default function Gallery() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-song text-center mb-12"
        >
          门神画作品展示
        </motion.h1>

        {/* 地域分类展示 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <ImageGenerator
                  width={640}
                  height={360}
                  text={region.name}
                  bgColor={region.bgColor}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-song mb-3">{region.name}</h3>
                <p className="text-primary/80">{region.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 典藏精品 */}
        <section className="mb-20">
          <h2 className="section-title text-center">典藏精品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classicWorks.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card"
              >
                <div className="aspect-w-1 aspect-h-1 relative">
                  <ImageGenerator
                    width={400}
                    height={400}
                    text={work.title}
                    bgColor={work.bgColor}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-song mb-2">{work.title}</h3>
                  <p className="text-sm text-primary/60">{work.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 互动提示 */}
        <div className="text-center">
          <p className="text-xl text-primary/80 mb-8">
            想要了解更多门神画作品的修复过程和创作技巧吗？
          </p>
          <div className="flex justify-center gap-4">
            <a href="/restoration" className="btn">
              查看修复技术
            </a>
            <a href="/interactive" className="btn bg-accent hover:bg-accent-light">
              开始创作
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 