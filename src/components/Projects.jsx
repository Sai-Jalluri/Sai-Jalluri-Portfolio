import React from 'react';
import { Code, FileCode, Layers, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Authentication System',
      description: 'Built a secure login/signup page with form validation and user authentication',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: Code,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      title: 'Digital Notebook',
      description: 'Interactive note-taking application with local storage and search functionality',
      tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      icon: FileCode,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-teal-500/30'
    },
    {
      title: 'Quiz Application',
      description: 'Dynamic quiz platform with timer, score tracking, and result analysis',
      tech: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
      icon: Layers,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-emerald-500 font-mono text-sm mb-2">// Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-emerald-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            Practical applications showcasing my frontend development skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 bg-gradient-to-br ${project.color} border ${project.borderColor} rounded-lg backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                {/* Project Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-emerald-500" />
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#0a0a0a]/50 border border-emerald-500/30 text-emerald-400 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 bg-[#1a1a1a] border border-slate-800 rounded-lg text-center">
          <p className="text-slate-400 font-mono text-sm">
            <span className="text-emerald-500">// </span>
            More projects coming soon as I continue my journey into backend development
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
