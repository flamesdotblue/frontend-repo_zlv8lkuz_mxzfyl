import { Rocket, Briefcase, Users, PlayCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-400" />
          <span className="text-white font-semibold tracking-tight">CREATIFY</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#showcase" className="hover:text-white transition-colors flex items-center gap-2"><PlayCircle size={16}/> Showcase</a>
          <a href="#creators" className="hover:text-white transition-colors flex items-center gap-2"><Users size={16}/> Creators</a>
          <a href="#hire" className="hover:text-white transition-colors flex items-center gap-2"><Briefcase size={16}/> Hire</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center rounded-md border border-white/15 px-3 text-sm text-white/90 hover:bg-white/5">Sign in</button>
          <button className="inline-flex h-9 items-center gap-2 rounded-md bg-white text-black px-4 text-sm font-medium hover:bg-white/90">
            <Rocket size={16}/> Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
