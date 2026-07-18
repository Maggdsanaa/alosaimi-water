'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Droplet, Menu, MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = buildWhatsAppLink(
    'مرحباً، أريد طلب مياه من العصيمي للمياه'
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-lg backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="gradient-blue flex h-12 w-12 items-center justify-center rounded-full shadow-lg">
            <Droplet className="h-7 w-7 fill-white text-white" />
          </div>
          <div>
            <div
              className={`text-xl font-black ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {COMPANY_INFO.name}
            </div>
            <div
              className={`text-xs ${
                scrolled ? 'text-gray-500' : 'text-white/70'
              }`}
            >
              {COMPANY_INFO.tagline}
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`font-bold transition-colors hover:text-secondary ${
                scrolled ? 'text-primary' : 'text-white'
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105 lg:flex"
        >
          <MessageCircle size={20} />
          اطلب الآن
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="فتح القائمة"
          className={`flex h-12 w-12 items-center justify-center rounded-xl lg:hidden ${
            scrolled ? 'bg-primary text-white' : 'bg-white/15 text-white'
          }`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-sm bg-white p-6 shadow-2xl lg:hidden"
          >
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="gradient-blue flex h-11 w-11 items-center justify-center rounded-full">
                  <Droplet className="fill-white text-white" />
                </div>
                <span className="text-xl font-black text-primary">
                  {COMPANY_INFO.name}
                </span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary"
              >
                <X />
              </button>
            </div>

            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-4 text-lg font-bold text-primary hover:bg-primary-50"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-whatsapp px-6 font-black text-white shadow-xl"
            >
              <MessageCircle />
              اطلب عبر واتساب
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
