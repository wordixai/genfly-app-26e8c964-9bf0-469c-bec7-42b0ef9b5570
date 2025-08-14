import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Star } from 'lucide-react';

const Attractions = () => {
  const attractions = [
    {
      id: 1,
      name: 'Coral Reef Snorkeling',
      description: 'Explore vibrant coral reefs teeming with tropical marine life in crystal-clear waters.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      distance: '5 min walk',
      duration: '2-3 hours',
      groupSize: '2-8 people',
      rating: 4.9,
      category: 'Water Sports',
      price: 'Included'
    },
    {
      id: 2,
      name: 'Sunset Dolphin Cruise',
      description: 'Romantic sunset cruise with chances to spot playful dolphins in their natural habitat.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      distance: '10 min boat',
      duration: '3 hours',
      groupSize: '4-12 people',
      rating: 4.8,
      category: 'Cruise',
      price: '$85'
    },
    {
      id: 3,
      name: 'Island Hopping Adventure',
      description: 'Discover hidden coves and pristine beaches across multiple tropical islands.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      distance: '15 min boat',
      duration: 'Full day',
      groupSize: '6-15 people',
      rating: 4.7,
      category: 'Adventure',
      price: '$150'
    },
    {
      id: 4,
      name: 'Deep Sea Fishing',
      description: 'Experience the thrill of deep sea fishing with professional guides and equipment.',
      image: 'https://images.unsplash.com/photo-1494949360228-4e9bde560065?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      distance: '20 min boat',
      duration: '4-6 hours',
      groupSize: '4-8 people',
      rating: 4.6,
      category: 'Fishing',
      price: '$200'
    },
    {
      id: 5,
      name: 'Underwater Restaurant',
      description: 'Dine surrounded by marine life in the world\'s most unique underwater dining experience.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      distance: '2 min walk',
      duration: '2 hours',
      groupSize: '2-4 people',
      rating: 4.9,
      category: 'Dining',
      price: '$350'
    },
    {
      id: 6,
      name: 'Seaplane Scenic Tour',
      description: 'Breathtaking aerial views of the archipelago and surrounding coral atolls.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      distance: '30 min transfer',
      duration: '1 hour',
      groupSize: '2-6 people',
      rating: 5.0,
      category: 'Sightseeing',
      price: '$450'
    }
  ];

  const categories = ['All', 'Water Sports', 'Cruise', 'Adventure', 'Fishing', 'Dining', 'Sightseeing'];

  return (
    <section id="attractions" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
            Local <span className="text-gradient">Attractions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the magic of our tropical paradise with unforgettable experiences 
            and adventures that will create memories to last a lifetime.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant={index === 0 ? "default" : "secondary"}
              className={`px-4 py-2 cursor-pointer transition-all duration-200 ${
                index === 0 
                  ? 'bg-gradient-to-r from-primary to-secondary text-white' 
                  : 'hover:bg-ocean-light/50'
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <Card key={attraction.id} className="card-hover overflow-hidden bg-white border-0 shadow-lg group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <Badge className="absolute top-4 left-4 bg-coral text-white border-0">
                  {attraction.category}
                </Badge>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-bold text-ocean-deep">{attraction.price}</span>
                </div>

                <div className="absolute bottom-4 left-4 flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-sunset text-sunset" />
                  <span className="text-white font-semibold">{attraction.rating}</span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-serif text-ocean-deep">{attraction.name}</CardTitle>
                <p className="text-muted-foreground text-sm">{attraction.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{attraction.distance}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{attraction.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>{attraction.groupSize}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                  <Button size="sm" className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-outline-ocean">
            View All Attractions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Attractions;