import { motion } from 'framer-motion';
import { 
  BarChart, Megaphone, PenTool, LayoutDashboard, Search, Layout, 
  Images, Copyright, Rocket, Package, Crosshair, 
  PieChart, Palette, Activity, FileText, LineChart
} from 'lucide-react';

const services = [
  { icon: LayoutDashboard, title: "Account Management", desc: "End-to-end seller central management." },
  { icon: Megaphone, title: "PPC Advertising", desc: "Data-driven sponsored ads for max ROAS." },
  { icon: PenTool, title: "Listing Creation", desc: "Compelling copy that converts browsers to buyers." },
  { icon: Search, title: "Listing Optimization", desc: "A/B testing and keyword integration." },
  { icon: Activity, title: "Amazon SEO", desc: "Rank higher organically for primary keywords." },
  { icon: Layout, title: "Storefront Design", desc: "Branded destinations that drive loyalty." },
  { icon: Images, title: "A+ Content", desc: "Enhanced brand content that tells your story." },
  { icon: Copyright, title: "Brand Registry", desc: "Protect your IP and unlock advanced features." },
  { icon: Rocket, title: "Product Launch", desc: "Strategic launches to hit page one fast." },
  { icon: Package, title: "Inventory Management", desc: "Never stock out, optimize storage limits." },
  { icon: Crosshair, title: "Competitor Analysis", desc: "Find the gaps your competitors are missing." },
  { icon: PieChart, title: "Market Research", desc: "Validate demand before sourcing inventory." },
  { icon: Palette, title: "Creative Design", desc: "High-converting lifestyle & infographic images." },
  { icon: BarChart, title: "DSP Advertising", desc: "Programmatic ads on and off Amazon." },
  { icon: FileText, title: "Performance Reporting", desc: "Custom dashboards for real-time insights." },
  { icon: LineChart, title: "Growth Consulting", desc: "High-level strategy to scale to 8-figures." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-black/20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Services</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">Full-Service Amazon Domination</h3>
          <p className="text-foreground/70 text-lg">
            We don't offer cookie-cutter solutions. We provide a comprehensive suite of services tailored to your brand's unique position in the marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative glass p-6 rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(245,166,35,0.3)] bg-gradient-to-b from-white/5 to-transparent overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
                
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors duration-300 relative z-10">
                  <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h4 className="text-xl font-bold mb-2 relative z-10 group-hover:text-white">{service.title}</h4>
                <p className="text-foreground/60 text-sm leading-relaxed relative z-10 group-hover:text-foreground/80">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
