import { useState, useMemo } from "react";
import HeroSection from "@/components/HeroSection";
import WrestlerCard from "@/components/WrestlerCard";
import { wrestlers } from "@/data/wrestlers";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWrestlers = useMemo(() => {
    if (!searchTerm) return wrestlers;
    return wrestlers.filter(wrestler =>
      wrestler.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      wrestler.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection onSearch={setSearchTerm} />

      {/* Wrestlers Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Indian WWE <span className="text-primary">Superstars</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your favorite Indian wrestlers across all social platforms
            </p>
          </div>

          {filteredWrestlers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No wrestlers found matching "{searchTerm}"
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWrestlers.map((wrestler) => (
                <WrestlerCard
                  key={wrestler.id}
                  name={wrestler.name}
                  image={wrestler.image}
                  description={wrestler.description}
                  socialLinks={wrestler.socialLinks}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wwe-darker border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 WWE Indian. All rights reserved. Built for fans, by fans.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
