import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Conference General Chair</h2>
        <div className="flex justify-center gap-8 mb-12">
          {generalChairs.map((chair) => (
            <Card key={chair.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={chair.image} alt={chair.name} />
                    <AvatarFallback>{chair.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1">{chair.name}</h3>
                  <p className="text-sm text-accent mb-1">{chair.role}</p>
                  <p className="text-sm text-gray-600">{chair.affiliation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Program Committee Chairs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <Card key={speaker.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={speaker.image} alt={speaker.name} />
                    <AvatarFallback>{speaker.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg mb-1">{speaker.name}</h3>
                  <p className="text-sm text-accent mb-1">{speaker.role}</p>
                  <p className="text-sm text-gray-600">{speaker.affiliation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};