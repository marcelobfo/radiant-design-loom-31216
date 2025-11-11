import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Download, Clock, Shield } from "lucide-react";

const features = [
  "E-book completo (+ de 150 páginas)",
  "Atualizações gratuitas durante 1 ano",
  "Download imediato",
  "5 bônus exclusivos (valor R$ 197)",
  "Certificado de conclusão",
  "Garantia de 7 dias",
  "Acesso vitalício ao conteúdo",
  "Suporte via e-mail"
];

const PricingSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4 animate-fade-in text-white">
            <h2 className="text-4xl md:text-5xl font-bold">
              Garanta agora seu acesso ao guia mais direto e estratégico sobre o novo sistema tributário
            </h2>
          </div>
          
          <Card className="p-8 md:p-12 shadow-2xl border-4 border-accent/30 bg-white/95 backdrop-blur-sm animate-scale-in">
            <div className="text-center mb-8">
              <Badge className="bg-accent text-accent-foreground border-none text-sm px-4 py-2 mb-4">
                🔥 Oferta por Tempo Limitado
              </Badge>
              
              <div className="mb-6">
                <div className="text-muted-foreground line-through text-2xl mb-2">
                  De R$ 197,00
                </div>
                <div className="text-6xl md:text-7xl font-bold text-primary mb-2">
                  R$ 67,00
                </div>
                <p className="text-muted-foreground">
                  ou 12x de R$ 6,58 sem juros
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl py-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-6 w-6" />
              Clique no botão abaixo e comece hoje mesmo
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              🔒 A compra é feita em uma ambiente em pix para cartão de crédito
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8 pt-8 border-t">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Download className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Acesso Imediato</div>
                  <div className="text-xs text-muted-foreground">Download instantâneo</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Garantia 7 dias</div>
                  <div className="text-xs text-muted-foreground">100% do seu dinheiro de volta</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Compra 24 / 7</div>
                  <div className="text-xs text-muted-foreground">Disponível sempre</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
