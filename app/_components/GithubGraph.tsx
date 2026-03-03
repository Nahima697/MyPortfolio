"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar), 
  { 
    ssr: false,
    loading: () => <p className="text-white/50 animate-pulse">Chargement du calendrier...</p>
  }
);

const GithubGraph = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center w-full space-y-16"
    >
    
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Jours de code & <span className="text-primary">Commits</span>
        </h2>
        
        <div className="p-8 bg-white/5 border border-white/10 rounded-3xl shadow-xl overflow-hidden max-w-full overflow-x-auto flex justify-center min-h-[200px] items-center">
          <GitHubCalendar 
            username="Nahima697" 
            colorScheme="dark"
            theme={{
              dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            labels={{
              totalCount: "{{count}} contributions l'année dernière",
            }}
          />
        </div>
      </div>

      {/* ================= STATS & PROJETS ================= */}
      <div className="w-full grid md:grid-cols-2 gap-10">
        
        {/* COLONNE 1 : LANGAGES LES PLUS UTILISÉS */}
        <div className="flex flex-col items-center xl:items-end">
          <h3 className="text-2xl font-bold text-white mb-6">
            Stack <span className="text-primary">Principale</span>
          </h3>
          <div className="w-full max-w-md transition-transform duration-300 hover:scale-105">
            {/* 2. On utilise une balise <img> standard pour éviter les blocages Next.js */}
          <img 
            src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=Nahima697&layout=compact&title_color=10B981&text_color=ffffff&bg_color=0F172A&hide_border=true&border_radius=20" 
            alt="Langages les plus utilisés par Nahima" 
            className="w-full h-auto shadow-2xl rounded-[20px]"
            />
          </div>
        </div>

        {/* COLONNE 2 : PROJETS ÉPINGLÉS */}
        <div className="flex flex-col items-center xl:items-start">
          <h3 className="text-2xl font-bold text-white mb-6">
            Projets <span className="text-primary">Épinglés</span>
          </h3>
          <div className="flex flex-col gap-4 w-full max-w-md">
            
            {/* PROJET 1 : ElecBusiness */}
            <div className="w-full transition-transform duration-300 hover:scale-105">
            <img 
            src="https://github-readme-stats-fast.vercel.app/api/pin/?username=Nahima697&repo=Elec_business_spring&title_color=10B981&text_color=ffffff&bg_color=0F172A&hide_border=true&icon_color=10B981&border_radius=20" 
            alt="Projet GitHub Elec Business" 
            className="w-full h-auto shadow-2xl rounded-[20px]"
            />
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default GithubGraph;