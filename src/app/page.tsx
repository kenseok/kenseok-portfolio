'use client';

import React, { useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, Moon, Sun, Menu, X, Code, Palette, Rocket, Camera, Terminal, Zap, Star, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500", icon: "⚡" },
    { name: "TypeScript", level: 85, color: "from-blue-400 to-blue-600", icon: "📘" },
    { name: "HTML/CSS", level: 95, color: "from-pink-400 to-purple-500", icon: "🎨" },
    { name: "React", level: 85, color: "from-cyan-400 to-blue-500", icon: "⚛️" },
    { name: "Next.js", level: 88, color: "from-gray-600 to-black", icon: "▲" },
    { name: "Supabase", level: 82, color: "from-green-400 to-emerald-500", icon: "🚀" },
    { name: "RCMS", level: 80, color: "from-purple-400 to-purple-600", icon: "🔧" },
    { name: "Photoshop", level: 88, color: "from-blue-400 to-purple-600", icon: "🖼️" },
    { name: "ASO Design", level: 92, color: "from-orange-400 to-red-500", icon: "📱" },
  ];

  const projects = [
    {
      id: 1,
      title: "WeGoLand",
      subtitle: "日本旅行者とのコミュニティプラットフォーム",
      description: "Next.jsとReactを活用して開発した日本旅行者と現地居住者のための交流コミュニティプラットフォーム。旅行情報、グルメレビュー、観光スポット、生活のコツを共有し、より豊かな体験を作り上げるサイト。現代的なUI/UXと反応型デザインを実装。",
      tech: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
      category: "Web Application",
      status: "Live",
      metrics: "コミュニティプラットフォーム構築",
      link: "https://wegoland.com/"
    },
    {
      id: 2,
      title: "FANCL LAND ECサイト",
      subtitle: "化粧品・健康食品ECプラットフォーム",
      description: "FANCLの公式ECサイト「FANCL LAND」の運用・改修・制作業務。JavaScriptを用いた商品情報の連携、カート機能、商品選択機能の実装など、ユーザー体験を意識したフロントエンド開発。商品詳細ページやキャンペーンページのデザイン制作も担当。",
      tech: ["JavaScript", "HTML/CSS", "レスポンシブデザイン", "UX/UI"],
      image: "https://p-kenseok.netlify.app/assets/img/portfolio/sale.png",
      category: "E-Commerce",
      status: "Current",
      metrics: "売上向上に貢献",
      link: "https://www.fancl.co.jp/fanclland/sale/index.html?sc_intcmp=land2508_ham"
    },
    {
      id: 3,
      title: "ゲーム公式サイト・LP制作",
      subtitle: "Game Promotion & RCMS Management",
      description: "ゲーム会社のマーケティング部門にて、プロモーション用LPサイトの制作や、RCMSを活用した公式サイトの運用管理に従事。ユーザーエンゲージメントを意識したデザインや、業務効率化を図る運用プロセスの改善提案を実施。",
      tech: ["RCMS", "HTML/CSS", "JavaScript", "マーケティング"],
      image: "https://p-kenseok.netlify.app/assets/img/portfolio/ikesiri_10th.png",
      category: "Marketing",
      status: "Featured",
      metrics: "プロジェクト成功に貢献",
      link: "#"
    },
    {
      id: 4,
      title: "ASO画像制作",
      subtitle: "App Store Optimization Design",
      description: "進行中のゲームタイトルにおけるASO（アプリストア最適化）画像制作を担当。視覚的な訴求力を意識したクリエイティブで、アプリストアでのダウンロード数の向上に貢献。ゲーム関連のプロモーションやマーケティング画像を制作し、視覚的な魅力を最大限に引き出しました。",
      tech: ["Photoshop", "ASO最適化", "グラフィックデザイン", "マーケティング"],
      image: "https://p-kenseok.netlify.app/assets/img/portfolio/sengoku.png",
      category: "Design",
      status: "Success",
      metrics: "ダウンロード数向上",
      link: "#"
    },
    {
      id: 5,
      title: "ポートフォリオサイト制作",
      subtitle: "Personal Portfolio Website",
      description: "HTML、CSS、JavaScriptを活用した個人ポートフォリオサイト制作。シンプルで洗練されたデザインと、レスポンシブ対応により、様々なデバイスで最適な表示を実現。自身のスキルと経験を効果的にアピールするサイト構築。",
      tech: ["HTML5", "CSS3", "JavaScript", "レスポンシブデザイン"],
      image: "https://p-kenseok.netlify.app/portfolio.png",
      category: "Portfolio",
      status: "Live",
      metrics: "個人ブランディング強化",
      link: "https://p-kenseok.netlify.app/"
    },
    {
      id: 6,
      title: "レスポンシブWebサイト制作",
      subtitle: "Responsive Website Collection",
      description: "モバイルファーストアプローチによる完全レスポンシブWebサイト制作。様々なデバイスサイズに対応し、パフォーマンス最適化とアクセシビリティを重視した設計を実装。",
      tech: ["HTML/CSS", "JavaScript", "Bootstrap", "jQuery", "Sass"],
      image: "https://p-kenseok.netlify.app/assets/img/portfolio/ikemen_april.png",
      category: "Web Design",
      status: "Portfolio",
      metrics: "複数サイト制作完了",
      link: "#"
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-black text-white' 
        : 'bg-white text-gray-900'
    } relative overflow-x-hidden`}>
      
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.3s ease'
          }}
        />
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-l from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode ? 'bg-black/80' : 'bg-white/80'
      } backdrop-blur-2xl border-b border-gray-800/50`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="font-black text-2xl">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                KENSEOK
              </span>
              <span className="text-xs ml-2 text-gray-500">DEV</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'HOME', id: 'home' },
                { name: 'ABOUT', id: 'about' },
                { name: 'SKILLS', id: 'skills' },
                { name: 'WORK', id: 'projects' },
                { name: 'CONTACT', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-bold tracking-wider transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-white'
                  } group`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 to-purple-500/0 group-hover:from-cyan-400/10 group-hover:to-purple-500/10 rounded transition-all duration-300"></span>
                </button>
              ))}
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110"
              >
                {darkMode ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-6 bg-black/95 backdrop-blur-xl">
              {[
                { name: 'HOME', id: 'home' },
                { name: 'ABOUT', id: 'about' },
                { name: 'SKILLS', id: 'skills' },
                { name: 'WORK', id: 'projects' },
                { name: 'CONTACT', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-4 text-lg font-bold tracking-wider text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 text-green-400 text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for work</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <div className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-pulse">
                WEB
              </div>
              <div className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                DEVELOPER
              </div>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              ECサイト開発とコミュニティプラットフォーム制作のスペシャリスト<br />
              <span className="text-cyan-400 font-semibold">Code. Design. Community.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-bold text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 hover:scale-110"
              >
                Let&rsquo;s Talk
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                ABOUT ME
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-2xl md:text-3xl font-bold leading-relaxed">
                <span className="text-gray-400">I create </span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">community platforms</span>
                <span className="text-gray-400"> and </span>
                <span className="text-white">e-commerce solutions.</span>
              </div>
              
              <div className="text-lg text-gray-400 leading-relaxed space-y-4">
                <p>
                  私は現在、<span className="text-cyan-400 font-semibold">FANCLのECサイト「FANCL LAND」の運用・改修・制作業務</span>を中心に活動しており、
                  JavaScriptを用いた商品情報の連携や、カート機能、商品選択機能の実装など、
                  ユーザー体験を意識したフロントエンド開発に取り組んでいます。
                </p>
                <p>
                  また、<span className="text-purple-400 font-semibold">WeGoLandという日本旅行者向けコミュニティプラットフォーム</span>をNext.js、React、TypeScript、Supabaseを使用して開発。
                  現代的なUI/UXと反応型デザインを実装し、旅行情報共有の場を提供しています。
                </p>
                <p>
                  前職では、ゲーム会社のマーケティング部門に所属し、プロモーション用LPサイトの制作や、
                  RCMSを活用した公式サイトの運用管理に従事。特に、ユーザーエンゲージメントを意識したデザインや、
                  業務効率化を図る運用プロセスの改善提案を行い、プロジェクトの成功に貢献しました。
                </p>
                <p>
                  また、進行中のゲームタイトルにおける<span className="text-pink-400 font-semibold">ASO（アプリストア最適化）画像制作</span>も担当し、
                  視覚的な訴求力を意識したクリエイティブで、ダウンロード数の向上にも貢献しました。
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-cyan-400">12+</div>
                  <div className="text-gray-500 font-medium">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-500">5+</div>
                  <div className="text-gray-500 font-medium">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-pink-500">∞</div>
                  <div className="text-gray-500 font-medium">Passion</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "コミュニティプラットフォーム開発",
                  desc: "Next.js、React、TypeScriptを活用した現代的なWebコミュニティの構築・運営",
                  icon: <Code size={32} />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "プロモーションLP制作",
                  desc: "RCMSを活用したプロモーション用ランディングページや公式ウェブサイトの管理・運営を担当しています。",
                  icon: <Rocket size={32} />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Web Design",
                  desc: "ASO（アプリストア最適化）画像を含む、さまざまなデジタルデザインを制作します。",
                  icon: <Palette size={32} />,
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  title: "画像制作",
                  desc: "ゲーム関連のプロモーションやマーケティング画像を制作し、視覚的な魅力を最大限に引き出します。",
                  icon: <Camera size={32} />,
                  color: "from-green-500 to-teal-500"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                TECH STACK
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="font-bold text-xl text-white">{skill.name}</span>
                  </div>
                  <span className="text-2xl font-black text-cyan-400">{skill.level}%</span>
                </div>
                
                <div className="relative w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                FEATURED WORK
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 group-hover:border-cyan-500/50 transition-all duration-500">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute top-6 right-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                        project.status === 'Current' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        project.status === 'Featured' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                        project.status === 'Success' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                        project.status === 'Multiple' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      {project.link !== "#" ? (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-110 transition-transform"
                        >
                          <span>View Project</span>
                          <ExternalLink size={16} />
                        </a>
                      ) : (
                        <button className="flex items-center space-x-2 bg-gray-400 text-gray-700 px-6 py-3 rounded-full font-bold cursor-not-allowed">
                          <span>Private Project</span>
                          <ExternalLink size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-purple-400 font-semibold mb-4">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-full px-6 py-3">
                    <Star className="text-green-400" size={16} />
                    <span className="text-green-400 font-bold">{project.metrics}</span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                LET&amp;rsquo;S CREATE
              </span>
            </h2>
            <p className="text-2xl text-gray-400 mb-8">
              一緒に素晴らしい<span className="text-cyan-400 font-bold">Web体験</span>を作りませんか？
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          </div>
          
          <div className="flex justify-center items-center space-x-8 mb-16">
            <a
              href="mailto:kenseok@gmail.com"
              className="group p-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl hover:border-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <Mail size={40} className="group-hover:text-cyan-400 transition-colors text-white" />
              <div className="mt-4 text-sm font-bold text-gray-400 group-hover:text-white">Email Me</div>
            </a>
            
            <a
              href="https://github.com/kenseok"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl hover:border-purple-400 transition-all duration-300 hover:scale-110"
            >
              <Github size={40} className="group-hover:text-purple-400 transition-colors text-white" />
              <div className="mt-4 text-sm font-bold text-gray-400 group-hover:text-white">GitHub</div>
            </a>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-green-400 text-lg font-bold">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Ready to start immediately</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              KENSEOK
            </span>
          </div>
          <p className="text-gray-500">
            © 2024 Kenseok. Crafted with 🔥 and React.
          </p>
        </div>
      </footer>
    </div>
  );
}// Updated Mon Aug 18 00:53:24 JST 2025