'use client';

import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/utils';

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-primary-50 px-5 py-2 font-bold text-primary">
            خدماتنا
          </span>
          <h2 className="text-gradient mt-6 text-4xl font-black md:text-5xl">
            نقدم لك أفضل الخدمات
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            اختر الخدمة المناسبة لك واترك الباقي علينا
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {SERVICES.map((service, index) => {
            const link = buildWhatsAppLink(
              `مرحباً، أريد طلب خدمة: ${service.title}`
            );

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-2xl md:p-10"
              >
                <div className="absolute -bottom-10 -left-5 text-[180px] opacity-10 transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>

                <div className="relative z-10">
                  <div className="text-7xl">{service.icon}</div>

                  <h3 className="mt-6 text-3xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-white/80">
                    {service.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                          <Check size={17} strokeWidth={3} />
                        </span>
                        <span className="font-bold">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-9 inline-flex min-h-14 items-center gap-2 rounded-full bg-white px-8 font-black text-primary shadow-xl transition-transform hover:scale-105"
                  >
                    <MessageCircle />
                    اطلب الآن
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
