import { Gift, FileText, Calculator, Video, ListChecks, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bonuses = [
  {
    icon: FileText,
    number: 1,
    title: "Guia e Reforma Tributária Mapa e Seis Fases",
    description: "Guia das 6 fases comentadas com exemplos prático em cada etapa da adequação.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    isNew: true
  },
  {
    icon: Calculator,
    number: 2,
    title: "Planilha Guia de Prática para o Cálculo Comparativo IVA",
    description: "Calcule e compare projeções práticas e IVA com modelos prontos passo a passo.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    isNew: true
  },
  {
    icon: Video,
    number: 3,
    title: "Aula com 100 Perguntas Essenciais",
    description: "Todas suas 100 dúvidas nas questões desafio bônus feitas por especialistas.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    isNew: true
  },
  {
    icon: ListChecks,
    number: 4,
    title: "Lista de 10 Tempo da Reforma",
    description: "Os PTC e fundamentais da completo-estratégias atualizados de todos fila da atualização",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    isNew: false
  },
  {
    icon: BookOpen,
    number: 5,
    title: "Relatório Tributária Completa",
    description: "Guia Básico e estratégico com análise compatível de todos pra atualizada.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    isNew: false
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
            Bônus Exclusivos na Oferta
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Receba 5 Bônus Gratuitos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Valor total dos bônus: <span className="text-accent font-bold">R$ 197</span> —{" "}
            você recebe gratuitamente ao adquirir o e-book principal
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
