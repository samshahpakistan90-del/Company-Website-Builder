import { motion } from 'framer-motion';
import { 
  LineChart, Clock, MessageSquare, Database, 
  Palette, TrendingUp, Users, CheckCircle2 
} from 'lucide-react';

const features = [
  { icon: LineChart, title: "Customized Strategies", desc: "No templates. We build bespoke plans based on your product lifecycle." },
  { icon: Clock, title: "Proven Track Record", desc: "Battle-tested knowledge and consistent results across hundreds of categories." },
  { icon: MessageSquare, title: "Transparent Communication", desc: "Direct access to your account manager. No black boxes." },
  { icon: Database, title: "Data-Driven Decisions", desc: "Every bid, keyword, and design choice is backed by data." },
  { icon: Palette, title: "Creative Excellence", desc: "World-class design that elevates your brand perception." },
  { icon: TrendingUp, title: "Long-Term Growth", desc: "We focus on sustainable organic ranking and profitability." },
  { icon: Users, title: "Dedicated Specialists", desc: "Experts handling each aspect: PPC, SEO, and Design." },
  { icon: CheckCircle2, title: "Results-Focused", desc: "We align our goals with your bottom-line revenue." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Why Choose Us</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">The Agency Standard, Redefined.</h3>
          <p className="text-foreground/70 text-lg">
            We operate as an extension of your team, providing the enterprise-grade expertise and execution required to win on Amazon today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-card hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-lg">{feature.title}</h4>
                </div>
                <p className="text-sm text-foreground/60">{feature.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
