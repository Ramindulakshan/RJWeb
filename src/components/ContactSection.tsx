import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import resumePdf from '../assets/Ramindu_Jayaweera_CV.pdf';
export function ContactSection() {
  return <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              I'm currently available for freelance projects and open to
              full-time opportunities. If you have a project in mind or just
              want to say hi, feel free to reach out.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <a href="mailto:ramindu.lakshan27@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-cyan-500 text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-colors w-full md:w-auto justify-center">
                <Mail size={20} />
                ramindu.lakshan27@gmail.com
              </a>
              <a href={resumePdf} className="flex items-center gap-3 px-8 py-4 bg-slate-800 text-slate-200 font-bold rounded-lg hover:bg-slate-700 transition-colors w-full md:w-auto justify-center" download>
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center gap-8">
              <a href="https://github.com/Ramindulakshan" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ramindulakshan/" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.facebook.com/ramindulakshan.jayaweera" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-800 text-center text-slate-600 text-sm">
          <p>
            © {new Date().getFullYear()} Alex Chen. Built with React, Tailwind
            CSS & Framer Motion.
          </p>
        </div>
      </div>
    </section>;
}
