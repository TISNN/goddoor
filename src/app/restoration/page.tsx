'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ImageGenerator } from '@/components/ImageGenerator'
import { Modal } from '@/components/Modal'

const restorationExamples = [
  {
    title: '南阳汉画像石双首朱雀',
    description: '通过AI技术修复色彩和纹理，重现汉代艺术特色。',
    beforeImage: {
      bgColor: '#D3D3D3', // 灰色,表示受损
      text: '修复前'
    },
    afterImage: {
      bgColor: '#FFE4C4', // 暖色调,表示修复后
      text: '修复后'
    }
  },
  {
    title: '武门神：神荼郁垒',
    description: '修复纸面破损和褪色问题，恢复清代原貌。',
    beforeImage: {
      bgColor: '#E6E6FA', // 淡紫色,表示褪色
      text: '修复前'
    },
    afterImage: {
      bgColor: '#DDA0DD', // 深紫色,表示修复后
      text: '修复后'
    }
  },
  {
    title: '木刻年画《军民合作 抗战胜利》',
    description: '修复印刷错误和破损，保留历史印记。',
    beforeImage: {
      bgColor: '#F0E68C', // 米黄色,表示老旧
      text: '修复前'
    },
    afterImage: {
      bgColor: '#DAA520', // 金色,表示修复后
      text: '修复后'
    }
  }
]

export default function Restoration() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRestoreClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-song text-center mb-12"
        >
          数字修复技术
        </motion.h1>

        {/* 技术介绍 */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">深度学习识别</h3>
              <p className="text-primary/80">
                运用先进的深度学习算法，精确分析画作的细节，识别破损和褪色区域。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">智能修复算法</h3>
              <p className="text-primary/80">
                基于大规模门神画数据训练的AI模型，能够准确还原画作的原有风格和特征。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">文化传承保护</h3>
              <p className="text-primary/80">
                通过数字化修复技术，为传统艺术注入新的生命力，实现文化遗产的永续传承。
              </p>
            </motion.div>
          </div>
        </section>

        {/* 修复案例 */}
        <section className="mb-20">
          <h2 className="section-title text-center">修复案例展示</h2>
          <div className="space-y-20">
            {restorationExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-song">{example.title}</h3>
                  <p className="text-primary/80">{example.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="card p-4">
                      <ImageGenerator
                        width={300}
                        height={400}
                        text={example.beforeImage.text}
                        bgColor={example.beforeImage.bgColor}
                      />
                      <p className="text-center mt-2 text-sm text-primary/60">修复前</p>
                    </div>
                    <div className="card p-4">
                      <ImageGenerator
                        width={300}
                        height={400}
                        text={example.afterImage.text}
                        bgColor={example.afterImage.bgColor}
                      />
                      <p className="text-center mt-2 text-sm text-primary/60">修复后</p>
                    </div>
                  </div>
                </div>
                <div className="card p-6">
                  <h4 className="text-xl font-song mb-4">修复过程</h4>
                  <ol className="space-y-4">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center mr-3">1</span>
                      <p>图像预处理和损伤分析</p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center mr-3">2</span>
                      <p>AI模型修复主要破损</p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center mr-3">3</span>
                      <p>细节优化和色彩调整</p>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center mr-3">4</span>
                      <p>专家审核和最终修复</p>
                    </li>
                  </ol>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 互动体验 */}
        <div className="text-center">
          <p className="text-xl text-primary/80 mb-8">
            想要亲自体验AI修复技术吗？
          </p>
          <button 
            onClick={handleRestoreClick}
            className="btn bg-accent hover:bg-accent-light"
          >
            开始体验
          </button>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="展览已结束"
        >
          <div className="text-center">
            <p className="mb-4">
              非常抱歉，本次数字修复展览已经结束。
            </p>
            <p>
              我们正在筹备新的展览内容，敬请期待！
            </p>
          </div>
        </Modal>
      </div>
    </div>
  )
} 