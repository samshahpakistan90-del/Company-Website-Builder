import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 7, label: "Years Experience", suffix: "+" },
  { value: 100, label: "Brands Managed", suffix: "+" },
  { value: 50, label: "Revenue Generated", prefix: "$", suffix: "M+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" }
];

function Counter({ from, to, duration = 2, prefix = "", suffix = "" }: { from: number, to: number, duration?: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(from + (to - from) * easeProgress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="font-mono">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="container mx-auto px-6 max-w-7xl mt-20 relative z-20">
      <div className="glass rounded-2xl p-8 border-white/10 relative overflow-hidden">
        {/* Subtle glow inside the bar */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/10" />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center flex flex-col items-center justify-center border-r border-white/5 last:border-r-0"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                <Counter from={0} to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-foreground/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
