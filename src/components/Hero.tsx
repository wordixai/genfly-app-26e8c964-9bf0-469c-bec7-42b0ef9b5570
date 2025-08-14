import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-wave">
        <div className="w-12 h-12 bg-seafoam/30 rounded-full backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-sunset text-sunset" />
            ))}
            <span className="ml-2 text-white/90">5-Star Luxury Resort</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Welcome to
            <span className="block text-gradient bg-gradient-to-r from-seafoam to-sand bg-clip-text text-transparent">
              Azure Bay Resort
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Experience unparalleled luxury where pristine beaches meet world-class hospitality. 
            Your perfect seaside escape awaits.
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-white/80 mb-8">
            <MapPin className="h-5 w-5" />
            <span>Maldives • Private Island Paradise</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button size="lg" className="btn-hero text-lg px-10 py-4">
            <Calendar className="h-5 w-5 mr-2" />
            Book Your Stay
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="btn-outline-ocean bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-ocean-deep text-lg px-10 py-4"
          >
            Explore Resort
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-seafoam mb-2">50+</div>
            <div className="text-white/80">Luxury Suites</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sand mb-2">24/7</div>
            <div className="text-white/80">Concierge Service</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-coral mb-2">5★</div>
            <div className="text-white/80">Guest Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;