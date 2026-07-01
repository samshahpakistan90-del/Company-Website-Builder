import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Anderson",
    role: "Founder, Health & Wellness Brand",
    text: "Working with Ecommerce Innovators has been a game-changer for our business. Their Amazon expertise helped us scale revenue by 3x within 6 months while dramatically improving our ACOS."
  },
  {
    name: "Sarah Mitchell",
    role: "CMO, Premium Home Goods",
    text: "The PPC strategies implemented delivered excellent ROAS improvements. Their team is proactive, data-driven, and always available when we need them."
  },
  {
    name: "David Carter",
    role: "Director of E-commerce",
    text: "From product launches to account management, they exceeded every expectation. Our brand visibility on Amazon has never been stronger."
  },
  {
    name: "Emily Johnson",
    role: "Co-Founder, Beauty Brand",
    text: "Their listing optimization transformed our product pages. Conversion rates improved significantly within the first month of working together."
  },
  {
    name: "James Wilson",
    role: "CEO, Tech Accessories",
    text: "We've worked with many agencies and Ecommerce Innovators stands out for their transparency, communication, and results-driven approach."
  },
  {
    name: "Busayo Olaivon",
    role: "Operations Manager",
    text: "They helped us scale with a clear strategy. Their team understood our brand and built a roadmap that delivered real, measurable growth."
  },
  {
    name: "Jenny Pan",
    role: "Marketing Director",
    text: "The professionalism exceeded expectations at every turn. Their attention to detail in our A+ Content and storefront design was exceptional."
  },
  {
    name: "David",
    role: "Owner, Apparel Brand",
    text: "The team made managing Amazon effortless. We can focus on product development while they handle everything else."
  },
  {
    name: "Marco",
    role: "VP of Sales",
    text: "Choosing Ecommerce Innovators was one of our best business decisions. Their expertise across PPC, SEO, and brand strategy is unmatched."
  }
];

export default function TestimonialsSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="testimonials" className="py-24 lg:py-32 overflow-hidden bg-black/40 relative border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Testimonials</h2>
          <h3 className="text-3xl lg:text-5xl font-bold mb-4">Trusted by Brand Leaders</h3>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div 
        className="relative flex overflow-x-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
        
        <div 
          className={`flex gap-6 px-3 py-4 w-max ${!isHovered ? 'animate-marquee' : ''}`}
          style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
        >
          {/* Double the array for seamless infinite scroll */}
          {[...testimonials, ...testimonials].map((testimonial, idx) => (
            <div 
              key={idx}
              className="w-[350px] md:w-[450px] shrink-0 glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/80 text-lg mb-8 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <div className="font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-foreground/50">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
