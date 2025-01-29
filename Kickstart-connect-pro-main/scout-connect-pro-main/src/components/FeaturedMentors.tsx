import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const mentors = [
  {
    name: "David Thompson",
    role: "Professional Coach",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&q=80",
    expertise: "Youth Development",
  },
  {
    name: "Sarah Martinez",
    role: "Former National Player",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    expertise: "Technical Skills",
  },
  {
    name: "Michael Chen",
    role: "Scout",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    expertise: "Talent Identification",
  },
];

export const FeaturedMentors = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Featured Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <Card key={mentor.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{mentor.name}</h3>
                <p className="text-gray-600 mb-4">{mentor.role}</p>
                <Badge variant="secondary">{mentor.expertise}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};