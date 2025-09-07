import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PlatformLayout from "@/components/PlatformLayout";
import { 
  Search,
  Calendar,
  Clock,
  Eye,
  Share2,
  Filter
} from "lucide-react";

const News = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const news = [
    {
      id: 1,
      title: "Nouvelle loi sur la protection des données personnelles",
      category: "Législation",
      date: "2024-03-15",
      excerpt: "Le parlement malgache adopte une nouvelle loi sur la protection des données personnelles, alignée sur les standards internationaux. Cette loi renforce les droits des citoyens...",
      content: "La nouvelle loi sur la protection des données personnelles est entrée en vigueur le 15 mars 2024...",
      image: "/placeholder.svg",
      readTime: "5 min",
      views: 1234
    },
    {
      id: 2,
      title: "Réforme du code du travail en cours",
      category: "Droit du travail",
      date: "2024-03-10",
      excerpt: "Les discussions sur la réforme du code du travail avancent au niveau gouvernemental. Les principales modifications concernent le télétravail et les congés...",
      content: "La réforme du code du travail, attendue depuis plusieurs mois, prend forme...",
      image: "/placeholder.svg",
      readTime: "7 min",
      views: 892
    },
    {
      id: 3,
      title: "Nouveau système judiciaire numérique",
      category: "Justice",
      date: "2024-03-05",
      excerpt: "Lancement progressif du système judiciaire numérique dans les grandes villes. Cette modernisation vise à accélérer les procédures et améliorer l'accès à la justice...",
      content: "Le ministère de la Justice annonce le déploiement d'un nouveau système numérique...",
      image: "/placeholder.svg",
      readTime: "4 min",
      views: 567
    },
    {
      id: 4,
      title: "Renforcement des sanctions contre la corruption",
      category: "Droit pénal",
      date: "2024-03-01",
      excerpt: "De nouvelles mesures anti-corruption entrent en vigueur avec des sanctions renforcées. Le gouvernement intensifie sa lutte contre la corruption...",
      content: "Dans le cadre de la lutte contre la corruption, de nouvelles sanctions...",
      image: "/placeholder.svg",
      readTime: "6 min",
      views: 1456
    },
    {
      id: 5,
      title: "Simplification des procédures de création d'entreprise",
      category: "Droit des affaires",
      date: "2024-02-28",
      excerpt: "Le gouvernement annonce la simplification des démarches pour créer une entreprise. Le nombre d'étapes passe de 12 à 6, réduisant significativement les délais...",
      content: "Une grande réforme administrative simplifie la création d'entreprises...",
      image: "/placeholder.svg",
      readTime: "5 min",
      views: 789
    },
    {
      id: 6,
      title: "Modification du code de la famille",
      category: "Droit de la famille",
      date: "2024-02-25",
      excerpt: "Des amendements au code de la famille sont en discussion, notamment concernant l'égalité des droits entre hommes et femmes dans le mariage...",
      content: "Le code de la famille fait l'objet de discussions pour une modernisation...",
      image: "/placeholder.svg",
      readTime: "8 min",
      views: 654
    },
    {
      id: 7,
      title: "Nouvelle réglementation environnementale",
      category: "Droit de l'environnement",
      date: "2024-02-20",
      excerpt: "Madagascar adopte une nouvelle réglementation environnementale plus stricte, en phase avec les engagements internationaux sur le climat...",
      content: "La protection de l'environnement se renforce avec une nouvelle réglementation...",
      image: "/placeholder.svg",
      readTime: "6 min",
      views: 432
    },
    {
      id: 8,
      title: "Réforme du système pénitentiaire",
      category: "Justice",
      date: "2024-02-15",
      excerpt: "Une réforme majeure du système pénitentiaire est lancée, visant à améliorer les conditions de détention et la réinsertion...",
      content: "Le système pénitentiaire malgache fait l'objet d'une réforme importante...",
      image: "/placeholder.svg",
      readTime: "7 min",
      views: 321
    }
  ];

  const categories = ["all", "Législation", "Droit du travail", "Justice", "Droit pénal", "Droit des affaires", "Droit de la famille", "Droit de l'environnement"];

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <PlatformLayout activeSection="news">
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Actualités Juridiques</h2>
            <p className="text-muted-foreground mb-6">
              Restez informé des dernières évolutions du droit à Madagascar : nouvelles lois, 
              réformes, décisions de justice et analyses juridiques.
            </p>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Rechercher dans les actualités..."
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
              {filteredNews.length} article(s) trouvé(s)
            </p>
          </div>

          {/* Featured article */}
          {filteredNews.length > 0 && (
            <Card className="mb-8 shadow-elegant">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="aspect-video md:aspect-square bg-gradient-primary rounded-t-lg md:rounded-l-lg md:rounded-t-none h-full"></div>
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{filteredNews[0].category}</Badge>
                      <span className="text-sm text-muted-foreground">Article à la une</span>
                    </div>
                    <CardTitle className="text-2xl">{filteredNews[0].title}</CardTitle>
                    <CardDescription className="text-base">
                      {filteredNews[0].excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(filteredNews[0].date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {filteredNews[0].readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {filteredNews[0].views} vues
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button>
                        Lire l'article
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          )}

          {/* News grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.slice(1).map((article) => (
              <Card key={article.id} className="shadow-card hover:shadow-elegant transition-smooth">
                <div className="aspect-video bg-gradient-secondary rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {article.views}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" size="sm">
                      Lire la suite
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results */}
          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Aucun article trouvé
              </h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
            </div>
          )}

          {/* Newsletter subscription */}
          <div className="mt-12 bg-gradient-secondary text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-3">Restez informé</h3>
            <p className="mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités juridiques directement dans votre boîte mail.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input 
                placeholder="Votre adresse email"
                className="bg-white text-foreground"
              />
              <Button variant="hero">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PlatformLayout>
  );
};

export default News;