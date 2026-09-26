import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const current = navItems
        .map((item) => item.href.substring(1))
        .find((section) => {
          const element = document.getElementById(section);
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        });
      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    document.getElementById(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-sky-400 via-indigo-400 to-transparent"
        style={{ scaleX: scrollYProgress }}
      />

      <nav className={'fixed left-0 right-0 top-0 z-50 transition-all duration-300 ' + (isScrolled ? 'border-b border-white/[0.07] bg-[#03060b]/78 shadow-2xl backdrop-blur-2xl' : 'bg-transparent')}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-[76px] items-center justify-between">
            <button onClick={() => handleNavClick('#hero')} className="group flex items-center gap-2" aria-label="Go to home">
              <span className="font-display text-2xl font-bold tracking-[-0.08em] text-white">AMY</span>
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
            </button>

            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const active = activeSection === item.href.substring(1);
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={'relative px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.08em] transition-colors ' + (active ? 'text-white' : 'text-slate-500 hover:text-slate-200')}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-3 right-3 h-px bg-sky-400"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <Button asChild variant="outline" className="hidden h-10 rounded-full border-white/10 bg-white/[0.03] px-4 text-xs text-slate-200 hover:bg-white/[0.08] lg:flex">
              <a href="/Ajmal_Mohamed_Yaseen_CV.pdf" download="Ajmal_Mohamed_Yaseen_CV.pdf">
                Download CV
                <Download className="ml-2 h-3.5 w-3.5" />
              </a>
            </Button>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-200 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/[0.07] bg-[#03060b]/95 px-6 py-5 backdrop-blur-2xl lg:hidden">
            <div className="mx-auto max-w-7xl space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={'block w-full rounded-xl px-4 py-3 text-left font-mono text-xs uppercase tracking-[0.12em] ' + (activeSection === item.href.substring(1) ? 'bg-sky-400/10 text-sky-300' : 'text-slate-400 hover:bg-white/[0.04] hover:text-white')}
                >
                  {item.label}
                </button>
              ))}
              <Button asChild className="mt-3 w-full rounded-xl bg-white text-slate-950 hover:bg-slate-100">
                <a href="/Ajmal_Mohamed_Yaseen_CV.pdf" download="Ajmal_Mohamed_Yaseen_CV.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
