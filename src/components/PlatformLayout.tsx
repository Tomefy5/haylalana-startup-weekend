import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Scale, 
  BookOpen, 
  Users, 
  MessageCircle, 
  Newspaper,
  Home
} from "lucide-react";

const PlatformLayout = ({ children, activeSection }: { children: React.ReactNode, activeSection: string }) => {
  const navItems = [
    { id: "activities", label: "Activités", icon: Scale, path: "/activities" },
    { id: "legal-texts", label: "Textes Juridiques", icon: BookOpen, path: "/legal-texts" },
    { id: "directory", label: "Annuaire", icon: Users, path: "/directory" },
    { id: "faq", label: "FAQ", icon: MessageCircle, path: "/faq" },
    { id: "news", label: "Actualités", icon: Newspaper, path: "/news" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-white shadow-card border-b">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-smooth">
              <Scale className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary">Haylalana</h1>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Accueil
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                🇲🇬 MG | 🇫🇷 FR
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Navigation */}
      <nav className="bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <Link 
                  key={item.id}
                  to={item.path}
                  className={`flex items-center gap-2 px-6 py-4 border-b-2 transition-smooth hover:bg-primary-light ${
                    isActive 
                      ? 'border-white bg-primary-light text-white' 
                      : 'border-transparent text-primary-foreground/80 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-background">
        {children}
      </main>
    </div>
  );
};

export default PlatformLayout;