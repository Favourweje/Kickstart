import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Trophy, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <Link to="/" className="text-primary text-2xl font-bold">
          Kickstart
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary">
            Home
          </Link>
          <Link to="/tutorials" className="text-foreground hover:text-primary">
            Tutorials
          </Link>
          <Link to="/challenges" className="text-foreground hover:text-primary">
            Challenges
          </Link>
          <Link to="/leaderboard" className="text-foreground hover:text-primary">
            Leaderboard
          </Link>
          <Link to="/mentors" className="text-foreground hover:text-primary">
            Mentors
          </Link>
          <Button variant="outline" className="bg-primary text-background hover:bg-primary/90">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1553778263-73a83bab9b0c")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-white">
            Skill Tutorials
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Player Challenges
          </p>
          <Button className="bg-primary text-background hover:bg-primary/90">
            Sign Up
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="p-6 bg-secondary text-center">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary mb-4">Skill Tutorials</h2>
          <p className="text-foreground">Learn new skills with top-notch tutorials.</p>
        </Card>

        <Card className="p-6 bg-secondary text-center">
          <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary mb-4">Player Leaderboards</h2>
          <p className="text-foreground">Track your progress and compete globally.</p>
        </Card>

        <Card className="p-6 bg-secondary text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-primary mb-4">Mentor Opportunities</h2>
          <p className="text-foreground">Connect with experienced football mentors.</p>
        </Card>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-foreground">
        © 2025 Scout Pro · All Rights Reserved.
      </footer>
    </div>
  );
};

export default Index;