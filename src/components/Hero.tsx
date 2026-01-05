import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Terminal } from 'lucide-react';
import me from '../assets/me.jpeg';
export function Hero() {
  return <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-900 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} className="flex items-center gap-2 text-cyan-400 font-medium mb-6">
                <Terminal size={20} />
                <span>Hello, world. I am</span>
              </motion.div>

              <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
                Ramindu Jayaweera
              </motion.h1>

              <motion.h2 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-3xl md:text-5xl font-bold text-slate-400 mb-8">
                Software Engineer specializing in{' '}
                <span className="text-blue-400">Flutter</span>,{' '}
                <span className="text-cyan-400">React</span> &{' '}
                <span className="text-indigo-400">AI/ML</span>.
              </motion.h2>

              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }} className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
              Software Engineer skilled in Flutter, React, and Node.js, with a strong passion for developing user-centric mobile and web applications. Proficient in machine learning, deep learning, and full-stack development. Recently graduated with a BEng (Hons) in Software Engineering, backed by hands-on project and research experience.
              </motion.p>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} className="flex flex-wrap gap-4">
                <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-cyan-500 text-slate-900 font-semibold rounded-lg hover:bg-cyan-400 transition-colors">
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <button className="flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-colors">
                  <Download size={18} />
                  Download CV
                </button>

                <div className="flex items-center gap-4 ml-4 border-l border-slate-800 pl-6">
                  <a href="https://github.com/Ramindulakshan" className="text-slate-400 hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/ramindulakshan/" className="text-slate-400 hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="relative flex justify-center lg:justify-end">
              {(() => {
              const clipPath = 'polygon(7% 0, 100% 0, 100% 88%, 92% 100%, 0 100%, 0 12%)';
              return <div className="relative w-80 h-[420px] md:w-96 md:h-[480px]">
                    {/* Neon glow */}
                    <div className="absolute -inset-6 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-indigo-500/30 blur-2xl opacity-70" style={{
                  clipPath
                }} />

                    {/* Outer frame */}
                    <div className="absolute inset-0 border border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]" style={{
                  clipPath
                }} />

                    {/* Inner plate */}
                    <div className="absolute inset-3 bg-slate-900/70 border border-cyan-500/20" style={{
                  clipPath
                }} />

                    {/* Image */}
                    <div className="absolute inset-6 overflow-hidden" style={{
                  clipPath
                }}>
                      <img src={me} alt="Ramindu Jayaweera - Software Engineer" className="w-full h-full object-cover" />
                    </div>

                    {/* Corner accents */}
                    <div className="absolute -top-3 -left-3 h-10 w-10 border-l-2 border-t-2 border-cyan-400/60" />
                    <div className="absolute -bottom-3 -right-3 h-10 w-10 border-r-2 border-b-2 border-cyan-400/60" />
                  </div>;
            })()}
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
}
