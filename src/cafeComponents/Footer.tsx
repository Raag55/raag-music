import React from 'react';
import { Music, MapPin, Phone, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Events', id: 'events' },
    { name: 'Book a Table', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
  ];

  return (
    <footer className="bg-warm-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Music className="w-8 h-8 text-accent-400" />
              <span className="text-2xl font-display font-bold">Raag Music Cafe</span>
            </div>
            <p className="text-warm-200 leading-relaxed mb-6">
              Where music meets flavor in the heart of Raipur. Experience the perfect blend
              of soulful tunes, delicious cuisine, and vibrant community.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-warm-400 hover:text-accent-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-warm-200 hover:text-accent-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                <p className="text-warm-200 text-sm">
                  Main Road Shankar Nagar<br />
                  Raipur, Chhattisgarh 492001
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-400" />
                <a
                  href="tel:+91755558545"
                  className="text-warm-200 hover:text-accent-400 transition-colors duration-300"
                >
                  +91 98275 8545
                </a>
              </div>

              <div className="text-warm-200 text-sm">
                <a
                  href="mailto:raagmusic.cg@gmail.com"
                  className="hover:text-accent-400 transition-colors duration-300 block"
                >
                  raagmusic.cg@gmail.com
                </a>
                <a
                  href="mailto:info@raagmusic.cg.com"
                  className="hover:text-accent-400 transition-colors duration-300 block"
                >
                  info@raagmusic.cg.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent-400" />
                <p className="text-warm-200">Open Daily till 12:00 AM</p>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6">Operating Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-warm-200">Monday - Thursday</span>
                <span className="text-white">11:00 AM - 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-warm-200">Friday - Saturday</span>
                <span className="text-white">11:00 AM - 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-warm-200">Sunday</span>
                <span className="text-white">11:00 AM - 12:00 AM</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-primary-600/20 rounded-lg">
              <p className="text-sm text-accent-200">
                <strong>Live Music:</strong> Friday & Saturday evenings
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-warm-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-warm-400 text-sm">
              © 2024 Raag Music Cafe. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-warm-400 hover:text-accent-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-warm-400 hover:text-accent-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;