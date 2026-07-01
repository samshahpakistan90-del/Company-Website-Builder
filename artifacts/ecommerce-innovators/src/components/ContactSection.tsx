import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Consultation Request Sent!",
        description: "We'll be in touch within 24 hours.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Contact Us</h2>
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Dominate Amazon?</h3>
            <p className="text-foreground/70 text-lg mb-10">
              Book a free discovery call to audit your current performance and map out a growth strategy tailored to your brand.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Headquarters</div>
                  <div className="text-foreground/70">New York, NY, USA</div>
                  <div className="text-foreground/70 text-sm mt-1">Regional Office: Jhelum, Punjab, Pakistan</div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Email</div>
                  <a href="mailto:EcommerceInnovators@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                    EcommerceInnovators@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">Phone</div>
                  <a href="tel:+16418232545" className="text-foreground/70 hover:text-primary transition-colors">
                    +1 (641) 823-2545
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <Linkedin className="w-5 h-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-bold text-white mb-1">LinkedIn</div>
                  <a href="https://www.linkedin.com/company/ecommerce-innovators-co/" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                    Connect with us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">Full Name *</label>
                  <input required type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">Company Name *</label>
                  <input required type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">Email Address *</label>
                  <input required type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white">Phone Number</label>
                  <input type="tel" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white">Amazon Store URL (if active)</label>
                <input type="url" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="https://amazon.com/..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white">Services Needed *</label>
                <select required defaultValue="" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                  <option value="" disabled>Select a primary service</option>
                  <option value="full">Full Account Management</option>
                  <option value="ppc">PPC Advertising</option>
                  <option value="listing">Listing Optimization / A+ Content</option>
                  <option value="launch">New Product Launch</option>
                  <option value="other">Other / Consulting</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-white">How can we help? *</label>
                <textarea required rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your current challenges and goals..." />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14"
              >
                {isSubmitting ? 'Sending Request...' : 'Book Free Consultation'}
                {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
