import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Award, Star, Globe } from "lucide-react";

const committees = {
  leadership: [
    {
      name: "Dr. B.L Shivakumar",
      role: "Principal & Secretary",
      affiliation: "Sri Ramakrishna College, India",
      image: "/shiva1.jpg",
    },
    {
      name: "Wung Ling Shing",
      role: "General Chair",
      affiliation: "INTI University, Malaysia",
      image: "/ling.png",
    },
  ],
  program: [
    {
      name: "Dr. G. Maria Pricilla",
      role: "PC Chair",
      affiliation: "Sri Ramakrishna College",
      image: "/maria.jpg",
    },
    {
      name: "Dr. Siti Sarah M",
      role: "PC Chair",
      affiliation: "INTI UNIVERSITY",
      image: "/siti.jpg",
    },
  ],
  organizing: [
    {
      name: "Dr. M Hemalatha",
      role: "Organizing Committee",
      affiliation: "Sri Ramakrishna College",
      image: "/hema.jpg",
    },
    {
      name: "Dr. N. Mahendiren",
      role: "Organizing Committee",
      affiliation: "Sri Ramakrishna College",
      image: "/mah.jpg",
    },
  ],
};

const CommitteeSection = ({ title, members, icon: Icon, color }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    className="flex-1"
  >
    <div className="mb-6 flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
      <Icon className={`w-8 h-8 ${color}`} />
      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        {title}
      </h3>
    </div>
    <div className="grid gap-4">
      {members.map((member, index) => (
        <motion.div 
          key={index}
          whileHover={{ y: -2 }}
          className="group relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <Card className="relative rounded-xl border-0 shadow-sm group-hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14 border-2 border-white shadow-lg">
                  <AvatarImage src={member.image} className="object-cover" />
                  <AvatarFallback className="bg-gray-100 text-gray-600">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
                  <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                  <p className="text-sm text-gray-600 mt-1">{member.affiliation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export const Speakers = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Main Title */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-extrabold text-gray-800">
            Conference Leadership
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Guiding visionaries and experts shaping the future of sustainable digital transformation
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {committees.leadership.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-1 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl"
            >
              <Card className="rounded-xl border-0 shadow-lg">
                <CardContent className="p-6 flex items-center gap-6">
                  <Avatar className="w-24 h-24 border-4 border-white shadow-xl">
                    <AvatarImage src={member.image} />
                    <AvatarFallback className="bg-gray-100 text-2xl">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-5 h-5 text-purple-600" />
                      <span className="text-purple-600 font-medium">{member.role}</span>
                    </div>
                    <p className="text-sm text-gray-600">{member.affiliation}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Committees Row */}
        <div className="flex flex-col lg:flex-row gap-8">
          <CommitteeSection
            title="Program Committee"
            members={committees.program}
            icon={Star}
            color="text-yellow-500"
          />
          
          <div className="w-px bg-gray-200 hidden lg:block" />

          <CommitteeSection
            title="Organizing Committee"
            members={committees.organizing}
            icon={Users}
            color="text-green-500"
          />
        </div>
      </div>
    </section>
  );
};