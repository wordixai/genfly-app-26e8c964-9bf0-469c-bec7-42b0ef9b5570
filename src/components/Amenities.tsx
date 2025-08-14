import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Utensils, 
  Dumbbell, 
  Waves, 
  Wifi, 
  Car, 
  Sparkles,
  Camera,
  Coffee,
  Gamepad2,
  Music,
  Heart,
  Users
} from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: Utensils,
      title: 'Fine Dining',
      description: 'Multiple award-winning restaurants featuring international cuisine and fresh seafood',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Waves,
      title: 'Private Beach',
      description: 'Pristine white sand beach with crystal clear waters and water sports activities',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Sparkles,
      title: 'Luxury Spa',
      description: 'World-class spa treatments and wellness programs for complete relaxation',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Dumbbell,
      title: 'Fitness Center',
      description: 'State-of-the-art gym with personal trainers and yoga classes',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Coffee,
      title: 'Pool Bar',
      description: 'Infinity pool with swim-up bar and panoramic ocean views',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      icon: Users,
      title: 'Event Spaces',
      description: 'Beautiful venues for weddings, conferences, and special celebrations',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const features = [
    { icon: Wifi, title: 'High-Speed WiFi', description: 'Complimentary throughout resort' },
    { icon: Car, title: 'Valet Parking', description: '24/7 complimentary service' },
    { icon: Camera, title: 'Photography', description: 'Professional photo sessions' },
    { icon: Gamepad2, title: 'Kids Club', description: 'Supervised activities & games' },
    { icon: Music, title: 'Live Entertainment', description: 'Nightly shows & performances' },
    { icon: Heart, title: 'Concierge', description: 'Personal assistance 24/7' }
  ];

  return (
    <section id="amenities" className="section-padding bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
            World-Class <span className="text-gradient">Amenities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in luxury with our comprehensive range of facilities and services, 
            designed to exceed every expectation.
          </p>
        </div>

        {/* Main Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <Card key={index} className="card-hover overflow-hidden bg-white border-0 shadow-lg group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={amenity.image} 
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <amenity.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-serif text-ocean-deep">{amenity.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-center text-ocean-deep mb-8">
            Additional Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-gradient-to-br from-ocean-light to-seafoam rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="h-8 w-8 text-ocean-deep" />
                </div>
                <h4 className="font-semibold text-ocean-deep mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;