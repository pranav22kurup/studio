import Link from 'next/link';
import type { SVGProps } from 'react';

const KlimbIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 50"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M20.59 4.77H3.32v39.79h17.27v-5.37H9.29V25.11h10.01v-5.37H9.29V10.14h11.3v-5.37zM42.43 4.77L33.8 24.61l-8.63-19.84H16.3l14.13 31.16L28.5 44.56h8.95l1.93-3.76 11.68-25.77L54.6 44.56h8.86l-1.93-3.76-14.13-31.16 3.39-7.46h-8.27zM63.96 4.77v39.79h5.97V4.77h-5.97zM87.31 4.77L77.22 27.5l-2.41-5.48-7.46-17.25h-6.43l12.53 28.23v11.59h5.97V31.42L93.7 4.77h-6.39zM112.93 31.22c-4.9 0-8.95-3.97-8.95-8.95s3.97-8.95 8.95-8.95 8.95 3.97 8.95 8.95-3.97 8.95-8.95 8.95zm0-12.43c-1.93 0-3.48 1.62-3.48 3.48s1.54 3.48 3.48 3.48 3.48-1.62 3.48-3.48-1.54-3.48-3.48-3.48zM133.73 4.77l-8.63 19.84-8.63-19.84h-8.86l14.13 31.16L119.81 44.56h8.95l1.93-3.76 11.68-25.77L146.53 44.56h8.86l-1.93-3.76-14.13-31.16 3.39-7.46h-8.95z" />
  </svg>
);


export function KlimbLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center text-primary ${className}`} aria-label="KLIMB Home">
      <KlimbIcon className="h-8 w-auto mr-2" />
    </Link>
  );
}
