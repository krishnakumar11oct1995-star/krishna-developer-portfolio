import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Download, 
  FileText, 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  CheckCircle2,
  Zap,
  Activity,
  Layers,
  ArrowRight
} from 'lucide-react';
import { 
  experienceData, 
  careerVelocityStages, 
  certifications, 
  personalInfo 
} from '../data/portfolioData';

export default function Experience() {
  const [expandedRoles, setExpandedRoles] = useState({ 0: true });

  const toggleRoleExpand = (idx) => {
    setExpandedRoles(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Career Trajectory &amp; Leadership Velocity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Leadership &amp; Engineering Timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Distilled through the <strong className="text-slate-200">STAR method</strong> (Situation, Task, Action, Result) to demonstrate rapid career velocity from hands-on CRM development into high-scale Salesforce Technical Leadership and Architecture.
          </p>
        </div>

        {/* Career Velocity Milestone Tracker */}
        <div className="mb-14 grid grid-cols-1 md:grid-cols-4 gap-3.5">
          {careerVelocityStages.map((stage, idx) => {
            const isCurrent = idx === 0;
            return (
              <div 
                key={idx}
                className={`glass-card rounded-2xl p-4 border transition-all duration-300 relative overflow-hidden ${
                  isCurrent 
                    ? 'border-sky-400/50 bg-gradient-to-br from-sky-950/30 via-slate-900/60 to-slate-950/80 shadow-lg shadow-sky-500/10' 
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-sky-400 font-bold">
                    {stage.period}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono text-white bg-gradient-to-r ${stage.color}`}>
                    {stage.badge}
                  </span>
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-200 leading-snug">
                  {stage.phase.split(':')[1] || stage.phase}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {stage.summary}
                </p>
              </div>
            );
          })}
        </div>

        {/* ATS Resume Quick Download Banner */}
        <div className="glass-card rounded-2xl p-5 sm:p-6 mb-16 border border-sky-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-[#0c1836]/70 via-[#0b1329]/90 to-[#0c1836]/70 shadow-xl">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-slate-100 text-sm sm:text-base flex items-center gap-2">
                <span>Looking for the Official Resume?</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">ATS-Optimized</span>
              </div>
              <div className="text-xs text-slate-400">
                Directly download the complete chronological resume in Word (DOCX) or PDF format.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={personalInfo.resumeDocx}
              download="Krishna_Kumar_Salesforce_Resume.docx"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 transition-all shadow-md shadow-sky-600/20 min-tap-target"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume (DOCX)</span>
            </a>
            <a
              href={personalInfo.resumePdf}
              download="Krishna_Kumar_Salesforce_Resume.pdf"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all min-tap-target"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Interactive STAR Timeline */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-slate-800/80">
              
              {experienceData.map((exp, idx) => {
                const isExpanded = expandedRoles[idx];
                const isCurrent = idx === 0;

                return (
                  <div key={exp.id} className="relative pl-10 sm:pl-14 group">
                    
                    {/* Timeline Node Icon */}
                    <div className={`absolute left-2 sm:left-4 -translate-x-1/2 top-2.5 w-6 h-6 rounded-full border-2 flex items-center justify-center shadow-md ${
                      isCurrent 
                        ? 'bg-sky-500 border-sky-400 ring-4 ring-sky-500/20' 
                        : 'bg-slate-900 border-slate-700 group-hover:border-sky-400'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-white' : 'bg-sky-400'}`}></div>
                    </div>

                    {/* Timeline Card */}
                    <div className={`glass-card rounded-3xl p-6 sm:p-7 border transition-all duration-300 space-y-5 ${
                      isCurrent 
                        ? 'border-sky-500/30 shadow-2xl bg-[#0c1428]/90' 
                        : 'border-slate-800 hover:border-sky-500/30'
                    }`}>
                      
                      {/* Card Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800/80">
                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-bold text-lg sm:text-xl text-slate-100">
                              {exp.role}
                            </h3>
                            {isCurrent && (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                                Current Role
                              </span>
                            )}
                          </div>

                          <div className="text-sm font-semibold text-sky-400 flex items-center gap-2">
                            <span>{exp.company}</span>
                            <span className="text-slate-600">•</span>
                            <span className="text-xs text-slate-400 font-normal">{exp.location}</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                          <span className="flex items-center gap-1 text-slate-300">
                            <Calendar className="w-3.5 h-3.5 text-sky-400" />
                            {exp.period}
                          </span>
                          <span className="text-[11px] text-slate-500 font-sans">
                            {exp.tenure}
                          </span>
                        </div>
                      </div>

                      {/* Leadership Scope & Ownership */}
                      <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
                        <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-100">Leadership Scope: </span>
                          <span className="text-slate-300 leading-relaxed">{exp.leadershipScope}</span>
                        </div>
                      </div>

                      {/* Leadership Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {exp.leadershipBadges.map((badge, bIdx) => (
                          <span 
                            key={bIdx}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>

                      {/* Key Quantified Impact Grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                        {exp.metricsHighlights.map((m, mIdx) => (
                          <div 
                            key={mIdx}
                            className="p-3 rounded-xl bg-slate-950/70 border border-slate-850 space-y-0.5"
                          >
                            <div className="text-xs sm:text-sm font-mono font-bold text-sky-400">
                              {m.value}
                            </div>
                            <div className="text-[10px] font-medium text-slate-300 line-clamp-1">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* STAR Method Breakdown Drawer */}
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                            <Target className="w-3.5 h-3.5 text-sky-400" />
                            <span>STAR Trajectory Analysis:</span>
                          </span>
                          <button
                            onClick={() => toggleRoleExpand(idx)}
                            className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                            aria-expanded={isExpanded}
                          >
                            <span>{isExpanded ? 'Collapse' : 'Expand STAR Details'}</span>
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 text-xs animate-in fade-in duration-200">
                            
                            {/* Situation */}
                            <div className="space-y-1">
                              <div className="font-mono uppercase font-bold text-amber-400 text-[11px] flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                <span>Situation:</span>
                              </div>
                              <p className="text-slate-300 leading-relaxed pl-3 border-l-2 border-amber-400/30">
                                {exp.star.situation}
                              </p>
                            </div>

                            {/* Task */}
                            <div className="space-y-1">
                              <div className="font-mono uppercase font-bold text-sky-400 text-[11px] flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                                <span>Task:</span>
                              </div>
                              <p className="text-slate-300 leading-relaxed pl-3 border-l-2 border-sky-400/30">
                                {exp.star.task}
                              </p>
                            </div>

                            {/* Action Bullets */}
                            <div className="space-y-1.5">
                              <div className="font-mono uppercase font-bold text-indigo-400 text-[11px] flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                                <span>Architectural Actions:</span>
                              </div>
                              <ul className="space-y-2 pl-3 border-l-2 border-indigo-400/30">
                                {exp.star.action.map((act, aIdx) => (
                                  <li key={aIdx} className="text-slate-300 leading-relaxed flex items-start gap-2">
                                    <span className="w-1 h-1 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></span>
                                    <span>{act}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Quantified Results */}
                            <div className="space-y-1.5 pt-2 border-t border-slate-800">
                              <div className="font-mono uppercase font-bold text-emerald-400 text-[11px] flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                <span>Quantifiable Results &amp; Business ROI:</span>
                              </div>
                              <ul className="space-y-1.5 pl-3 border-l-2 border-emerald-400/30">
                                {exp.star.result.map((res, rIdx) => (
                                  <li key={rIdx} className="text-slate-200 font-medium leading-relaxed flex items-start gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span>{res}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                          </div>
                        )}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>
          </div>

          {/* Right Column: Certifications & Verification */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Certifications Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  <h3 className="font-bold text-base text-slate-100">
                    Official Salesforce Credentials
                  </h3>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Verified
                </span>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold text-sky-300 bg-sky-500/10 border border-sky-500/20">
                        {cert.badge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cert.issuer}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-slate-100 group-hover:text-sky-400 transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={personalInfo.trailhead}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-semibold text-sky-400 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 transition-all"
              >
                <Award className="w-4 h-4" />
                <span>Verify on Official Trailhead Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Education Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-base text-slate-100">
                  Education &amp; Technical Foundation
                </h3>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-sm text-slate-100">
                  B.COM (Computers)
                </h4>
                <div className="text-xs text-slate-400">
                  YPR Degree College, Siddipet (2013–2016)
                </div>
                <div className="text-xs text-slate-500 pt-1 leading-relaxed">
                  Rigorous academic training in computer applications, relational database management, data structures, and enterprise financial accounting models.
                </div>
              </div>
            </div>

            {/* Recruiter Summary Card */}
            <div className="glass-card rounded-3xl p-6 border border-slate-800 space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-400 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Recruiter Signal Summary</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>3+ Years Enterprise Salesforce Experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>1M+ Daily Record Apex Routing Scale</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>MuleSoft &amp; Snowflake Batch Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>2,600+ Lines Advanced LWC Development</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
