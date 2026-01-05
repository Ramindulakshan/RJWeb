import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Smartphone, Terminal, Cpu } from 'lucide-react';
const skillCategories = [{
  title: 'Frontend',
  icon: <Layout className="w-6 h-6 text-cyan-400" />,
  skills: ['React.js', 'Node.js', 'Express.js', 'Next.js', '.NET', 'HTML','CSS', 'PHP', 'WordPress']
}, 
{
  title: 'Backend',
  icon: <Database className="w-6 h-6 text-blue-400" />,
  skills: ['MySQL', 'PostgreSQL','SQLite', 'MongoDB']
}, {
  title: 'Mobile',
  icon: <Smartphone className="w-6 h-6 text-purple-400" />,
  skills: ['Flutter', 'Dart', 'iOS/Android', 'Firebase']
}, {
  title: 'AI / ML',
  icon: <Cpu className="w-6 h-6 text-rose-400" />,
  skills: ['TensorFlow', 'PyTorch', 'CNNs', 'Pandas']
}, {
  title: 'DevOps & Tools',
  icon: <Terminal className="w-6 h-6 text-emerald-400" />,
  skills: ['Git', 'Docker', 'AWS','azure', 'CI/CD', 'Linux', 'Jest']
},];
export function SkillsSection() {
  return <section id="skills" className="py-24 bg-slate-900">
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
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mb-8" />
          <p className="text-slate-400 max-w-2xl">
            A comprehensive toolkit developed over years of building scalable
            applications and solving complex technical challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => <motion.div key={category.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-colors group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-slate-600 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-200">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => <span key={skill} className="px-3 py-1.5 text-sm font-medium text-slate-400 bg-slate-900/50 rounded-md border border-slate-700/50 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors cursor-default">
                    {skill}
                  </span>)}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}