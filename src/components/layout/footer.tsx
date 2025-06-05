import Link from 'next/link';
import { KlimbLogo } from '@/components/klimb-logo';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const siteLinks = [
  { href: '#features', label: 'Features' },
  { href: '#journey', label: 'Your Journey' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="border-t bg-background/80">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <KlimbLogo />
            <p className="mt-4 text-muted-foreground text-sm">
              Helping young athletes discover their potential and love for sports.
            </p>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">Site Links</h3>
            <ul className="mt-4 space-y-2">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} KLIMB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
