import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Layers, 
  Activity, 
  Cpu, 
  Calendar, 
  Building, 
  Zap, 
  Sparkles, 
  ShieldAlert, 
  Wrench, 
  CheckCircle2, 
  Server 
} from 'lucide-react';
import { projectsData, projectFilterTags } from '../data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedTag === 'All'
    ? projectsData
    : projectsData.filter(p => p.categoryTags.includes(selectedTag));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Architecture Showcase &amp; Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Enterprise System Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            High-throughput enterprise case studies abstracted into three critical technical pillars: <strong className="text-amber-400">The Architectural Challenge</strong>, <strong className="text-sky-400">The Ecosystem Solution</strong>, and <strong className="text-emerald-400">Quantifiable Business ROI</strong>.
          </p>
        </div>

        {/* Client-Side Technology Tag Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectFilterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedTag === tag
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25 border border-sky-400 scale-105'
                  : 'glass-card text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Responsive Grid / Masonry Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden bg-[#0c1428]/85"
            >
              {/* Flagship Indicator */}
              {project.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-l from-sky-500 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-bl-xl shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Flagship Architecture</span>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                
                {/* Meta Header */}
                <div className="space-y-2 pr-12">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold">
                      {project.primaryTag}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {project.period}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Building className="w-3.5 h-3.5 text-sky-400" />
                    <span className="font-medium text-slate-300">{project.client}</span>
                    <span className="text-slate-600">•</span>
                    <span>{project.role}</span>
                  </div>
                </div>

                {/* 3 Core Synthesized Pillars */}
                <div className="space-y-3 pt-1">
                  
                  {/* 1. Core Architectural Challenge */}
                  <div className="p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1 group-hover:border-amber-500/30 transition-colors">
                    <div className="text-[11px] font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>1. The Architectural Challenge</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {project.threeMetrics.challenge}
                    </p>
                  </div>

                  {/* 2. Tech Stack / Solution */}
                  <div className="p-3.5 rounded-2xl bg-sky-500/5 border border-sky-500/20 space-y-1 group-hover:border-sky-500/30 transition-colors">
                    <div className="text-[11px] font-mono uppercase font-bold text-sky-400 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5" />
                      <span>2. Technical Solution &amp; Ecosystem</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {project.threeMetrics.solution}
                    </p>
                  </div>

                  {/* 3. Quantifiable Business ROI */}
                  <div className="p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-1 group-hover:border-emerald-500/30 transition-colors">
                    <div className="text-[11px] font-mono uppercase font-bold text-emerald-400 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" />
                      <span>3. Quantifiable Business ROI</span>
                    </div>
                    <p className="text-xs text-slate-200 font-semibold leading-relaxed line-clamp-2">
                      {project.threeMetrics.roi}
                    </p>
                  </div>

                </div>

                {/* Hover-Revealed Implementation Preview */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <div className="flex items-center gap-2 line-clamp-1">
                    <Server className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    <span>Classes: {project.deepDive?.apexClasses?.[0] || 'Custom Apex Service Layer'}</span>
                  </div>
                  <span className="text-sky-400 text-[10px] hidden sm:inline font-semibold">90%+ Test Coverage</span>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.categoryTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Trigger Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Full Technical Deep Dive
                </span>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-md shadow-sky-500/20 group/btn min-tap-target"
                >
                  <span>Explore Architecture &amp; Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Deep Dive Modal */}
      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
