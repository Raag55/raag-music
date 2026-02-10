import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Clock, Music, MapPin } from 'lucide-react';

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      id: 1,
      title: "Acoustic Nights",
      description: "Intimate acoustic performances featuring local singer-songwriters",
      date: "Every Friday",
      time: "8:00 PM - 11:00 PM",
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Weekly Event"
    },
    {
      id: 2,
      title: "Jazz & Blues Evening",
      description: "Smooth jazz and soulful blues with live band performances",
      date: "Every Saturday",
      time: "7:30 PM - 10:30 PM",
      image: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Weekly Event"
    },
    {
      id: 3,
      title: "Open Mic Sundays",
      description: "Share your talent! Open stage for all aspiring artists",
      date: "Every Sunday",
      time: "6:00 PM - 9:00 PM",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Community Event"
    },
    {
      id: 4,
      title: "Cultural Fusion Night",
      description: "Celebrating diverse musical traditions and fusion genres",
      date: "First Thursday",
      time: "7:00 PM - 10:00 PM",
      image: "https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Monthly Special"
    }
  ];

  return (
    <section id="events" className="py-20 bg-warm-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Live Events & Performances
          </h2>
          <p className="text-lg text-warm-200 max-w-3xl mx-auto leading-relaxed">
            Join us for unforgettable musical experiences. From intimate acoustic sessions to 
            vibrant cultural celebrations, there's always something happening at Raag.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-500 text-warm-900 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-warm-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-warm-600 mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-warm-700">
                    <Calendar className="w-5 h-5 mr-3 text-primary-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-warm-700">
                    <Clock className="w-5 h-5 mr-3 text-primary-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-warm-700">
                    <MapPin className="w-5 h-5 mr-3 text-primary-600" />
                    <span>Raag Music Cafe, Raipur</span>
                  </div>
                </div>
                
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center space-x-2">
                  <Music className="w-5 h-5" />
                  <span>Book Table</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-accent-500/20 border border-accent-500 rounded-lg p-8">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Want to Perform?
            </h3>
            <p className="text-warm-200 mb-6">
              Are you a musician or artist looking for a platform? We'd love to feature you at our events!
            </p>
            <button className="bg-accent-500 hover:bg-accent-600 text-warm-900 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Contact Us to Perform
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;