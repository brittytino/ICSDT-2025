import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, FileText, Users } from "lucide-react";

export const PaperSubmission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Publication Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Full Papers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-2">100</p>
              <p className="text-gray-600">12-15+ pages of content</p>
              <Badge className="mt-2">67% of submissions</Badge>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Short Papers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary mb-2">25</p>
              <p className="text-gray-600">6-11 pages of content</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />
                Important Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="font-semibold">Submission Deadline</p>
                <p className="text-gray-600">May 2, 2025</p>
              </div>
              <div>
                <p className="font-semibold">Camera-ready Files</p>
                <p className="text-gray-600">August 1, 2025</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};