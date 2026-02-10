import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/images/cafe-interior-1.jpg",
      alt: "Raag Music Cafe Interior",
      category: "interior"
    },
    {
      id: 2,
      src: "/images/live-music-1.jpg",
      alt: "Live Music Performance at Raag",
      category: "music"
    },
    {
      id: 3,
      src: "/images/food-spread.jpg",
      alt: "Raag Cafe Food Spread",
      category: "food"
    },
    {
      id: 4,
      src: "/images/cafe-exterior.jpg",
      alt: "Raag Music Cafe Exterior",
      category: "exterior"
    },
    {
      id: 5,
      src: "/images/seating-area.jpg",
      alt: "Cozy Seating Area",
      category: "interior"
    },
    {
      id: 6,
      src: "/images/live-music-2.jpg",
      alt: "Musicians at Raag Cafe",
      category: "music"
    },
    {
      id: 7,
      src: "/images/cafe-interior-2.jpg",
      alt: "Raag Cafe Ambiance",
      category: "interior"
    },
    {
      id: 8,
      src: "/images/beverages.jpg",
      alt: "Special Beverages",
      category: "food"
    },
    {
      id: 9,
      src: "/images/evening-ambiance.jpg",
      alt: "Evening at Raag Music Cafe",
      category: "interior"
    }
  ];

  return (
    <>
      <section id="gallery" className="py-20 bg-warm-50">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-warm-900 mb-6">
              Gallery
            </h2>
            <p className="text-lg text-warm-700 max-w-3xl mx-auto leading-relaxed">
              Step inside our world through these captured moments of music, food, and community. 
              Experience the ambiance that makes Raag Music Cafe special.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index % 3 === 0 ? 'lg:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                    index % 3 === 0 ? 'h-96 lg:h-full' : 'h-64'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Gallery;