import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Music, Users, Leaf, Clock } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Live Music Nights",
      description: "Regular performances featuring local and touring artists across various genres"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Hub",
      description: "A gathering place for artists, music lovers, and food enthusiasts"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Vegan Friendly",
      description: "Extensive vegan menu options and all-you-can-eat platters available"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Open Late",
      description: "Daily service until midnight for night owls and music lovers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-warm-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-900 mb-6">
            About Raag Music Cafe
          </h2>
          <p className="text-lg text-warm-700 max-w-3xl mx-auto leading-relaxed">
            Located opposite Telibandha Talab in Raipur, Raag Music Cafe is more than just a dining destination. 
            We're a cultural haven where the rhythm of music meets the art of cuisine, creating unforgettable 
            experiences for our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cafe Interior"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-display font-bold text-warm-900 mb-6">
              A Soulful Experience
            </h3>
            <p className="text-warm-700 mb-6 leading-relaxed">
              Step into our bohemian-inspired space where warm lighting, artistic decor, and the gentle 
              hum of conversation create the perfect ambiance. Our carefully curated environment reflects 
              the rich cultural heritage of Chhattisgarh while embracing contemporary artistic expression.
            </p>
            <p className="text-warm-700 leading-relaxed">
              From intimate acoustic sessions to vibrant cultural performances, every evening at Raag 
              offers something special. Our diverse menu caters to all tastes, with affordable pricing 
              (₹1-₹400 per person) ensuring everyone can enjoy our hospitality.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-primary-600 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-warm-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-warm-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;