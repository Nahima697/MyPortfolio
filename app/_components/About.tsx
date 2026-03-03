"use client";

import { motion } from "framer-motion";
import {
  DiJava,
  DiAngularSimple,
  DiPostgresql,
  DiDocker,
  DiReact,
} from "react-icons/di";
import { SiSpringboot, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const About = () => {
  
  // ================= COMPOSANT SÉPARATEUR ANIMÉ =================
  // Ligne en pointillés verts (primary) qui se dessine au scroll
  const Separator = () => (
    <motion.hr
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="border-t-2 border-dashed border-primary/50 my-16 md:my-24 origin-left w-full max-w-4xl"
    />
  );

  return (
    // J'ai enlevé le "space-y-*" ici pour laisser les séparateurs gérer l'espace
    <section className="w-full font-nunito-sans py-12">

      {/* ================= POSITIONNEMENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Mon Positionnement
        </h2>

        <div className="space-y-6"> 
          <p className="text-white/80 text-2xl leading-relaxed"> 
            Conceptrice Développeuse d’Applications spécialisée en
            <span className="text-primary font-semibold"> Java / Spring Boot </span>
            et en développement frontend moderne.
          </p>

          <p className="text-white/70 text-xl leading-relaxed"> 
            Je conçois des applications métier robustes, évolutives
            et des architectures propres orientées performance.
          </p>
        </div>
      </motion.div>

      <Separator />

      {/* ================= MON PARCOURS ================= */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Mon Parcours
        </h2>

        <div className="space-y-4 text-white/70 text-xl leading-relaxed">
          <p>
            Après une reconversion professionnelle ambitieuse,
            j’ai obtenu le titre de 
            <span className="text-primary font-semibold">
              {" "}Conceptrice Développeuse d’Applications (Bac+3/4)
            </span>.
          </p>

          <p>
            Cette formation m’a permis de consolider des bases solides
            en architecture logicielle, backend Java, modélisation de base
            de données et développement frontend moderne.
          </p>

          <p>
            En parallèle, j’ai créé ma 
            <span className="text-primary font-semibold">
              {" "}micro-entreprise
            </span>{" "}
            afin de développer des projets freelance et
            construire des solutions métier concrètes.
          </p>

          <p>
            Je poursuis aujourd’hui ma montée en expertise et
            recherche une alternance pour intégrer un Master
            tout en continuant mes projets entrepreneuriaux.
          </p>
        </div>
      </motion.div>

      <Separator />

      {/* ================= EXPERIENCES ================= */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Expériences
        </h2>

        <div className="space-y-10">
          <div className="border-l-2 border-primary pl-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Superpictor
            </h3>
            <p className="text-white/70 text-lg mt-2 leading-relaxed">
              Stage CDA — Maintenance et évolution e-commerce,
              environnement PHP / PrestaShop, travail en équipe agile.
            </p>
          </div>

          <div className="border-l-2 border-primary pl-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary">
              Pomelo
            </h3>
            <p className="text-white/70 text-lg mt-2 leading-relaxed">
              Développement API Symfony + Front Angular / Tailwind.
            </p>
          </div>
        </div>
      </motion.div>

      <Separator />

      {/* ================= COMPETENCES ================= */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Compétences
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* BACKEND */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 border-b border-white/10 pb-4 inline-block">
              Backend & Données
            </h3>

            <div className="flex flex-wrap gap-8 text-[70px] text-primary">
              {[DiJava, SiSpringboot, DiPostgresql, DiDocker].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="hover:text-white transition-all duration-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </div>

          {/* FRONTEND */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 border-b border-white/10 pb-4 inline-block">
              Frontend & UI
            </h3>

            <div className="flex flex-wrap gap-8 text-[70px] text-primary">
              {[DiAngularSimple, DiReact, SiNextdotjs, SiTailwindcss].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="hover:text-white transition-all duration-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
};

export default About;