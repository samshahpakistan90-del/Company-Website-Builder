import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: "Syed Sami",
    role: "Chief Executive Officer",
    desc: "Visionary leader with 7+ years scaling Amazon brands globally.",
    initials: "SS",
    image: "https://i.postimg.cc/Dfpsxm08/Gemini-Generated-Image-nazbyznazbyznazb.png"
  },
  {
    name: "Hala Noor",
    role: "Brand Development Executive",
    desc: "Expert in brand positioning, identity, and long-term market strategy.",
    initials: "HN",
    image: "https://i.postimg.cc/Yqm483Tx/Gemini-Generated-Image-sasj39sasj39sasj.jpg"
  },
  {
    name: "Asad",
    role: "Amazon Brand Strategist",
    desc: "Architect behind high-converting product catalogs and ranking strategies.",
    initials: "A",
    image: "https://i.postimg.cc/5yQt74Kf/Gemini-Generated-Image-xryo4lxryo4lxryo.png"
  },
  {
    name: "Ali Arshad",
    role: "PPC & Advertising Expert",
    desc: "Mastering Amazon algorithms to maximize ROAS and minimize ACOS.",
    initials: "AA",
    image: "https://i.postimg.cc/ZRC3mhDy/Gemini-Generated-Image-csddkacsddkacsdd.png"
  },
  {
    name: "Usama",
    role: "Creative Designer",
    desc: "Visual storyteller crafting stunning A+ Content and storefronts.",
    initials: "U",
    image: "https://i.postimg.cc/JhJV2yMY/Gemini-Generated-Image-ckmsgmckmsgmckms.png"
  },
  {
    name: "Tayyab Sethi",
    role: "Listing Optimization Expert",
    desc: "SEO specialist turning product listings into high-converting pages.",
    initials: "TS",
    image: "https://i.postimg.cc/rp539vNb/Gemini-Generated-Image-a84veca84veca84v.png"
  },
  {
    name: "Hassan Kamran",
    role: "Operations & Supply Chain",
    desc: "Ensuring flawless inventory flow and supply chain efficiency.",
    initials: "HK",
    image: "https://i.postimg.cc/jSPMVynh/Gemini-Generated-Image-qkaj9hqkaj9hqkaj.png"
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-black/20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">Our Team</h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">
            The Experts Behind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-primary">
              The Growth
            </span>
          </h3>
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
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group glass rounded-2xl p-6 border border-white/5 hover:border-primary/40 transition-all hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {/* Photo */}
              <div className="w-24 h-24 rounded-full mb-4 overflow-hidden border-2 border-white/10 group-hover:border-primary/60 transition-colors shadow-lg shadow-black/30 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback initials */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-primary/20 hidden items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="text-2xl font-bold text-white tracking-widest">{member.initials}</span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300 mb-3">{member.role}</span>
              <p className="text-sm text-foreground/60 mb-6 flex-1">
                {member.desc}
              </p>

              <a
                href="https://www.linkedin.com/company/ecommerce-innovators-co/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors"
              >
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
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 border border-white/10">
              <span className="text-2xl font-bold text-primary">+</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Join Our Team</h4>
            <p className="text-sm text-foreground/60 mb-4">
              We're always looking for top Amazon talent.
            </p>
            <a href="#contact" className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-300 hover:opacity-80 transition-opacity">View Openings →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
