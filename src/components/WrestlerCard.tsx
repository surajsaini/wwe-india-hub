import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Youtube, Facebook, Globe, ExternalLink } from "lucide-react";

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface WrestlerCardProps {
  name: string;
  image: string;
  description: string;
  socialLinks: SocialLink[];
}

const WrestlerCard = ({ name, image, description, socialLinks }: WrestlerCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-hover hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6">
        {/* Wrestler Image */}
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Wrestler Info */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-2">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-full justify-start gap-3 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all group-hover:shadow-glow"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <IconComponent className="w-4 h-4" />
                  {link.platform}
                  <ExternalLink className="w-3 h-3 ml-auto" />
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default WrestlerCard;