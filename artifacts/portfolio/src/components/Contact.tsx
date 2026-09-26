import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import { FormEvent, useRef, useState } from 'react';
import { Github, Linkedin, Instagram, Facebook, Send, Loader2, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type FormStatus = { type: 'success' | 'error'; message: string } | null;

const socials = [
  { href: 'https://wa.me/918086210987?text=Hi%20Ajmal', label: 'WhatsApp', icon: FaWhatsapp },
  { href: 'https://github.com/ajmalmyaseen/', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/ajmal-mohamed-yaseen/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.instagram.com/aju_m.y/?hl=en/', label: 'Instagram', icon: Instagram },
  { href: 'https://www.facebook.com/ajmal.mohamedyaseen.7/', label: 'Facebook', icon: Facebook },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    setStatus(null);

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      const subject = encodeURIComponent('Portfolio enquiry from ' + name);
      const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      window.location.href = 'mailto:ajmalmyaseen@gmail.com?subject=' + subject + '&body=' + body;
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(emailJsServiceId, emailJsTemplateId, form, {
        publicKey: emailJsPublicKey,
      });
      form.reset();
      setStatus({ type: 'success', message: 'Thanks for reaching out. I will get back to you soon.' });
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 lg:py-36" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(56,189,248,0.08),transparent_28rem)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-sky-300/75">05 / Contact</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
              Let&apos;s <span className="gradient-text">connect.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              I&apos;m always interested in internship opportunities, freelance projects, and collaborations.
            </p>

            <a
              href="mailto:ajmalmyaseen@gmail.com"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-3 text-sm text-slate-200 transition hover:border-sky-400/25 hover:bg-white/[0.05]"
            >
              <Mail className="h-4 w-4 text-sky-300" />
              ajmalmyaseen@gmail.com
            </a>

            <div className="mt-7 flex flex-wrap gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-slate-400 transition hover:-translate-y-1 hover:border-sky-400/30 hover:text-sky-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/[0.09] bg-white/[0.025] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8"
          >
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">Send a message</p>
                <h3 className="mt-1 text-lg font-semibold text-white">Start a conversation</h3>
              </div>
              <span className="font-mono text-[9px] text-slate-600">05 / 05</span>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-slate-300">
                Name
                <input name="name" type="text" required autoComplete="name" placeholder="Your name" className="h-12 rounded-xl border border-white/[0.08] bg-black/20 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/45 focus:ring-4 focus:ring-sky-400/[0.06]" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-300">
                Email
                <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" className="h-12 rounded-xl border border-white/[0.08] bg-black/20 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/45 focus:ring-4 focus:ring-sky-400/[0.06]" />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-medium text-slate-300">
              Message
              <textarea name="message" required rows={6} placeholder="Tell me a little about your project..." className="resize-y rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-sky-400/45 focus:ring-4 focus:ring-sky-400/[0.06]" />
            </label>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-600">Your message goes straight to my inbox.</p>
              <button type="submit" disabled={isSending} className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-70">
                {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {status && (
              <p role="status" className={'mt-4 text-sm ' + (status.type === 'success' ? 'text-emerald-400' : 'text-red-400')}>
                {status.message}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
