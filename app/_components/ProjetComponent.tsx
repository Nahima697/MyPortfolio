
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
    category: "fullstack",
    title: "My Portfolio",
    description: "Ce projet m'a permis de faire de beaux progrès en React et NextJs ainsi qu'en Tailwind. J'espère qu'il vous plait.",
    stack: [{ name: "NextJS" }, { name: "TailWind.css" }, { name: "Node.js" }],
    image: '/assets/projets/portfolio.png',
    live: '',
    github: 'https://github.com/Nahima697/MyPortfolio'
  },
  {
    num: 2,
    category: "fullstack",
    title: "camioAssur",
    description: "J'ai découvert de nouvelles stacks avec ce projet : Docker, MongoDbAtlas et NestJs d'un côté et React de l'autre. Projet très difficile mais qui m'a appris beaucoup",
    stack: [{ name: "NestJS" }, { name: "MongoDb Atlas" }, { name: "React" }, { name: "Docker" }],
    image: '/assets/projets/camioassur.jpg',
    live: '',
    github: 'https://github.com/Nahima697/camioassur'
  },
  {
    num: 3,
    category: "wordpress",
    title: "Lipouta",
    description: "Mon deuxième site Wordpress, avec Elementor et Woocommerce. Je suis en train de le refaire entièrement.Rendez-vous bientôt pour la version 2",
    stack: [{ name: "Woocommerce" }, { name: "Elementor" }],
    image: '/assets/projets/Lipouta.png',
    live: 'https://lipouta.com/',
    github: ''
  },
  {
    num: 4,
    category: "fullstack",
    title: "NftMarketPlace",
    description: "Mon premier site fullstack en autonomie où j'ai pu apprendre et approfondir Angular  Symfony et ApiPlatform ainsi que le déploiement. J'en suis fière même si il y a encore beaucoup de chose à améliorer",
    stack: [{ name: "Symfony" }, { name: "Apiplatform" }, { name: "Angular" }],
    image: '/assets/projets/NftMarketPlace.png',
    live: '/assets/projets/NftMarketPlace.mp4',
    github: 'https://github.com/Nahima697/NftMarketPlaceAngular'
  },
  {
    num: 5,
    category: "fullstack",
    title: "Nom Secret",
    description: "Mon projet de stage. Je ne peux malheureusement pas partager mon Code qui en privé, mais je suis fier d'avoir réaliser seul la conception, le développement back-end avec symfony et Apiplatform et le développement front-end avec Angular et Tailwind, où j'ai pu proposer une version 1 à la fin de mes deux mois de stage",
    stack: [{ name: "Symfony" }, { name: "Apiplatform" }, { name: "Angular" }],
    image: '/assets/projets/defaut.png',
    live: '',
    github: ''
  },
  {
    num: 6,
    category: "Wordpress",
    title: "Bobs Burger",
    description: "Mon premier site internet en Wordpress et Woocommerce. Il marque mon début dans l'apprentissage du développement web, de la réalisation de la maquette avec Figma au développement avec Divi et Woocommerce",
    stack: [{ name: "Divi" }, { name: "Elementor" }],
    image: '/assets/projets/bobsburger.png',
    live: '',
    github: ''
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
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-5xl leading-none font-extrabold text-white text-outline mb-2 border-2 border-primary w-[48px]">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold font-nunito-sans leading-none text-white mb-2 capitalize">
                {project.category} projet
              </h2>
              <p className="text-white/60 mb-1 font-mono ">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-primary">
                    {item?.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] bg-secondary flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Projet en Live</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px]  bg-secondary flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
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
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 left-0 right-0 "></div>
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300 ease-in-out">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <ProjetSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-primary hover:bg-primary text-accent text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjetsComponent;
