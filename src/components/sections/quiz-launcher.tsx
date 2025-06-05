import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

export function QuizLauncher() {
  return (
    <section id="quiz" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <HelpCircle className="w-16 h-16 mx-auto mb-6 text-accent" />
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">Ready to Find Your Sport?</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg">
          Take our fun and interactive quiz to discover sports that match your personality and interests. It only takes a few minutes!
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-black hover:bg-neutral-800 text-accent-foreground shadow-xl transform hover:scale-105 transition-transform duration-300 px-10 py-6 text-lg">
            <Link href="/quiz">Start the Quiz!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
