import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Star, Coffee, Utensils, ExternalLink } from 'lucide-react';

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: <Utensils className="w-5 h-5" /> },
    { id: 'beverages', name: 'Beverages', icon: <Coffee className="w-5 h-5" /> },
    { id: 'mains', name: 'Main Courses', icon: <Utensils className="w-5 h-5" /> },
    { id: 'vegan', name: 'Vegan Special', icon: <Leaf className="w-5 h-5" /> },
    { id: 'specials', name: 'House Specials', icon: <Star className="w-5 h-5" /> },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Raag Special Coffee",
      description: "Our signature blend with aromatic spices and rich cream",
      price: "₹120",
      category: "beverages",
      isVegan: false,
      isSpecial: true,
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Masala Chai Latte",
      description: "Traditional chai with steamed milk and authentic spices",
      price: "₹80",
      category: "beverages",
      isVegan: true,
      isSpecial: false,
      image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Paneer Tikka Masala",
      description: "Grilled cottage cheese in rich tomato and cream gravy",
      price: "₹180",
      category: "mains",
      isVegan: false,
      isSpecial: false,
      image: "https://images.pexels.com/photos/5410400/pexels-photo-5410400.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Vegan Buddha Bowl",
      description: "Quinoa, roasted vegetables, avocado, and tahini dressing",
      price: "₹220",
      category: "vegan",
      isVegan: true,
      isSpecial: true,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 5,
      name: "All-You-Can-Eat Thali",
      description: "Traditional platter with dal, sabzi, rice, roti, and dessert",
      price: "₹299",
      category: "specials",
      isVegan: false,
      isSpecial: true,
      image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 6,
      name: "Chhattisgarhi Bafauri",
      description: "Traditional steamed dumplings with local spices",
      price: "₹150",
      category: "specials",
      isVegan: true,
      isSpecial: true,
      image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 7,
      name: "Fresh Fruit Smoothie",
      description: "Seasonal fruits blended with yogurt or coconut milk",
      price: "₹100",
      category: "beverages",
      isVegan: true,
      isSpecial: false,
      image: "https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 8,
      name: "Live Music Pasta",
      description: "Creamy pasta with seasonal vegetables and herbs",
      price: "₹190",
      category: "mains",
      isVegan: false,
      isSpecial: false,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const filteredItems = menuItems.filter(item => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'vegan') return item.isVegan;
    if (activeCategory === 'specials') return item.isSpecial;
    return item.category === activeCategory;
  });

  return (
    <section id="menu" className="py-20 bg-warm-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Our Menu
          </h2>
          <p className="text-lg text-warm-200 max-w-3xl mx-auto leading-relaxed">
            Savor our carefully crafted dishes that blend traditional flavors with contemporary flair. 
            From ₹1 to ₹400, there's something delicious for every budget.
          </p>
          
          {/* Swiggy Order Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <a
              href="https://www.swiggy.com/city/raipur/raag-music-cafe-civil-lines-rest1101218"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-warm-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Order on Swiggy</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent-500 text-warm-900 shadow-lg'
                  : 'bg-warm-800 text-warm-200 hover:bg-warm-700'
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 flex space-x-2">
                  {item.isVegan && (
                    <div className="bg-green-500 text-white p-1 rounded-full">
                      <Leaf className="w-4 h-4" />
                    </div>
                  )}
                  {item.isSpecial && (
                    <div className="bg-accent-500 text-warm-900 p-1 rounded-full">
                      <Star className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-warm-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-warm-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {item.price}
                  </span>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                    Order
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;