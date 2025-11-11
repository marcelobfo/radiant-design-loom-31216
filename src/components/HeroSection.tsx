import { Button } from "@/components/ui/button";
import { Download, BookOpen, Award } from "lucide-react";
import ebookMockup from "@/assets/ebook-mockup.png";
import UserMenu from "./UserMenu";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* User Menu - Fixed Top Right */}
      <div className="absolute top-4 right-4 z-20">
        <UserMenu />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-dark/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <Award className="w-4 h-4" />
              <span>Reforma Tributária 2025 - Prepare-se Agora!</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Seu Planejamento Tributário Está{" "}
              <span className="text-accent">Preparado</span> para a Reforma?
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Descubra como consultar taxas, reduzir fiscais e ficar na frente ainda em 2025 com o guia definitivo da nova realidade tributária brasileira.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Baixar E-book Agora
              </Button>
              
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6 transition-all duration-300">
                <BookOpen className="mr-2 h-5 w-5" />
                Ver Demonstração
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>150+ Páginas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Atualizado 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>5 Bônus Grátis</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Book Mockup */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary-light/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-sm shadow-lg animate-float">
                🔥 Oferta Exclusiva
              </div>
              <img 
                src={ebookMockup} 
                alt="E-book Planejamento Tributário" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
