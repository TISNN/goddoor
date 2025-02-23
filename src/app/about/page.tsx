'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ImageGenerator } from '@/components/ImageGenerator'

const teamMembers = [
  {
    name: '张教授',
    title: '艺术总监',
    description: '中国美术学院教授，专注于传统绘画艺术研究30年',
    bgColor: '#E8F5E9' // 浅绿色,象征艺术
  },
  {
    name: '李博士',
    title: 'AI技术总监',
    description: '人工智能专家，在图像处理和深度学习领域有丰富经验',
    bgColor: '#E3F2FD' // 浅蓝色,象征科技
  },
  {
    name: '王工程师',
    title: '开发团队负责人',
    description: '全栈工程师，负责平台的技术实现和维护',
    bgColor: '#FFF3E0' // 浅橙色,象征工程
  }
]

const milestones = [
  {
    year: '2022',
    title: '项目启动',
    description: '开始收集和整理全国各地的门神画作品'
  },
  {
    year: '2023',
    title: 'AI模型开发',
    description: '完成门神画修复和创作AI模型的开发和训练'
  },
  {
    year: '2024',
    title: '平台上线',
    description: '数字展览馆正式对外开放，提供在线展示和互动体验'
  }
]

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-song text-center mb-12"
        >
          关于我们
        </motion.h1>

        {/* 项目介绍 */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-primary/80 mb-8">
              中国传统门神画数字展览馆致力于通过现代科技手段保护和传承中国传统门神画艺术。
              我们运用人工智能技术对珍贵的门神画作品进行数字化修复和展示，
              让更多人能够了解和欣赏这一独特的文化遗产。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6">
                <h3 className="text-2xl font-song mb-4">500+</h3>
                <p className="text-primary/60">收录门神画作品</p>
              </div>
              <div className="card p-6">
                <h3 className="text-2xl font-song mb-4">50+</h3>
                <p className="text-primary/60">合作文化机构</p>
              </div>
              <div className="card p-6">
                <h3 className="text-2xl font-song mb-4">10000+</h3>
                <p className="text-primary/60">月访问量</p>
              </div>
            </div>
          </div>
        </section>

        {/* 团队介绍 */}
        <section className="mb-20">
          <h2 className="section-title text-center">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card p-6 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <ImageGenerator
                    width={96}
                    height={96}
                    text={member.name}
                    bgColor={member.bgColor}
                  />
                </div>
                <h3 className="text-xl font-song mb-2">{member.name}</h3>
                <p className="text-accent mb-2">{member.title}</p>
                <p className="text-primary/60 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 发展历程 */}
        <section className="mb-20">
          <h2 className="section-title text-center">发展历程</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
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
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-song mb-2">{milestone.title}</h3>
                      <p className="text-primary/80">{milestone.description}</p>
                    </div>
                  </div>
                  <div
                    className={`hidden md:block ${
                      index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 联系我们 */}
        <section className="text-center">
          <h2 className="text-2xl font-song mb-6">联系我们</h2>
          <p className="text-xl text-primary/80 mb-8">
            如果您对我们的项目感兴趣，或者想要合作，欢迎联系我们
          </p>
          <div className="inline-flex space-x-4">
            <a
              href="mailto:contact@doorgod-museum.cn"
              className="btn bg-accent hover:bg-accent-light"
            >
              发送邮件
            </a>
            <a
              href="#"
              className="btn bg-primary hover:bg-primary-light"
            >
              关注公众号
            </a>
          </div>
        </section>
      </div>
    </div>
  )
} 