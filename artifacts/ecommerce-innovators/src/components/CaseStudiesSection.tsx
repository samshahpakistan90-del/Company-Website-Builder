import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip } from 'recharts';
import { ArrowRight, TrendingUp, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const generateChartData = (trend: 'up' | 'down') => {
  let base = trend === 'up' ? 100 : 300;
  return Array.from({ length: 6 }).map((_, i) => {
    base = trend === 'up' ? base + (Math.random() * 40 + 20) : base - (Math.random() * 30 + 10);
    return { value: Math.max(0, base), month: `M${i+1}` };
  });
};

const caseStudies = [
  {
    industry: "Health & Wellness",
    title: "Scaling a Supplement Brand to 8-Figures",
    challenge: "High ACOS and stagnant organic rank in a hyper-competitive category.",
    strategy: "Full listing overhaul with compliance-safe copy, aggressive top-of-search exact match campaigns, and storefront redesign.",
    tags: ["PPC Management", "Listing Optimization", "Storefront"],
    kpis: [
      { label: "Revenue Growth", value: "+312%", good: true },
      { label: "ACOS", value: "-42%", good: true },
    ],
    chartData: generateChartData('up'),
  },
  {
    industry: "Home & Kitchen",
    title: "Dominating Premium Coffee Accessories",
    challenge: "Losing market share to cheap knockoffs and declining conversion rates.",
    strategy: "Premium A+ content to justify price point, defensive brand targeting, and targeted DSP campaigns.",
    tags: ["A+ Content", "DSP Ads", "Brand Strategy"],
    kpis: [
      { label: "Conversion Rate", value: "+85%", good: true },
      { label: "ROAS", value: "6.5x", good: true },
    ],
    chartData: generateChartData('up'),
  },
  {
    industry: "Beauty",
    title: "Category Takeover for Clean Skincare",
    challenge: "New product launch struggling to gain initial traction and reviews.",
    strategy: "Strategic Vine enrollment, aggressive keyword launch campaigns, and influencer-style lifestyle imagery.",
    tags: ["Product Launch", "Creative Design", "PPC"],
    kpis: [
      { label: "Organic Rank", value: "Top 3", good: true },
      { label: "MoM Sales", value: "+145%", good: true },
    ],
    chartData: generateChartData('up'),
  }
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Case Studies</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">Results That Speak for Themselves</h3>
            <p className="text-foreground/70 text-lg">
              Explore how we've helped brands across different categories overcome challenges and achieve explosive growth on Amazon.
            </p>
          </div>
          <Button variant="outline" className="hidden lg:flex gap-2 border-white/20 hover:bg-white/5">
            View All Work <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl border border-white/10 overflow-hidden flex flex-col group hover:border-primary/50 transition-colors"
            >
              <div className="p-6 pb-0 flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-bold mb-4">
                  {study.industry}
                </div>
                
                <h4 className="text-xl font-bold mb-4 text-white">{study.title}</h4>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs font-bold text-foreground/50 uppercase block mb-1">Challenge</span>
                    <p className="text-sm text-foreground/80">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground/50 uppercase block mb-1">Strategy</span>
                    <p className="text-sm text-foreground/80">{study.strategy}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-foreground/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-black/20 mt-auto border-t border-white/5">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {study.kpis.map((kpi, i) => (
                    <div key={i}>
                      <span className="text-xs text-foreground/50 block">{kpi.label}</span>
                      <div className="flex items-center gap-1 font-mono text-lg font-bold text-emerald-400">
                        {kpi.good ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {kpi.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-20 w-full opacity-60 group-hover:opacity-100 transition-opacity">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={study.chartData}>
                      <YAxis domain={['dataMin - 10', 'dataMax + 10']} hide />
                      <Tooltip contentStyle={{ backgroundColor: '#081A3A', border: 'none', borderRadius: '8px' }} labelStyle={{display: 'none'}} />
                      <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <Button variant="ghost" className="w-full mt-4 justify-between group/btn hover:bg-white/5">
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full mt-8 lg:hidden gap-2 border-white/20 hover:bg-white/5">
          View All Work <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}
