
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-vice-navy py-4">
      <div className="vice-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <span className="text-white text-3xl font-display font-bold tracking-widest animate-neon-pulse">
              VICE CITY
            </span>
            <span className="text-vice-gold ml-2 text-xl">
              BARBERSHOP
            </span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-vice-gold transition-colors">Accueil</Link>
          <Link to="/about" className="text-white hover:text-vice-gold transition-colors">À propos</Link>
          <Link to="/contact" className="text-white hover:text-vice-gold transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
