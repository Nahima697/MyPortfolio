import { Nav } from "./Nav";
import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
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
          <Link href="/contact">
            <Button className="bg-secondary border border-2 border-primary flex items-center gap-2 px-2 py-2 text-sm">
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
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
