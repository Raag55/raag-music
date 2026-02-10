import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, Music, Gift } from "lucide-react";

const features = [
  {
    icon: Music,
    title: "Free Music Education",
    desc: "Providing free training in vocals and instruments to children.",
  },
  {
    icon: Users,
    title: "Community Outreach",
    desc: "Workshops, school visits and music camps for local communities.",
  },
  {
    icon: Gift,
    title: "Instrument Donations",
    desc: "Collecting and refurbishing instruments for students in need.",
  },
  {
    icon: Heart,
    title: "Talent Development",
    desc: "Scholarships and mentorship to nurture promising musicians.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const RaagFoundation: React.FC = () => {
  return (
    <div className="w-full bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6">
        {/* Logo */}
        <div className="absolute top-6 left-6">
          <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400">
            <img src="/images/foundation.jpeg" alt="Foundation Logo" className="object-contain h-full w-full" />
          </div>
        </div>

        <div className="max-w-4xl text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Raag Foundation
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg text-gray-400"
          >
            Spreading the joy of music through service, education, and community.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              Donate Instruments
            </button>
            <button className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition">
              Volunteer With Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white text-black py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              Raag Foundation empowers underprivileged children through music
              education. We believe music builds confidence, discipline, and
              lifelong opportunity.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f) => (
              <div
                key={f.title}
                className="border border-black/10 rounded-xl p-4"
              >
                <f.icon className="text-[#D4AF37] mb-3" />
                <h4 className="font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold text-center mb-14"
          >
            Our Impact
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["100+", "Children Reached"],
              ["10+", "Community Programs"],
              ["50+", "Instruments Donated"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900 border border-white/10 rounded-xl p-8 text-center"
              >
                <p className="text-4xl font-bold text-[#D4AF37]">{value}</p>
                <p className="mt-2 text-gray-400">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black py-24 px-6 text-center">
        <motion.h4
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold"
        >
          Get Involved
        </motion.h4>

        <p className="mt-4 max-w-xl mx-auto text-gray-600">
          Volunteer, donate instruments, or sponsor a child’s musical journey.
          Every contribution creates real change.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="px-10 py-4 rounded-full bg-black text-white font-semibold hover:bg-zinc-800 transition">
            Donate Instruments
          </button>
          <button className="px-10 py-4 rounded-full border border-black/20 hover:border-black transition">
            Volunteer With Us
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Raag Foundation. All rights reserved.
      </footer>
    </div>
  );
};

export default RaagFoundation;
