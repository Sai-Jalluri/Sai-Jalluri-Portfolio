import React, { useState } from 'react';
import { Database, Code2, Server, GitBranch, FileCode, Monitor } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: Monitor,
      color: 'text-blue-400',
      skills: [
        { name: 'React.js', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 85 }
      ]
    },
    backend: {
      title: 'Backend & Databases',
      icon: Database,
      color: 'text-emerald-400',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 80 },
        { name: 'Python', level: 70 }
      ]
    },
    tools: {
      title: 'Tools & Platforms',
      icon: GitBranch,
      color: 'text-amber-400',
      skills: [
        { name: 'Git & GitHub', level: 75 },
        { name: 'VS Code', level: 90 }
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: Code2,
      color: 'text-purple-400',
      skills: [
        { name: 'Communication', level: 85 },
        { name: 'Leadership', level: 80 },
        { name: 'Teamwork', level: 90 }
      ]
    }
  };

  const allSkills = Object.entries(skillCategories).flatMap(([key, category]) =>
    category.skills.map(skill => ({ ...skill, category: key, categoryData: category }))
  );

  const displaySkills = activeCategory === 'all'
    ? allSkills
    : allSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-6 bg-[#0f0f0f] relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-emerald-500 font-mono text-sm mb-2">// Technical Proficiency</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-emerald-500">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            A comprehensive toolkit built through hands-on projects and continuous learning.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded font-mono text-sm transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-emerald-500 text-black font-semibold'
                : 'bg-[#1a1a1a] text-slate-400 hover:text-emerald-500 border border-slate-700'
            }`}
          >
            all_skills
          </button>
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded font-mono text-sm transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === key
                    ? 'bg-emerald-500 text-black font-semibold'
                    : 'bg-[#1a1a1a] text-slate-400 hover:text-emerald-500 border border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.title.toLowerCase().replace(/ /g, '_')}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySkills.map((skill, index) => {
            const Icon = skill.categoryData.icon;
            return (
              <div
                key={index}
                className="p-6 bg-[#1a1a1a] border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${skill.categoryData.color}`} />
                    <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <span className="text-emerald-500 font-mono text-sm font-bold">{skill.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-[#0a0a0a] rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <p className="text-slate-500 text-xs font-mono mt-2">
                  {skill.categoryData.title}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stack Showcase */}
        <div className="mt-16 p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-lg">
          <p className="text-slate-400 font-mono text-sm mb-4">// Primary Tech Stack</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Database className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
              <p className="text-white font-semibold">MongoDB</p>
              <p className="text-slate-500 text-xs">Database</p>
            </div>
            <div className="text-center">
              <Server className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
              <p className="text-white font-semibold">Express.js</p>
              <p className="text-slate-500 text-xs">Backend</p>
            </div>
            <div className="text-center">
              <Monitor className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
              <p className="text-white font-semibold">React.js</p>
              <p className="text-slate-500 text-xs">Frontend</p>
            </div>
            <div className="text-center">
              <FileCode className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
              <p className="text-white font-semibold">Node.js</p>
              <p className="text-slate-500 text-xs">Runtime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
