import { Card, CardContent } from "@/components/ui/card";
import { HandshakeIcon } from "lucide-react";

export const Collaboration = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-32 left-1/2 w-[800px] h-[800px] -translate-x-1/2 bg-[radial-gradient(theme(colors.primary)_20%,transparent_70%)] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Strategic Collaborations
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Forging powerful alliances to drive digital innovation forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/90 backdrop-blur-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-8 flex items-center justify-center aspect-video">
              <img 
                src="/srcas.png" 
                alt="SRCAS Logo" 
                className="w-3/4 object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </CardContent>
          </Card>
          
          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/90 backdrop-blur-lg">
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-8 flex items-center justify-center aspect-video">
              <img 
                src="/inti.png" 
                alt="INTI Logo" 
                className="w-3/4 object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </CardContent>
          </Card>
        </div>

        <div className="mt-20 text-center relative">
          <div className="inline-flex items-center justify-center bg-accent/10 rounded-full p-6">
            <HandshakeIcon className="w-16 h-16 text-accent animate-pulse-slow" />
          </div>
          <p className="mt-6 text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Synergizing expertise through strategic partnerships to deliver transformative
            digital solutions and sustainable technological advancement
          </p>
        </div>
      </div>
    </section>
  );
};