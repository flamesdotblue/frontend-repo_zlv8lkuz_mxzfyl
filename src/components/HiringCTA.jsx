import { Briefcase, Shield, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HiringCTA() {
  return (
    <section id="hire" className="relative bg-[#0b0b0f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 mb-4">
            <Briefcase size={14}/> Hiring Portal
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">Find the right creator for every brief</h3>
          <p className="mt-3 text-white/70">
            Post your project, set timelines and budgets, and get matched with vetted talent. Built-in messaging, offers, and secure payments keep everything in one place.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Shield size={16} className="text-emerald-400"/> Protected contracts & escrow</li>
            <li className="flex items-center gap-2"><PlayCircle size={16} className="text-cyan-400"/> Reel-first proposals</li>
          </ul>
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90">
              Start a project
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5">
              Browse talent
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02]"
        >
          <div className="aspect-video w-full bg-black/60 grid grid-cols-3 gap-1 p-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-md bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 ring-1 ring-white/10" />
            ))}
          </div>
          <div className="p-4">
            <p className="text-sm text-white/70">Smart search filters surface creators by skills, tools, price, and availability.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
