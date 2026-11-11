import React, { useState, useEffect, useRef } from 'react';
import { 
  Cloud, 
  Menu, 
  X, 
  FileText, 
  Download, 
  ExternalLink, 
  Mail, 
  Award, 
  Layers, 
  Briefcase, 
  Compass, 
  CheckCircle2, 
  ChevronDown 
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeDropdownOpen, setResumeDropdownOpen] = useState(false);
  
  const hamburgerButtonRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility: Escape key and Focus Trap for Mobile Drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          hamburgerButtonRef.current?.focus();
        }
        if (resumeDropdownOpen) {
          setResumeDropdownOpen(false);
        }
      }

      // Focus trap within mobile drawer
      if (mobileMenuOpen && drawerRef.current && e.key === 'Tab') {
        const focusableElements = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, resumeDropdownOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Architecture', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Discoveries', href: '#discoveries' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    setMobileMenuOpen(false);
    setResumeDropdownOpen(false);
    if (onNavigate) {
      onNavigate(href.replace('#', ''));
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-lg py-2.5 sm:py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#hero'); }}
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl"
            aria-label="Krishna Kumar - Salesforce Technical Lead Home"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-sky-500/30 group-hover:ring-sky-400 transition-all duration-300 shadow-md flex items-center justify-center bg-slate-900">
                <img 
                  src={personalInfo.profileImage} 
                  alt={`${personalInfo.name} Profile`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-[#070b14] flex items-center justify-center" title="Active Technical Lead">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm sm:text-base tracking-tight text-slate-100 group-hover:text-sky-400 transition-colors">
                  {personalInfo.name}
                </span>
                <Cloud className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" aria-hidden="true" />
              </div>
              <span className="text-[11px] text-sky-400/90 font-mono flex items-center gap-1">
                SFDC Technical Lead
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden md:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800/80 shadow-inner backdrop-blur-md"
            aria-label="Desktop Navigation"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 min-tap-target ${
                    isActive
                      ? 'bg-sky-500/20 text-sky-400 shadow-sm border border-sky-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Resume Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResumeDropdownOpen(!resumeDropdownOpen)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-sky-500/40 transition-all shadow-sm min-tap-target"
                aria-haspopup="true"
                aria-expanded={resumeDropdownOpen}
                aria-label="Download Resume Options"
              >
                <Download className="w-3.5 h-3.5 text-sky-400" aria-hidden="true" />
                <span>Resume</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${resumeDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>

              {resumeDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-52 rounded-2xl glass-card p-1.5 shadow-2xl border border-sky-500/30 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                  onMouseLeave={() => setResumeDropdownOpen(false)}
                >
                  <a
                    href={personalInfo.resumeDocx}
                    download="Krishna_Kumar_Salesforce_Resume.docx"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-200 hover:bg-sky-500/15 hover:text-sky-300 transition-colors"
                    role="menuitem"
                  >
                    <FileText className="w-4 h-4 text-sky-400" />
                    <div className="flex flex-col text-left">
                      <span className="font-semibold">Download Word (ATS)</span>
                      <span className="text-[10px] text-slate-400">DOCX format</span>
                    </div>
                  </a>
                  <a
                    href={personalInfo.resumePdf}
                    download="Krishna_Kumar_Salesforce_Resume.pdf"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-200 hover:bg-sky-500/15 hover:text-sky-300 transition-colors"
                    role="menuitem"
                  >
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <div className="flex flex-col text-left">
                      <span className="font-semibold">Download PDF</span>
                      <span className="text-[10px] text-slate-400">PDF formatted</span>
                    </div>
                  </a>
                  <div className="h-px bg-slate-800 my-1"></div>
                  <a
                    href={personalInfo.trailhead}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-[11px] text-sky-400 hover:bg-slate-800/60"
                    role="menuitem"
                  >
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      Trailhead Profile
                    </span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 transition-all hover:scale-[1.02] active:scale-[0.98] min-tap-target"
            >
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Actions (Theme Toggle + Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              ref={hamburgerButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-tap-target p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 focus-visible:ring-2 focus-visible:ring-sky-400"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>

        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[60px] z-40 bg-slate-950/90 backdrop-blur-xl md:hidden animate-in slide-in-from-top duration-200 overflow-y-auto"
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          ref={drawerRef}
        >
          <div className="max-w-md mx-auto px-4 py-6 flex flex-col gap-3">
            
            <nav aria-label="Mobile Menu Links" className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium transition-all min-tap-target ${
                      isActive
                        ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white border border-transparent'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.name}</span>
                    {isActive && <CheckCircle2 className="w-4 h-4 text-sky-400" aria-hidden="true" />}
                  </a>
                );
              })}
            </nav>

            <div className="h-px bg-slate-800 my-2"></div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={personalInfo.resumeDocx}
                download="Krishna_Kumar_Salesforce_Resume.docx"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-2xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 min-tap-target"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Resume (DOCX)</span>
              </a>
              <a
                href={personalInfo.resumePdf}
                download="Krishna_Kumar_Salesforce_Resume.pdf"
                className="flex items-center justify-center gap-2 px-3 py-3 rounded-2xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 min-tap-target"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-lg shadow-sky-500/25 min-tap-target"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Krishna</span>
            </a>

          </div>
        </div>
      )}
    </header>
  );
}
