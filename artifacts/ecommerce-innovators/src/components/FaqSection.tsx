import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Why choose Ecommerce Innovators?",
    a: "We provide an enterprise-grade expert team, proven verifiable results, transparent communication, and customized strategies. We don't use cookie-cutter templates—every brand gets a bespoke roadmap."
  },
  {
    q: "How long before we see results?",
    a: "Most clients see measurable improvements in ACOS and sales volume within 30-90 days. Full optimization cycles (including SEO ranking and comprehensive listing overhauls) typically take 3-6 months to mature completely."
  },
  {
    q: "Do you manage Amazon PPC campaigns?",
    a: "Yes, full PPC management is our core competency. This includes Sponsored Products, Sponsored Brands, Sponsored Display, and advanced DSP advertising off-Amazon."
  },
  {
    q: "Do you optimize product listings?",
    a: "Yes, we handle end-to-end listing optimization. This includes SEO-rich titles, converting bullet points, HTML descriptions, backend keywords, and highly visual A+ Content design."
  },
  {
    q: "Can you launch new products on Amazon?",
    a: "Absolutely. We specialize in strategic product launches, managing everything from initial keyword research and listing creation to aggressive ranking campaigns and review generation strategies."
  },
  {
    q: "How often do you provide reports?",
    a: "We believe in total transparency. We provide weekly performance snapshots tracking key metrics, and comprehensive monthly strategy reports where we review data and align on next steps."
  }
];

export default function FaqSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">FAQ</h2>
          <h3 className="text-3xl lg:text-5xl font-bold mb-4">Common Questions</h3>
          <p className="text-foreground/70 text-lg">
            Everything you need to know about partnering with us.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="glass border border-white/10 rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6 [&[data-state=open]]:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/70 text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
