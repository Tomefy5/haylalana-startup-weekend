import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Scale, 
  BookOpen, 
  Users, 
  MessageCircle, 
  Newspaper,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-fade-in">
            <h1 className="mb-6 text-4xl md:text-6xl font-bold text-white">
              Haylalana
            </h1>
            <p className="mb-8 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Plateforme de vulgarisation du droit pour Madagascar
            </p>
            <p className="mb-10 text-lg text-white/80 max-w-2xl mx-auto">
              Nous transformons les lois et procédures en guides pratiques et accessibles 
              en malgache et français. Contenus courts, orientation vers aide juridique pro-bono.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Link to="/activities">
              <Card className="shadow-card hover:shadow-elegant transition-smooth cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Scale className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Activités</h3>
                  <p className="text-muted-foreground">
                    Infographies, quiz juridiques et modèles de documents pour comprendre le droit
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/legal-texts">
              <Card className="shadow-card hover:shadow-elegant transition-smooth cursor-pointer">
                <CardContent className="p-6 text-center">
                  <BookOpen className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Textes Juridiques</h3>
                  <p className="text-muted-foreground">
                    Bibliothèque organisée de textes de loi classés par catégories
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/directory">
              <Card className="shadow-card hover:shadow-elegant transition-smooth cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Annuaire</h3>
                  <p className="text-muted-foreground">
                    Contacts des professionnels du droit par région (avocats, notaires, huissiers)
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/faq">
              <Card className="shadow-card hover:shadow-elegant transition-smooth cursor-pointer">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">FAQ</h3>
                  <p className="text-muted-foreground">
                    Réponses aux questions fréquentes sur le droit malgache
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/news">
              <Card className="shadow-card hover:shadow-elegant transition-smooth cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Newspaper className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">Actualités</h3>
                  <p className="text-muted-foreground">
                    Dernières nouvelles et évolutions du droit à Madagascar
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/pro-bono">
              <Card className="shadow-card hover:shadow-elegant transition-smooth bg-gradient-accent cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Scale className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-white">Aide Pro-Bono</h3>
                  <p className="text-white/90">
                    Orientation vers une aide juridique gratuite et professionnelle
                  </p>
                </CardContent>
              </Card>
            </Link>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            Notre Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Haylalana démocratise l'accès au droit à Madagascar en proposant des contenus 
            courts et accessibles : audio, vidéo, bandes dessinées, SMS. Notre objectif 
            est de rendre le droit compréhensible pour tous, en malgache et en français.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Accessible</h3>
              <p className="text-sm text-muted-foreground">Contenus en malgache et français</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Pratique</h3>
              <p className="text-sm text-muted-foreground">Guides et outils concrets</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Professionnel</h3>
              <p className="text-sm text-muted-foreground">Réseau d'experts juridiques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Haylalana</h3>
              <p className="text-primary-foreground/80 mb-4">
                Vulgarisation du droit pour Madagascar
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+261 XX XX XXX XX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@haylalana.mg</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Antananarivo, Madagascar</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><Link to="/activities" className="hover:underline">Vulgarisation juridique</Link></li>
                <li><Link to="/legal-texts" className="hover:underline">Documentation légale</Link></li>
                <li><Link to="/pro-bono" className="hover:underline">Orientation pro-bono</Link></li>
                <li><Link to="/faq" className="hover:underline">Formation au droit</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Langues</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>🇲🇬 Malagasy</li>
                <li>🇫🇷 Français</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Haylalana. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
