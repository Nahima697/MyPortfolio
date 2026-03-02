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

const projects = [
  {
    num: 1,
    category: "Freelance / Vitrine Métier",
    title: "Auto-École du Canal",
    description: "Refonte complète pour une mise en conformité Qualiopi. Intégration d'une navigation par ancres pour les 7 critères de qualité, gestion de documents PDF réglementaires et optimisation SEO local. Design moderne et responsive pour faciliter l'inscription des élèves.",
    stack: [
      { name: "Next.js 14" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Lucide React" },
      { name: "Netlify Forms" }
    ],
    image: "/assets/projets/auto-ecole.png", 
    live: "https://auto-ecole-du-canal.netlify.app/", 
    github: "" 
  },
  {
    num: 2,
    category: "Fullstack / Application Hybride",
    title: "ElecBusiness",
    description: "Application complète de gestion de bornes de recharge pour véhicules électriques. Architecture N-Tier sécurisée (JWT, HttpOnly cookies), gestion complexe des disponibilités (PostgreSQL tsrange) et interface hybride adaptative (Desktop/Mobile).",
    stack: [
      { name: "Spring Boot 3" },
      { name: "Java 21" },
      { name: "Angular / Ionic" },
      { name: "PostgreSQL" },
      { name: "Docker" }
    ],
    image: "/assets/projets/elec-business.png", 
    live: "https://elecbusiness.netlify.app/", 
    github: "https://github.com/Nahima697/Elec_business_spring"
  },
  {
    num: 3,
    category: "Fullstack",
    title: "camioAssur",
    description: "Plateforme de gestion de créneau de contrôle technique pour poids lourds. Utilisation de Docker pour l'orchestration des services, MongoDB Atlas pour la persistance des données et une architecture découplée NestJS / React.A reprendre et améliorer pour une meilleure expérience utilisateur et une API plus robuste.",
    stack: [{ name: "NestJS" }, { name: "MongoDb" }, { name: "React" }, { name: "Docker" }],
    image: '/assets/projets/camioassur.png',
    live: '',
    github: 'https://github.com/Nahima697/camioassur'
  },
  {
    num: 4,
    category: "E-commerce",
    title: "Lipouta",
    description: "Boutique en ligne d'accessoires pour bébés. Personnalisation avancée avec Elementor Pro et Woocommerce. Focus sur l'expérience utilisateur et le tunnel d'achat éco-responsable.",
    stack: [{ name: "WordPress" }, { name: "Woocommerce" }, { name: "Elementor" }],
    image: '/assets/projets/Lipouta.png', 
    live: 'https://lipouta.com/',
    github: ''
  },
  {
    num: 5,
    category: "Fullstack Web3",
    title: "NftMarketPlace",
    description: "Place de marché de NFTs permettant l'exploration et la visualisation de collections d'art digital. Exploration de Symfony avec ApiPlatform pour une API REST robuste consommée par Angular.",
    stack: [{ name: "Symfony" }, { name: "Apiplatform" }, { name: "Angular" }],
    image: '/assets/projets/NftMarketPlace.png',
    live: '', 
    github: 'https://github.com/Nahima697/NftMarketPlaceAngular'
  },
];

const ProjetsComponent = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-full">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                0{project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 capitalize">
                Projet {project.category}
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">{project.description}</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-primary font-medium">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 my-4"></div>
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
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent z-10 opacity-60"></div>
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover object-top" 
                        alt={project.title}
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