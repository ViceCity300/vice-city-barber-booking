
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface BarberCardProps {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  image: string;
}

const BarberCard = ({ id, name, specialty, rating, image }: BarberCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={`Photo de ${name}`}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-display uppercase tracking-wide">{name}</CardTitle>
        <CardDescription>{specialty}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={i < rating ? "#FFD700" : "#e2e8f0"}
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm">{rating}/5</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/client/booking/${id}`} className="w-full">
          <Button variant="default" className="w-full bg-vice-teal hover:bg-vice-teal/90">
            Réserver
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BarberCard;
