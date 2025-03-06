import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, Lightbulb, BookOpen, Scale } from "lucide-react";
import { motion } from "framer-motion";

export const Objectives = () => {
  const objectives = [
    {
      title: "Promote Sustainable Practices",
      description: "Encourage adoption of digital technologies supporting environmental, economic, and social sustainability.",
      icon: Scale,
      color: "from-blue-500 to-emerald-400",
    },
    {
      title: "Foster Collaboration",
      description: "Connect experts from academia, industry, and government to discuss sustainable transformation strategies.",
      icon: Users,
      color: "from-indigo-500 to-blue-400",
    },
    {
      title: "Showcase Innovations",
      description: "Present cutting-edge research and methodologies related to sustainable digital practices.",
      icon: Lightbulb,
      color: "from-amber-500 to-orange-400",
    },
    {
      title: "Education & Capacity",
      description: "Equip participants with tools and knowledge for leading sustainable digital transformation.",
      icon: BookOpen,
      color: "from-purple-500 to-pink-400",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">
            Conference Objectives
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering a sustainable digital future through collaboration and innovation.
          </p>
        </motion.div>

        {/* Cards Section - Mobile Optimized */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {objectives.map((objective, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="group h-full relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0"
              >
                {/* Custom gradient accent for each card */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${objective.color}`}></div>

                <CardHeader className="flex flex-col items-center text-center pt-6 sm:pt-8 pb-2">
                  <div className={`p-3 sm:p-4 rounded-full bg-gradient-to-r ${objective.color} text-white shadow-md`}>
                    <objective.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <CardTitle className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
                    {objective.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pb-6 text-center px-4 sm:px-6">
                  <p className="text-sm sm:text-base text-gray-600">{objective.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile indicator dots */}
        <div className="flex justify-center mt-6 space-x-2 md:hidden">
          {objectives.map((_, index) => (
            <div 
              key={index} 
              className={`h-2 w-2 rounded-full bg-gray-300 ${index === 0 ? 'bg-primary' : ''}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};