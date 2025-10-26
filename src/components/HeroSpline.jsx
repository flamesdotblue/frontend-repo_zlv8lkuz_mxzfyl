import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSpline() {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            The Modern Hub for Visual Creators
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-white/80 max-w-xl"
          >
            Showcase cinematic work, connect with clients, and get hired. Built for video editors, animators, and 3D artists.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#creators" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90">Explore Creators</a>
            <a href="#hire" className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 font-medium text-white hover:bg-white/5">Hire Talent</a>
          </motion.div>
        </div>
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] rounded-xl overflow-hidden ring-1 ring-white/10">
          <Spline
            scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
