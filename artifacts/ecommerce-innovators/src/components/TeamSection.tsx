import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const team = [
  { name: "Syed Sami", role: "Chief Executive Officer", desc: "Visionary leader scaling brands globally.", initials: "SS" },
  { name: "Hala Noor", role: "Brand Development Executive", desc: "Expert in brand positioning & identity.", initials: "HN" },
  { name: "Asad", role: "Amazon Brand Strategist", desc: "Architect behind high-converting catalogs.", initials: "A" },
  { name: "Ali Arshad", role: "PPC & Advertising Expert", desc: "Mastering algorithms to maximize ROAS.", initials: "AA" },
  { name: "Usama", role: "Creative Designer", desc: "Visual storyteller for A+ content & storefronts.", initials: "U" },
  { name: "Tayyab Sethi", role: "Listing Optimization Expert", desc: "SEO specialist turning clicks into sales.", initials: "TS" },
  { name: "Hassan Kamran", role: "Operations & Supply Chain", desc: "Ensuring flawless inventory management.", initials: "HK" },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-black/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Team</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">The Experts Behind The Growth</h3>
          <p className="text-foreground/70 text-lg">
            A collective of Amazon veterans, data analysts, and creative strategists dedicated to your brand's success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group glass rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary/50 to-primary/20 mb-4 flex items-center justify-center border-2 border-white/10 group-hover:border-primary/50 transition-colors shadow-lg">
                <span className="text-2xl font-bold text-white tracking-widest">{member.initials}</span>
              </div>
              
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <span className="text-sm font-medium text-primary mb-3">{member.role}</span>
              <p className="text-sm text-foreground/60 mb-6 flex-1">
                {member.desc}
              </p>
              
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
          
          {/* Join the team card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 border border-white/5 border-dashed flex flex-col items-center justify-center text-center bg-transparent hover:bg-white/5 transition-colors"
          >
            <h4 className="text-xl font-bold text-white mb-2">Join Our Team</h4>
            <p className="text-sm text-foreground/60 mb-4">
              We're always looking for top Amazon talent.
            </p>
            <a href="#contact" className="text-sm font-bold text-primary hover:underline">View Openings →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
