
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const BarberAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  // Registration form state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [regSpecialty, setRegSpecialty] = useState("");
  const [regBio, setRegBio] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock login flow - would connect to backend auth in real app
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would check credentials with backend
      if (loginEmail && loginPassword) {
        // Store some user data in localStorage to fake authentication
        localStorage.setItem("barberAuth", JSON.stringify({ 
          email: loginEmail,
          type: "barber"
        }));
        toast.success("Connexion réussie!");
        navigate("/barber/dashboard");
      } else {
        toast.error("Veuillez remplir tous les champs.");
      }
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock registration flow
    setTimeout(() => {
      setIsLoading(false);
      
      if (!regName || !regEmail || !regPassword || !regConfirmPassword) {
        toast.error("Veuillez remplir tous les champs obligatoires.");
        return;
      }
      
      if (regPassword !== regConfirmPassword) {
        toast.error("Les mots de passe ne correspondent pas.");
        return;
      }
      
      // Store some user data in localStorage to fake authentication
      localStorage.setItem("barberAuth", JSON.stringify({ 
        name: regName,
        email: regEmail,
        specialty: regSpecialty,
        bio: regBio,
        type: "barber"
      }));
      
      toast.success("Inscription réussie!");
      navigate("/barber/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-gray-50">
        <div className="vice-container">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-display uppercase text-center mb-8 text-vice-navy">Espace Barbier</h1>
            
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Connexion</TabsTrigger>
                <TabsTrigger value="register">Inscription</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-vice-teal font-display">Connexion</CardTitle>
                    <CardDescription>
                      Connectez-vous pour accéder à votre espace barbier
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleLogin}>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="password" className="text-sm font-medium">
                          Mot de passe
                        </label>
                        <Input
                          id="password"
                          type="password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="text-sm text-right">
                        <a href="#" className="text-vice-teal hover:underline">
                          Mot de passe oublié?
                        </a>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        type="submit" 
                        className="w-full bg-vice-teal hover:bg-vice-teal/90"
                        disabled={isLoading}
                      >
                        {isLoading ? "Connexion..." : "Se connecter"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
              
              <TabsContent value="register">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-vice-teal font-display">Inscription</CardTitle>
                    <CardDescription>
                      Créez votre compte barbier pour rejoindre Vice City Barbershop
                    </CardDescription>
                  </CardHeader>
                  <form onSubmit={handleRegister}>
                    <CardContent className="space-y-4">
                      <div className="space-y-1">
                        <label htmlFor="reg-name" className="text-sm font-medium">
                          Nom et Prénom
                        </label>
                        <Input
                          id="reg-name"
                          type="text"
                          placeholder="Jean Dupont"
                          value={regName}
                          onChange={(e) => setRegName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="reg-email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="reg-email"
                          type="email"
                          placeholder="votre@email.com"
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="reg-password" className="text-sm font-medium">
                          Mot de passe
                        </label>
                        <Input
                          id="reg-password"
                          type="password"
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="reg-confirm-password" className="text-sm font-medium">
                          Confirmer le mot de passe
                        </label>
                        <Input
                          id="reg-confirm-password"
                          type="password"
                          value={regConfirmPassword}
                          onChange={(e) => setRegConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="reg-specialty" className="text-sm font-medium">
                          Spécialité
                        </label>
                        <Input
                          id="reg-specialty"
                          type="text"
                          placeholder="ex: Dégradé, Barbe, etc."
                          value={regSpecialty}
                          onChange={(e) => setRegSpecialty(e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="reg-bio" className="text-sm font-medium">
                          Bio (présentation courte)
                        </label>
                        <Input
                          id="reg-bio"
                          placeholder="Quelques mots sur votre expérience..."
                          value={regBio}
                          onChange={(e) => setRegBio(e.target.value)}
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        type="submit" 
                        className="w-full bg-vice-teal hover:bg-vice-teal/90"
                        disabled={isLoading}
                      >
                        {isLoading ? "Inscription..." : "S'inscrire"}
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BarberAuth;
