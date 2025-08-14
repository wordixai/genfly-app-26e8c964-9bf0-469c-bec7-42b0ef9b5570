import { Waves, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Dining', href: '#dining' },
    { name: 'Spa & Wellness', href: '#spa' },
    { name: 'Activities', href: '#activities' }
  ];

  const services = [
    { name: 'Concierge Service', href: '#concierge' },
    { name: 'Airport Transfer', href: '#transfer' },
    { name: 'Private Events', href: '#events' },
    { name: 'Wedding Planning', href: '#weddings' },
    { name: 'Corporate Meetings', href: '#meetings' },
    { name: 'Travel Insurance', href: '#insurance' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cancellation Policy', href: '#cancellation' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Accessibility', href: '#accessibility' },
    { name: 'Sustainability', href: '#sustainability' }
  ];

  return (
    <footer className="bg-ocean-deep text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Stay Connected with Paradise
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Subscribe to our newsletter for exclusive offers, luxury travel tips, and updates about Azure Bay Resort.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-coral hover:bg-coral/90 text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Resort Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-to-r from-seafoam to-coral rounded-full">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold">Azure Bay</h1>
                <p className="text-sm text-white/70">Luxury Resort</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Experience unparalleled luxury in our tropical paradise. Where pristine beaches meet world-class hospitality, creating memories that last a lifetime.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-seafoam" />
                <span className="text-white/80">Maldives • Private Island Paradise</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-seafoam" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-seafoam" />
                <span className="text-white/80">info@azurebay.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6">Resort</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-seafoam transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-white/80 hover:text-seafoam transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Social */}
          <div>
            <h4 className="text-xl font-serif font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 mb-8">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a 
                    href={policy.href}
                    className="text-white/80 hover:text-seafoam transition-colors duration-200"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-full hover:bg-seafoam/20 transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-full hover:bg-seafoam/20 transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-full hover:bg-seafoam/20 transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Azure Bay Resort. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <span>🏆 TripAdvisor Excellence Award</span>
              <span>⭐ 5-Star Luxury Certified</span>
              <span>🌍 Sustainable Tourism</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;