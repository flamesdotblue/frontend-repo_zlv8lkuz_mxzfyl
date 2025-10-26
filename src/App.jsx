import Navbar from './components/Navbar';
import HeroSpline from './components/HeroSpline';
import FeatureHighlights from './components/FeatureHighlights';
import HiringCTA from './components/HiringCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <HeroSpline />
        <section id="showcase" className="relative">
          <FeatureHighlights />
        </section>
        <section id="creators" className="relative">
          <HiringCTA />
        </section>
      </main>
      <footer className="border-t border-white/10 bg-[#0b0b0f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} CREATIFY. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
