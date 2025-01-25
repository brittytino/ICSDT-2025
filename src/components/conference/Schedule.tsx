import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const scheduleData = [
  {
    time: "09:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address and introduction to ICSDT 2025",
  },
  {
    time: "10:00 AM",
    title: "Keynote Session",
    description: "Sustainable Digital Transformation in the Modern Era",
  },
  {
    time: "11:30 AM",
    title: "Paper Presentations",
    description: "Technical sessions across multiple tracks",
  },
  {
    time: "02:00 PM",
    title: "Panel Discussion",
    description: "Cross-border collaboration for sustainable growth",
  },
  {
    time: "04:00 PM",
    title: "Closing Ceremony",
    description: "Awards presentation and closing remarks",
  },
];

export const Schedule = () => {
  return (
    <section className="py-16 bg-gray-50" id="schedule">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Conference Schedule</h2>
        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-1 mb-8">
            <TabsTrigger value="day1">August 6, 2025</TabsTrigger>
          </TabsList>
          <TabsContent value="day1">
            <div className="space-y-4">
              {scheduleData.map((item, index) => (
                <Card key={index} className="transform hover:scale-[1.01] transition-transform">
                  <CardHeader className="py-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <span className="text-sm text-accent">{item.time}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};