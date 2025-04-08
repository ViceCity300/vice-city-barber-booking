
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BarberCard from "@/components/BarberCard";
import BookingCalendar from "@/components/BookingCalendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Mock barber data
const barbers = [
  {
    id: "barber1",
    name: "Thomas Durand",
    specialty: "Dégradés & designs",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "barber2",
    name: "Marc Lambert",
    specialty: "Barbe & taille",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "barber3",
    name: "Sophie Moreau",
    specialty: "Coupes classiques",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "barber4",
    name: "David Cohen",
    specialty: "Coupe & coloration",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518207824285-caf161ae87e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const ClientBooking = () => {
  const navigate = useNavigate();
  const [selectedBarber, setSelectedBarber] = useState<any>(null);
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleBookingConfirm = (date: Date | undefined, time: string, chairId: string) => {
    if (!date) return;
    
    // Check if client info is complete
    if (!clientInfo.name || !clientInfo.email || !clientInfo.phone) {
      toast.error("Veuillez remplir toutes vos informations");
      return;
    }
    
    // In a real app, this would send the booking data to your API
    toast.success("Rendez-vous confirmé!");
    
    // Navigate to success page or show confirmation modal
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleSelectBarber = (barber: any) => {
    setSelectedBarber(barber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBarbers = () => {
    setSelectedBarber(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="vice-container">
          {selectedBarber ? (
            <>
              <Button 
                variant="outline" 
                className="mb-6"
                onClick={handleBackToBarbers}
              >
                ← Retour aux barbiers
              </Button>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-vice-magenta font-display">
                        Réserver avec {selectedBarber.name}
                      </CardTitle>
                      <CardDescription>
                        Spécialité: {selectedBarber.specialty}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <BookingCalendar 
                        onBookingConfirm={handleBookingConfirm}
                        userType="client"
                      />
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-vice-magenta font-display">
                        Vos informations
                      </CardTitle>
                      <CardDescription>
                        Informations nécessaires pour la réservation
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nom complet
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={clientInfo.name}
                          onChange={handleInputChange}
                          placeholder="Jean Dupont"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={clientInfo.email}
                          onChange={handleInputChange}
                          placeholder="jean.dupont@email.com"
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Téléphone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={clientInfo.phone}
                          onChange={handleInputChange}
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-display uppercase text-center mb-8 text-vice-navy">
                Choisissez votre barbier
              </h1>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {barbers.map(barber => (
                  <div key={barber.id} onClick={() => handleSelectBarber(barber)} className="cursor-pointer">
                    <BarberCard {...barber} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClientBooking;
