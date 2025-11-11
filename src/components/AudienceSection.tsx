import { Briefcase, Calculator, Users, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const audiences = [
  {
    icon: Briefcase,
    title: "Empresários e Gestores",
    description: "Profissionais de empresas que precisam se adequar rapidamente ao novo regime tributário.",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Calculator,
    title: "Contadores e Consultores",
    description: "Profissionais tributários que orientam empresas na conformidade e otimização fiscal de 2025.",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Users,
    title: "Profissionais de Finanças",
    description: "Especialistas em controladoria e compliance que precisam de estratégias para a transição do novo modelo.",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: GraduationCap,
    title: "Autônomos",
    description: "Profissionais liberais que precisam tributários por pensam atualizar sobre as novas regras.",
    color: "text-amber-500",
    bgColor: "bg-amber-50"
  }
];

const AudienceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Para Quem é Este E-book
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvido especialmente para profissionais que precisam tomar decisões tributárias estratégicas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group cursor-pointer animate-fade-in-up border-2 border-transparent hover:border-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${audience.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <audience.icon className={`w-8 h-8 ${audience.color}`} />
              </div>
              
              <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                {audience.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
