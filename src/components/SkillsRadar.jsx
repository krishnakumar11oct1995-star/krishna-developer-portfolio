import React, { useState } from 'react';
import { 
  Server, 
  Layout, 
  Network, 
  ShieldCheck, 
  Workflow, 
  CheckCircle2, 
  Cpu, 
  Terminal, 
  Zap, 
  Cloud 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsRadar() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const iconMap = {
    Server: Server,
    Layout: Layout,
    Network: Network,
    ShieldCheck: ShieldCheck,
    Workflow: Workflow
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Salesforce Architecture &amp; Engineering Arsenal
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            A comprehensive matrix of core competencies spanning governor-limit resilient Apex, reactive UI, high-volume off-platform cloud integrations, and enterprise security.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Cloud;
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 border border-sky-400 scale-105'
                    : 'glass-card text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Category Summary Box */}
          <div className="lg:col-span-4 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
              {React.createElement(iconMap[skillCategories[activeCategoryIndex].icon] || Cloud, { className: 'w-6 h-6' })}
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-100">
                {skillCategories[activeCategoryIndex].category}
              </h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {skillCategories[activeCategoryIndex].description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Enterprise Standards:
              </div>
              <div className="flex flex-col space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Single Trigger Per Object Framework</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>In-Memory O(1) Metadata Caching</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Unit Test Coverage &gt; 90% with Mocks</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>SLDS Design Tokens &amp; Accessibility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories[activeCategoryIndex].skills.map((skill, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-100">{skill.name}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {skill.tag}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>Proficiency</span>
                    <span className="text-sky-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
