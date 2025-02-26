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
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Conference Objectives</h2>
          <p className="mt-2 text-lg text-gray-600">Empowering a sustainable digital future through collaboration and innovation.</p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((objective, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon with Gradient Background */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>

              <CardHeader className="flex flex-col items-center text-center pt-8">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white">
                  <objective.icon className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4 text-xl font-semibold text-gray-900">
                  {objective.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-6 text-center">
                <p className="text-gray-600">{objective.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
