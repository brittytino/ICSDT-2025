import { Card, CardContent } from "@/components/ui/card";
import { HandshakeIcon } from "lucide-react";


export const Collaboration = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Collaboration Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Card className="hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div >
                <img src="/srcas.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow bg-white/50 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div>
              <img src="/inti.png" alt="Logo" className="w-full h-full object-contain" />              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <HandshakeIcon className="w-16 h-16 mx-auto text-accent animate-bounce-slow" />
          <p className="mt-4 text-lg text-gray-700">
            Working together to advance sustainable digital transformation through research and innovation
          </p>
        </div>
      </div>
    </section>
  );
};