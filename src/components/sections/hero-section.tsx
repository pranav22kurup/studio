import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-background/70 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Playful sports background"
          data-ai-hint="playful sports"
          layout="fill"
          objectFit="cover"
          priority
        />
         <div className="absolute inset-0 bg-background/50"></div>
      </div>
      <div className="container relative z-10 mx-auto px-6 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Discover Your <span className="text-black">Sporting Superpower</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
          KLIMB makes finding and learning new sports fun and easy for young athletes. Let's start your adventure!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="#quiz">Start Your Journey</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
