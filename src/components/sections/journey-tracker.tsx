import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Milestone, Zap, Target, Users, Trophy, Search, BookOpen, Dumbbell } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface JourneyStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
}

const journeySteps: JourneyStep[] = [
  { id: '1', title: 'Discover Your Sport', description: "Explore various sports and find what excites you the most. It's all about fun!", icon: Search, iconColor: "text-red-500" },
  { id: '2', title: 'Learn the Basics', description: 'Get to know the fundamental rules and skills of your chosen sport through engaging content.', icon: BookOpen, iconColor: "text-blue-500" },
  { id: '3', title: 'Practice & Improve', description: 'Fun drills and challenges to help you hone your skills and build confidence.', icon: Dumbbell, iconColor: "text-green-500" },
  { id: '4', title: 'Join a Community', description: 'Connect with other young athletes, share experiences, and make new friends.', icon: Users, iconColor: "text-yellow-500" },
  { id: '5', title: 'Reach Your Goals', description: 'Set personal goals, track your progress, and celebrate your achievements!', icon: Trophy, iconColor: "text-purple-500" },
];

export function JourneyTracker() {
  return (
    <section id="journey" className="py-16 md:py-24 bg-background/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Your KLIMB Journey</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Follow these steps to unlock your sporting potential.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary/20">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="snap-center flex-none w-80 md:w-96">
                <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader className="flex-row items-center space-x-4">
                    <div className={`p-3 rounded-full bg-primary/10 ${step.iconColor || 'text-primary'}`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="font-headline text-xl">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-base text-foreground/70">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
           {/* Optional: Add custom scroll indicators or buttons here if needed */}
        </div>
      </div>
    </section>
  );
}
