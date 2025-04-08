
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-vice-navy py-8 text-white">
      <div className="vice-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-vice-gold font-display text-xl mb-4">VICE CITY BARBERSHOP</h3>
            <p className="mb-4">
              Un espace de travail accessible, sans pression financière, pour les barbiers indépendants.
            </p>
          </div>
          <div>
            <h3 className="text-vice-gold font-display text-xl mb-4">LIENS UTILES</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-vice-teal transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/barber/auth" className="hover:text-vice-teal transition-colors">Espace Barbier</Link>
              </li>
              <li>
                <Link to="/client/booking" className="hover:text-vice-teal transition-colors">Réserver un Rendez-vous</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-vice-gold font-display text-xl mb-4">CONTACT</h3>
            <p className="mb-2">123 Boulevard des Coiffeurs</p>
            <p className="mb-2">75001 Paris</p>
            <p className="mb-2">contact@vicecity-barbershop.com</p>
            <p>01 23 45 67 89</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Vice City Barbershop. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-vice-teal transition-colors">Facebook</a>
            <a href="#" className="hover:text-vice-teal transition-colors">Instagram</a>
            <a href="#" className="hover:text-vice-teal transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
