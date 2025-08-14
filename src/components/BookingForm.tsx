import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';
import { CalendarIcon, Users, Bed, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  return (
    <section id="booking" className="section-padding bg-gradient-to-b from-background to-ocean-light/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
            Book Your <span className="text-gradient">Paradise</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Start your journey to luxury. Fill out the form below and we'll create 
            the perfect getaway tailored just for you.
          </p>
        </div>

        <Card className="bg-white shadow-2xl border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white p-8">
            <CardTitle className="text-2xl font-serif text-center">
              Reserve Your Stay
            </CardTitle>
            <p className="text-center text-white/90">
              Experience luxury like never before
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <form className="space-y-8">
              {/* Guest Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              {/* Stay Details */}
              <div className="border-t pt-8">
                <h3 className="text-xl font-serif font-semibold text-ocean-deep mb-6 flex items-center">
                  <Bed className="h-5 w-5 mr-2" />
                  Stay Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Check-in Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkIn && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "PPP") : "Select check-in date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Check-out Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOut && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "PPP") : "Select check-out date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="space-y-2">
                    <Label>Room Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ocean-suite">Ocean View Suite</SelectItem>
                        <SelectItem value="beachfront-villa">Beachfront Villa</SelectItem>
                        <SelectItem value="sunset-penthouse">Sunset Penthouse</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Adults</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Adults" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Adult</SelectItem>
                        <SelectItem value="2">2 Adults</SelectItem>
                        <SelectItem value="3">3 Adults</SelectItem>
                        <SelectItem value="4">4 Adults</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Children</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Children" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No Children</SelectItem>
                        <SelectItem value="1">1 Child</SelectItem>
                        <SelectItem value="2">2 Children</SelectItem>
                        <SelectItem value="3">3 Children</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label htmlFor="requests">Special Requests</Label>
                <Textarea 
                  id="requests" 
                  placeholder="Any special requests or dietary requirements..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  className="flex-1 btn-outline-ocean"
                >
                  Check Availability
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 btn-hero text-lg py-6"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Reserve Now
                </Button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
              <p className="mb-2">Need assistance? Our concierge team is here to help</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <span>📞 +1 (555) 123-4567</span>
                <span>✉️ reservations@azurebay.com</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;