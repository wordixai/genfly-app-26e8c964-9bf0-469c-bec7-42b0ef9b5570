import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b3fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      location: 'New York, USA',
      rating: 5,
      date: 'November 2024',
      review: 'Absolutely incredible experience! The resort exceeded all expectations. The staff was phenomenal, the rooms were pristine, and the ocean views were breathtaking. Already planning our return visit.',
      verified: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      location: 'London, UK',
      rating: 5,
      date: 'October 2024',
      review: 'Perfect honeymoon destination! Every detail was carefully thought out. The sunset dinners, spa treatments, and water activities made our stay unforgettable. Highly recommend the beachfront villa.',
      verified: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      location: 'Barcelona, Spain',
      rating: 5,
      date: 'September 2024',
      review: 'Azure Bay is pure paradise! The attention to detail is remarkable. From the moment we arrived, we felt like royalty. The underwater restaurant was a once-in-a-lifetime experience.',
      verified: true
    },
    {
      id: 4,
      name: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      location: 'Sydney, Australia',
      rating: 5,
      date: 'August 2024',
      review: 'Exceptional luxury resort with world-class amenities. The private beach is stunning, and the service is impeccable. Our kids loved the supervised activities while we enjoyed the spa.',
      verified: true
    },
    {
      id: 5,
      name: 'Lisa Wang',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      location: 'Toronto, Canada',
      rating: 5,
      date: 'July 2024',
      review: 'Simply magnificent! The sunset penthouse offered incredible views. Every meal was a culinary masterpiece. The staff anticipated our every need. This is luxury at its finest.',
      verified: true
    }
  ];

  const stats = [
    { number: '4.9', label: 'Average Rating', unit: '/5' },
    { number: '2,500+', label: 'Happy Guests', unit: '' },
    { number: '98%', label: 'Return Rate', unit: '' },
    { number: '24/7', label: 'Support', unit: '' }
  ];

  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
            Guest <span className="text-gradient">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our valued guests about their 
            unforgettable experiences at Azure Bay Resort.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">
                {stat.number}
                <span className="text-xl text-muted-foreground">{stat.unit}</span>
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="card-hover bg-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-ocean-deep">{review.name}</h4>
                      {review.verified && (
                        <Badge variant="secondary" className="bg-ocean-light/50 text-ocean-deep text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-sunset text-sunset" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">{review.date}</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="h-6 w-6 text-ocean-light mb-2" />
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{review.review}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating Display */}
        <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-sunset text-sunset" />
              ))}
            </div>
            <span className="text-3xl font-bold text-ocean-deep">4.9</span>
          </div>
          <p className="text-lg text-muted-foreground mb-4">
            Based on 2,500+ verified guest reviews
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="bg-ocean-light/50 text-ocean-deep">TripAdvisor Excellence</Badge>
            <Badge variant="secondary" className="bg-ocean-light/50 text-ocean-deep">Booking.com Award</Badge>
            <Badge variant="secondary" className="bg-ocean-light/50 text-ocean-deep">5-Star Luxury</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;