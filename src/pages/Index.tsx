import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';
import Attractions from '@/components/Attractions';
import Reviews from '@/components/Reviews';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Rooms />
      <Amenities />
      <Attractions />
      <Reviews />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;