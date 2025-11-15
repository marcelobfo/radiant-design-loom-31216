import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Contador",
    company: "Silva & Associados",
    testimonial: "Este e-book transformou completamente minha abordagem sobre a reforma tributária. Conteúdo prático e direto ao ponto!",
    avatar: "CS",
    rating: 5,
    color: "bg-primary"
  },
  {
    name: "Maria Santos",
    role: "Empresária",
    company: "Tech Solutions",
    testimonial: "Conteúdo excepcional! Consegui entender todos os impactos da reforma no meu negócio. Recomendo fortemente!",
    avatar: "MS",
    rating: 5,
    color: "bg-accent"
  },
  {
    name: "João Oliveira",
    role: "Consultor Tributário",
    company: "Oliveira Consultoria",
    testimonial: "Material completo e atualizado. Os bônus são incríveis e agregam muito valor. Investimento que vale cada centavo!",
    avatar: "JO",
    rating: 5,
    color: "bg-success"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Veja como o nosso e-book já ajudou centenas de profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group bg-white/95 backdrop-blur-sm border-accent/20 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                {/* Header with Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-14 w-14">
                    <AvatarFallback className={`${testimonial.color} text-white text-lg font-semibold`}>
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 leading-relaxed mb-4 italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
