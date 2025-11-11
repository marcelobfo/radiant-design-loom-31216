import { AlertCircle, FileQuestion, CreditCard, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: AlertCircle,
    title: "Você está entre das sistemas de 2025?",
    description: "Como planejar a transição sem surpresas no regime misto e novo calendário?",
    color: "text-red-500",
    bgColor: "bg-red-50"
  },
  {
    icon: FileQuestion,
    title: "Dúvidas constantes, pacificação e certeza fiscal",
    description: "Não sabe o modelo correto preparativo para se moutificar (IVA e mais mudanças)?",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: CreditCard,
    title: "Aumentar os créditos do novo modelo?",
    description: "Quer saber como identificar oportunidade de todos disponíveis na Nova legislação?",
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  },
  {
    icon: TrendingDown,
    title: "Manter conformidade sem pagar mais impostos?",
    description: "Como garantir que você está no caminho certo sem elevação da carga tributária empresarial?",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            A Reforma Tributária já é realidade —{" "}
            <span className="text-gradient">mas a maioria das empresas ainda não sabe o que fazer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Você está preparado para as decisões que já começam? A transição começou e quem não se adaptar ficará para trás.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {problems.map((problem, index) => (
            <Card 
              key={index}
              className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary cursor-pointer group animate-fade-in-up bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${problem.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <problem.icon className={`w-7 h-7 ${problem.color}`} />
              </div>
              
              <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
