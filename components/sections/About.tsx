'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, Clock, Droplet, Truck } from 'lucide-react';

const features = [
  { icon: Truck, title: 'توصيل سريع', text: 'نصل إليك في أسرع وقت' },
  { icon: Droplet, title: 'مياه نقية 100%', text: 'مياه نظيفة ومفحوصة' },
  { icon: Clock, title: 'خدمة 24/7', text: 'متواجدون على مدار الساعة' },
  { icon: BadgeCheck, title: 'أسعار مناسبة', text: 'أفضل الأسعار في صنعاء' },
];

export default function About() {
  return (
    <section id="about" className="water-pattern bg-light py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="gradient-blue flex aspect-square items-center justify-center rounded-3xl shadow-2xl">
            <span className="text-[150px] md:text-[220px]">🚛</span>
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-5 -left-3 rounded-2xl bg-white px-6 py-4 shadow-2xl md:left-8"
          >
            <div className="text-3xl font-black text-primary">+10</div>
            <div className="font-bold text-gray-600">سنوات خبرة</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full bg-primary-100 px-5 py-2 font-bold text-primary">
            من نحن
          </span>

          <h2 className="text-gradient mt-6 text-4xl font-black leading-tight md:text-5xl">
            العصيمي للمياه — الخيار الأول في صنعاء
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            نقدم خدمات توصيل مياه الوايتات والمشاريع المنزلية لجميع المنازل
            والفلل والعمائر والمشاريع في أمانة العاصمة.
          </p>

          <p className="mt-4 text-lg leading-9 text-gray-600">
            هدفنا توفير مياه نظيفة وخدمة سريعة وموثوقة مع الالتزام بالمواعيد
            وتقديم أفضل تجربة لعملائنا.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-white p-5 shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                  <Icon />
                </div>
                <h3 className="font-black text-primary">{title}</h3>
                <p className="mt-1 text-sm text-gray-500">{text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
