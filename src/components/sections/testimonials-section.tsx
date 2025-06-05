import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';


interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarSrc?: string;
  avatarFallback: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  { id: '1', name: 'Sarah M. (Parent)', role: 'Parent of Athlete', avatarFallback: 'SM', quote: "KLIMB has been a game-changer for my son! He discovered a love for basketball and made new friends. The platform is so easy to use.", rating: 5, avatarSrc:"https://placehold.co/100x100.png" },
  { id: '2', name: 'Alex P. (Young Athlete)', role: 'Aspiring Footballer', avatarFallback: 'AP', quote: "The journey tracker keeps me motivated, and the quizzes are super fun. I'm learning so much about different sports!", rating: 5, avatarSrc:"https://placehold.co/100x100.png" },
  { id: '3', name: 'Coach Dave R.', role: 'Youth Sports Coach', avatarFallback: 'DR', quote: "As a coach, I recommend KLIMB to all my young players. It's a fantastic resource for skill development and sports discovery.", rating: 4, avatarSrc:"https://placehold.co/100x100.png" },
  { id: '4', name: 'Emily K. (Kid User)', role: 'Explorer', avatarFallback: 'EK', quote: "I found out I really like gymnastics thanks to KLIMB! The videos are cool and easy to follow.", rating: 5, avatarSrc:"https://placehold.co/100x100.png" },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold text-primary sm:text-4xl">What Our Users Say</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Hear from parents, athletes, and coaches who love KLIMB.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-primary scrollbar-track-primary/20">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="snap-center flex-none w-80 md:w-96">
                <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint="person portrait" />
                        <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="font-headline text-lg">{testimonial.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <blockquote className="italic text-foreground/80 mb-4">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
