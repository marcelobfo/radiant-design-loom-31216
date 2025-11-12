import { Gift, FileText, Calculator, Video, ListChecks, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bonuses = [
  {
    icon: BookOpen,
    number: 1,
    title: "Como a Reforma Tributária Afeta o Seu Negócio",
    description: "Análise detalhada do impacto por setor econômico para você entender exatamente como sua área será impactada.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    isNew: true
  },
  {
    icon: FileText,
    number: 2,
    title: "O que Muda na Prática para o Contribuinte",
    description: "Guia específico para PMEs e MEIs com orientações diretas e práticas para adequação imediata.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    isNew: true
  },
  {
    icon: ListChecks,
    number: 3,
    title: "FAQ com 195 Respostas Essenciais",
    description: "As perguntas mais frequentes sobre a reforma tributária respondidas de forma clara e objetiva.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    isNew: true
  },
  {
    icon: Calculator,
    number: 4,
    title: "Linha do Tempo da Reforma",
    description: "Cronologia completa da PEC à implementação, para você acompanhar cada fase da transição.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    isNew: true
  },
  {
    icon: Video,
    number: 5,
    title: "Reforma Tributária Completa",
    description: "Guia técnico e estratégico com análise aprofundada para profissionais que precisam de máximo detalhamento.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    isNew: true
  }
];

const BonusSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <Badge className="bg-accent text-accent-foreground border-none text-sm px-4 py-2">
            <Gift className="w-4 h-4 mr-2 inline" />
            📦 Bônus Exclusivos
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Bônus Exclusivos na Oferta
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            💡 Valor dos bônus: <span className="text-accent font-bold">R$ 197</span> — você recebe gratuitamente ao adquirir o e-book principal
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {bonuses.map((bonus, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group cursor-pointer animate-fade-in-up shadow-xl hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${bonus.bgColor} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <bonus.icon className={`w-6 h-6 ${bonus.color}`} />
                </div>
                {bonus.isNew && (
                  <Badge className="bg-red-500 text-white border-none text-xs">
                    GRÁTIS
                  </Badge>
                )}
              </div>
              
              <div className="mb-2">
                <span className="text-accent font-bold text-sm">Bônus {bonus.number}</span>
              </div>
              
              <h3 className="font-bold text-lg mb-3 text-white group-hover:text-accent transition-colors">
                {bonus.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {bonus.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
