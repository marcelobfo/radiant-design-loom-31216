import { Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// ============================================
// CAPAS DOS E-BOOKS BÔNUS
// Para trocar uma capa:
// 1. Adicione a nova imagem em src/assets/bonuses/
// 2. Importe aqui no topo
// 3. Atualize a propriedade 'image' do bônus correspondente
// ============================================
import bonus1Image from "@/assets/bonuses/bonus-1-impacto-negocio.jpg";
import bonus2Image from "@/assets/bonuses/bonus-2-guia-contribuinte.jpg";
import bonus3Image from "@/assets/bonuses/bonus-3-faq.jpg";
import bonus4Image from "@/assets/bonuses/bonus-4-linha-tempo.jpg";
import bonus5Image from "@/assets/bonuses/bonus-5-guia-completo.jpg";

const bonuses = [
  {
    image: bonus1Image,
    number: 1,
    title: "Como a Reforma Tributária Afeta o Seu Negócio",
    description: "Análise detalhada do impacto por setor econômico para você entender exatamente como sua área será impactada.",
  },
  {
    image: bonus2Image,
    number: 2,
    title: "O que Muda na Prática para o Contribuinte",
    description: "Guia específico para PMEs e MEIs com orientações diretas e práticas para adequação imediata.",
  },
  {
    image: bonus3Image,
    number: 3,
    title: "FAQ com 195 Respostas Essenciais",
    description: "As perguntas mais frequentes sobre a reforma tributária respondidas de forma clara e objetiva.",
  },
  {
    image: bonus4Image,
    number: 4,
    title: "Linha do Tempo da Reforma",
    description: "Cronologia completa da PEC à implementação, para você acompanhar cada fase da transição.",
  },
  {
    image: bonus5Image,
    number: 5,
    title: "Reforma Tributária Completa",
    description: "Guia técnico e estratégico com análise aprofundada para profissionais que precisam de máximo detalhamento.",
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
              {/* Capa do E-book */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <AspectRatio ratio={3/4}>
                  <img 
                    src={bonus.image} 
                    alt={bonus.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
                
                {/* Badge GRÁTIS flutuando sobre a capa */}
                <Badge className="absolute top-2 right-2 bg-red-500 text-white border-none text-xs shadow-lg">
                  GRÁTIS
                </Badge>
              </div>
              
              {/* Conteúdo do card */}
              <div className="space-y-2">
                <span className="text-accent font-bold text-sm">Bônus {bonus.number}</span>
                
                <h3 className="font-bold text-lg text-white group-hover:text-accent transition-colors">
                  {bonus.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
