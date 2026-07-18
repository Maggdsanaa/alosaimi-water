'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/lib/constants';

function StatItem({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const update = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="text-center"
    >
      <div className="text-4xl font-black text-white md:text-6xl">
        {count.toLocaleString('en-US')}
        {suffix}
      </div>
      <div className="mt-3 font-bold text-white/80">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="gradient-blue water-pattern py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 lg:grid-cols-4 lg:px-8">
        {STATS.map((stat, index) => (
          <StatItem key={stat.label} {...stat} index={index} />
        ))}
      </div>
    </section>
  );
}
