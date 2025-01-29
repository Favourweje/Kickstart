import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary/90 text-white px-4">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1936&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto text-center relative z-10 animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Discover Your Football Future
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Connect with mentors, showcase your talent, and take your game to the next level
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};