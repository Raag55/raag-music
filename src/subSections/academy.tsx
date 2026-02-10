import React from "react";
import { motion } from "framer-motion";
import {
  Music,
  Clock,
  Calendar,
  DollarSign,
} from "lucide-react";

const courses = [
  "Singing",
  "Harmonium",
  "Tabla",
  "Guitar",
  "Keyboard",
  "Ukulele",
  "Octapad",
  "Drums",
  "Cajon",
  "Violin",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const RaagAcademy: React.FC = () => {
  return (
    <div className="w-full bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6">
        {/* Logo */}
        <div className="absolute top-6 left-6">
          {/* Replace with real logo */}
          <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-sm text-gray-400">
            <img src="/images/academy.png" alt="Raag Logo" className="object-contain h-full w-full" />
          </div>
        </div>

        <div className="max-w-4xl text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Raag Academy
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 text-lg text-gray-400"
          >
            Where discipline meets expression — learn music the right way.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex justify-center gap-4"
          >
            <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition">
              Explore Courses
            </button>
            <button className="px-8 py-3 rounded-full border border-white/30 hover:border-white transition">
              Enroll Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white text-black py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-semibold"
          >
            About Raag Academy
          </motion.h2>

          <p className="mt-6 text-gray-600 text-lg">
            We offer structured music education rooted in tradition, guided by
            experienced mentors, and shaped for modern performers of all ages.
          </p>
        </div>
      </section>

      {/* COURSES */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Courses Offered
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-zinc-900 border border-white/10 rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <Music className="text-[#D4AF37]" />
                  <h3 className="text-xl font-semibold">{course}</h3>
                </div>

                <p className="mt-4 text-sm text-gray-400">
                  Structured lessons with focus on technique, rhythm and
                  performance.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BATCH TIMINGS */}
      <section className="bg-white text-black py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Batch Timings
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Morning Batches",
                icon: Clock,
                slots: [
                  ["8:00 AM – 9:00 AM", "All Levels"],
                  ["9:00 AM – 10:00 AM", "All Levels"],
                  ["10:00 AM – 11:00 AM", "All Levels"],
                ],
              },
              {
                title: "Evening Batches",
                icon: Calendar,
                slots: [
                  ["4:00 PM – 5:00 PM", "All Levels"],
                  ["5:00 PM – 6:00 PM", "Advanced"],
                  ["6:00 PM – 7:00 PM", "All Levels"],
                  ["7:00 PM – 8:00 PM", "All Levels"],
                ],
              },
            ].map((batch) => (
              <div
                key={batch.title}
                className="border border-black/10 rounded-xl p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{batch.title}</h3>
                  <batch.icon className="text-[#D4AF37]" />
                </div>

                <ul className="mt-6 space-y-3">
                  {batch.slots.map(([time, level]) => (
                    <li key={time} className="flex justify-between text-gray-700">
                      <span>{time}</span>
                      <span className="font-medium">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEES */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Fees Structure
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "3 Days / Week",
                fees: [
                  ["1 Month", "₹999"],
                  ["3 Months", "₹2499"],
                  ["6 Months", "₹4499"],
                ],
              },
              {
                title: "6 Days / Week",
                fees: [
                  ["1 Month", "₹1499"],
                  ["3 Months", "₹3999"],
                  ["6 Months", "₹7499"],
                ],
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className="bg-zinc-900 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-center mb-6">
                  {plan.title}
                </h3>

                <ul className="space-y-3 text-gray-300">
                  {plan.fees.map(([label, price]) => (
                    <li key={label} className="flex justify-between">
                      <span>{label}</span>
                      <span className="font-semibold">{price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 mt-10">
            Registration Fee: <span className="text-white font-medium">₹499</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black py-24 px-6 text-center">
        <motion.h2
          className="text-4xl font-semibold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Start Your Musical Journey
        </motion.h2>

        <p className="mt-4 text-gray-600">
          Limited seats available · Free trial class for new students
        </p>

        <button className="mt-10 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-black text-white font-semibold hover:bg-zinc-800 transition">
          <DollarSign /> Enroll Now
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Raag Academy. All rights reserved.
      </footer>
    </div>
  );
};

export default RaagAcademy;
