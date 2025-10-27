import React from 'react';
import { Code, Database, Server, ArrowRight } from 'lucide-react';

const About = () => {
  const journey = [
    {
      phase: 'Frontend Foundation',
      icon: Code,
      description: 'Started with HTML, CSS, and JavaScript, building interactive user interfaces',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      phase: 'Full Stack Transition',
      icon: Server,
      description: 'Expanded into MERN stack, connecting frontend with backend systems',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-teal-500/30'
    },
    {
      phase: 'Backend Mastery (Current)',
      icon: Database,
      description: 'Deep diving into server-side architecture, databases, and system design',
      tech: ['MongoDB', 'Python', 'System Design', 'APIs'],
      color: 'from-emerald-500/30 to-green-500/30',
      borderColor: 'border-emerald-500/50'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-emerald-500 font-mono text-sm mb-2">// About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Development <span className="text-emerald-500">Journey</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            From building simple web pages to architecting complex backend systems, 
            I'm constantly evolving as a developer. Currently in my 3rd year at Kakinada Institute of Engineering & Technology.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 via-teal-500/30 to-emerald-500/50"></div>

          <div className="space-y-12">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  <div className={`md:grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                    {/* Content Card */}
                    <div className={isEven ? '' : 'md:col-start-2'}>
                      <div className={`p-6 bg-gradient-to-br ${item.color} border ${item.borderColor} rounded-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300`}>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-3 bg-emerald-500/10 rounded-lg">
                            <Icon className="w-6 h-6 text-emerald-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{item.phase}</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-[#0a0a0a]/50 border border-emerald-500/30 text-emerald-400 rounded text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-[#0a0a0a] z-10"></div>

                    {/* Arrow (for desktop) */}
                    <div className={`hidden md:flex items-center justify-center ${isEven ? 'md:col-start-2' : 'md:col-start-1'}`}>
                      <ArrowRight className={`w-8 h-8 text-emerald-500/50 ${isEven ? '' : 'rotate-180'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg text-center">
          <p className="text-slate-300 text-lg mb-4">
            Currently focused on building scalable backend systems and mastering database design.
          </p>
          <p className="text-emerald-400 font-mono text-sm">
            <span className="text-slate-500">console.log(</span>"Always learning, always growing"<span className="text-slate-500">);</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
