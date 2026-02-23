import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-foreground/20 border-2 border-primary p-1 -m-1", className)} {...props} />;
};

const About = () => {
  return (
    <div className="h-full w-full leading-relaxed mt-12 mb-12">
      <div className="flex items-center justify-center p-8">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white font-nunito-sans mb-8">
            À Propos de Moi
          </h2>
          <p className="text-lg text-white font-mono mb-6">
            Bonjour ! Je suis <Code>Nahima Toumi</Code>, passionnée par l'ingénierie logicielle et récemment diplômée du titre d&apos;<Code>Architecte Logiciel</Code>. 
          </p>
          <p className="text-lg text-white font-mono mb-6">
            Mon expertise s&apos;étend de la conception de back-ends robustes avec <Code>Java 21</Code> et <Code>Spring Boot 3</Code> jusqu&apos;à la création d'interfaces hybrides modernes avec <Code>Angular</Code> et <Code>Ionic</Code>.
          </p>
          <p className="text-lg text-white font-mono mb-6">
            Je maîtrise la gestion de bases de données complexes sous <Code>PostgreSQL</Code> (notamment les types avancés comme tsrange) et j&apos;intègre des pratiques <Code>DevOps</Code> avec <Code>Docker</Code> et des pipelines <Code>CI/CD</Code> pour garantir la qualité et la stabilité de mes déploiements.
          </p>
          <p className="text-lg text-white font-mono">
            Aujourd&apos;hui, je mets mes compétences au service de projets ambitieux, en veillant toujours à respecter les principes <Code>SOLID</Code> et une architecture logicielle propre et scalable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;