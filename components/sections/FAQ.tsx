'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { FAQS } from '@/lib/constants';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-5">
        <div className="mb-14 text-center">
          <span className="rounded-full bg-primary-50 px-5 py-2 font-bold text-primary">
            الأسئلة الشائعة
          </span>

          <h2 className="text-gradient mt-6 text-4xl font-black md:text-5xl">
            كل ما تريد معرفته
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="overflow-hidden rounded-2xl bg-light shadow-md"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex min-h-16 w-full items-center justify-between gap-4 p-5 text-right"
                >
                  <span className="text-lg font-black text-primary">
                    {item.question}
                  </span>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    {isOpen ? <Minus /> : <Plus />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-5 pb-6 leading-8 text-gray-600">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
