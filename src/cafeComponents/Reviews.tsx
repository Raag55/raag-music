import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reviews = [
    {
      id: 1,
      name: "Rajnish Choubey",
      rating: 5,
      review: "I had best time with my family at Raag Music Cafe. The ambiance is amazing, the food is delicious, and the live music made our evening truly special. Highly recommended!",
      date: "1 week ago",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      name: "RaipurFoodSafari",
      rating: 4,
      review: "This place is perfect for hanging out with friends. Great food, good music, and a cozy atmosphere. The menu has something for everyone, and the prices are reasonable.",
      date: "2 weeks ago",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      name: "Mimansha",
      rating: 3,
      review: "It's a kind of overrated cafe. The food is okay but nothing exceptional. The music is nice but the service could be better. Expected more based on the hype.",
      date: "3 weeks ago",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 4,
      name: "Pinky Sahu",
      rating: 4,
      review: "I threw my nephew's 1st birthday party here and it was wonderful! The staff was very accommodating, the food was great, and the kids loved the music. Great venue for celebrations!",
      date: "5 days ago",
      avatar: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 5,
      name: "Kiran Yadav",
      rating: 5,
      review: "Perfect blend of music, food, and atmosphere. This cafe has become my favorite spot in Raipur. The live performances are fantastic and the food never disappoints. A must-visit!",
      date: "4 days ago",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-accent-500 fill-current' : 'text-warm-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-warm-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-900 mb-6">
            What Our Guests Say
          </h2>
          <p className="text-lg text-warm-700 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our community of music and food lovers 
            have to say about their experiences at Raag Music Cafe.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent-200" />
              
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-warm-900">{review.name}</h4>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-warm-700 leading-relaxed mb-4 italic">
                "{review.review}"
              </p>
              
              <div className="text-sm text-warm-500">
                {review.date}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-primary-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">
              Share Your Experience
            </h3>
            <p className="mb-6 text-primary-100">
              Had a great time at Raag? We'd love to hear about your experience and share it with our community!
            </p>
            <button className="bg-white text-primary-600 hover:bg-warm-50 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Write a Review
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-8"
        >
          <div className="flex items-center justify-center space-x-8 text-warm-600">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">4.8</div>
              <div className="flex justify-center space-x-1 mb-2">
                {renderStars(5)}
              </div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">114+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">₹1-₹400</div>
              <div className="text-sm">Price Range</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;