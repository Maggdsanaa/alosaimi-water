'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="bg-light py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-primary-100 px-5 py-2 font-bold text-primary">
            آراء العملاء
          </span>
          <h2 className="text-gradient mt-6 text-4xl font-black md:text-5xl">
            ماذا يقول عملاؤنا
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-xl"
            >
              <Quote className="absolute left-5 top-4 h-16 w-16 text-primary opacity-10" />

              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star
                    key={star}
                    size={19}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="relative mt-6 min-h-16 text-lg leading-8 text-gray-600">
                {item.text}
              </p>

              <div className="mt-6 flex items-center gap-4 border-t pt-5">
                <div className="gradient-blue flex h-12 w-12 items-center justify-center rounded-full text-xl font-black text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <div className="font-black text-primary">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.area}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
