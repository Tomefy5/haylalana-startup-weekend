import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import PlatformLayout from "@/components/PlatformLayout";
import { 
  Play,
  Search,
  Crown,
  FileText,
  Download,
  MessageCircle
} from "lucide-react";

const Activities = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const infographics = [
    {
      id: 1,
      title: "Les droits du locataire",
      category: "Droit civil",
      description: "Comprendre vos droits en tant que locataire à Madagascar",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Procédure de divorce",
      category: "Droit de la famille",
      description: "Étapes et documents nécessaires pour une demande de divorce",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Création d'entreprise",
      category: "Droit des affaires",
      description: "Guide complet pour créer votre entreprise légalement",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Héritage et succession",
      category: "Droit civil",
      description: "Procédures de succession selon le droit malgache",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Droits des salariés",
      category: "Droit du travail",
      description: "Vos droits et obligations en tant que salarié",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Contrats de vente",
      category: "Droit commercial",
      description: "Réglementation des contrats de vente à Madagascar",
      image: "/placeholder.svg"
    }
  ];

  return (
    <PlatformLayout activeSection="activities">
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Infographics Gallery */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Galerie d'Infographies</h2>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Rechercher..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {infographics.map((info) => (
                  <Card key={info.id} className="shadow-card hover:shadow-elegant transition-smooth">
                    <div className="aspect-video bg-gradient-secondary rounded-t-lg flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <Badge variant="secondary">{info.category}</Badge>
                        <Button size="sm" variant="ghost">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                      <CardDescription>{info.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quiz and Documents */}
            <div className="space-y-6">
              {/* Quiz Section */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                    Quiz Juridique
                  </CardTitle>
                  <CardDescription>
                    Testez vos connaissances sur le droit malgache
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="secondary">
                    Commencer le Quiz
                  </Button>
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Quiz disponibles :</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Droit civil - 20 questions</li>
                      <li>• Droit pénal - 15 questions</li>
                      <li>• Droit du travail - 18 questions</li>
                      <li>• Droit commercial - 12 questions</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Document Templates */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-accent" />
                    Modèles de Documents
                    <Crown className="w-4 h-4 text-accent" />
                  </CardTitle>
                  <CardDescription>
                    Documents types téléchargeables (service premium)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Contrat de bail</span>
                    <Button size="sm" variant="accent">
                      <Download className="w-4 h-4 mr-1" />
                      Premium
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Demande de divorce</span>
                    <Button size="sm" variant="accent">
                      <Download className="w-4 h-4 mr-1" />
                      Premium
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Statuts d'entreprise</span>
                    <Button size="sm" variant="accent">
                      <Download className="w-4 h-4 mr-1" />
                      Premium
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Testament</span>
                    <Button size="sm" variant="accent">
                      <Download className="w-4 h-4 mr-1" />
                      Premium
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <span className="text-sm">Contrat de travail</span>
                    <Button size="sm" variant="accent">
                      <Download className="w-4 h-4 mr-1" />
                      Premium
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Statistics */}
              <Card className="shadow-card bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle>Statistiques</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Infographies vues</span>
                    <span className="font-bold">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Quiz complétés</span>
                    <span className="font-bold">567</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Documents téléchargés</span>
                    <span className="font-bold">89</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PlatformLayout>
  );
};

export default Activities;