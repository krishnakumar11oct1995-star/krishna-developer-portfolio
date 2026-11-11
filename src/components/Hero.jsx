import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Download, 
  FileText, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Zap, 
  Award, 
  ExternalLink, 
  Code2, 
  Database, 
  RefreshCw, 
  Play 
} from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolioData';

export default function Hero({ onNavigate }) {
  const [activeLogStep, setActiveLogStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(true);

  const logs = [
    { type: 'info', text: 'Apex [PatientRoutingEngine]: Initializing in-memory metadata rule map...' },
    { type: 'success', text: 'Loaded 170+ Rules & 1,100+ Evaluation Conditions (Cache O(1))' },
    { type: 'info', text: 'Ingesting 1,000,000+ Daily Encounters via MuleSoft REST Hook...' },
    { type: 'success', text: 'Auto-assigned 1,000,000 encounters to collector work queues (0ms breach)' },
    { type: 'info', text: 'Database.executeBatch(new ClaimNightlyBatch(), 2000) started...' },
    { type: 'success', text: 'ClaimNightlyBatch synchronized 4.4M payment records & 1.3M denial lines.' },
  ];

  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setActiveLogStep((prev) => (prev + 1) % logs.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isSimulating, logs.length]);

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/8 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Salesforce Developer &amp; Technical Lead</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300">2x Certified</span>
            </div>

            {/* Main Headline with Fluid Typography */}
            <div className="space-y-2">
              <h1 className="fluid-hero-title font-extrabold tracking-tight text-white">
                Hi, I'm <span className="gradient-sf-text">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-slate-200">
                Architecting High-Scale <span className="text-sky-400">Apex</span>, Reactive <span className="text-indigo-400">LWC</span> &amp; Autonomous <span className="text-cyan-300">Flows</span>.
              </p>
            </div>

            {/* Elevator Pitch */}
            <p className="fluid-body text-slate-300 leading-relaxed max-w-2xl">
              Specialized in designing enterprise-grade Salesforce architectures, dynamic rule evaluation engines processing <strong className="text-white">1M+ daily records</strong>, high-volume off-platform data pipelines (<strong className="text-white">MuleSoft &amp; Snowflake</strong>), and custom <strong className="text-white">Lightning Web Components</strong> for high-throughput teams.
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                'High-Scale Apex Architecture',
                'Lightning Web Components (LWC)',
                'MuleSoft & Snowflake Integrations',
                'Custom Metadata Dynamic Engines',
                'Enterprise Flows & Approval Engines',
                'Queueable & Batch Scaling',
                'Google DocAI & OCR Pipelines'
              ].map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900 text-sky-300 border border-slate-800 shadow-sm flex items-center gap-1.5 hover:border-sky-500/40 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate && onNavigate('projects')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-tap-target"
              >
                <span>Explore Architecture Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate && onNavigate('experience')}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-750 hover:border-sky-500/40 transition-all w-full sm:w-auto min-tap-target"
              >
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Leadership Timeline</span>
              </button>

              <a
                href={personalInfo.resumeDocx}
                download="Krishna_Kumar_Salesforce_Resume.docx"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-sky-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-all w-full sm:w-auto min-tap-target"
                title="Download ATS DOCX Resume"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Certifications Badge Bar */}
            <div className="pt-4 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                Certifications:
              </span>
              {certifications.map((cert, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cert.color}`}></div>
                  <span className="font-medium text-slate-200">{cert.title}</span>
                </div>
              ))}
              <a 
                href={personalInfo.trailhead}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline flex items-center gap-1 font-mono text-[11px]"
              >
                <span>Verify on Trailhead</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Card & Salesforce Live Terminal */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
            
            {/* Profile Avatar Card */}
            <div className="relative group w-full max-w-sm">
              <div className="relative glass-card rounded-3xl p-5 border border-slate-800 shadow-2xl overflow-hidden bg-[#0c1428]/90">
                
                <div className="flex items-center gap-4">
                  {/* Photo with Glowing Ring */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-2 ring-sky-400/40 shadow-inner bg-slate-900">
                      <img 
                        src={personalInfo.profileImage} 
                        alt={personalInfo.name} 
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-slate-900 px-2 py-0.5 rounded-full border border-sky-500/40 text-[10px] font-mono text-sky-300 flex items-center gap-1 shadow">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Lead</span>
                    </div>
                  </div>

                  {/* Profile Summary info */}
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-lg text-slate-100">{personalInfo.name}</h3>
                      <Award className="w-4 h-4 text-sky-400" />
                    </div>
                    <p className="text-xs font-medium text-sky-400">Technical Lead &amp; SFDC Dev</p>
                    <p className="text-xs text-slate-400">{personalInfo.location}</p>
                    
                    <div className="pt-2 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Open for Roles
                      </span>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="px-2 py-0.5 rounded text-[10px] font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20 hover:bg-sky-500/20 transition-colors"
                      >
                        Email Me
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Live Interactive Salesforce Architecture Console */}
            <div className="w-full max-w-sm rounded-2xl glass-card border border-slate-800 shadow-2xl overflow-hidden bg-[#0a1020]/90">
              
              {/* Terminal Header */}
              <div className="bg-[#0c1428] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-1 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>Apex Execution Monitor</span>
                  </span>
                </div>
                
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className="text-slate-400 hover:text-sky-400 text-xs p-1"
                  title={isSimulating ? 'Pause Terminal' : 'Resume Terminal'}
                  aria-label="Toggle Terminal Animation"
                >
                  <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {/* Terminal Body */}
              <div className="p-4 font-mono text-xs space-y-2 bg-[#050811] min-h-[160px]">
                <div className="text-slate-500 text-[11px] pb-1 border-b border-slate-850 flex items-center justify-between">
                  <span>ORG: ALLIANCE_PROD [v62.0]</span>
                  <span className="text-emerald-400">STATUS: HEALTHY</span>
                </div>

                {logs.slice(0, activeLogStep + 1).map((log, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-2 leading-relaxed animate-in fade-in duration-300 ${
                      log.type === 'success' ? 'text-emerald-400' : 'text-slate-300'
                    }`}
                  >
                    <span className="text-sky-400 select-none">&gt;</span>
                    <span>{log.text}</span>
                  </div>
                ))}
                
                <div className="flex items-center gap-1 text-sky-400 pt-1">
                  <span className="animate-pulse">_</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.slice(0, 4).map((stat, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-800 hover:border-sky-500/30 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 group-hover:from-sky-300 group-hover:to-indigo-400 transition-all font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
