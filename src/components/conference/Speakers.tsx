import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Award, Star } from "lucide-react";

const generalChairs = [
  {
    name: "Dr. B.L Shivakumar",
    role: "Principal & Secretary",
    affiliation: "Sri Ramakrishna College of Arts & Science, Tamilnadu India",
    image: "/shiva1.jpg",
  },
  {
    name: "Wung Ling Shing",
    role: "General Chair",
    affiliation: "INTI International University, Malaysia",
    image: "/ling.png",
  },
];

const speakers = [
  {
    name: "Dr. G. Maria Pricilla",
    role: "PC Chair",
    affiliation: "Sri Ramakrishna College of Arts & Science",
    image: "/maria.jpg",
  },
  {
    name: "Dr. Siti Sarah M",
    role: "PC Chair",
    affiliation: "INTI UNIVERSITY",
    image: "/siti.jpg",
  },
];

const coCommitteeChairs = [
  {
    name: "Dr. M Hemalatha",
    role: "Organizing Committee",
    affiliation: "Sri Ramakrishna College of Arts & Science",
    image: "/hema.jpg",
  },
  {
    name: "Dr. N. Mahendiren",
    role: "Organizing Committee",
    affiliation: "Sri Ramakrishna College of Arts & Science",
    image: "/mah.jpg",
  },
];

export const Speakers = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* General Chairs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-12 gap-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Conference Leadership
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {generalChairs.map((chair) => (
              <motion.div 
                key={chair.name}
                whileHover={{ y: -5 }}
                className="flex justify-center"
              >
                <Card className="w-full max-w-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="flex flex-col md:flex-row items-center gap-6 p-0">
                    <Avatar className="w-32 h-32 border-4 border-primary/20">
                      <AvatarImage src={chair.image} className="object-cover" />
                      <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                        {chair.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold mb-2">{chair.name}</h3>
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <Award className="w-5 h-5 text-accent" />
                        <p className="text-accent font-medium">{chair.role}</p>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {chair.affiliation}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Committee Chairs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-12 gap-4">
            <Star className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Program Committee
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {speakers.map((speaker) => (
              <motion.div 
                key={speaker.name}
                whileHover={{ y: -5 }}
                className="flex justify-center"
              >
                <Card className="w-full max-w-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="flex flex-col items-center text-center gap-6 p-0">
                    <Avatar className="w-24 h-24 mb-4 border-2 border-primary/20">
                      <AvatarImage src={speaker.image} />
                      <AvatarFallback className="bg-accent/10 text-accent">
                        {speaker.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{speaker.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <p className="text-sm text-accent font-medium">{speaker.role}</p>
                      </div>
                      <p className="text-sm text-gray-600 px-4">{speaker.affiliation}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Co-Committee Chairs Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-12 gap-4">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Organizing Committee
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coCommitteeChairs.map((speaker) => (
              <motion.div 
                key={speaker.name}
                whileHover={{ y: -5 }}
                className="flex justify-center"
              >
                <Card className="w-full max-w-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-primary/20">
                  <CardContent className="flex flex-col items-center text-center gap-6 p-0">
                    <Avatar className="w-24 h-24 mb-4 relative before:absolute before:-inset-1 before:bg-primary/20 before:rounded-full">
                      <AvatarImage src={speaker.image} className="z-10 relative" />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {speaker.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{speaker.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <p className="text-sm text-primary font-medium">{speaker.role}</p>
                      </div>
                      <p className="text-sm text-gray-600 px-4">{speaker.affiliation}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};