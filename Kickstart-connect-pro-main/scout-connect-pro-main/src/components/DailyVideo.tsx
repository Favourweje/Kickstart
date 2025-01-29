import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const DailyVideo = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Daily Inspiration</h2>
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <div className="relative aspect-video bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80"
              alt="Football training"
              className="w-full h-full object-cover"
            />
            <Button
              size="lg"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-16 h-16 bg-secondary hover:bg-secondary/90"
            >
              <Play className="h-8 w-8" />
            </Button>
          </div>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Master the Perfect Free Kick</h3>
            <p className="text-gray-600">
              Learn the techniques and secrets behind scoring amazing free kicks from our expert coaches.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};