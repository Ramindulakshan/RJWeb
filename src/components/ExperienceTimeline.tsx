import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { describe } from 'node:test';
const experiences = [{
  company: 'Shield Technologies (Pvt) Ltd ',
  role: 'Associate Software Engineer',
  period: 'Jun 2024 - Dec 2024',
  description:['Developed a cross-platform mobile application using Flutter, Dart, Firebase, and REST APIs, ensuring high performance and scalability.','Led the frontend development team, ensuring 100% of sprint goals were met on time. ','Coordinated task distribution using Agile practices, improving team productivity and feature delivery consistency.'] 
}, {
  company: 'Generation ALPHA (Pvt) Ltd',
  role: 'Trainee Software Engineer',
  period: '2020 - 2022',
  description: ['Developed a mobile application for the Generation Alpha platform using Flutter, improving accessibility and user interaction.',' Designed and implemented a web application for the same platform using React, ensuring consistency and a seamless cross-platform experience.',' Maintained and optimized the company website using wordpress, enhancing overall user engagement.',' Collaborated in an Agile environment, working closely with cross-functional teams to ensure smooth delivery.',' Spearheaded weekly knowledge-sharing sessions to cross-train team members on Flutter best practices and API integration.']
}, ];
export function ExperienceTimeline() {
  return <section id="experience" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-slate-800" />

          {experiences.map((exp, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2
        }} className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900 border-2 border-cyan-500 rounded-full z-10 mt-1.5" />

              {/* Content */}
              <div className="ml-8 md:ml-0 md:w-1/2">
                <div className={`bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-xl font-bold text-slate-100">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-medium">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500/50 flex-shrink-0" />
                        {item}
                      </li>)}
                  </ul>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}