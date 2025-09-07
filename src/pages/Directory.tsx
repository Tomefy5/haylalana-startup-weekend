import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PlatformLayout from "@/components/PlatformLayout";
import { 
  MapPin,
  Phone,
  Mail,
  Search,
  Filter,
  Star,
  Clock
} from "lucide-react";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedProfession, setSelectedProfession] = useState("all");

  const professionals = [
    {
      id: 1,
      name: "Me. Rakoto Andry",
      profession: "Avocat",
      region: "Antananarivo",
      speciality: "Droit pénal, Droit civil",
      phone: "+261 34 12 345 67",
      email: "rakoto.andry@example.mg",
      address: "Rue de l'Indépendance, Antananarivo",
      rating: 4.8,
      experience: "15 ans"
    },
    {
      id: 2,
      name: "Me. Razafy Hery",
      profession: "Notaire",
      region: "Fianarantsoa",
      speciality: "Droit immobilier, Successions",
      phone: "+261 34 23 456 78",
      email: "razafy.hery@example.mg",
      address: "Avenue de la République, Fianarantsoa",
      rating: 4.6,
      experience: "12 ans"
    },
    {
      id: 3,
      name: "Me. Randria Nivo",
      profession: "Huissier",
      region: "Toamasina",
      speciality: "Recouvrement, Signification",
      phone: "+261 34 34 567 89",
      email: "randria.nivo@example.mg",
      address: "Boulevard Joffre, Toamasina",
      rating: 4.5,
      experience: "8 ans"
    },
    {
      id: 4,
      name: "Me. Rasoamanana Fidy",
      profession: "Avocat",
      region: "Antananarivo",
      speciality: "Droit des affaires, Droit commercial",
      phone: "+261 34 45 678 90",
      email: "rasoamanana.fidy@example.mg",
      address: "Rue Rainandriamampandry, Antananarivo",
      rating: 4.9,
      experience: "20 ans"
    },
    {
      id: 5,
      name: "Me. Ratsimba Miora",
      profession: "Notaire",
      region: "Antsiranana",
      speciality: "Droit de la famille, Contrats",
      phone: "+261 34 56 789 01",
      email: "ratsimba.miora@example.mg",
      address: "Place Foch, Antsiranana",
      rating: 4.7,
      experience: "10 ans"
    },
    {
      id: 6,
      name: "Me. Raharison Jean",
      profession: "Huissier",
      region: "Mahajanga",
      speciality: "Référés, Saisies",
      phone: "+261 34 67 890 12",
      email: "raharison.jean@example.mg",
      address: "Boulevard Poincaré, Mahajanga",
      rating: 4.4,
      experience: "6 ans"
    },
    {
      id: 7,
      name: "Me. Andrianary Lala",
      profession: "Avocat",
      region: "Toliara",
      speciality: "Droit du travail, Droit social",
      phone: "+261 34 78 901 23",
      email: "andrianary.lala@example.mg",
      address: "Avenue de France, Toliara",
      rating: 4.6,
      experience: "11 ans"
    },
    {
      id: 8,
      name: "Me. Rabemanantsoa Hanta",
      profession: "Notaire",
      region: "Antananarivo",
      speciality: "Droit immobilier, Entreprises",
      phone: "+261 34 89 012 34",
      email: "rabemanantsoa.hanta@example.mg",
      address: "Rue Jules Ranaivo, Antananarivo",
      rating: 4.8,
      experience: "14 ans"
    }
  ];

  const regions = [
    "all",
    "Antananarivo",
    "Fianarantsoa", 
    "Toamasina",
    "Antsiranana",
    "Mahajanga",
    "Toliara"
  ];

  const professions = ["all", "Avocat", "Notaire", "Huissier"];

  const filteredProfessionals = professionals.filter(pro => {
    const matchesSearch = pro.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pro.speciality.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === "all" || pro.region === selectedRegion;
    const matchesProfession = selectedProfession === "all" || pro.profession === selectedProfession;
    return matchesSearch && matchesRegion && matchesProfession;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <PlatformLayout activeSection="directory">
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Annuaire des Professionnels</h2>
            <p className="text-muted-foreground mb-6">
              Trouvez les professionnels du droit près de chez vous : avocats, notaires, huissiers.
              Tous les professionnels listés offrent des services pro-bono ou à tarif réduit.
            </p>
            
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher par nom ou spécialité..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Région" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les régions</SelectItem>
                    {regions.slice(1).map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedProfession} onValueChange={setSelectedProfession}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Profession" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les professions</SelectItem>
                    {professions.slice(1).map((profession) => (
                      <SelectItem key={profession} value={profession}>
                        {profession}
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
              {filteredProfessionals.length} professionnel(s) trouvé(s)
            </p>
          </div>

          {/* Professionals grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfessionals.map((pro) => (
              <Card key={pro.id} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{pro.profession}</Badge>
                    <div className="flex items-center gap-1">
                      {renderStars(pro.rating)}
                      <span className="text-sm text-muted-foreground ml-1">
                        {pro.rating}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{pro.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {pro.speciality}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{pro.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{pro.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{pro.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{pro.experience} d'expérience</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" size="sm">
                      <Phone className="w-4 h-4 mr-1" />
                      Appeler
                    </Button>
                    <Button variant="outline" className="flex-1" size="sm">
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results */}
          {filteredProfessionals.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Aucun professionnel trouvé
              </h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
            </div>
          )}

          {/* Pro-bono info */}
          <div className="mt-12 bg-gradient-accent text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Service Pro-Bono</h3>
            <p className="mb-4">
              Tous les professionnels listés dans notre annuaire participent à notre programme 
              d'aide juridique gratuite ou à tarif réduit pour les personnes dans le besoin.
            </p>
            <Button variant="hero" size="lg">
              En savoir plus sur l'aide pro-bono
            </Button>
          </div>
        </div>
      </div>
    </PlatformLayout>
  );
};

export default Directory;