import React, { useState } from "react";
import { motion } from "framer-motion";
import { Music, Headphones, Monitor, Play } from "lucide-react";

const services = [
  {
    icon: Headphones,
    title: "Audio Recording",
    desc: "High-quality vocal and instrumental recording with professional engineers.",
  },
  {
    icon: Monitor,
    title: "Mixing & Mastering",
    desc: "Polished mixes and mastering for streaming platforms and releases.",
  },
  {
    icon: Music,
    title: "Instrument Tracking",
    desc: "Dedicated session tracking for strings, percussion and more.",
  },
  {
    icon: Play,
    title: "Voice Over",
    desc: "Clear, broadcast-ready voice recordings for ads and media.",
  },
  {
    icon: Headphones,
    title: "Editing",
    desc: "Precision edits and comping to get the cleanest takes.",
  },
  {
    icon: Monitor,
    title: "Production Help",
    desc: "Beat-making and arrangement support for artists.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const RaagStudio: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="w-full bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6">
        {/* Logo */}
        <div className="absolute top-6 left-6 h-12 w-12 rounded-full border border-white/20 overflow-hidden">
          <img
            src="/images/studio.jpeg"
            alt="Raag Studio Logo"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="max-w-4xl text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Raag Studio
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg text-gray-400"
          >
            Professional recording, mixing and creative support for musicians
            and creators.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              Book a Session
            </button>
            <button
              onClick={() => setModal(true)}
              className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition"
            >
              View Studio
            </button>
          </motion.div>
        </div>

        {/* Equalizer */}
        <div className="absolute right-6 bottom-6 flex items-end gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              animate={{ height: [10, 26, 10] }}
              transition={{ duration: 1.2 + i * 0.15, repeat: Infinity }}
              className="w-1 rounded bg-[#D4AF37]"
            />
          ))}
        </div>
      </section>

      {/* ABOUT & SERVICES */}
      <section className="bg-white text-black py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-4">About the Studio</h2>
            <p className="text-gray-600">
              Raag Studio combines experienced engineers, professional equipment,
              and comfortable spaces so artists can focus purely on creativity.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 border border-black/10 rounded-full px-4 py-2">
                <Headphones className="text-[#D4AF37]" />
                <span className="font-medium">State-of-the-art gear</span>
              </div>
              <div className="flex items-center gap-3 border border-black/10 rounded-full px-4 py-2">
                <Monitor className="text-[#D4AF37]" />
                <span className="font-medium">Experienced engineers</span>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-2">
            <motion.h3
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-10"
            >
              Services
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((s, idx) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="border border-black/10 rounded-xl p-5"
                >
                  <s.icon className="text-[#D4AF37] mb-3" />
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-black py-24 px-6 text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-4"
        >
          Studio Pricing
        </motion.h2>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2 text-sm font-medium">
            <Music className="text-[#D4AF37]" size={16} />
            Now offering hourly packages
          </div>
        </div>

        <div className="inline-block border border-white/10 rounded-2xl p-10">
          <p className="text-5xl font-extrabold text-[#D4AF37] mb-2">₹100</p>
          <p className="text-gray-400">per minute of recording</p>
          <p className="text-sm text-gray-500 mt-3">
            Includes recording, editing & mixing
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black py-24 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Record With Raag Studio
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-8">
          From singles to voice-overs — we help artists achieve professional sound.
        </p>
        <button className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-black text-white font-semibold hover:bg-zinc-800 transition">
          <Play /> Book a Session
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Raag Studio. All rights reserved.
      </footer>

      {/* MODAL */}
      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
        >
          <div className="relative max-w-3xl w-full mx-4">
            <button
              onClick={() => setModal(false)}
              className="absolute right-3 top-3 text-white border border-white/30 rounded-full px-3 py-1"
            >
              Close
            </button>
            <img
              src="/images/live-music-1.jpg"
              alt="Studio preview"
              className="rounded-xl w-full object-cover"
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RaagStudio;
