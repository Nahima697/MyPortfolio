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
            Bonjour ! Je suis <Code> Nahima Toumi</Code>, développeuse web passionnée et engagée. Après une reconversion professionnelle il y a plus de deux ans, j&apos;ai trouvé ma vocation dans la création de solutions numériques innovantes et utiles.
          </p>
          <p className="text-lg text-white font-mono mb-6">
            Mon parcours a été marqué par un véritable coup de foudre pour le développement web, une passion née après une pause dans ma vie professionnelle. Chaque jour, j&apos;ai la chance de transformer des idées en réalité, en concevant et en développant des sites web et des applications qui font la différence.
          </p>
          <p className="text-lg text-white font-mono mb-6">
            J&apos;aime explorer de nouvelles technologies et apprendre constamment. Ce portfolio est construit avec <Code> React </Code> et <Code> Next.js</Code>, mais je suis également adepte <Code>d&apos;Angular</Code>.<br/>
          </p>
          <p className="text-lg text-white font-mono mb-6">
            Je travaille aussi avec <Code> WordPress</Code> pour le front-end et je suis fascinée par la conception et la réalisation d&apos;APIs, notamment avec <Code> Symfony</Code>.
          </p>
          <p className="text-lg text-white font-mono">
            Mon objectif est de créer des expériences web exceptionnelles et de contribuer à des projets ambitieux. Si vous cherchez une développeuse dynamique, prête à relever de nouveaux défis, n&apos;hésitez pas à me contacter !
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
