import React from 'react';
import { 
  Cloud, 
  ArrowUp, 
  Award, 
  Mail, 
  FileText, 
  ShieldCheck, 
  ExternalLink,
  MapPin,
  Heart
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden text-slate-300"
      role="contentinfo"
    >
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-850">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Cloud className="w-6 h-6 fill-sky-400/20" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-100">{personalInfo.name}</h3>
                <p className="text-xs font-mono text-sky-400">Salesforce Developer &amp; Technical Lead</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Architecting high-scale Apex routing engines, reactive Lightning Web Components, and bi-directional enterprise integrations across Healthcare, Insurance, and Manufacturing.
            </p>

            {/* Social & Direct Links with Scalable SVG Icons */}
            <div className="flex items-center gap-3 pt-2">
              
              {/* GitHub SVG */}
              <a
                href={personalInfo.github || "https://github.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-400 flex items-center justify-center text-slate-300 hover:text-white transition-all min-tap-target"
                aria-label="Krishna Kumar on GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href={personalInfo.linkedin || "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-400 flex items-center justify-center text-slate-300 hover:text-sky-400 transition-all min-tap-target"
                aria-label="Krishna Kumar on LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0-.01-2.9 1.45 1.45 0 0 0 .01 2.9m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>

              {/* Trailhead SVG */}
              <a
                href={personalInfo.trailhead}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-400 flex items-center justify-center text-sky-400 hover:text-white transition-all min-tap-target"
                aria-label="Krishna Kumar's Verified Trailhead Profile"
              >
                <Award className="w-5 h-5" aria-hidden="true" />
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-400 flex items-center justify-center text-slate-300 hover:text-sky-300 transition-all min-tap-target"
                aria-label={`Send direct email to ${personalInfo.email}`}
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>

            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <nav 
            className="lg:col-span-3 space-y-3"
            aria-label="Footer Quick Links"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              {[
                { name: 'About & Hero', id: 'hero' },
                { name: 'Technical Skills Matrix', id: 'skills' },
                { name: 'Architecture Case Studies', id: 'projects' },
                { name: 'Leadership & Experience', id: 'experience' },
                { name: 'Discoveries Feed (CMS)', id: 'discoveries' },
                { name: 'Contact & Hire', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate(item.id);
                    }}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5 min-tap-target"
                  >
                    <span className="text-slate-600 font-mono">&gt;</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Quick Credentials & Direct Contact */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Direct Contact &amp; Credentials
            </div>
            
            <address className="not-italic space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="text-slate-200 hover:text-sky-300 transition-colors">
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>{personalInfo.location} (Open to Global Remote)</span>
              </div>
            </address>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={personalInfo.resumeDocx}
                download="Krishna_Kumar_Salesforce_Resume.docx"
                className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-[11px] text-slate-300 hover:text-white transition-colors min-tap-target"
              >
                <FileText className="w-3.5 h-3.5 text-sky-400" />
                <span>Resume (DOCX)</span>
              </a>
              <a
                href={personalInfo.resumePdf}
                download="Krishna_Kumar_Salesforce_Resume.pdf"
                className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-[11px] text-slate-300 hover:text-white transition-colors min-tap-target"
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Krishna Kumar. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors min-tap-target"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

      </div>
    </footer>
  );
}
