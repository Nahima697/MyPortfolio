import { Section } from "./Section";
import { Nav } from "./Nav"


export const Header = () => {
  return (
    <header className="sticky top-0 py-4 text-white py-8 xl:py-12">
      <Section className="flex items-center justify-between">
      <h1 className="text-xl font-medium font-nunito-sans">
    <strong className="text-primary font-extrabold px-2 text-2xl">&lt;</strong>
    Nahima
    <strong className="text-primary font-extrabold px-2 text-2xl">/&gt;</strong>
  </h1>   
  <Nav /> 
      </Section>
     
    </header>
  );
};
