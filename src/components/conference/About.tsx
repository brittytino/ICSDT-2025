import { Card, CardContent } from "@/components/ui/card";
import { Globe2, Users, BookOpen } from "lucide-react";
import { Helmet } from 'react-helmet-async';

export const About = () => {
  const topics = [
    "Computing",
    "Education",
    "Engineering",
    "Innovation",
    "Technology",
    "Interdisciplinary",
    "Sustainability",
    "Business",
  ];

  const stats = [
    {
      icon: Users,
      value: "100+",
      label: "Expected Participants",
      description: "From Malaysia, Thailand, Singapore, Canada, USA and India",
    },
    {
      icon: BookOpen,
      value: "400",
      label: "Pages of Content",
      description: "High-quality research papers and presentations",
    },
    {
      icon: Globe2,
      value: "6",
      label: "Countries",
      description: "International participation and collaboration",
    },
  ];

  return (
    <>
      <Helmet>
        <meta name="description" content="Learn about ICSDT 2025, the premier international conference on sustainable digital transformation hosted by SRCAS." />
        <meta name="keywords" content="ICSDT about, conference topics, digital transformation, SRCAS conference, international participants" />
      </Helmet>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">About the Conference</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Join us for the 3rd International Conference on Sustainable Digital Transformation,
              where experts from around the world gather to share insights and foster cross-border
              partnerships for sustainable growth.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-white rounded-full text-sm text-primary border border-primary/20"
                >
                  {topic}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="font-semibold mb-2">{stat.label}</p>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
