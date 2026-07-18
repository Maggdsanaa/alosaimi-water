'use client';

import {
  Droplet,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="bg-dark pb-8 pt-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="gradient-blue flex h-12 w-12 items-center justify-center rounded-full">
              <Droplet className="fill-white" />
            </div>
            <span className="text-xl font-black">{COMPANY_INFO.name}</span>
          </div>

          <p className="mt-5 leading-8 text-white/65">
            {COMPANY_INFO.description}
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href={buildWhatsAppLink('مرحباً، أريد التواصل مع العصيمي للمياه')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-whatsapp"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary"
            >
              <Camera size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black">روابط سريعة</h3>

          <div className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/65 transition hover:text-secondary"
              >
                ← {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black">خدماتنا</h3>

          <div className="mt-5 space-y-3 text-white/65">
            <a href="#services" className="block hover:text-secondary">
              ← توصيل مياه الوايتات
            </a>
            <a href="#services" className="block hover:text-secondary">
              ← مشروع المياه المنزلي
            </a>
            <a href="#order" className="block hover:text-secondary">
              ← تحديد الموقع والطلب
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black">تواصل معنا</h3>

          <div className="mt-5 space-y-4 text-white/65">
            <div className="flex gap-3">
              <MapPin className="shrink-0 text-secondary" size={20} />
              <span>{COMPANY_INFO.address}</span>
            </div>

            <div className="flex gap-3">
              <Phone className="shrink-0 text-secondary" size={20} />
              <span>{COMPANY_INFO.phone}</span>
            </div>

            <div className="flex gap-3">
              <Mail className="shrink-0 text-secondary" size={20} />
              <span>{COMPANY_INFO.email}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} العصيمي للمياه. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
