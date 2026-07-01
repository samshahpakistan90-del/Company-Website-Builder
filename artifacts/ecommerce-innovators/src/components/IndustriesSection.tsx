import { motion } from 'framer-motion';
import { 
  Sparkles, HeartPulse, Home, UtensilsCrossed, 
  Monitor, Shirt, Dumbbell, Baby, 
  Dog, Car, Coffee, Pill 
} from 'lucide-react';

const industries = [
  { icon: Sparkles, label: "Beauty & Cosmetics" },
  { icon: HeartPulse, label: "Health & Personal Care" },
  { icon: Home, label: "Home & Kitchen" },
  { icon: UtensilsCrossed, label: "Grocery & Gourmet" },
  { icon: Monitor, label: "Electronics" },
  { icon: Shirt, label: "Apparel & Fashion" },
  { icon: Dumbbell, label: "Sports & Outdoors" },
  { icon: Baby, label: "Baby Products" },
  { icon: Dog, label: "Pet Supplies" },
  { icon: Car, label: "Automotive" },
  { icon: Coffee, label: "Food & Beverage" },
  { icon: Pill, label: "Supplements" },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Industries</h2>
            <h3 className="text-3xl lg:text-4xl font-bold">Category Expertise</h3>
            <p className="text-foreground/70 mt-4">We've successfully scaled brands across Amazon's most competitive categories.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/5 hover:border-white/10 transition-colors"
              >
                <div className="p-2 rounded-lg bg-secondary/20 text-secondary-foreground">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-medium text-sm lg:text-base">{ind.label}</span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
