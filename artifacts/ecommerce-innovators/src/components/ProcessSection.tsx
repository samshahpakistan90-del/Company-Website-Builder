import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Discovery", desc: "Deep-dive into your brand, goals, margins, and competitive landscape to establish baseline metrics." },
  { number: "02", title: "Strategy", desc: "Build a customized Amazon growth roadmap tailored to your brand's unique position." },
  { number: "03", title: "Implementation", desc: "Execute campaigns, overhaul listings, design A+ content, and launch with precision." },
  { number: "04", title: "Optimization", desc: "Continuous A/B testing, bid management, and performance tuning for maximum efficiency." },
  { number: "05", title: "Reporting", desc: "Transparent weekly snapshots and comprehensive monthly strategy reviews with clear KPIs." },
  { number: "06", title: "Scale", desc: "Compound growth strategies, expand product lines, and dominate your category long-term." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-black/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Process</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">A Proven Framework for Growth</h3>
          <p className="text-foreground/70 text-lg">
            Success on Amazon isn't random. It's the result of a rigorous, repeatable process that turns data into scalable revenue.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-background border border-primary/40 flex items-center justify-center text-xl font-bold font-mono text-primary shadow-[0_0_20px_rgba(245,166,35,0.2)] mb-6 lg:mx-auto">
                  {step.number}
                </div>
                
                <h4 className="text-xl font-bold mb-3 w-full lg:text-center text-white">{step.title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed lg:text-center">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
