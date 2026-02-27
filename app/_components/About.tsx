"use client";

import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return <span className={cn("bg-foreground/20 border-2 border-primary p-1 -m-1", className)} {...props} />;
};

const experiences = [
  {
    company: "Superpictor",
    role: "Alternance - Concepteur Développeur d'Applications",
    duration: "Oct 2025- Fév 2026",
    description: "Maintenance et évolution de sites e-commerce. Utilisation de PHP et CMS (PrestaShop). Découverte des méthodes agiles avec Jira pour le suivi des tickets et la gestion de projet en équipe.",
  },
  {
    company: "Pomelo",
    role: "Stage - Développeuse Web",
    duration: "Nov-Déc 2023",
    description: "Développement fullstack d'un projet. Création d'une API avec Symfony et ApiPlatform, et développement de l'interface utilisateur avec Angular et Tailwind CSS.",
  }
];

const skills = [
  { 
    category: "Backend & Base de Données", 
    items: ["Java 21", "Spring Boot 3", "PHP", "PostgreSQL","MySql", "Node.js", "Symfony"] 
  },
  { 
    category: "Frontend & Mobile", 
    items: ["Angular", "Ionic", "React", "Next.js", "Tailwind CSS"] 
  },
  { 
    category: "DevOps & Outils", 
    items: ["Architecture N-Tier", "Principes SOLID", "Docker", "Git", "Jira", "Postman","Junit-Mockito"] 
  }
];

const About = () => {
  return (
  <div className="h-full w-full">
      <div className="container mx-auto">
          <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-[60px]">
          
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 bg-transparent">
            <TabsTrigger value="about" className="w-full bg-card data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-lg py-3 rounded-xl transition-all shadow-sm">
              À propos de moi
            </TabsTrigger>
            <TabsTrigger value="experience" className="w-full bg-card data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-lg py-3 rounded-xl transition-all shadow-sm">
              Expériences Pro
            </TabsTrigger>
            <TabsTrigger value="skills" className="w-full bg-card data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-lg py-3 rounded-xl transition-all shadow-sm">
              Compétences
            </TabsTrigger>
          </TabsList>

          {/* Contenu à droite */}
          <div className="w-full">
            
            <TabsContent value="about" className="w-full">
              <div className="max-w-4xl text-center xl:text-left">
                <h3 className="text-3xl font-bold text-white mb-8">Mon Profil</h3>
                <div className="flex flex-col gap-6 leading-relaxed">
                  <p className="text-lg text-white font-mono">
                    Bonjour ! Je suis <Code>Nahima Toumi</Code>, fraîchement diplômée du titre de <Code>Concepteur Développeur d'Applications</Code> (Bac+4).
                  </p>
                  <p className="text-lg text-white font-mono">
                    Mon année de formation m&apos;a permis de découvrir et de pratiquer activement la conception logicielle. J&apos;ai un attrait particulier pour la création de back-ends avec <Code>Java</Code> et <Code>Spring Boot</Code>, ainsi que le développement d&apos;interfaces avec <Code>Angular</Code> et l&apos;écosystème <Code>React</Code>.
                  </p>
                  <p className="text-lg text-white font-mono">
                    Bien que je sois encore junior, je suis extrêmement <Code>curieuse et motivée</Code>. J&apos;adore apprendre de nouvelles choses, que ce soit modéliser une base de données sous <Code>PostgreSQL</Code> ou m&apos;initier aux bonnes pratiques de conteneurisation avec <Code>Docker</Code>.
                  </p>
                  <p className="text-lg text-white font-mono">
                    Mon objectif aujourd&apos;hui est d&apos;intégrer une équipe bienveillante où je pourrai consolider mes acquis, gagner en autonomie, et apporter mon enthousiasme à vos projets !
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left mb-8">
                <h3 className="text-3xl font-bold text-white">Mon Parcours</h3>
                <ScrollArea className="h-[420px]">
                  <ul className="grid grid-cols-1 gap-[30px] pr-4">
                    {experiences.map((exp, index) => (
                      <li key={index} className="bg-card py-6 px-8 rounded-xl flex flex-col justify-start items-center lg:items-start gap-2 border border-white/10 hover:border-primary/50 transition-all">
                        <span className="text-primary font-bold">{exp.duration}</span>
                        <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                        <div className="flex items-center gap-3 my-2">
                          <span className="w-[6px] h-[6px] rounded-full bg-primary"></span>
                          <p className="text-white/60 uppercase tracking-wider text-sm">{exp.company}</p>
                        </div>
                        <p className="text-sm text-white/70 text-center lg:text-left leading-relaxed">
                          {exp.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* ONGLET 3 : Tes compétences */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-8 text-center xl:text-left">
                <h3 className="text-3xl font-bold text-white">Mes Compétences</h3>
                <ScrollArea className="h-[420px]">
                  <div className="grid grid-cols-1 gap-8 pr-4">
                    {skills.map((skillGroup, index) => (
                      <div key={index} className="bg-card p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-all">
                        <h4 className="text-xl font-semibold mb-6 text-white flex items-center justify-center xl:justify-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          {skillGroup.category}
                        </h4>
                        <div className="flex flex-wrap justify-center xl:justify-start gap-3">
                          {skillGroup.items.map((item, idx) => (
                            <span 
                              key={idx} 
                              className="bg-background border border-primary/30 text-white/90 px-4 py-2 rounded-lg text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default About;