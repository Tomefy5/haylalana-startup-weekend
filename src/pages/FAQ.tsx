import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import PlatformLayout from "@/components/PlatformLayout";
import { 
  Search,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  HelpCircle
} from "lucide-react";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      category: "Procédures générales",
      question: "Comment porter plainte à Madagascar ?",
      answer: "Pour porter plainte à Madagascar, vous devez vous rendre au commissariat ou à la gendarmerie la plus proche avec une pièce d'identité et exposer les faits. Vous pouvez également déposer plainte avec constitution de partie civile directement auprès du doyen des juges d'instruction. La plainte peut être écrite ou orale. Si elle est orale, l'officier de police judiciaire rédigera un procès-verbal."
    },
    {
      id: 2,
      category: "Mariage et famille",
      question: "Quels sont les documents pour un mariage civil ?",
      answer: "Pour un mariage civil à Madagascar, vous devez fournir : acte de naissance de moins de 3 mois, certificat de célibat, certificat médical prénuptial de moins de 2 mois, 4 photos d'identité, pièce d'identité, justificatif de domicile, et le cas échéant certificat de divorce ou acte de décès du conjoint précédent. Les étrangers doivent également fournir un certificat de capacité matrimoniale."
    },
    {
      id: 3,
      category: "Documents officiels",
      question: "Comment faire une demande de passeport ?",
      answer: "La demande de passeport se fait auprès du service des passeports avec les documents suivants : formulaire de demande dûment rempli, acte de naissance, carte d'identité nationale, 2 photos d'identité récentes, justificatif de paiement des frais. Le délai d'obtention est généralement de 15 jours ouvrables. Pour les mineurs, la présence des deux parents est requise."
    },
    {
      id: 4,
      category: "Droit du travail",
      question: "Quelle est la procédure de licenciement ?",
      answer: "Le licenciement doit suivre une procédure précise : convocation à un entretien préalable par lettre recommandée (5 jours minimum avant l'entretien), entretien préalable avec possibilité d'assistance, notification du licenciement par lettre recommandée avec motifs précis (minimum 48h après l'entretien). L'employeur doit respecter le préavis et verser les indemnités légales."
    },
    {
      id: 5,
      category: "Droit commercial",
      question: "Comment créer une entreprise individuelle ?",
      answer: "Pour créer une entreprise individuelle : 1) Choisir la dénomination, 2) Obtenir un certificat négatif au RCS, 3) Immatriculer au RCS, 4) Publier dans un journal d'annonces légales, 5) Déclarer à l'administration fiscale, 6) S'inscrire à la CNAPS. Les documents requis incluent la pièce d'identité, justificatif de domicile, et selon l'activité, des autorisations spécifiques."
    },
    {
      id: 6,
      category: "Successions",
      question: "Comment se déroule une succession ?",
      answer: "La succession commence par l'ouverture chez un notaire dans les 6 mois suivant le décès. Les héritiers doivent fournir l'acte de décès, les actes de naissance des héritiers, le livret de famille, et tout testament. Le notaire établit l'acte de notoriété, l'inventaire des biens, et procède au partage selon la loi ou les dispositions testamentaires."
    },
    {
      id: 7,
      category: "Droit immobilier",
      question: "Comment acheter un terrain à Madagascar ?",
      answer: "L'achat d'un terrain nécessite : vérification du titre de propriété, accord des fokontany, visite des lieux avec bornage, signature d'un avant-contrat, obtention d'un certificat de situation juridique, signature de l'acte authentique chez le notaire, inscription au fichier foncier. Attention : les étrangers ne peuvent acquérir que certains types de terrains."
    },
    {
      id: 8,
      category: "Droits civiques",
      question: "Comment obtenir un extrait de casier judiciaire ?",
      answer: "L'extrait de casier judiciaire (bulletin n°3) s'obtient : en ligne sur le site du ministère de la Justice, par courrier au Casier judiciaire national, ou directement au guichet. Il faut fournir une pièce d'identité et préciser l'usage. C'est gratuit et la délivrance est immédiate pour les demandes en ligne."
    },
    {
      id: 9,
      category: "Droit locatif",
      question: "Quels sont les droits du locataire ?",
      answer: "Le locataire a droit à : un logement décent et en bon état, la jouissance paisible des lieux, la protection contre les expulsions abusives, le respect du préavis légal, la restitution de la caution, la limitation des charges locatives. En contrepartie, il doit payer le loyer, entretenir le logement, respecter le règlement intérieur et les clauses du bail."
    },
    {
      id: 10,
      category: "Procédures judiciaires",
      question: "Comment se déroule une médiation ?",
      answer: "La médiation est un mode alternatif de résolution des conflits. Elle peut être judiciaire (ordonnée par le juge) ou conventionnelle (choisie par les parties). Le médiateur, personne neutre et formée, aide les parties à trouver une solution amiable. La médiation est confidentielle, plus rapide et moins coûteuse qu'un procès."
    }
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const isOpen = (id: number) => openItems.includes(id);

  return (
    <PlatformLayout activeSection="faq">
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Foire Aux Questions</h2>
            <p className="text-muted-foreground mb-6">
              Trouvez rapidement des réponses aux questions les plus fréquentes sur le droit malgache.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Rechercher dans les questions..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-2">{faqs.length}</div>
                <div className="text-sm text-muted-foreground">Questions répondues</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-secondary mb-2">{categories.length}</div>
                <div className="text-sm text-muted-foreground">Catégories couvertes</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-accent mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Disponibilité</div>
              </CardContent>
            </Card>
          </div>

          {/* Results count */}
          {searchTerm && (
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                {filteredFaqs.length} question(s) trouvée(s) pour "{searchTerm}"
              </p>
            </div>
          )}

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <Card key={faq.id} className="shadow-card">
                <Collapsible>
                  <CollapsibleTrigger 
                    className="w-full"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <CardHeader className="hover:bg-muted/50 transition-smooth">
                      <div className="flex items-start justify-between text-left">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <HelpCircle className="w-4 h-4 text-primary" />
                            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                              {faq.category}
                            </span>
                          </div>
                          <CardTitle className="text-lg text-left">
                            {faq.question}
                          </CardTitle>
                        </div>
                        {isOpen(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-2" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-2" />
                        )}
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <div className="bg-muted/30 p-4 rounded-lg">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>

          {/* No results */}
          {filteredFaqs.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <MessageCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Aucune question trouvée
              </h3>
              <p className="text-muted-foreground mb-4">
                Nous n'avons pas trouvé de réponse à votre recherche.
              </p>
              <Button onClick={() => setSearchTerm("")}>
                Voir toutes les questions
              </Button>
            </div>
          )}

          {/* Contact section */}
          <div className="mt-12 bg-gradient-primary text-white p-6 rounded-lg text-center">
            <MessageCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Vous ne trouvez pas votre réponse ?</h3>
            <p className="mb-4">
              Notre équipe juridique est là pour vous aider. Posez votre question et recevez 
              une réponse personnalisée de nos experts.
            </p>
            <Button variant="hero" size="lg">
              Poser une question
            </Button>
          </div>
        </div>
      </div>
    </PlatformLayout>
  );
};

export default FAQ;