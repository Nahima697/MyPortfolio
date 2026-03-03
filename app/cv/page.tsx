"use client";

import { FiMail, FiPhone, FiMapPin, FiGithub, FiGlobe } from "react-icons/fi";
import {
  DiJava,
  DiPhp,
  DiPostgresql,
  DiMysql,
  DiReact,
  DiDocker,
  DiGit,
  DiWordpress,
} from "react-icons/di";
import {
  SiSpringboot,
  SiSymfony,
  SiNestjs,
  SiNextdotjs,
  SiAngular,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FaFigma } from "react-icons/fa";

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-10 flex justify-center font-nunito-sans">

      {/* FEUILLE */}
      <div className="w-full max-w-[210mm] bg-[#0F172A] shadow-2xl flex flex-col md:flex-row text-white min-h-[297mm]">

        {/* ================= COLONNE GAUCHE ================= */}
        <div className="w-full md:w-1/3 bg-[#111827] p-8 flex flex-col gap-10 border-r border-white/5">

          {/* PHOTO */}
          <div className="flex justify-center">
            <div className="w-36 h-36 rounded-full border-4 border-[#10B981] overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <img
                src="/assets/photo.png"
                alt="Nahima Toumi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-4 text-sm text-gray-300">
            <h3 className="text-white font-semibold text-base mb-4 border-b border-white/10 pb-2">
              Contact
            </h3>

            <div className="flex items-center gap-3">
              <FiPhone className="text-[#10B981]" />
              <span>+33 6 88 09 34 50</span>
            </div>

            <div className="flex items-center gap-3">
              <FiMail className="text-[#10B981]" />
              <span className="break-all">nahima.toumi697@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FiMapPin className="text-[#10B981]" />
              <span>Givors – Région Lyonnaise</span>
            </div>

            <div className="flex items-center gap-3">
              <FiGithub className="text-[#10B981]" />
              <span>github.com/Nahima697</span>
            </div>

            <div className="flex items-center gap-3">
              <FiGlobe className="text-[#10B981]" />
              <span>natomi-portfolio.vercel.app</span>
            </div>
          </div>

          {/* STACK */}
          <div>
            <h3 className="text-white font-semibold text-base mb-5 border-b border-white/10 pb-2">
              Stack Technique
            </h3>

            <div className="flex flex-wrap gap-2">

              {[ 
                [DiJava, "Java"],
                [SiSpringboot, "Spring Boot"],
                [DiPhp, "PHP"],
                [SiSymfony, "Symfony"],
                [SiNestjs, "NestJS"],
                [DiPostgresql, "PostgreSQL"],
                [DiMysql, "MySQL"],
                [DiReact, "React"],
                [SiNextdotjs, "Next.js"],
                [SiAngular, "Angular"],
                [SiTypescript, "TypeScript"],
                [SiTailwindcss, "Tailwind"],
                [DiDocker, "Docker"],
                [DiGit, "Git"],
                [FaFigma, "Figma"],
                [DiWordpress, "WordPress"],
              ].map(([Icon, label], i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-lg text-xs hover:border-[#10B981] transition"
                >
                  <Icon className="text-[#10B981]" />
                  {label}
                </span>
              ))}

            </div>
          </div>

          {/* LANGUES */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 border-b border-white/10 pb-2">
              Langues
            </h3>

            <div className="text-sm text-gray-300 space-y-2">
              <div className="flex justify-between">
                <span>Anglais</span>
                <span className="text-[#10B981] text-xs">B2</span>
              </div>
              <div className="flex justify-between">
                <span>Français</span>
                <span className="text-gray-400 text-xs">Natif</span>
              </div>
            </div>
          </div>

        </div>

        {/* ================= COLONNE DROITE ================= */}
        <div className="w-full md:w-2/3 p-10 flex flex-col">

          {/* HEADER */}
          <div className="mb-10">
            <h1 className="text-5xl font-extrabold mb-3">
              Nahima <span className="text-[#10B981]">Toumi</span>
            </h1>

            <h2 className="text-lg text-gray-400 mb-4">
              Conceptrice Développeuse d’Applications
            </h2>

            <p className="text-sm text-gray-400 mb-5 max-w-xl">
              Architecture backend robuste • Frontend moderne • Solutions métier évolutives
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="bg-[#10B981]/15 text-[#10B981] px-4 py-1 rounded-full text-xs font-semibold">
                🎓 Titre CDA Validé
              </span>

              <span className="bg-gray-800 border border-gray-700 px-4 py-1 rounded-full text-xs">
                Alternance Master / Freelance
              </span>

              <span className="bg-gray-800 border border-gray-700 px-4 py-1 rounded-full text-xs">
                Micro-entreprise Natomi
              </span>
            </div>
          </div>

          {/* PROFIL */}
          <div className="mb-10">
            <p className="text-gray-300 text-sm leading-relaxed">
              Après une reconversion réussie et l’obtention de mon titre CDA,
              je conçois des applications métier robustes et des architectures évolutives.
              Je développe également ma micro-entreprise Natomi en parallèle
              de ma recherche d’alternance pour intégrer un Master.
            </p>
          </div>

          {/* EXPÉRIENCES */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">
              Expériences
            </h3>

            <div className="space-y-8">

              <div>
                <h4 className="font-bold text-white">
                  Fondatrice – Natomi
                </h4>
                <p className="text-[#10B981] text-sm mb-2">
                  2025 – Présent
                </p>
                <p className="text-sm text-gray-300">
                  Développement d’applications métier, conception d’architectures
                  backend Java/Spring et gestion complète de projets clients.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Développeuse Web – Superpictor
                </h4>
                <p className="text-[#10B981] text-sm mb-2">
                  2024 – 2025
                </p>
                <p className="text-sm text-gray-300">
                  Développement Symfony/PHP, maintenance e-commerce,
                  intégration PrestaShop et automatisations ERP.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white">
                  Développeuse Web – Pomelo
                </h4>
                <p className="text-[#10B981] text-sm mb-2">
                  2023
                </p>
                <p className="text-sm text-gray-300">
                  API Symfony, frontend Angular, intégration UI Tailwind.
                </p>
              </div>

            </div>
          </div>

          {/* FORMATIONS */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">
              Formations
            </h3>

            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <strong className="text-white">
                  Concepteur Développeur d’Applications (Bac+4)
                </strong>
                <div>2025</div>
              </div>

              <div>
                <strong className="text-white">
                  Développeur Web & Web Mobile (Bac+2)
                </strong>
                <div>2023</div>
              </div>

              <div>
                <strong className="text-white">
                  DUT GEA
                </strong>
                <div>2007</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}