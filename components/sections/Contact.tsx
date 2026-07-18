'use client';

import { motion } from 'framer-motion';
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/utils';

export default function Contact() {
  const items = [
    {
      icon: MapPin,
      label: 'العنوان',
      value: COMPANY_INFO.address,
    },
    {
      icon: Phone,
      label: 'الجوال',
      value: COMPANY_INFO.phone,
      href: `tel:${COMPANY_INFO.phone}`,
    },
    {
      icon: MessageCircle,
      label: 'واتساب',
      value: 'تواصل معنا الآن',
      href: buildWhatsAppLink('مرحباً، أريد الاستفسار عن خدمات العصيمي للمياه'),
    },
    {
      icon: Mail,
      label: 'البريد الإلكتروني',
      value: COMPANY_INFO.email,
      href: `mailto:${COMPANY_INFO.email}`,
    },
    {
      icon: Clock,
      label: 'ساعات العمل',
      value: COMPANY_INFO.workingHours,
    },
  ];

  return (
    <section id="contact" className="gradient-blue water-pattern py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center text-white">
          <h2 className="text-4xl font-black md:text-5xl">تواصل معنا</h2>
          <p className="mt-5 text-lg text-white/80">
            نحن جاهزون لخدمتك على مدار الساعة
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            const content = (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full rounded-3xl bg-white p-6 shadow-2xl"
              >
                <div className="gradient-blue flex h-14 w-14 items-center justify-center rounded-2xl text-white">
                  <Icon />
                </div>

                <div className="mt-5 text-sm font-bold text-gray-500">
                  {item.label}
                </div>

                <div className="mt-2 font-black leading-7 text-primary">
                  {item.value}
                </div>
              </motion.div>
            );

            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'واتساب' ? '_blank' : undefined}
                rel={item.label === 'واتساب' ? 'noopener noreferrer' : undefined}
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
