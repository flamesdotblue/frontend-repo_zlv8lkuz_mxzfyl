import { Briefcase, Users, Star, MessageSquare } from 'lucide-react';

const FEATURES = [
  {
    title: 'Creator Profiles',
    desc: 'Showcase reels, renders, case studies, skills, and tools with a cinematic portfolio.',
    icon: Star,
  },
  {
    title: 'Smart Hiring',
    desc: 'Filter by skills, tools, price range, and availability to find the perfect fit.',
    icon: Briefcase,
  },
  {
    title: 'Community & Social',
    desc: 'Follow, appreciate, comment, and collaborate with other creators in real time.',
    icon: Users,
  },
  {
    title: 'Direct Messaging',
    desc: 'Chat, share briefs, and align on vision with built-in messaging.',
    icon: MessageSquare,
  },
];

export default function FeatureHighlights() {
  return (
    <section className="relative bg-gradient-to-b from-black to-[#0b0b0f] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Built for serious creativity</h2>
          <p className="mt-3 text-white/70">Everything you need to present your work beautifully and connect with clients who value it.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center ring-1 ring-white/15">
                <Icon className="text-white" size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
