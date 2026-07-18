'use client';

import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';
import { buildWhatsAppLink } from '@/lib/utils';

const drops = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  delay: (i % 8) * 0.45,
  duration: 5 + (i % 5),
  size: 10 + (i % 5) * 5,
}));

export default function Hero() {
  const whatsappLink = buildWhatsAppLink(
    'مرحباً، أريد طلب مياه من العصيمي للمياه'
  );

  return (
    <section
      id="home"
      className="gradient-blue relative flex min-h-screen items-center overflow-hidden pt-24 text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        {drops.map((drop) => (
          <motion.div
            key={drop.id}
            className="absolute -top-20 text-white/10"
            style={{
              left: drop.left,
              fontSize: drop.size,
            }}
            animate={{
              y: ['0vh', '115vh'],
              rotate: [0, 180],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: drop.duration,
              delay: drop.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            💧
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="text-center lg:text-right"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            className="glass mb-6 inline-flex rounded-full px-5 py-2 font-bold"
          >
            💧 الأفضل في صنعاء
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-5xl font-black leading-tight md:text-7xl"
          >
            مياه نقية
            <span className="mt-2 block text-secondary-light">
              توصل إلى بابك
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-white/85 lg:mx-0"
          >
            {COMPANY_INFO.description}. نوصل المياه لجميع أحياء أمانة العاصمة
            بسرعة وموثوقية وعلى مدار الساعة.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-whatsapp px-8 text-lg font-black shadow-2xl transition-transform hover:scale-105"
            >
              <MessageCircle />
              اطلب عبر واتساب
            </a>

            <a
              href="#services"
              className="flex min-h-14 items-center justify-center rounded-full bg-white px-8 text-lg font-black text-primary shadow-2xl transition-transform hover:scale-105"
            >
              خدماتنا
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-12 grid grid-cols-3 gap-3"
          >
            {[
              ['+5000', 'عميل'],
              ['24/7', 'خدمة'],
              ['⚡', 'توصيل سريع'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="glass rounded-2xl p-4 text-center"
              >
                <div className="text-2xl font-black md:text-3xl">{value}</div>
                <div className="mt-1 text-sm text-white/70">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative hidden h-[520px] items-center justify-center lg:flex">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative z-10 text-[260px] drop-shadow-2xl"
          >
            💧
          </motion.div>

          <motion.div
            className="absolute h-[430px] w-[430px] rounded-full border-4 border-dashed border-white/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />

          <div className="absolute h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="انتقل للأسفل"
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.7, repeat: Infinity }}
      >
        <ArrowDown className="h-8 w-8" />
      </motion.a>
    </section>
  );
}
