'use client'

import React, { Suspense, useState, useEffect } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Modal } from '@/components/Modal'
import Image from 'next/image'
import { TextureLoader, RepeatWrapping, Vector3, MathUtils, Mesh, Euler } from 'three'
import * as THREE from 'three'

const artworks = [
  {
    id: 1,
    title: '绿云巨幅门神',
    period: '清代 · 中国美术馆藏',
    description: '这幅门神画作品展现了传统门神的典型特征，用色大胆，线条流畅，体现了清代门神画的艺术特色。',
    image: '/images/history/ming-qing.jpg',
    position: [0, 3, -9.5],
    rotation: [0, 0, 0]
  },
  {
    id: 2,
    title: '钟馗门神',
    period: '明代 · 纸本设色',
    description: '钟馗形象威严庄重，画面构图严谨，笔法精湛，是明代门神画的代表作品。',
    image: '/images/history/tang.jpg',
    position: [9.5, 3, 0],
    rotation: [0, -Math.PI / 2, 0]
  },
  {
    id: 3,
    title: '武门神：神荼郁垒',
    period: '清代 · 国家图书馆藏',
    description: '神荼与郁垒是最早的门神形象，这幅作品完整保留了传统门神的典型特征。',
    image: '/images/history/han.jpg',
    position: [-9.5, 3, 0],
    rotation: [0, Math.PI / 2, 0]
  },
  {
    id: 4,
    title: '木刻年画《军民合作》',
    period: '1944年 · 严涵',
    description: '这幅作品融合了传统门神画风格与现代革命题材，具有独特的时代特色。',
    image: '/images/history/modern.jpg',
    position: [0, 3, 9.5],
    rotation: [0, Math.PI, 0]
  }
]

function VirtualGalleryModel() {
  return (
    <group>
      {/* 地板 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#e5e5e5" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* 墙壁 */}
      <mesh position={[0, 5, -10]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.7} metalness={0.1} />
      </mesh>
      <mesh position={[0, 5, 10]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.7} metalness={0.1} />
      </mesh>
      <mesh position={[-10, 5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.7} metalness={0.1} />
      </mesh>
      <mesh position={[10, 5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#f5f5f5" roughness={0.7} metalness={0.1} />
      </mesh>

      {/* 天花板 */}
      <mesh position={[0, 10, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#ffffff" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* 装饰线条 */}
      <mesh position={[0, 7, -9.9]}>
        <boxGeometry args={[20, 0.1, 0.1]} />
        <meshStandardMaterial color="#d4d4d4" />
      </mesh>
      <mesh position={[0, 7, 9.9]} rotation={[0, Math.PI, 0]}>
        <boxGeometry args={[20, 0.1, 0.1]} />
        <meshStandardMaterial color="#d4d4d4" />
      </mesh>
      <mesh position={[-9.9, 7, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[20, 0.1, 0.1]} />
        <meshStandardMaterial color="#d4d4d4" />
      </mesh>
      <mesh position={[9.9, 7, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[20, 0.1, 0.1]} />
        <meshStandardMaterial color="#d4d4d4" />
      </mesh>
    </group>
  )
}

function ArtworkDisplay({ artwork, onClick }: { artwork: typeof artworks[0], onClick: () => void }) {
  const texture = useLoader(TextureLoader, artwork.image)

  return (
    <group>
      {/* 画作 */}
      <mesh 
        position={new Vector3(...artwork.position)}
        rotation={new Euler(...artwork.rotation)}
        onClick={onClick}
      >
        <planeGeometry args={[3.6, 5.6]} />
        <meshBasicMaterial 
          map={texture}
        />
      </mesh>
    </group>
  )
}

export default function VirtualGallery() {
  const [showGuide, setShowGuide] = useState(false)
  const [selectedArtwork, setSelectedArtwork] = useState(artworks[0])
  const [showArtworkDetail, setShowArtworkDetail] = useState(false)

  return (
    <div className="min-h-screen">
      {/* 顶部导航 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="text-2xl font-song text-primary hover:text-accent transition-colors">
            返回主页
          </a>
          <div className="flex items-center space-x-4">
            <button 
              className="btn bg-accent hover:bg-accent-light"
              onClick={() => setShowGuide(true)}
            >
              操作指南
            </button>
          </div>
        </div>
      </nav>

      {/* 3D画廊 */}
      <div className="w-full h-screen">
        <Canvas
          camera={{ position: [0, 5, 10], fov: 50 }}
        >
          <Suspense fallback={null}>
            <color attach="background" args={['#f5f5f5']} />
            
            {/* 展厅模型 */}
            <VirtualGalleryModel />

            {/* 展品展示墙 */}
            {artworks.map((artwork) => (
              <ArtworkDisplay
                key={artwork.id}
                artwork={artwork}
                onClick={() => {
                  setSelectedArtwork(artwork)
                  setShowArtworkDetail(true)
                }}
              />
            ))}

            {/* 环境光和控制器 */}
            <Environment preset="warehouse" />
            <OrbitControls
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minDistance={5}
              maxDistance={15}
              target={[0, 3, 0]}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* 操作指南弹窗 */}
      <Modal
        isOpen={showGuide}
        onClose={() => setShowGuide(false)}
        title="虚拟展厅操作指南"
      >
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
              1
            </div>
            <div>
              <h3 className="font-song text-lg mb-1">视角控制</h3>
              <p className="text-primary/80">
                按住鼠标左键并拖动可以旋转视角，使用鼠标滚轮可以缩放画面
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
              2
            </div>
            <div>
              <h3 className="font-song text-lg mb-1">展品浏览</h3>
              <p className="text-primary/80">
                移动到展品前方，右侧信息面板会显示当前展品的详细信息
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center">
              3
            </div>
            <div>
              <h3 className="font-song text-lg mb-1">交互操作</h3>
              <p className="text-primary/80">
                点击展品可以查看高清图片和详细介绍，点击"查看详情"可以了解更多信息
              </p>
            </div>
          </div>
        </div>
      </Modal>

      {/* 操作提示 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-4"
      >
        <p className="text-center text-primary/80">
          使用鼠标拖动可以旋转视角，滚轮可以缩放
        </p>
      </motion.div>

      {/* 展品详情弹窗 */}
      <Modal
        isOpen={showArtworkDetail}
        onClose={() => setShowArtworkDetail(false)}
        title={selectedArtwork.title}
      >
        <div className="space-y-3 max-w-sm mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-[240px] h-[320px] relative rounded-lg overflow-hidden">
              <Image
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="px-4">
            <p className="text-accent text-xs mb-1">{selectedArtwork.period}</p>
            <p className="text-primary/80 text-xs leading-relaxed">
              {selectedArtwork.description}
            </p>
          </div>
        </div>
      </Modal>

      {/* 展品信息面板 */}
      <div className="fixed top-24 right-8 w-80 bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-song mb-4">当前展品</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-song text-lg mb-2">{selectedArtwork.title}</h3>
            <p className="text-primary/60 text-sm">
              {selectedArtwork.period}
            </p>
          </div>
          <p className="text-primary/80">
            {selectedArtwork.description}
          </p>
          <button 
            className="w-full btn bg-accent hover:bg-accent-light"
            onClick={() => setShowArtworkDetail(true)}
          >
            查看详情
          </button>
        </div>
      </div>
    </div>
  )
} 