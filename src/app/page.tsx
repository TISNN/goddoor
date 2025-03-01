'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { left, top } = heroRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - left) / heroRef.current.offsetWidth) * 100,
          y: ((e.clientY - top) / heroRef.current.offsetHeight) * 100,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center"
      >
        {/* 背景图片 */}
        <div className="absolute inset-0">
          <Image
            src="images/home/hero.jpg"
            alt="门神画背景"
            width={2500}
            height={1532}
            className="object-cover object-center w-full h-full"
            priority
            quality={100}
            unoptimized
          />
          {/* 添加一个半透明遮罩,让文字更容易阅读 */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-song mb-6 text-white"
            >
              中国传统门神画数字展览馆
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-12"
            >
              传统与现代的完美融合，艺术与科技的创新对话
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="/gallery" className="btn bg-accent hover:bg-accent-light border-none">
                开始探索
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 展览前言 Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-song mb-8 text-primary">展览前言</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg mb-4">
              中国传统门神画不仅是民间艺术的象征，也是中国绘画历史中的重要组成部分。其艺术特征融入了丰富的象征主义、民间信仰及装饰性艺术元素，表现出浓厚的文化符号学价值。门神画的形式与色彩，尤其是在构图和视觉冲击力上，长期以来都受到学者和艺术家的高度评价。在数字修复的背景下，运用AI技术进行门神画的修复，不仅是对其视觉层面的复原，更是对其文化内涵与艺术价值的再造。通过深度学习和图像识别，AI能够精确分析画作的细节，重建破损部分，确保艺术风格与历史背景的精确再现。这种结合“形式主义”与“符号学”理论的修复方式，为传统艺术带来了新的生机，推动了数字时代艺术创作的跨界融合。此外，AI技术为门神画带来了更加现代化的诠释方式，为传统艺术的当代传承和文化遗产保护提供了创新的路径。
              </p>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="section-title text-center">展览特色</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">AI修复技术</h3>
              <p className="text-primary/80">
                运用先进的人工智能技术，修复和重现珍贵的门神画作品
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">沉浸式体验</h3>
              <p className="text-primary/80">
                通过3D展厅和互动技术，带来身临其境的艺术体验
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">创作互动</h3>
              <p className="text-primary/80">
                让观众参与创作，体验传统与现代艺术的碰撞
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Exhibition Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="section-title text-center">最新展品</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card group cursor-pointer"
              >
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-song mb-2">门神画作品 {item}</h3>
                  <p className="text-sm text-primary/60">清代 · 杨柳青年画</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/gallery" className="btn">
              查看更多
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-song mb-6">
                创作属于你的门神画
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                通过AI辅助创作系统，让每个人都能创作独特的门神画作品
              </p>
              <a
                href="/interactive"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-primary transition-colors"
              >
                开始创作
              </a>
            </div>
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-white/10 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 