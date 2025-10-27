import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1f1f1f]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Terminal className="w-6 h-6 text-emerald-500" />
            <span className="text-white font-mono text-lg font-semibold">Sai_Dev</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-emerald-500 transition-colors duration-200 font-mono text-sm">
              <span className="text-emerald-500">//</span> about
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-400 hover:text-emerald-500 transition-colors duration-200 font-mono text-sm">
              <span className="text-emerald-500">//</span> skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-400 hover:text-emerald-500 transition-colors duration-200 font-mono text-sm">
              <span className="text-emerald-500">//</span> projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-emerald-500 transition-colors duration-200 font-mono text-sm">
              <span className="text-emerald-500">//</span> contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-emerald-500 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-[#1f1f1f] pt-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-emerald-500 transition-colors duration-200 font-mono text-sm text-left">
              <span className="text-emerald-500">//</span> about
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-400 hover:text-emerald-500 transition-colors duration-200 font-mono text-sm text-left">
              <span className="text-emerald-500">//</span> skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-400 hover:text-emerald-500 transition-colors duration-200 font-mono text-sm text-left">
              <span className="text-emerald-500">//</span> projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-emerald-500 transition-colors duration-200 font-mono text-sm text-left">
              <span className="text-emerald-500">//</span> contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
