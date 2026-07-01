import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, TrendingUp, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsBar from './StatsBar';

const mockChartData = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 78000 },
  { month: 'Apr', revenue: 74000 },
  { month: 'May', revenue: 95000 },
  { month: 'Jun', revenue: 120000 },
  { month: 'Jul', revenue: 155000 },
];

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToServices = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[100dvh] flex flex-col justify-center">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-8">
              <TrendingUp className="w-4 h-4" />
              <span>Amazon Growth Agency</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Grow Your Amazon Brand with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300">Data-Driven</span> Strategies.
            </h1>
            
            <p className="text-lg lg:text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
              Helping brands launch, scale, and dominate Amazon through expert account management, advertising, creative optimization, and long-term growth strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8 shadow-[0_0_40px_-10px_rgba(245,166,35,0.5)] transition-all hover:scale-105"
              >
                Book Free Consultation
              </Button>
              <Button 
                onClick={scrollToServices}
                size="lg" 
                variant="outline" 
                className="text-lg h-14 px-8 border-white/20 hover:bg-white/5 bg-transparent"
              >
                View Services
              </Button>
            </div>
          </motion.div>

          {/* Right Content - 3D Dashboard UI */}
          <motion.div 
            className="relative h-[500px] lg:h-[600px] w-full perspective-1000"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Main Dashboard Card */}
            <div className="absolute inset-0 glass-card rounded-2xl p-6 flex flex-col gap-6 transform-gpu" style={{ transform: 'translateZ(0px)' }}>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-medium text-foreground/60 uppercase tracking-wider">Total Revenue</h3>
                  <div className="text-3xl font-mono font-bold mt-1">$155,000</div>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4" />
                  +245%
                </div>
              </div>

              <div className="h-[200px] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={mockChartData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#081A3A', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                      itemStyle={{ color: '#F5A623' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              {/* Keyword Rankings */}
              <div className="mt-auto space-y-3">
                <h4 className="text-sm font-medium text-foreground/60 uppercase tracking-wider">Top Keywords</h4>
                <div className="space-y-2">
                  {['premium organic coffee', 'espresso beans dark roast', 'cold brew maker'].map((kw, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/5 rounded-lg px-4 py-2">
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-primary" />
                        <span className="text-sm">{kw}</span>
                      </div>
                      <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-primary">Rank #{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Card 1: ROAS */}
            <motion.div 
              className="absolute -right-8 top-12 glass rounded-xl p-5 shadow-2xl backdrop-blur-2xl border-t-white/20"
              style={{ transform: 'translateZ(60px)' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="text-xs font-medium text-foreground/60 mb-1">Average ROAS</div>
              <div className="text-2xl font-mono font-bold text-emerald-400">4.8x</div>
              <div className="text-xs text-foreground/50 mt-1">Across all campaigns</div>
            </motion.div>

            {/* Floating Card 2: ACOS */}
            <motion.div 
              className="absolute -left-10 top-1/2 glass rounded-xl p-5 shadow-2xl backdrop-blur-2xl border-t-white/20"
              style={{ transform: 'translateZ(80px)' }}
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground/60">Blended ACOS</div>
                  <div className="text-lg font-mono font-bold">12.4%</div>
                </div>
              </div>
              <div className="text-xs text-emerald-400">-3.2% this month</div>
            </motion.div>
            
            {/* Floating Card 3: Rating */}
            <motion.div 
              className="absolute -bottom-6 right-10 glass rounded-xl p-4 shadow-2xl backdrop-blur-2xl flex items-center gap-3"
              style={{ transform: 'translateZ(40px)' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
              </div>
              <span className="font-bold font-mono">4.9</span>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
      
      <StatsBar />
    </section>
  );
}
