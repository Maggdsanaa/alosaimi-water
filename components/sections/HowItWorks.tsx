'use client';

import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '@/lib/constants';

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-light to-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-primary-100 px-5 py-2 font-bold text-primary">
            طريقة الطلب
          </span>
          <h2 className="text-gradient mt-6 text-4xl font-black md:text-5xl">
            اطلب في 4 خطوات بسيطة
          </h2>
        </div>

        <div className="relative">
          <div className="gradient-blue absolute left-[12%] right-[12%] top-16 hidden h-1 lg:block" />

          <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="gradient-blue relative mx-auto flex h-32 w-32 items-center justify-center rounded-full text-6xl shadow-2xl"
                >
                  {step.icon}

                  <span className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center rounded-full bg-white font-black text-primary shadow-lg">
                    {index + 1}
                  </span>
                </motion.div>

                <h3 className="mt-7 text-xl font-black text-primary">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
