"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci'; 

const links = [
  {
    name: "Accueil",
    path: "/",
  },
  {
    name: "Mes Projets",
    path: "/projets",
  },
  {
    name: "A Propos",
    path: "/aPropos",
  },
  {
    name: "Contact",
    path: "/contact",
  }
];

export const MobileNav = () => {
  const pathname = usePathname();
  
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" /> 
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-foreground">
        <div className= "mt-32 mb-40 text-center text-2xl">
        <Link href="/">    
        <h1 className="text-xl font-medium font-nunito-sans">
        <strong className="text-primary font-extrabold px-2 text-2xl">&lt;</strong>
        Nahima
        <strong className="text-primary font-extrabold px-2 text-2xl">/&gt;</strong>
         </h1>  
         </Link>
        </div>

        <nav className ="flex flex-col justify-center items-center gap-8">
            {links.map((link,index) => (
                <Link href={link.path} key={index}
                 className ={`${
                    link.path === pathname && 
                    "text-primary border-b-2 border-accent" }
                    text-xl capitalize hover:text-accent transition-all`} >
                  {link.name}
                </Link>
            ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
