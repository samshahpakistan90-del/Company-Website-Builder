import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ArrowUpRight, TrendingUp, Search, Star, Package, Zap, Target, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StatsBar from './StatsBar';

const revenueData = [
  { month: 'Jan', revenue: 45000, ppc: 18000 },
  { month: 'Feb', revenue: 52000, ppc: 21000 },
  { month: 'Mar', revenue: 78000, ppc: 29000 },
  { month: 'Apr', revenue: 74000, ppc: 27000 },
  { month: 'May', revenue: 95000, ppc: 38000 },
  { month: 'Jun', revenue: 120000, ppc: 46000 },
  { month: 'Jul', revenue: 155000, ppc: 58000 },
];

const ppcData = [
  { day: 'M', roas: 3.2 },
  { day: 'T', roas: 4.1 },
  { day: 'W', roas: 3.8 },
  { day: 'T', roas: 5.2 },
  { day: 'F', roas: 4.8 },
  { day: 'S', roas: 6.1 },
  { day: 'S', roas: 5.7 },
];

const keywords = [
  { kw: 'premium organic coffee', rank: 1, change: '+3' },
  { kw: 'espresso beans dark roast', rank: 2, change: '+7' },
  { kw: 'cold brew concentrate', rank: 3, change: '+2' },
];

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'revenue' | 'ppc'>('revenue');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30,
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-8"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Amazon Growth Agency</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Grow Your Amazon Brand with{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-primary">
                  Data-Driven
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-white/0 via-primary to-white/0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>{' '}
              Strategies That Deliver{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-300 to-white">
                Real Results.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed">
              Helping brands launch, scale, and dominate Amazon through expert account management, advertising, creative optimization, and long-term growth strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-primary to-yellow-400 text-background hover:opacity-90 text-lg h-14 px-8 shadow-[0_0_50px_-8px_rgba(245,166,35,0.6)] transition-all hover:scale-105 font-bold"
              >
                Book Free Consultation
              </Button>
              <Button
                onClick={scrollToServices}
                size="lg"
                variant="outline"
                className="text-lg h-14 px-8 border-white/20 hover:bg-white/5 bg-transparent hover:border-primary/50 transition-all"
              >
                View Services
              </Button>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10"
            >
              <div className="flex -space-x-2">
                {['SS', 'HN', 'AA', 'TS'].map((ini, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-primary/60 border-2 border-background flex items-center justify-center text-[9px] font-bold">{ini}</div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />)}
                  <span className="text-sm font-bold ml-1">4.9/5</span>
                </div>
                <p className="text-xs text-foreground/60">Trusted by 100+ brands worldwide</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced 3D Dashboard */}
          <motion.div
            className="relative h-[560px] lg:h-[640px] w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{
              transform: `perspective(1200px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Glow behind dashboard */}
            <div className="absolute inset-0 bg-gradient-radial from-secondary/30 via-primary/10 to-transparent rounded-3xl blur-2xl scale-90" />

            {/* Main Dashboard Card */}
            <div className="absolute inset-0 glass-card rounded-2xl border border-white/10 overflow-hidden" style={{ transform: 'translateZ(0px)' }}>
              {/* Dashboard Header */}
              <div className="flex justify-between items-center px-6 pt-5 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-medium text-foreground/50 uppercase tracking-wider">Live Analytics</span>
                  </div>
                  <div className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">$155,240</div>
                  <div className="text-xs text-foreground/50 mt-0.5">Total Revenue · This Month</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full text-sm font-bold">
                    <ArrowUpRight className="w-4 h-4" />
                    +245%
                  </div>
                  <Bell className="w-4 h-4 text-foreground/40" />
                </div>
              </div>

              {/* Tab Bar */}
              <div className="flex gap-1 px-6 pt-3 pb-2">
                {(['revenue', 'ppc'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full capitalize transition-all ${
                      activeTab === tab
                        ? 'bg-primary/20 text-primary border border-primary/30'
                        : 'text-foreground/40 hover:text-foreground/70'
                    }`}
                  >
                    {tab === 'ppc' ? 'PPC ROAS' : 'Revenue'}
                  </button>
                ))}
              </div>

              {/* Chart */}
              <div className="h-[160px] w-full px-2">
                {activeTab === 'revenue' ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueData}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#081A3A', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
                        itemStyle={{ color: '#F5A623' }}
                        formatter={(v: number) => [`$${v.toLocaleString()}`, 'Revenue']}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ppcData} barSize={16}>
                      <XAxis dataKey="day" tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#081A3A', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px' }}
                        itemStyle={{ color: '#F5A623' }}
                        formatter={(v: number) => [`${v}x`, 'ROAS']}
                      />
                      <Bar dataKey="roas" fill="hsl(var(--primary))" opacity={0.8} radius={[4,4,0,0]} />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>

              {/* Metric Row */}
              <div className="grid grid-cols-3 gap-3 px-5 mt-1 mb-3">
                {[
                  { label: 'ACOS', value: '12.4%', delta: '-3.2%', good: true },
                  { label: 'Conv. Rate', value: '18.7%', delta: '+2.1%', good: true },
                  { label: 'Ad Spend', value: '$8,420', delta: '+$340', good: false },
                ].map((m, i) => (
                  <div key={i} className="bg-white/5 rounded-xl px-3 py-2.5">
                    <div className="text-[10px] text-foreground/50 uppercase tracking-wide mb-1">{m.label}</div>
                    <div className="text-sm font-mono font-bold">{m.value}</div>
                    <div className={`text-[10px] font-medium mt-0.5 ${m.good ? 'text-emerald-400' : 'text-rose-400'}`}>{m.delta}</div>
                  </div>
                ))}
              </div>

              {/* Keywords */}
              <div className="px-5 space-y-1.5 pb-4">
                <div className="text-[10px] font-semibold text-foreground/40 uppercase tracking-widest mb-2">Top Keyword Rankings</div>
                {keywords.map((kw, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/5 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="text-xs truncate max-w-[140px]">{kw.kw}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] text-emerald-400 font-mono">{kw.change}</span>
                      <span className="text-xs font-mono bg-primary/20 text-primary px-2 py-0.5 rounded">#{kw.rank}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Card: ROAS */}
            <motion.div
              className="absolute -right-6 top-10 glass rounded-xl p-4 shadow-2xl backdrop-blur-2xl border border-white/10 min-w-[150px]"
              style={{ transform: 'translateZ(60px)' }}
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-400/20 flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-[10px] font-medium text-foreground/60 uppercase tracking-wide">Avg ROAS</div>
              </div>
              <div className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-400">4.8x</div>
              <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                Across all campaigns
              </div>
            </motion.div>

            {/* Floating Card: Inventory */}
            <motion.div
              className="absolute -left-8 top-1/3 glass rounded-xl p-4 shadow-2xl backdrop-blur-2xl border border-white/10 min-w-[160px]"
              style={{ transform: 'translateZ(80px)' }}
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-secondary/30 flex items-center justify-center">
                  <Package className="w-3.5 h-3.5 text-blue-300" />
                </div>
                <div className="text-[10px] font-medium text-foreground/60 uppercase tracking-wide">Inventory Health</div>
              </div>
              <div className="space-y-1.5">
                {[['In Stock', '94%', 'bg-emerald-400'], ['Low Stock', '4%', 'bg-yellow-400'], ['Out', '2%', 'bg-rose-400']].map(([l, v, c]) => (
                  <div key={l} className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${c}`} style={{ width: v }} />
                    </div>
                    <span className="text-[10px] text-foreground/60 w-8 text-right">{v}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Card: PPC Campaign */}
            <motion.div
              className="absolute -left-4 bottom-8 glass rounded-xl p-4 shadow-2xl backdrop-blur-2xl border border-white/10 min-w-[175px]"
              style={{ transform: 'translateZ(50px)' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Target className="w-3.5 h-3.5 text-primary" />
                </div>
                <div className="text-[10px] font-medium text-foreground/60 uppercase tracking-wide">PPC Campaign</div>
              </div>
              <div className="text-sm font-semibold mb-1">Summer Launch 2024</div>
              <div className="flex justify-between text-[10px] text-foreground/50">
                <span>Budget: $1,200/day</span>
                <span className="text-emerald-400 font-semibold">Active</span>
              </div>
            </motion.div>

            {/* Floating Card: Rating */}
            <motion.div
              className="absolute right-4 -bottom-4 glass rounded-xl p-3 shadow-2xl backdrop-blur-2xl border border-white/10 flex items-center gap-3"
              style={{ transform: 'translateZ(40px)' }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />)}
              </div>
              <span className="font-bold font-mono text-sm">4.9</span>
              <span className="text-[10px] text-foreground/50">Client Rating</span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <StatsBar />
    </section>
  );
}
