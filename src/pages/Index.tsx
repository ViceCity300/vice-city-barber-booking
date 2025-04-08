
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative">
          <div className="bg-gradient-to-r from-vice-navy to-black h-[70vh] flex items-center">
            <div className="vice-container">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-6xl font-display uppercase tracking-wider mb-4">
                  <span className="text-vice-teal">Vice</span>{" "}
                  <span className="text-vice-magenta">City</span>{" "}
                  <span className="text-white">Barbershop</span>
                </h1>
                <p className="text-xl mb-8">
                  Un espace de liberté, de croissance et de style pour les barbiers indépendants et leurs clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/barber/auth">
                    <Button className="vice-btn-primary w-full sm:w-auto">Je suis un barbier</Button>
                  </Link>
                  <Link to="/client/booking">
                    <Button className="vice-btn-secondary w-full sm:w-auto">Je suis client</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="vice-container">
            <h2 className="text-3xl md:text-4xl font-display text-center uppercase mb-12 text-vice-navy">
              Comment ça fonctionne
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* For Barbers */}
              <div className="p-6 rounded-lg border border-gray-200 shadow-md">
                <h3 className="text-xl font-display uppercase mb-4 text-vice-teal">Pour les barbiers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-vice-teal text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                    <span>Apportez votre équipement, outils et savoir-faire</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-vice-teal text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                    <span>Choisissez votre horaire chaque semaine, selon vos disponibilités</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-vice-teal text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                    <span>Payez seulement 7,50€ par coupe - pas de frais fixes!</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/barber/auth">
                    <Button className="w-full bg-vice-teal hover:bg-vice-teal/90">Espace Barbier</Button>
                  </Link>
                </div>
              </div>

              {/* For Clients */}
              <div className="p-6 rounded-lg border border-gray-200 shadow-md">
                <h3 className="text-xl font-display uppercase mb-4 text-vice-magenta">Pour les clients</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-vice-magenta text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">1</span>
                    <span>Découvrez nos barbiers talentueux et leurs spécialités</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-vice-magenta text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">2</span>
                    <span>Choisissez votre barbier préféré selon ses disponibilités</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-vice-magenta text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">3</span>
                    <span>Réservez votre rendez-vous en quelques clics</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/client/booking">
                    <Button className="w-full bg-vice-magenta hover:bg-vice-magenta/90">Réserver un rendez-vous</Button>
                  </Link>
                </div>
              </div>

              {/* About Vice City */}
              <div className="p-6 rounded-lg border border-gray-200 shadow-md">
                <h3 className="text-xl font-display uppercase mb-4 text-vice-gold">Notre mission</h3>
                <p className="mb-4">
                  Vice City Barbershop offre un espace de travail accessible, sans pression financière, pour les barbiers indépendants.
                </p>
                <p>
                  Nous fournissons un environnement idéal avec des fauteuils professionnels, un lieu propre et élégant, des services communs, et l'accès à une clientèle active.
                </p>
                <div className="mt-6">
                  <Link to="/about">
                    <Button variant="outline" className="w-full border-vice-gold text-vice-gold hover:bg-vice-gold hover:text-white">En savoir plus</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="vice-container">
            <h2 className="text-3xl md:text-4xl font-display text-center uppercase mb-12 text-vice-navy">
              Nos avantages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md">
                <div className="w-16 h-16 bg-vice-teal rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display uppercase mb-2">Modèle financier équitable</h3>
                <p>
                  7,50€ par coupe seulement - pas de loyer fixe, pas de pourcentage sur vos revenus.
                  Payez uniquement lorsque vous travaillez!
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md">
                <div className="w-16 h-16 bg-vice-magenta rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display uppercase mb-2">Flexibilité totale</h3>
                <p>
                  Choisissez votre horaire chaque semaine, selon vos disponibilités.
                  Que ce soit quelques jours, soirs ou week-ends - c'est vous qui décidez!
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md">
                <div className="w-16 h-16 bg-vice-gold rounded-full flex items-center justify-center text-vice-navy mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display uppercase mb-2">Communauté dynamique</h3>
                <p>
                  Rejoignez une véritable communauté de barbiers passionnés. Participez à des événements,
                  formations et collaborations exclusives.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md">
                <div className="w-16 h-16 bg-vice-teal rounded-full flex items-center justify-center text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-xl font-display uppercase mb-2">Support complet</h3>
                <p>
                  On s'occupe du marketing, de la gestion du lieu, du nettoyage, de l'ambiance,
                  des équipements communs et de la plateforme de réservation en ligne.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-vice-navy text-white">
          <div className="vice-container text-center">
            <h2 className="text-3xl md:text-4xl font-display uppercase mb-6">
              Prêt à nous rejoindre?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Que vous soyez un barbier cherchant à développer votre activité ou un client à la recherche d'une coupe stylée,
              Vice City Barbershop est fait pour vous.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/barber/auth">
                <Button className="vice-btn-primary">Je suis un barbier</Button>
              </Link>
              <Link to="/client/booking">
                <Button className="vice-btn-secondary">Je suis client</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
