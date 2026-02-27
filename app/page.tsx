"use client";

import { FiDownload } from 'react-icons/fi';
import { motion } from "framer-motion";
import { Social } from "./_components/Social";
import { Photo } from "./_components/Photo";
import About from "./_components/About";
import ProjetsComponent from './_components/ProjetComponent';
import { Contact } from './_components/Contact';
import { Footer } from './_components/Footer';

const Accueil = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          
          {/* --- SECTION TEXTE (Gauche) --- */}
          <div className="text-center xl:text-left order-2 xl:order-none mt-8 xl:mt-0">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-xl text-primary font-mono tracking-widest uppercase"
            >
              Développeuse Fullstack
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h1 mb-6 text-white font-geist-sans mt-4"
            >
              Hello, je suis <br />
              <span className="text-primary font-nunito-sans drop-shadow-[0_0_10px_rgba(0,255,153,0.3)]">Nahima Toumi</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-[500px] mb-9 text-white/80 font-mono leading-relaxed mx-auto xl:mx-0"
            >
              Jeune diplômée (Bac+4) en conception et développement d'applications. Passionnée par l'écosystème Java/Angular, j'ai acquis de solides bases techniques et j'ai hâte de rejoindre une équipe bienveillante pour gagner en autonomie et contribuer à de beaux projets.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col xl:flex-row items-center gap-8 mb-12 xl:mb-0"
            >
              {/* Bouton CV avec effet Néon au survol */}
              <a
                href="/assets/CV_Nahima_Toumi.pdf"
                download
                className="uppercase flex items-center gap-2 text-primary border-primary border-2 rounded-full px-8 py-3 hover:bg-primary hover:text-background transition-all duration-300 font-bold shadow-[0_0_15px_rgba(0,255,153,0.2)] hover:shadow-[0_0_25px_rgba(0,255,153,0.6)]"
              >
                <span>Télécharger mon CV</span>
                <FiDownload className="text-xl" />
              </a>
              
              {/* Réseaux sociaux stylisés */}
              <div>
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-11 h-11 border-2 border-primary rounded-full flex justify-center items-center text-primary text-lg hover:bg-primary hover:text-background hover:transition-all duration-300 shadow-[0_0_10px_rgba(0,255,153,0.2)] hover:shadow-[0_0_20px_rgba(0,255,153,0.5)]"
                />
              </div>
            </motion.div>
          </div>

          {/* --- SECTION PHOTO (Droite) --- */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>

        {/* --- SECTION À PROPOS --- */}
        <div className="mb-24 mt-12">
          <About />
        </div>

        {/* --- SECTION PROJETS --- */}
        <div className="mb-24">
          <div className="flex flex-col items-center justify-center mb-16">
            <h2 className="text-4xl font-bold text-white font-nunito-sans mb-4">
              Mes Projets Récents
            </h2>
            {/* Petit trait souligné stylisé */}
            <div className="w-24 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(0,255,153,0.5)]"></div>
          </div>
          <ProjetsComponent />
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent my-16"></div>

        <div className="mb-24 mt-12">
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="text-4xl font-bold text-white font-nunito-sans mb-4">
              Me Contacter
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(0,255,153,0.5)]"></div>
          </div>
          <Contact />
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        
        <div className="flex justify-center items-center pb-8">
          <Footer/>
        </div>
       
      </div>
    </section>
  );
};

export default Accueil;