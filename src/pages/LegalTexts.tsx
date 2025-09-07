import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PlatformLayout from "@/components/PlatformLayout";
import { 
  Download,
  Search,
  FileText,
  Filter
} from "lucide-react";

const LegalTexts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const legalTexts = [
    {
      id: 1,
      title: "Code pénal malgache",
      category: "Droit pénal",
      description: "Ensemble des infractions et peines prévues par la loi malgache",
      size: "2.3 MB",
      pages: 156,
      lastUpdate: "2024-01-15"
    },
    {
      id: 2,
      title: "Code civil",
      category: "Droit civil",
      description: "Règles régissant les relations entre personnes privées",
      size: "3.1 MB",
      pages: 234,
      lastUpdate: "2023-12-20"
    },
    {
      id: 3,
      title: "Code du travail",
      category: "Droit du travail",
      description: "Réglementation des relations employeur-employé",
      size: "1.8 MB",
      pages: 98,
      lastUpdate: "2024-02-10"
    },
    {
      id: 4,
      title: "Code de commerce",
      category: "Droit commercial",
      description: "Règles applicables aux activités commerciales",
      size: "2.7 MB",
      pages: 189,
      lastUpdate: "2024-01-30"
    },
    {
      id: 5,
      title: "Code de procédure civile",
      category: "Procédure civile",
      description: "Procédures devant les juridictions civiles",
      size: "2.1 MB",
      pages: 145,
      lastUpdate: "2023-11-25"
    },
    {
      id: 6,
      title: "Code de procédure pénale",
      category: "Procédure pénale",
      description: "Procédures devant les juridictions pénales",
      size: "1.9 MB",
      pages: 134,
      lastUpdate: "2024-01-08"
    },
    {
      id: 7,
      title: "Loi sur les sociétés",
      category: "Droit des affaires",
      description: "Réglementation de la création et gestion des sociétés",
      size: "1.5 MB",
      pages: 87,
      lastUpdate: "2024-02-15"
    },
    {
      id: 8,
      title: "Code de la famille",
      category: "Droit de la famille",
      description: "Règles régissant le mariage, divorce, filiation",
      size: "1.2 MB",
      pages: 76,
      lastUpdate: "2023-10-12"
    }
  ];

  const categories = [
    "all",
    "Droit pénal",
    "Droit civil", 
    "Droit du travail",
    "Droit commercial",
    "Procédure civile",
    "Procédure pénale",
    "Droit des affaires",
    "Droit de la famille"
  ];

  const filteredTexts = legalTexts.filter(text => {
    const matchesSearch = text.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         text.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || text.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PlatformLayout activeSection="legal-texts">
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Bibliothèque Juridique</h2>
            <p className="text-muted-foreground mb-6">
              Accédez à l'ensemble des textes juridiques en vigueur à Madagascar, 
              organisés par catégories pour faciliter vos recherches.
            </p>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher dans les textes juridiques..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Filtrer par catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredTexts.length} texte(s) juridique(s) trouvé(s)
            </p>
          </div>

          {/* Legal texts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTexts.map((text) => (
              <Card key={text.id} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{text.category}</Badge>
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{text.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {text.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium">Taille:</span> {text.size}
                    </div>
                    <div>
                      <span className="font-medium">Pages:</span> {text.pages}
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Dernière mise à jour: {new Date(text.lastUpdate).toLocaleDateString('fr-FR')}
                  </div>

                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results */}
          {filteredTexts.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Aucun texte trouvé
              </h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
            </div>
          )}
        </div>
      </div>
    </PlatformLayout>
  );
};

export default LegalTexts;