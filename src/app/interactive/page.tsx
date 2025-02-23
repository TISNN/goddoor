'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Modal } from '@/components/Modal'

const styleOptions = [
  { id: 'traditional', name: '传统风格', description: '保持传统门神画的典型特征' },
  { id: 'modern', name: '现代风格', description: '融入现代设计元素' },
  { id: 'minimal', name: '简约风格', description: '突出主要特征，简化细节' },
  { id: 'ink', name: '水墨风格', description: '强调水墨画的艺术效果' }
]

const characterOptions = [
  { id: 'qin-yu', name: '秦叔宝与尉迟恭', description: '最经典的门神组合' },
  { id: 'shentu-yulei', name: '神荼与郁垒', description: '最早的门神形象' },
  { id: 'zhong-kui', name: '钟馗', description: '驱邪降魔的门神' },
  { id: 'custom', name: '自定义创作', description: '创作你的专属门神' }
]

export default function Interactive() {
  const [selectedStyle, setSelectedStyle] = useState('')
  const [selectedCharacter, setSelectedCharacter] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleStyleSelect = (styleId: string) => {
    setSelectedStyle(styleId)
    setIsModalOpen(true)
  }

  const handleCharacterSelect = (characterId: string) => {
    setSelectedCharacter(characterId)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-song text-center mb-12"
        >
          创作你的门神画
        </motion.h1>

        {/* 创作选项 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* 风格选择 */}
          <section>
            <h2 className="text-2xl font-song mb-6">选择创作风格</h2>
            <div className="space-y-4">
              {styleOptions.map((style) => (
                <motion.div
                  key={style.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`card p-4 cursor-pointer transition-all ${
                    selectedStyle === style.id
                      ? 'border-2 border-accent'
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => handleStyleSelect(style.id)}
                >
                  <h3 className="text-lg font-song">{style.name}</h3>
                  <p className="text-primary/60 text-sm">{style.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 人物选择 */}
          <section>
            <h2 className="text-2xl font-song mb-6">选择门神人物</h2>
            <div className="space-y-4">
              {characterOptions.map((character) => (
                <motion.div
                  key={character.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`card p-4 cursor-pointer transition-all ${
                    selectedCharacter === character.id
                      ? 'border-2 border-accent'
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => handleCharacterSelect(character.id)}
                >
                  <h3 className="text-lg font-song">{character.name}</h3>
                  <p className="text-primary/60 text-sm">{character.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* 创作画布 */}
        <section className="mb-20">
          <div className="aspect-w-4 aspect-h-3 bg-white rounded-lg shadow-inner border-2 border-dashed border-primary/20 flex items-center justify-center">
            {selectedStyle && selectedCharacter ? (
              <div className="text-center">
                <div className="animate-pulse mb-4">
                  <div className="h-8 w-8 mx-auto rounded-full bg-accent" />
                </div>
                <p className="text-primary/60">AI正在根据你的选择创作中...</p>
              </div>
            ) : (
              <div className="text-center text-primary/40">
                <p>请先选择创作风格和门神人物</p>
              </div>
            )}
          </div>
        </section>

        {/* 3D展厅入口 */}
        <section className="text-center">
          <h2 className="text-2xl font-song mb-6">3D虚拟展厅</h2>
          <p className="text-xl text-primary/80 mb-8">
            走进虚拟展厅，感受门神画的立体魅力
          </p>
          <a
            href="/virtual-gallery"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-lg font-medium rounded-md text-primary hover:bg-primary hover:text-white transition-colors"
          >
            进入展厅
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </section>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="展览已结束"
        >
          <div className="text-center">
            <p className="mb-4">
              非常抱歉，本次互动体验展览已经结束。
            </p>
            <p>
              我们正在升级AI创作系统，新的体验即将上线，敬请期待！
            </p>
          </div>
        </Modal>
      </div>
    </div>
  )
} 