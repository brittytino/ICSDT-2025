import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Star, Award, ChevronRight } from "lucide-react";

const committees = {
  leadership: [
    {
      name: "Dr. B.L Shivakumar",
      role: "General Chair",
      affiliation: "Principal & Secretary Of SRCAS, India",
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
      affiliation: "Sri Ramakrishna College of Arts & Science",
      image: "/maria.jpg",
    },
    {
      name: "Dr. Siti Sarah M",
      role: "PC Chair",
      affiliation: "INTI UNIVERSITY",
      image: "/siti.jpg",
    },
  ],
  coChairs: [
    {
      name: "Dr. M Hemalatha",
      role: "PC Co-Chair",
      affiliation: "Sri Ramakrishna College of Arts & Science",
      image: "/hema.jpeg",
    },
    {
      name: "Dr. N. Mahendiren",
      role: "PC Co-Chair",
      affiliation: "Sri Ramakrishna College of Arts & Science",
      image: "/mah.jpg",
    },
    {
      name: "Dr. Deshinta Arrova Dewi",
      role: "PC Co-Chair",
      affiliation: "INTI University",
      image: "/prof.jpg",
    },
    {
      name: "Dr. Malathy Batumalay",
      role: "PC Co-Chair",
      affiliation: "INTI University",
      image: "/prof.jpg",
    },
  ],
};

const CommitteeSection = ({ title, members, icon: Icon, iconColor }) => (
  <div className="w-full mb-16">
    <div className="mb-8 flex items-center gap-4 border-b border-gray-100 pb-4">
      <div className="p-3 bg-gray-50 rounded-xl">
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-2xl font-bold text-gray-800">
        {title}
      </h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member, index) => (
        <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4 border-4 border-white shadow-md">
                <AvatarImage src={member.image} className="object-cover" />
                <AvatarFallback className="bg-gray-100 text-gray-600 text-xl">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <h4 className="text-xl font-bold text-gray-800 mt-2">{member.name}</h4>
              <p className="text-base text-gray-600 font-medium mt-1">{member.role}</p>
              <p className="text-sm text-gray-500 mt-2">{member.affiliation}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const CoChairsSection = ({ members, icon: Icon, iconColor }) => (
  <div className="w-full mb-16">
    <div className="mb-8 flex items-center gap-4 border-b border-gray-100 pb-4">
      <div className="p-3 bg-gray-50 rounded-xl">
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-2xl font-bold text-gray-800">
        Program Committee Co-Chairs
      </h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {members.map((member, index) => (
        <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-20 h-20 mb-3 border-4 border-white shadow-md">
                <AvatarImage src={member.image} className="object-cover" />
                <AvatarFallback className="bg-gray-100 text-gray-600 text-lg">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <h4 className="text-lg font-bold text-gray-800 mt-1">{member.name}</h4>
              <p className="text-sm text-gray-600 font-medium mt-1">{member.role}</p>
              <p className="text-xs text-gray-500 mt-1">{member.affiliation}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

const LeadershipSection = ({ members }) => (
  <div className="w-full mb-16">
    <div className="mb-8 flex items-center gap-4 border-b border-gray-100 pb-4">
      <div className="p-3 bg-gray-50 rounded-xl">
        <Award className="w-8 h-8 text-gray-700" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800">
        General Chairs
      </h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {members.map((member, index) => (
        <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
                <AvatarImage src={member.image} className="object-cover" />
                <AvatarFallback className="bg-gray-100 text-gray-600 text-2xl">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h4 className="text-2xl font-bold text-gray-800">{member.name}</h4>
                <p className="text-lg text-gray-600 font-medium mt-2">{member.role}</p>
                <p className="text-base text-gray-500 mt-2">{member.affiliation}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);

export const Speakers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Conference Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the distinguished experts guiding our conference on sustainable digital transformation
          </p>
          <div className="h-1 w-24 bg-gray-200 mx-auto mt-6"></div>
        </div>

        <LeadershipSection members={committees.leadership} />
        
        <CommitteeSection
          title="Program Committee Chairs"
          members={committees.program}
          icon={Star}
          iconColor="text-gray-700"
        />
        
        <CoChairsSection
          members={committees.coChairs}
          icon={Users}
          iconColor="text-gray-700"
        />
      </div>
    </section>
  );
};