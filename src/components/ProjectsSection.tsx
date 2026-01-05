import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import projectManagementImage from '../assets/ProjectManagement.jpg';
const projects = [{
  title: 'Early skin cancer detection system using deep learning (Final Year Individual Project)',
  description: 'Developed a deep learning-based web application to assist doctors in early skin cancer detection by classifying skin lesions into seven categories using state-of-the-art CNN architectures.',
  tags: ['Python', 'PyTorch', 'React', 'FastAPI'],
  category: ['AI/ML', 'Full-Stack'],
  image: projectManagementImage,
  links: {
    github: '#',
    live: '#'
  }
}, {
  title: 'FlutterCommerce',
  description: 'A high-performance cross-platform mobile e-commerce application. Features include real-time inventory updates, offline mode, and seamless payment integration.',
  tags: ['Flutter', 'Dart', 'Firebase', 'Stripe'],
  category: ['Flutter', 'Mobile'],
  image: projectManagementImage,
  links: {
    github: '#',
    live: '#'
  }
}, {
  title: 'DataStream Dashboard',
  description: 'Real-time analytics dashboard for visualizing large-scale IoT sensor data. Uses WebSockets for live updates and D3.js for complex data visualization.',
  tags: ['React', 'Node.js', 'Socket.io', 'D3.js'],
  category: ['React', 'Node.js', 'Full-Stack'],
  image: projectManagementImage,
  links: {
    github: '#',
    live: '#'
  }
}, {
  title: 'CollabWrite',
  description: 'A collaborative code editor supporting multiple languages. Features operational transformation for conflict resolution and integrated video chat.',
  tags: ['React', 'TypeScript', 'WebRTC', 'Node.js'],
  category: ['React', 'Full-Stack'],
  image: projectManagementImage,
  links: {
    github: '#',
    live: '#'
  }
}, {
  title: 'SentimentAPI',
  description: 'RESTful API service providing sentiment analysis and entity extraction for text data. Scalable architecture deployed on AWS Lambda.',
  tags: ['Node.js', 'AWS', 'NLP', 'Docker'],
  category: ['Node.js', 'AI/ML', 'Backend'],
  image: projectManagementImage,
  links: {
    github: '#'
  }
}, {
  title: 'HealthTrack Mobile',
  description: 'Personal health tracking app integrating with wearable devices. Focuses on privacy-first data storage and personalized health insights using ML.',
  tags: ['Flutter', 'TensorFlow Lite', 'SQLite'],
  category: ['Flutter', 'AI/ML', 'Mobile'],
  image: projectManagementImage,
  links: {
    github: '#',
    live: '#'
  }
}];
const filters = ['All', 'React', 'Flutter', 'AI/ML', 'Node.js', 'Full-Stack'];
export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = projects.filter(project => activeFilter === 'All' || project.category.includes(activeFilter));
  return <section id="projects" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-cyan-500 rounded-full mb-8" />

          <div className="flex flex-wrap gap-2">
            {filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter ? 'bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/25' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'}`}>
                {filter}
              </button>)}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>;
}
