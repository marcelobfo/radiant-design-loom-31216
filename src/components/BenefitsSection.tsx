import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import businessPlanning from "@/assets/business-planning.jpg";

const benefits = [
  "Passo a passo para redesenhar seu planejamento tributário",
  "Estratégias de aproveitamento de créditos",
  "Simulações e cenários práticos para tomadas de decisão",
  "Diagnóstico da sua empresa no contexto da nova tributação",
  "Roteiro para revisão contratual, societária e fiscal"
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-3xl blur-2xl"></div>
            <Card className="relative overflow-hidden shadow-card-hover border-none">
              <img 
                src={businessPlanning} 
                alt="Planejamento Tributário Profissional" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-success text-success-foreground px-4 py-2 rounded-lg font-bold shadow-lg">
                <div className="text-2xl">150+</div>
                <div className="text-xs">Páginas de conteúdo</div>
              </div>
            </Card>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-6 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              📘 Solução Completa
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Este e-book foi criado para profissionais que precisam de{" "}
              <span className="text-gradient">ação prática, não de teoria</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Um guia prático, completo e estratégico para navegar a reforma tributária brasileira com segurança e eficácia.
            </p>
            
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                  </div>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
