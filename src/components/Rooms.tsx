import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, Utensils, Car, Waves, Users, Bed } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Ocean View Suite',
      description: 'Spacious suite with panoramic ocean views and private balcony',
      price: '$450',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Ocean View', 'Private Balcony', 'King Bed', '2 Guests'],
      amenities: [Wifi, Utensils, Car, Waves],
      popular: true
    },
    {
      id: 2,
      name: 'Beachfront Villa',
      description: 'Luxury villa with direct beach access and private pool',
      price: '$850',
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Beach Access', 'Private Pool', 'Master Suite', '4 Guests'],
      amenities: [Wifi, Utensils, Car, Waves]
    },
    {
      id: 3,
      name: 'Sunset Penthouse',
      description: 'Ultimate luxury with 360-degree views and rooftop terrace',
      price: '$1,200',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      features: ['Rooftop Terrace', '360° Views', 'Presidential Suite', '6 Guests'],
      amenities: [Wifi, Utensils, Car, Waves]
    }
  ];

  return (
    <section id="rooms" className="section-padding bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
            Luxury <span className="text-gradient">Accommodations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each room is thoughtfully designed with premium amenities and breathtaking views, 
            ensuring your stay is nothing short of extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Card key={room.id} className="card-hover overflow-hidden bg-white border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                {room.popular && (
                  <Badge className="absolute top-4 left-4 bg-coral text-white border-0">
                    Most Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-lg font-bold text-ocean-deep">{room.price}</span>
                  <span className="text-sm text-muted-foreground">/night</span>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-serif text-ocean-deep">{room.name}</CardTitle>
                <p className="text-muted-foreground">{room.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {room.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="bg-ocean-light/50 text-ocean-deep">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-muted-foreground">
                  {room.amenities.map((Icon, index) => (
                    <Icon key={index} className="h-5 w-5" />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="btn-outline-ocean">
            View All Rooms
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;