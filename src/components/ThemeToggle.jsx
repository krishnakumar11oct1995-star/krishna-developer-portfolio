import React, { useState, useEffect } from 'react';
import { Moon, Sparkles } from 'lucide-react';

export default function ThemeToggle() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.backgroundColor = '#080c17';
  }, []);

  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-sky-400 select-none shadow-sm">
      <Moon className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" />
      <span className="font-semibold text-[11px] text-slate-200">Dark Mode</span>
    </div>
  );
}
