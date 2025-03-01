 'use client'

import { motion } from 'framer-motion'

const timelineData = [
  {
    period: '商周时期',
    title: '门神崇拜的起源',
    content: '门神崇拜可以追溯到商周时期，人们开始在门上绘制图案以驱邪避凶。这一时期的门神更多以抽象符号和图案为主，体现了早期中国人对门户守护的朴素信仰。',
    image: '/images/history/shang-zhou.jpg'
  },
  {
    period: '汉代',
    title: '神荼郁垒时期',
    content: '《论衡》记载，门、户、井、灶、中霤皆有神主。南阳汉画像石中发现了最早的门神图像，如"双首朱雀"等。神荼和郁垒成为最早被确定的门神形象，他们手持金锤，一位慈祥一位威严。',
    image: '/images/history/han.jpg'
  },
  {
    period: '魏晋南北朝',
    title: '版画艺术的兴起',
    content: '随着造纸术和印刷技术的发展，门神画开始以版画形式大量出现。这一时期的门神画作品更加精细，开始形成独特的艺术风格。',
    image: '/images/history/wei-jin.jpg'
  },
  {
    period: '唐代',
    title: '秦叔宝与尉迟恭',
    content: '唐代开始出现以历史人物为门神的传统，秦叔宝与尉迟恭成为最经典的门神形象。他们的形象威武雄壮，体现了盛唐气象。此外，钟馗也在这一时期成为重要的门神形象。',
    image: '/images/history/tang.jpg'
  },
  {
    period: '宋元时期',
    title: '民间艺术的繁荣',
    content: '门神画在这一时期与戏曲、小说等艺术形式相互影响，题材更加丰富。出现了许多文官型门神，如包拯、文天祥等，强调正义和忠诚的象征。',
    image: '/images/history/song-yuan.jpg'
  },
  {
    period: '明清时期',
    title: '年画艺术的高峰',
    content: '随着印刷技术的发展和元代戏曲、明清小说的普及，门神画题材更加丰富多样。各地形成独特的门神画风格，如天津杨柳青、山东杨家埠等画派。',
    image: '/images/history/ming-qing.jpg'
  },
  {
    period: '民国时期',
    title: '革新与传承',
    content: '门神画开始融入现代元素，如抗战时期出现的军民合作主题。严涵等艺术家创作的《军民合作 抗战胜利》等作品，展现了传统艺术的现代转型。',
    image: '/images/history/minguo.jpg'
  },
  {
    period: '当代发展',
    title: '数字时代的新生',
    content: '传统门神画在保持文化特色的同时，借助数字技术获得新的表现形式。AI技术的应用让门神画的修复和创新有了更多可能。',
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

        {/* 历史介绍 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="prose prose-lg mx-auto text-primary/80">
            <p className="mb-6">
              门神画艺术起源于中国古代的门神崇拜传统，历经数千年的发展演变，形成了独特的艺术形式和文化内涵。从最早的抽象符号到后来的具象人物，从神话传说到历史人物，门神画的题材和表现形式不断丰富，反映了中国传统文化的深厚底蕴。
            </p>
            <p>
              在漫长的历史发展中，门神画不仅承载着人们驱邪纳福的美好愿望，也记录了不同时期的社会变迁和艺术审美，是中国民间艺术的重要组成部分。
            </p>
          </div>
        </motion.div>

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

        {/* 艺术特征 */}
        <div className="mt-20">
          <h2 className="section-title text-center">门神画的艺术特征</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">造型特点</h3>
              <p className="text-primary/80">
                门神画以"大头小身"的夸张比例著称，突出人物面部表情和性格特征。画面构图严谨，人物形象威严庄重，体现了中国传统绘画的艺术特色。
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
                传统门神画多采用红、黄、绿等鲜艳色彩，象征吉祥喜庆。不同地区的门神画在色彩运用上各具特色，形成了独特的地域风格。
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
                门神画题材丰富，包括神话传说、历史人物、戏曲故事等。从最早的神荼郁垒到后来的秦叔宝、尉迟恭，再到各类文官武将，体现了中国传统文化的丰富内涵。
              </p>
            </motion.div>
          </div>
        </div>

        {/* 地域特色 */}
        <section className="mt-20">
          <h2 className="section-title text-center">地域流派</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">北方画派</h3>
              <ul className="space-y-4">
                <li>
                  <strong>天津杨柳青：</strong>
                  色彩艳丽，构图严谨，人物形象丰满
                </li>
                <li>
                  <strong>山东杨家埠：</strong>
                  风格粗犷豪放，色彩浓艳
                </li>
                <li>
                  <strong>河南朱仙镇：</strong>
                  浓郁的乡土气息，独特的艺术风格
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <h3 className="text-xl font-song mb-4">南方画派</h3>
              <ul className="space-y-4">
                <li>
                  <strong>江苏桃花坞：</strong>
                  工笔细腻，典雅精致
                </li>
                <li>
                  <strong>四川绵竹：</strong>
                  具有浓郁的巴蜀特色，色彩绚丽
                </li>
                <li>
                  <strong>其他流派：</strong>
                  各地区都形成了独具特色的门神画风格
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}