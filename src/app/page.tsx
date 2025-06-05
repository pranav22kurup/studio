import { Navigation } from '@/components/layout/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { JourneyTracker } from '@/components/sections/journey-tracker';
import { QuizLauncher } from '@/components/sections/quiz-launcher';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { Footer } from '@/components/layout/footer';
import { Separator } from '@/components/ui/separator';

// A simple features section placeholder, can be expanded later
const FeaturesSection = () => (
  <section id="features" className="py-16 md:py-24 bg-background/90">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">Why KLIMB?</h2>
        <p className="mt-4 text-lg text-foreground/80">
          Unlock a world of sporting adventure with features designed for fun and growth.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-card rounded-lg shadow-md">
          <svg className="w-12 h-12 mx-auto mb-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-ai-hint="interactive learning"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <h3 className="font-headline text-xl font-semibold mb-2">Interactive Learning</h3>
          <p className="text-foreground/70">Engaging content and quizzes make learning new sports exciting and accessible.</p>
        </div>
        <div className="p-6 bg-card rounded-lg shadow-md">
          <svg className="w-12 h-12 mx-auto mb-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-ai-hint="progress tracking"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
          <h3 className="font-headline text-xl font-semibold mb-2">Personalized Journeys</h3>
          <p className="text-foreground/70">Track progress and follow a guided path tailored to your interests and skill level.</p>
        </div>
        <div className="p-6 bg-card rounded-lg shadow-md">
          <svg className="w-12 h-12 mx-auto mb-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-ai-hint="safe community"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <h3 className="font-headline text-xl font-semibold mb-2">Safe & Supportive</h3>
          <p className="text-foreground/70">A kid-friendly environment that fosters growth, confidence, and a love for sports.</p>
        </div>
      </div>
    </div>
  </section>
);


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <Separator className="my-0" />
        <JourneyTracker />
        <Separator className="my-0" />
        <TestimonialsSection />
        <Separator className="my-0" />
        <QuizLauncher />
      </main>
      <Footer />
    </div>
  );
}
