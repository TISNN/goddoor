import '../styles/globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '中国传统门神画数字展览馆',
  description: '通过现代数字技术与传统艺术的结合，展示中国传统门神画艺术的在线展览平台。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-2xl font-song text-primary hover:text-accent transition-colors">
              门神画数字馆
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="/history" className="nav-link">历史发展</a>
              <a href="/gallery" className="nav-link">作品展示</a>
              <a href="/restoration" className="nav-link">数字修复</a>
              <a href="/interactive" className="nav-link">互动体验</a>
              <a href="/about" className="nav-link">关于我们</a>
            </div>
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </header>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <footer className="bg-primary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-song mb-4">关于我们</h3>
                <p className="text-gray-300">
                  致力于通过数字技术保护和传播中国传统文化艺术
                </p>
              </div>
              <div>
                <h3 className="text-xl font-song mb-4">联系方式</h3>
                <p className="text-gray-300">
                  邮箱：contact@doorgod-museum.cn<br />
                  电话：+86 123 4567 8900
                </p>
              </div>
              <div>
                <h3 className="text-xl font-song mb-4">关注我们</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    微信
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    微博
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    抖音
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>© 2024 中国传统门神画数字展览馆. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 