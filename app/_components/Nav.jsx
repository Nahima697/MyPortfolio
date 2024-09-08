
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: "Accueil",
    path: "/",
  },
  {
    name: "A propos",
    path: "/aPropos",
  },
  {
    name: "Mes Projets",
    path: "/projets",
  },
  {
    name: "Contact",
    path: "/contact",
  }
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link 
            href={link.path} 
            key={index} 
            className={`${
              isActive ? "text-primary border-b-2 border-accent" : ""
            } capitalize font-medium hover:text-primary transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
