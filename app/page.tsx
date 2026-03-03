"use client";

import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { Social } from "./_components/Social";
import { Photo } from "./_components/Photo";
import About from "./_components/About";
import ProjetsComponent from "./_components/ProjetComponent";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import GithubGraph from "./_components/GithubGraph";

const Accueil = () => {
  return (
    <section className="min-h-screen pt-24 font-nunito-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HERO SECTION ================= */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-16 xl:gap-24">
          
          {/* ================= TEXTE ================= */}
          <div className="max-w-3xl text-center xl:text-left order-2 xl:order-1">
            
            {/* Sous-titre Métier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary text-lg md:text-xl font-bold uppercase tracking-[0.2em] mb-4"
            >
              Conceptrice Développeuse d’Applications
            </motion.div>

            {/* Titre Principal (Nom) */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl xl:text-[80px] font-black text-white leading-tight"
            >
              Nahima <span className="text-primary">Toumi</span>
            </motion.h1>

            {/* Accroche principale */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-white/80 text-2xl md:text-3xl font-light leading-relaxed max-w-2xl mx-auto xl:mx-0"
            >
              Je conçois des applications métier robustes et des architectures modernes.
            </motion.p>

            {/* Détails Stack & Objectif */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-8 space-y-3 text-white/70 text-xl md:text-2xl"
            >
              <p>Backend en <span className="text-white font-medium">Java / Spring Boot</span> et PHP / Symfony</p>
              <p>Frontend <span className="text-white font-medium">Angular & React / Next.js</span></p>
              <p className="text-primary font-bold mt-6 inline-block border-b-2 border-primary/30 pb-1">
                Disponible pour une alternance (Master) ou missions freelance
              </p>
            </motion.div>

            {/* Boutons Call-to-Action */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col sm:flex-row gap-6 items-center xl:justify-start justify-center"
            >
              <a
                href="/assets/CV_Nahima_Toumi.pdf"
                download
                className="uppercase flex items-center gap-3 text-primary border-2 border-primary rounded-full px-8 py-4 font-bold text-lg tracking-wider hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)]"
              >
                Télécharger mon CV
                <FiDownload className="text-xl" />
              </a>

              <div className="flex gap-4">
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-14 h-14 border-2 border-primary rounded-full flex justify-center items-center text-primary text-2xl hover:bg-primary hover:text-black transition-all duration-300"
                />
              </div>
            </motion.div>

          </div>

          {/* ================= PHOTO ================= */}
          <div className="order-1 xl:order-2 flex justify-center w-full xl:w-auto mt-8 xl:mt-0">
            <Photo />
          </div>

        </div>
        <div className="mt-20">
          <GithubGraph />
        </div>

        {/* Espace visuel avant la suite */}
        <div className="mt-32 border-t border-white/5 ">
          {/* ================= ABOUT ================= */}
          <About />
        </div>

        <div className="mt-32 border-t border-white/5 ">
          {/* ================= PROJETS ================= */}
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16">
            Mes Projets
          </h2>
          <ProjetsComponent />
        </div>

        <div className="mt-32 border-t border-white/5  mb-32">
          {/* ================= CONTACT ================= */}
          <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-16">
            Me Contacter
          </h2>
          <Contact />
        </div>

      </div>
      <Footer />
    </section>
  );
};

export default Accueil;