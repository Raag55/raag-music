import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Coffee, Music, Headphones, Users } from "lucide-react";

const MotionLink = motion(Link);

const sections = [
  {
    title: "Raag Cafe",
    desc: "Food, live music and cozy vibes — join our weekend performances.",
    path: "/cafe",
    image: "/images/cafe.jpeg",
    icon: Coffee,
  },
  {
    title: "Raag Academy",
    desc: "Structured training in vocals and instruments for all ages.",
    path: "/academy",
    image: "/images/academy.png",
    icon: Music,
  },
  {
    title: "Raag Studio",
    desc: "Record, mix and master with our professional engineers.",
    path: "/studio",
    image: "/images/studio.jpeg",
    icon: Headphones,
  },
  {
    title: "Raag Foundation",
    desc: "Free education and outreach programs for underprivileged kids.",
    path: "/foundation",
    image: "/images/foundation.jpeg",
    icon: Users,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const RaagMusic: React.FC = () => {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <div className="w-full bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6">
        <div className="absolute top-6 left-6">
          <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400">
            <img src="/images/music.png" alt="Raag Logo" className="object-contain h-full w-full" />
          </div>
        </div>

        <div className="max-w-4xl text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Welcome to Raag Music
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg text-gray-400"
          >
            A community of learning, creation and performance — all under one roof.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/academy"
              className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition"
            >
              Join Academy
            </Link>
            <Link
              to="/cafe"
              className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition"
            >
              Explore Cafe
            </Link>
            <Link
              to="/studio"
              className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition"
            >
              Visit Studio
            </Link>
            <Link
              to="/foundation"
              className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition"
            >
              Support Foundation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="bg-white text-black py-24 px-6">
        <h2 className="text-3xl font-semibold text-center mb-14">
          Our Verticals
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {sections.map((s, idx) => (
            <MotionLink
              key={s.title}
              to={s.path}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group border border-black/10 rounded-2xl overflow-hidden"
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full pt-2 h-32 md:h-36 object-contain"
              />

              <div className="p-6">
                <div className="flex items-center gap-3">
                  <s.icon className="text-[#D4AF37]" />
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>

                <p className="text-gray-600 mt-4">{s.desc}</p>

                <span className="inline-block mt-4 text-sm font-medium text-black">
                  Explore →
                </span>
              </div>
            </MotionLink>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-black py-24 px-6">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold text-center mb-14"
        >
          Gallery
        </motion.h3>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "/images/cafeImage.avif",
            "/images/StudioImage.jpg",
            "/images/foundationImage.jpeg",
            "/images/academyImage.avif",
          ].map((img) => (
            <motion.button
              key={img}
              whileHover={{ scale: 1.03 }}
              onClick={() => setPreview(img)}
              className="overflow-hidden rounded-xl border border-white/10"
            >
              <img src={img} alt="raag" className="h-36 w-full object-cover" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* VISION */}
      <section className="bg-white text-black py-24 px-6 text-center">
        <motion.h4
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-6"
        >
          Our Vision
        </motion.h4>

        <p className="max-w-3xl mx-auto text-gray-600">
          Nurture talent, preserve tradition, and craft meaningful musical
          experiences for communities, creators and learners.
        </p>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-black py-20 px-6 text-center border-t border-white/10">
        <motion.h5
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-semibold mb-4"
        >
          Welcome to the World of Raag
        </motion.h5>

        <p className="text-gray-400 mb-8">
          Explore music. Learn music. Live music.
        </p>

        <Link
          to="/cafe"
          className="inline-flex items-center px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
        >
          Discover Events
        </Link>
      </section>

      {/* IMAGE MODAL */}
      {preview && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
        >
          <div className="relative max-w-3xl w-full mx-4">
            <button
              onClick={() => setPreview(null)}
              className="absolute right-3 top-3 text-white border border-white/30 rounded-full px-3 py-1"
            >
              Close
            </button>
            <img src={preview} alt="preview" className="rounded-xl w-full object-cover" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default RaagMusic;
