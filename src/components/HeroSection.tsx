import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import heroBanner from "@/assets/wwe-hero-banner.jpg";

interface HeroSectionProps {
  onSearch: (term: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="WWE Indian Superstars" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            WWE INDIAN
          </span>
          <br />
          <span className="text-white">SUPERSTARS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your ultimate destination for all Indian WWE professionals and their social media presence
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search wrestlers..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder-muted-foreground"
            />
          </div>
        </div>

        <Button size="lg" className="bg-gradient-hero hover:shadow-glow transition-all duration-300 text-white font-semibold px-8 py-6 text-lg">
          Explore All Wrestlers
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;