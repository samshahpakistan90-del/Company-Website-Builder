import { motion } from 'framer-motion';
import { Target, Lightbulb, ShieldCheck, BarChart3, Users, Zap } from 'lucide-react';

const values = [
  { icon: Users, title: "Client Success First", desc: "Your growth is our only metric for success." },
  { icon: Lightbulb, title: "Innovation", desc: "Staying ahead of Amazon's ever-changing algorithm." },
  { icon: ShieldCheck, title: "Integrity & Transparency", desc: "Clear reporting and honest communication." },
  { icon: BarChart3, title: "Data-Driven Decisions", desc: "Every strategy is backed by actionable data." }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">About Us</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              We Don't Just Manage. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">We Scale.</span>
            </h3>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Ecommerce Innovators was built on a simple premise: Amazon is too competitive for guesswork. We are a collective of former Amazon insiders, data scientists, and creative strategists dedicated to dominating the marketplace.
            </p>

            <div className="space-y-6">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{val.title}</h4>
                      <p className="text-foreground/60 mt-1">{val.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Visual abstract graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden glass border-white/10 flex items-center justify-center group"
          >
            {/* Abstract Background patterns */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#081A3A] to-secondary opacity-50 z-0" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] z-0" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/40 rounded-full blur-[80px] z-0" />
            
            {/* Geometric structure */}
            <div className="relative z-10 w-3/4 h-3/4 flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-white/5 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border border-primary/20 rounded-full border-dashed"
              />
              
              <div className="relative w-40 h-40 bg-gradient-to-br from-primary to-yellow-600 rounded-2xl rotate-12 flex items-center justify-center shadow-2xl group-hover:rotate-0 transition-transform duration-700">
                <Target className="w-16 h-16 text-primary-foreground" />
              </div>
              
              <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-secondary/80 backdrop-blur-sm rounded-xl -rotate-12 flex items-center justify-center shadow-xl group-hover:-translate-y-4 group-hover:rotate-12 transition-all duration-500">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
