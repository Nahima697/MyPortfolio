"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "@radix-ui/react-tooltip";
import { ProjetSliderBtns } from "./ProjetSliderBtns";

type Project = {
  num: number;
  category: string;
  title: string;
  description: string;
  highlights?: string[];
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
};

const projects: Project[] = [
  {
    num: 1,
    category: "Freelance / Vitrine Métier",
    title: "Auto-École du Canal",
    description:
      "Refonte complète pour une mise en conformité Qualiopi. Intégration d'une navigation par ancres pour les 7 critères de qualité, gestion de documents PDF réglementaires et optimisation SEO local. Design moderne et responsive pour faciliter l'inscription des élèves.",
    stack: [
      { name: "Next.js 14" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Lucide React" },
      { name: "Netlify Forms" },
    ],
    image: "/assets/projets/auto-ecole.png",
    live: "https://auto-ecole-du-canal.netlify.app/",
    github: "",
  },
  {
    num: 2,
    category: "Fullstack / Application Hybride",
    title: "ElecBusiness",
    description:
      "Plateforme complète de réservation de bornes de recharge électrique entre particuliers. Architecture N-Tier (Spring Boot / Angular + Ionic) avec API REST sécurisée par JWT et cookies HttpOnly. Modélisation rigoureuse en Merise & UML, gestion des plages horaires en PostgreSQL (tsrange), prévention des conflits de réservation, système de rôles RBAC (loueur / conducteur), et notifications event-driven via @TransactionalEventListener. Déploiement conteneurisé sur Docker.",
    highlights: [
      "JWT + cookies HttpOnly — auth stateless sécurisée",
      "Notifications Event-Driven découplées du service réservation",
      "Gestion des disponibilités via tsrange PostgreSQL",
      "App hybride : Angular (web) + Ionic (iOS / Android)",
      "Architecture N-Tier : Controller → Service → Repository",
      "Tests unitaires & intégration — CI/CD Docker",
    ],
    stack: [
      { name: "Spring Boot 3" },
      { name: "Java 21" },
      { name: "Spring Security" },
      { name: "PostgreSQL" },
      { name: "Angular" },
      { name: "Ionic" },
      { name: "Docker" },
    ],
    image: "/assets/projets/elec-business.png",
    live: "https://elecbusiness.netlify.app/",
    github: "https://github.com/Nahima697/Elec_business_spring",
  },
  {
    num: 3,
    category: "Fullstack",
    title: "CamioAssur",
    description:
      "Plateforme de gestion de créneaux de contrôle technique pour poids lourds. Architecture découplée NestJS / React orchestrée via Docker, avec MongoDB Atlas pour la persistance des données. Projet à reprendre pour améliorer l'expérience utilisateur et renforcer la robustesse de l'API.",
    stack: [
      { name: "NestJS" },
      { name: "MongoDB" },
      { name: "React" },
      { name: "Docker" },
    ],
    image: "/assets/projets/camioassur.png",
    live: "",
    github: "https://github.com/Nahima697/camioassur",
  },
  {
    num: 4,
    category: "E-commerce",
    title: "Lipouta",
    description:
      "Boutique en ligne d'accessoires pour bébés. Personnalisation avancée avec Elementor Pro et WooCommerce. Focus sur l'expérience utilisateur et le tunnel d'achat éco-responsable.",
    stack: [
      { name: "WordPress" },
      { name: "WooCommerce" },
      { name: "Elementor" },
    ],
    image: "/assets/projets/Lipouta.png",
    live: "https://lipouta.com/",
    github: "",
  },
  {
    num: 5,
    category: "Fullstack Web3",
    title: "NftMarketPlace",
    description:
      "Place de marché de NFTs permettant l'exploration et la visualisation de collections d'art digital. API REST robuste exposée via ApiPlatform (Symfony), consommée par un front Angular. Exploration des architectures API-first.",
    stack: [
      { name: "Symfony" },
      { name: "ApiPlatform" },
      { name: "Angular" },
    ],
    image: "/assets/projets/NftMarketPlace.png",
    live: "",
    github: "https://github.com/Nahima697/NftMarketPlaceAngular",
  },
];

const ProjetsComponent = () => {
  const [project, setProject] = useState<Project>(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* ── Left panel ── */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[24px] h-full">
              {/* Project number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                0{project.num}
              </div>

              {/* Category + title */}
              <div>
                <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-1">
                  {project.category}
                </p>
                <h2 className="text-[36px] font-bold leading-tight text-white capitalize">
                  {project.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-white/60 text-base leading-relaxed">
                {project.description}
              </p>

              {/* Highlights — only shown when defined */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="flex flex-col gap-1.5">
                  {project.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-white/75 text-sm"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              {/* Stack */}
              <ul className="flex flex-wrap gap-x-3 gap-y-2">
                {project.stack.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-primary font-medium border border-primary/30 rounded-full px-3 py-0.5"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>

              <div className="border border-white/20" />

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group border border-white/10 hover:border-primary transition-all">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-primary transition-all" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Voir le site</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group border border-white/10 hover:border-primary transition-all">
                          <BsGithub className="text-white text-3xl group-hover:text-primary transition-all" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Code source</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* ── Right panel – image slider ── */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((p, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10 opacity-60" />
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
                      <Image
                        src={p.image}
                        fill
                        className="object-cover object-top"
                        alt={p.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <ProjetSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-30 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-primary hover:bg-primary-hover text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjetsComponent;