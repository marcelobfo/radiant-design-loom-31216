import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

const guaranteeBenefits = [
  "Acesso imediato ao e-book e todos os bônus",
  "7 dias para testar todo o conteúdo sem compromisso",
  "Reembolso total se não ficar satisfeito",
  "Sem perguntas, sem burocracia",
  "Risco zero — a decisão é 100% sua"
];

const GuaranteeSection = () => {
  const handleGuaranteeClick = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-success/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Selo da Garantia - Left Side */}
          <div className="flex justify-center animate-fade-in">
            <Card className="bg-white/10 backdrop-blur-sm border-success/50 shadow-2xl hover:scale-105 transition-transform duration-300 p-8 text-center max-w-sm">
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <div className="relative">
                  <ShieldCheck className="w-32 h-32 text-success animate-pulse" />
                  <Badge className="absolute -top-2 -right-2 bg-success text-success-foreground text-2xl font-bold px-4 py-2">
                    100%
                  </Badge>
                </div>
                <h3 className="text-4xl font-bold text-white tracking-wider">
                  GARANTIA
                </h3>
                <p className="text-xl text-success font-semibold">
                  7 DIAS DE TESTE
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Conteúdo - Right Side */}
          <div className="animate-fade-in space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Garantia de Satisfação 100% ou Seu Dinheiro de Volta
            </h2>
            <p className="text-xl text-gray-300">
              Experimente sem riscos durante 7 dias
            </p>

            <div className="space-y-4 mt-8">
              {guaranteeBenefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <p className="text-gray-200 text-lg leading-relaxed">
                    <span className="font-semibold text-white">
                      {benefit.split(' ')[0]}
                    </span>
                    {' '}
                    {benefit.split(' ').slice(1).join(' ')}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "Nós confiamos tanto no valor deste e-book que oferecemos 7 dias de garantia incondicional. 
                Se você não ficar 100% satisfeito, devolvemos seu dinheiro — sem perguntas, sem complicação."
              </p>
              <Button 
                size="lg"
                onClick={handleGuaranteeClick}
                className="bg-success hover:bg-success/90 text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Adquirir Agora com Garantia
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
