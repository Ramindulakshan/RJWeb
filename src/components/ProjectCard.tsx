import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links: {
    github?: string;
    live?: string;
  };
  category: string[];
}
export function ProjectCard({
  project,
  index
}: {
  project: ProjectProps;
  index: number;
}) {
  return <motion.div layout initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.4,
    delay: index * 0.1
  }} className="group relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
      {/* Top Bar / Image */}
      <div className="h-48 bg-slate-800 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500" />

        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-600">
            <Folder size={48} strokeWidth={1} />
          </div>
        )}

        {/* Overlay Links */}
        <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          {project.links.github && <a href={project.links.github} className="p-2 bg-slate-900/90 text-slate-300 hover:text-cyan-400 rounded-full backdrop-blur-sm transition-colors" aria-label="View Source Code">
              <Github size={18} />
            </a>}
          {project.links.live && <a href={project.links.live} className="p-2 bg-slate-900/90 text-slate-300 hover:text-cyan-400 rounded-full backdrop-blur-sm transition-colors" aria-label="View Live Site">
              <ExternalLink size={18} />
            </a>}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-700/50 text-cyan-300/90">
              {tag}
            </span>)}
        </div>
      </div>
    </motion.div>;
}
