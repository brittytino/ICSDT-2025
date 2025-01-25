import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Lightbulb, BookOpen, Scale } from "lucide-react";

export const Objectives = () => {
  const objectives = [
    {
      title: "Promote Sustainable Practices",
      description: "Encourage adoption of digital technologies supporting environmental, economic, and social sustainability.",
      icon: Scale,
    },
    {
      title: "Foster Collaboration",
      description: "Connect experts from academia, industry, and government to discuss sustainable transformation strategies.",
      icon: Users,
    },
    {
      title: "Showcase Innovations",
      description: "Present cutting-edge research and methodologies related to sustainable digital practices.",
      icon: Lightbulb,
    },
    {
      title: "Education & Capacity",
      description: "Equip participants with tools and knowledge for leading sustainable digital transformation.",
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Conference Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {objectives.map((objective, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <objective.icon className="h-5 w-5 text-primary" />
                  {objective.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{objective.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};