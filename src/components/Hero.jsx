import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-emerald-500 font-mono text-sm">
                <span className="text-slate-500">const</span> developer = {'{'};
              </p>
              <div className="pl-6 space-y-1">
                <p className="text-slate-400 font-mono text-sm">
                  name: <span className="text-amber-400">"Jalluri Venkata Sri Sai"</span>,
                </p>
                <p className="text-slate-400 font-mono text-sm">
                  role: <span className="text-amber-400">"<span className="typing-cursor">{displayText}</span><span className="animate-pulse">|</span>"</span>
                </p>
              </div>
              <p className="text-emerald-500 font-mono text-sm">{'}'};</p>
            </div>

            <div className="pt-4">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Hi, I'm <span className="text-emerald-500">Sai</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Crafting robust backend systems while building full-stack experiences.
                Currently focusing on <span className="text-emerald-500 font-semibold">server-side architecture</span> and databases.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={scrollToAbout}
                className="px-6 py-3 bg-emerald-500 text-black font-mono text-sm font-semibold rounded hover:bg-emerald-400 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/30"
              >
                Explore My Work
              </button>
              <a
                href="#contact"
                className="px-6 py-3 border border-emerald-500 text-emerald-500 font-mono text-sm font-semibold rounded hover:bg-emerald-500/10 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 rounded-full blur-2xl"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_react-portfolio-31/artifacts/16z0jk8n_WhatsApp%20Image%202025-09-13%20at%2011.08.37_251e81d1.jpg"
                alt="Jalluri Venkata Sri Sai"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-emerald-500/30 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer" onClick={scrollToAbout}>
        <ChevronDown className="w-8 h-8 text-emerald-500" />
      </div>
    </section>
  );
};

export default Hero;
