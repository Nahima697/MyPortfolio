
import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { Nav } from "./Nav";

export const Header = () => {
  return (
<header className="py-4 xl:py-6 text-white sticky top-0 z-50 bg-[#1c1c22]/80 backdrop-blur-md border-b border-white/5">      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-medium font-nunito-sans">
            <strong className="text-primary font-extrabold px-2 text-2xl">&lt;</strong>
            Nahima
            <strong className="text-primary font-extrabold px-2 text-2xl">/&gt;</strong>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
           <a href="mailto:nahima.toumi697@gmail.com?subject=Contact%20via%20Portfolio"
            className="bg-secondary border border-2 border-primary flex items-center gap-2 px-2 py-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M3 6l9 6 9-6M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
              </svg>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
