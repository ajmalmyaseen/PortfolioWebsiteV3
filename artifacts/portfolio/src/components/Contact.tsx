import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import { FormEvent, useRef, useState } from 'react';
import { Github, Linkedin, Instagram, Facebook, ArrowRight, Send, Loader2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type FormStatus = { type: 'success' | 'error'; message: string } | null;

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
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:ajmalmyaseen@gmail.com?subject=${subject}&body=${body}`;
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
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 grid-background opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in internship opportunities, freelance projects, and collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <a href="https://wa.me/918086210987?text=Hi%20Ajmal" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all">
            <FaWhatsapp className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="https://github.com/ajmalmyaseen/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all">
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/ajmal-mohamed-yaseen/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all">
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="https://www.instagram.com/aju_m.y/?hl=en/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all">
            <Instagram className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a href="https://www.facebook.com/ajmal.mohamedyaseen.7/" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all">
            <Facebook className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto text-left rounded-2xl border border-border bg-card/70 p-6 sm:p-8 backdrop-blur-sm"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Name
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className="h-11 rounded-lg border border-input bg-background/70 px-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-foreground">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="h-11 rounded-lg border border-input bg-background/70 px-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-medium text-foreground">
            Message
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me a little about your project..."
              className="resize-y rounded-lg border border-input bg-background/70 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
          <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">Your message goes straight to my inbox.</p>
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-5 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>
          {status && (
            <p role="status" className={`mt-4 text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-destructive'}`}>
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
