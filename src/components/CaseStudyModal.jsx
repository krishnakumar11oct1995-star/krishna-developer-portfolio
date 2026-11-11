import React, { useState } from 'react';
import { 
  X, 
  Layers, 
  Code2, 
  Activity, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Cpu, 
  Calendar,
  Building,
  UserCheck,
  Zap,
  ShieldCheck,
  Server
} from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopy = () => {
    if (project.deepDive?.codeSnippet) {
      navigator.clipboard.writeText(project.deepDive.codeSnippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] glass-card rounded-3xl border border-sky-500/30 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 bg-[#0a1020]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 bg-[#0c1428]/95 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold">
                {project.primaryTag}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {project.period}
              </span>
            </div>
            <h2 id="case-study-modal-title" className="text-lg sm:text-2xl font-bold text-slate-100 leading-snug">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-slate-300 font-medium">
                <Building className="w-3.5 h-3.5 text-sky-400" />
                {project.client}
              </span>
              <span className="flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
                {project.role}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 transition-colors border border-slate-750 flex-shrink-0 min-tap-target"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-slate-800 bg-[#080d1a] flex gap-2 sm:gap-4 overflow-x-auto">
          {[
            { id: 'overview', label: '3 Pillars & Scope', icon: Layers },
            { id: 'diagram', label: 'System Topology', icon: Activity },
            { id: 'code', label: 'Technical Code & Classes', icon: Code2 },
            { id: 'governance', label: 'Governor Limits & QA', icon: ShieldCheck }
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-3.5 px-2 text-xs sm:text-sm font-medium border-b-2 transition-all whitespace-nowrap min-tap-target ${
                  isActive
                    ? 'border-sky-400 text-sky-400 font-semibold'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-300 flex-1">
          
          {/* Tab 1: 3 Pillars & Scope */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* 3 Core Synthesized Pillars */}
              <div className="space-y-4">
                
                {/* 1. Core Architectural Challenge */}
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1">
                  <div className="font-mono text-xs uppercase font-bold text-amber-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>1. The Core Architectural Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-4 border-l border-amber-500/30">
                    {project.threeMetrics.challenge}
                  </p>
                </div>

                {/* 2. Tech Stack & Solution */}
                <div className="p-4 rounded-2xl bg-sky-500/5 border border-sky-500/20 space-y-1">
                  <div className="font-mono text-xs uppercase font-bold text-sky-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                    <span>2. Ecosystem Architecture &amp; Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pl-4 border-l border-sky-500/30">
                    {project.threeMetrics.solution}
                  </p>
                </div>

                {/* 3. Quantifiable Business ROI */}
                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
                  <div className="font-mono text-xs uppercase font-bold text-emerald-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>3. Quantifiable Business ROI</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed pl-4 border-l border-emerald-500/30">
                    {project.threeMetrics.roi}
                  </p>
                </div>

              </div>

              {/* System Scope */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="text-xs font-mono uppercase text-slate-400">
                  Application Architecture Scope:
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.deepDive?.systemScope}
                </p>
              </div>

              {/* Tag Categories */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.categoryTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-900 text-sky-300 border border-slate-800 text-xs font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>
          )}

          {/* Tab 2: System Topology */}
          {activeTab === 'diagram' && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="text-xs text-slate-400 font-mono uppercase flex items-center justify-between">
                <span>System Data Flow &amp; Execution Topology:</span>
                <span className="text-sky-400">ASCII Architecture Map</span>
              </div>
              <pre className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-sky-300 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed whitespace-pre shadow-inner">
                {project.deepDive?.architectureWorkflow}
              </pre>
            </div>
          )}

          {/* Tab 3: Code & Apex Classes */}
          {activeTab === 'code' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              
              {/* Apex Class Inventory */}
              {project.deepDive?.apexClasses && (
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-sky-400" />
                    <span>Engineered Apex Classes &amp; Controllers:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.deepDive.apexClasses.map((cls, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                        {cls}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Code Snippet */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono uppercase">
                    Core Technical Code Snippet:
                  </span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-750 transition-colors min-tap-target"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? 'Copied to Clipboard!' : 'Copy Code'}</span>
                  </button>
                </div>

                <pre className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-emerald-300 font-mono text-xs sm:text-sm overflow-x-auto leading-relaxed shadow-inner">
                  <code>{project.deepDive?.codeSnippet}</code>
                </pre>
              </div>

            </div>
          )}

          {/* Tab 4: Governance & QA */}
          {activeTab === 'governance' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="text-xs font-mono uppercase font-bold text-sky-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Governor Limits Mitigation Strategy:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.deepDive?.governorMitigation}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="text-xs font-mono uppercase font-bold text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Unit Test Strategy &amp; Code Quality:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.deepDive?.testCoverage}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-800 bg-[#080d1a] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500">
            Case Study: {project.id}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-750 transition-colors min-tap-target"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
