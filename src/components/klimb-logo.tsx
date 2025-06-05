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
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="PT Sans, sans-serif"
      fontSize="30"
      fontWeight="bold"
    >
      KLIMB
    </text>
  </svg>
);


export function KlimbLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center text-primary ${className}`} aria-label="KLIMB Home">
      <KlimbIcon className="h-8 w-auto mr-2" />
    </Link>
  );
}
