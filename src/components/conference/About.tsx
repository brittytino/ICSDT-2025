import { Card, CardContent } from "@/components/ui/card";
import { Globe2, Users, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";

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
      description: "From Malaysia, Thailand, Singapore, Canada, USA, and India",
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
        <meta
          name="description"
          content="Learn about ICSDT 2025, the premier international conference on sustainable digital transformation hosted by SRCAS."
        />
        <meta
          name="keywords"
          content="ICSDT about, conference topics, digital transformation, SRCAS conference, international participants"
        />
      </Helmet>
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-primary tracking-tight">
            About the Conference
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-shrink-0 md:w-1/2">
              <img
                src="/about1.avif"
                alt="About Conference"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="flex-grow space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Join us for the 3rd International Conference on Sustainable Digital Transformation,
                where experts from around the world gather to share insights and foster cross-border
                partnerships for sustainable growth.
              </p>
              <div className="flex flex-wrap justify-start gap-3">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-5 py-2 bg-white rounded-full text-sm font-medium text-primary border border-primary/20 shadow-sm hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow border border-gray-200 rounded-xl">
                    <CardContent className="py-6 px-4 text-center">
                      <stat.icon className="h-10 w-10 mx-auto mb-3 text-primary" />
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="font-semibold text-gray-800">{stat.label}</p>
                      <p className="text-sm text-gray-600 mt-2">{stat.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
          <h3 className="text-3xl font-bold text-center text-primary mb-8">Conference Proceedings</h3>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            All submitted papers will undergo a rigorous peer-review process by experts in the field, with review
            results announced within 15 to 20 days. Accepted, registered, and presented papers will be published
            in the prestigious <span className="font-semibold text-primary">Springer ACSRA</span> series Conference
            Proceedings.
          </p>
          <p className="text-lg text-gray-700 text-center mt-6 max-w-4xl mx-auto leading-relaxed">
            These proceedings will be indexed in
            <span className="font-semibold text-primary"> Ei Compendex, Scopus, and other major academic databases</span>,
            ensuring high visibility and academic recognition.
          </p>
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md text-center">
              <h4 className="text-xl font-bold text-primary mb-3">Springer Publishing</h4>
              <p className="text-gray-700">
                Springer is a global leader in publishing high-quality conference proceedings,
                with over <span className="font-semibold text-primary">2,000</span> titles published annually.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md text-center">
              <h4 className="text-xl font-bold text-primary mb-3">Global Research Recognition</h4>
              <p className="text-gray-700">
                Published papers in Springer’s conference series are accessed worldwide,
                ensuring your research gains maximum exposure and recognition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};