import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import NotFound from '@/pages/not-found';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import IndustriesSection from '@/components/IndustriesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background overflow-hidden selection:bg-primary/30 selection:text-white">
      {/* Abstract background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <div className="absolute -top-[40%] -left-[10%] h-[1000px] w-[1000px] rounded-full bg-secondary/20 blur-[120px] mix-blend-screen" />
        <div className="absolute top-[20%] -right-[20%] h-[800px] w-[800px] rounded-full bg-primary/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[0%] left-[20%] h-[600px] w-[600px] rounded-full bg-secondary/15 blur-[100px] mix-blend-screen" />
      </div>

      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <TeamSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
