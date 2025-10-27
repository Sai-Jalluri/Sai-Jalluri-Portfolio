import React from 'react';
import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-[#0a0a0a] border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Brand */}
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-500" />
            <span className="text-slate-400 font-mono text-sm">
              Sai_Dev <span className="text-slate-600">© {currentYear}</span>
            </span>
          </div>

          {/* Center - Made with love */}
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span className="font-mono">Built with</span>
            <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
            <span className="font-mono">using React & Tailwind CSS</span>
          </div>

          {/* Right - Quote */}
          <div className="text-slate-500 font-mono text-xs">
            <span className="text-emerald-500">//</span> Keep coding, keep growing
          </div>
        </div>

        {/* Bottom - Code Quote */}
        <div className="mt-6 pt-6 border-t border-slate-800/50 text-center">
          <p className="text-slate-600 font-mono text-xs">
            <span className="text-slate-500">console.log(</span>
            <span className="text-amber-400">"Thanks for visiting!"</span>
            <span className="text-slate-500">);</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
