
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/BookingCalendar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface Booking {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  chairId: string;
  chairName: string;
  status: "upcoming" | "completed";
}

const BarberDashboard = () => {
  const navigate = useNavigate();
  const [barber, setBarber] = useState<any>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    // Check if barber is logged in
    const storedBarber = localStorage.getItem("barberAuth");
    if (!storedBarber) {
      navigate("/barber/auth");
      return;
    }

    setBarber(JSON.parse(storedBarber));

    // Mock bookings data - in a real app, these would come from your API
    setBookings([
      {
        id: "booking1",
        date: "2025-04-15",
        startTime: "10:00",
        endTime: "11:00",
        chairId: "chair2",
        chairName: "Chaise 2",
        status: "upcoming"
      },
      {
        id: "booking2",
        date: "2025-04-10",
        startTime: "14:30",
        endTime: "15:30",
        chairId: "chair1",
        chairName: "Chaise 1",
        status: "completed"
      },
      {
        id: "booking3",
        date: "2025-04-20",
        startTime: "16:00",
        endTime: "17:00",
        chairId: "chair3",
        chairName: "Chaise 3",
        status: "upcoming"
      }
    ]);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("barberAuth");
    toast.success("Déconnexion réussie");
    navigate("/");
  };

  const handleBookingConfirm = (date: Date | undefined, startTime: string, endTime: string, chairId: string) => {
    if (!date) return;

    // Find chair name based on ID (in a real app, you would fetch this from your API)
    const chairMap: Record<string, string> = {
      chair1: "Chaise 1",
      chair2: "Chaise 2",
      chair3: "Chaise 3",
      chair4: "Chaise 4"
    };

    // Create booking
    const newBooking: Booking = {
      id: `booking-${Date.now()}`,
      date: date.toISOString().split('T')[0],
      startTime,
      endTime,
      chairId,
      chairName: chairMap[chairId] || "Chaise inconnue",
      status: "upcoming"
    };

    setBookings([newBooking, ...bookings]);
    toast.success("Réservation confirmée!");
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings(bookings.filter(booking => booking.id !== bookingId));
    toast.success("Réservation annulée");
  };

  if (!barber) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="vice-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-display uppercase text-vice-navy">
                Bonjour, {barber.name || barber.email.split('@')[0]}
              </h1>
              <p className="text-gray-600">Tableau de bord barbier</p>
            </div>
            <Button 
              variant="outline" 
              className="mt-4 md:mt-0"
              onClick={handleLogout}
            >
              Déconnexion
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-vice-teal font-display">Réserver une chaise</CardTitle>
                  <CardDescription>
                    Choisissez une date, une plage horaire et une chaise disponible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BookingCalendar 
                    onBookingConfirm={handleBookingConfirm} 
                    userType="barber" 
                  />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-vice-teal font-display">Mes statistiques</CardTitle>
                <CardDescription>
                  Aperçu de votre activité
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-500">Chaises réservées ce mois</p>
                  <p className="text-3xl font-bold">{bookings.length}</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-500">Revenus estimés</p>
                  <p className="text-3xl font-bold">420 $</p>
                </div>
                <div className="border rounded-lg p-4">
                  <p className="text-sm text-gray-500">Frais Vice City</p>
                  <p className="text-3xl font-bold">52,50 $</p>
                  <p className="text-xs text-gray-400 mt-1">(7,50 $ par coupe)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-vice-teal font-display">Mes réservations</CardTitle>
                <CardDescription>
                  Gérez vos réservations de chaises
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="upcoming">
                  <TabsList className="mb-4">
                    <TabsTrigger value="upcoming">À venir</TabsTrigger>
                    <TabsTrigger value="completed">Complétées</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upcoming">
                    {bookings.filter(b => b.status === "upcoming").length === 0 ? (
                      <p className="text-center py-8 text-gray-500">Aucune réservation à venir</p>
                    ) : (
                      <div className="space-y-4">
                        {bookings
                          .filter(booking => booking.status === "upcoming")
                          .map(booking => (
                            <div 
                              key={booking.id} 
                              className="border rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center"
                            >
                              <div>
                                <p className="font-medium">{booking.chairName}</p>
                                <p className="text-sm text-gray-500">
                                  Le {new Date(booking.date).toLocaleDateString('fr-FR')} de {booking.startTime} à {booking.endTime}
                                </p>
                              </div>
                              <Button 
                                variant="outline" 
                                className="mt-2 md:mt-0 text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                                onClick={() => handleCancelBooking(booking.id)}
                              >
                                Annuler
                              </Button>
                            </div>
                          ))
                        }
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="completed">
                    {bookings.filter(b => b.status === "completed").length === 0 ? (
                      <p className="text-center py-8 text-gray-500">Aucune réservation complétée</p>
                    ) : (
                      <div className="space-y-4">
                        {bookings
                          .filter(booking => booking.status === "completed")
                          .map(booking => (
                            <div 
                              key={booking.id} 
                              className="border rounded-lg p-4 flex justify-between items-center"
                            >
                              <div>
                                <p className="font-medium">{booking.chairName}</p>
                                <p className="text-sm text-gray-500">
                                  Le {new Date(booking.date).toLocaleDateString('fr-FR')} de {booking.startTime} à {booking.endTime}
                                </p>
                              </div>
                              <div className="bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-medium">
                                Complété
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BarberDashboard;
