"use client";

import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiGlobe } from "react-icons/fi";
import { DiJava, DiPhp, DiPostgresql, DiReact, DiDocker, DiGit } from "react-icons/di";
import {
  SiSpringboot, SiSymfony, SiNestjs, SiNextdotjs,
  SiAngular, SiTypescript, SiTailwindcss,
} from "react-icons/si";

export default function CVPage() {

  const exportPDF = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 0;
          }
          body * {
            visibility: hidden;
          }
          #cv, #cv * {
            visibility: visible;
          }
          #cv {
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 210mm !important;
            height: 297mm !important;
            max-width: 210mm !important;
            max-height: 297mm !important;
            overflow: hidden !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .no-print {
            display: none !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gray-900 py-12 flex flex-col items-center">

        {/* BOUTON */}
        <div className="no-print mb-8 flex justify-center w-full mt-10">
          <button
            onClick={exportPDF}
            className="bg-[#10B981] text-black font-bold px-8 py-3 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all duration-300"
          >
            Télécharger mon CV (PDF)
          </button>
        </div>

        {/* FEUILLE A4 */}
        <div
          id="cv"
          className="text-white overflow-hidden shadow-2xl"
          style={{
            width: "210mm",
            height: "297mm",
            minWidth: "210mm",
            maxWidth: "210mm",
            minHeight: "297mm",
            maxHeight: "297mm",
            display: "flex",
            flexDirection: "row",
            background: "#0F172A",
          }}
        >

          {/* ===== COLONNE GAUCHE ===== */}
          <div
            style={{
              width: "34%",
              minWidth: "34%",
              height: "100%",
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              boxSizing: "border-box",
              background: "#111827",
              borderRight: "1px solid rgba(255,255,255,0.05)",
            }}
          >

            {/* PHOTO */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{
                width: "200px", height: "200px", borderRadius: "50%",
                border: "3px solid #10B981", overflow: "hidden", flexShrink: 0,
                boxShadow: "0 0 15px rgba(16,185,129,0.3)",
              }}>
                <Image 
                  src="/assets/Photo.webp"
                  priority
                  quality={100}
                  width={200}
                  height={200}
                  alt="Nahima Toumi photo"
                  className="object-fit: fill object-center w-full h-full"
                />
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "11px", marginBottom: "10px", borderBottom: "1px solid rgba(16,185,129,0.3)", paddingBottom: "4px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Contact
              </h3>
              {[
                { Icon: FiPhone, text: "+33 6 88 09 34 50" },
                { Icon: FiMail, text: "nahima.toumi697@gmail.com" },
                { Icon: FiMapPin, text: "Givors – Région Lyonnaise" },
                { Icon: FiGithub, text: "github.com/Nahima697" },
                { Icon: FiGlobe, text: "https://nahima-toumi.vercel.app" },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <Icon style={{ color: "#10B981", fontSize: "14px", flexShrink: 0 }} />
                  <span style={{ color: "#D1D5DB", fontSize: "11px" }}>{text}</span>
                </div>
              ))}
            </div>

            {/* STACK */}
            <div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "11px", marginBottom: "10px", borderBottom: "1px solid rgba(16,185,129,0.3)", paddingBottom: "4px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Stack Tech
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {[
                  { Icon: DiJava, label: "Java" },
                  { Icon: SiSpringboot, label: "Spring Boot" },
                  { Icon: DiPhp, label: "PHP" },
                  { Icon: SiSymfony, label: "Symfony" },
                  { Icon: SiNestjs, label: "NestJS" },
                  { Icon: DiPostgresql, label: "PostgreSQL" },
                  { Icon: DiReact, label: "React" },
                  { Icon: SiNextdotjs, label: "Next.js" },
                  { Icon: SiAngular, label: "Angular" },
                  { Icon: SiTypescript, label: "TypeScript" },
                  { Icon: SiTailwindcss, label: "Tailwind" },
                  { Icon: DiDocker, label: "Docker" },
                  { Icon: DiGit, label: "Git" },
                ].map(({ Icon, label }) => (
                  <span key={label} style={{
                    display: "flex", alignItems: "center", gap: "5px",
                    background: "#1F2937", border: "1px solid #374151",
                    padding: "4px 8px", borderRadius: "6px", fontSize: "10px", color: "white",
                  }}>
                    <Icon style={{ color: "#10B981", fontSize: "12px" }} />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "11px", marginBottom: "8px", borderBottom: "1px solid rgba(16,185,129,0.3)", paddingBottom: "4px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Certifications
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ color: "#D1D5DB", fontSize: "11px" }}>• Scrum Master</span>
                <span style={{ color: "#D1D5DB", fontSize: "11px" }}>• TOEIC B2</span>
                <span style={{ color: "#D1D5DB", fontSize: "11px" }}>• Certification CMS WordPress</span>
              </div>
            </div>

            {/* QUALITÉS */}
            <div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "11px", marginBottom: "8px", borderBottom: "1px solid rgba(16,185,129,0.3)", paddingBottom: "4px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Qualités
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {["Adaptable", "Consciencieuse", "Réfléchie", "Persévérante", "Collaborative"].map(qualite => (
                  <span key={qualite} style={{ color: "#10B981", fontSize: "10px", background: "rgba(16,185,129,0.1)", padding: "3px 6px", borderRadius: "4px" }}>
                    ✓ {qualite}
                  </span>
                ))}
              </div>
            </div>

            {/* LANGUES */}
            <div>
              <h3 style={{ color: "white", fontWeight: 700, fontSize: "11px", marginBottom: "8px", borderBottom: "1px solid rgba(16,185,129,0.3)", paddingBottom: "4px", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Langues
              </h3>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                <span style={{ color: "#D1D5DB", fontSize: "11px" }}>Anglais</span>
                <span style={{ color: "#10B981", fontSize: "10px", fontWeight: "bold", border: "1px solid rgba(16,185,129,0.5)", padding: "2px 8px", borderRadius: "4px" }}>Courant</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#D1D5DB", fontSize: "11px" }}>Français</span>
                <span style={{ color: "#9CA3AF", fontSize: "10px", fontWeight: "bold" }}>Natif</span>
              </div>
            </div>

          </div>

          {/* ===== COLONNE DROITE ===== */}
          <div style={{
            flex: 1,
            padding: "24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            height: "100%",
            boxSizing: "border-box",
          }}>

            {/* HEADER */}
            <div>
              <h1 style={{ fontSize: "32px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", color: "white", margin: "0 0 4px 0" }}>
                Nahima <span style={{ color: "#10B981" }}>Toumi</span>
              </h1>
              <h2 style={{ fontSize: "12px", color: "#D1D5DB", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 10px 0" }}>
                Conceptrice Développeuse d'Applications
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                <span style={{ background: "rgba(16,185,129,0.15)", color: "#10B981", border: "1px solid #10B981", padding: "4px 10px", borderRadius: "9999px", fontSize: "10px", fontWeight: "bold" }}>
                  🎓 Admise en Master Expert Informatique (EPSI)
                </span>
                <span style={{ background: "#1F2937", color: "#D1D5DB", border: "1px solid #4B5563", padding: "4px 10px", borderRadius: "9999px", fontSize: "10px", fontWeight: 600 }}>
                  Recherche Alternance / Freelance
                </span>
              </div>
            </div>

            {/* PROFIL */}
            <div>
              <p style={{ color: "#D1D5DB", fontSize: "11px", lineHeight: "1.5", textAlign: "justify", margin: 0 }}>
                Après une reconversion réussie et l'obtention officielle de mon titre CDA, je conçois des applications métier robustes et des architectures évolutives. Passionnée par le clean code, j'évolue aussi bien sur des environnements Java/Spring Boot que sur des écosystèmes frontend modernes.
                Pour parfaire mes compétences, j'ai récemment été admise en Master Expert Informatique à l'EPSI, avec une spécialisation en Devops. Je suis à la recherche d'une alternance pour continuer à apprendre et contribuer à des projets innovants.(rythme de travail : 2 semaines en entreprise, 1 semaine à l'école)
              </p>
            </div>

            {/* EXPÉRIENCES PROFESSIONNELLES */}
            <div>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "10px", borderBottom: "2px solid #10B981", paddingBottom: "4px", color: "white", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px 0" }}>
                Expériences Professionnelles
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  {
                    title: "Organisatrice & Développeuse", company: "Tournoi City Stade", date: "Mai - Juin 2026",
                    desc: "Organisation d'un tournoi de football de quartier et développement du site web événementiel avec Next.js.",
                  },
                  {
                    title: "Développement E-commerce", company: "Nagecreation", date: "2026",
                    desc: "Support technique et conseils marketing pour une boutique e-commerce basée sur Shopify.",
                  },
                  {
                    title: "Fondatrice", company: "Natomi", date: "2025 – Présent",
                    desc: "Développement d'applications métier, conception d'architectures backend Java/Spring et gestion de projets.",
                  },
                  {
                    title: "Développeuse Web", company: "Superpictor", date: "2023 – 2024",
                    desc: "Automatisation de factures Dolibarr, développement Symfony/PHP, intégration Prestashop / Joomla, ajout de fonctionnalités et bugfix.",
                  },
                  {
                    title: "Développement Web Full Stack", company: "Pomelo", date: "Sept. – Nov. 2023",
                    desc: "Intégration de maquettes, réalisation de sites e-commerce WordPress avec WooCommerce, développement d'applications web avec Symfony, création d'API avec Angular.",
                  },
                  {
                    title: "Assistante Admin. et Commerciale", company: "Solios Carbone, Ikea, Sécuritas, etc.", date: "2006 – 2014",
                    desc: "Gestion administrative et commerciale pour diverses entreprises et en tant qu'auto-entrepreneuse.",
                  },
                ].map(({ title, company, date, desc }) => (
                  <div key={title + company} style={{ position: "relative", borderLeft: "2px solid rgba(16,185,129,0.4)", paddingLeft: "12px" }}>
                    <div style={{ position: "absolute", width: "9px", height: "9px", background: "#10B981", borderRadius: "50%", left: "-6px", top: "4px", boxShadow: "0 0 8px rgba(16,185,129,0.8)" }} />
                    <h4 style={{ fontWeight: "bold", color: "white", fontSize: "12px", margin: "0 0 2px 0" }}>
                      {title} <span style={{ color: "#9CA3AF", fontWeight: "normal", fontSize: "11px" }}>| {company}</span>
                    </h4>
                    <p style={{ color: "#10B981", fontSize: "10px", margin: "0 0 3px 0", fontWeight: 600 }}>{date}</p>
                    <p style={{ fontSize: "10.5px", color: "#D1D5DB", lineHeight: "1.4", margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FORMATIONS */}
            <div>
              <h3 style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "10px", borderBottom: "2px solid #10B981", paddingBottom: "4px", color: "white", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 10px 0" }}>
                Formations
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { year: "2026", color: "#10B981", title: "Master Expert Informatique et SI (Niveau 7)", sub: "EPSI - Titre AFINUM (Admise, rentrée 2026)" },
                  { year: "03/2025", color: "#10B981", title: "Concepteur Développeur d'Application (Bac +3/4)", sub: "HumanBooster" },
                  { year: "12/2023", color: "#10B981", title: "Développeur Web et Web Mobile (Bac +2) ", sub: "HumanBooster" },
                  { year: "04/2023", color: "#10B981", title: "Initiation à Python & Certification CMS WordPress", sub: "Simplon" },
                  { year: "2007", color: "#6B7280", title: "DUT Gestion des Entreprises et des Administrations", sub: "IUT Jean Monnet, Saint Etienne" },
                ].map(({ year, color, title, sub }) => (
                  <div key={year + title} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <div style={{ width: "48px", flexShrink: 0, color, fontWeight: "bold", fontSize: "11px" }}>{year}</div>
                    <div>
                      <strong style={{ color: color === "#10B981" ? "white" : "#9CA3AF", fontSize: "11px" }}>{title}</strong>
                      {sub && <p style={{ color: "#9CA3AF", fontSize: "10px", margin: "1px 0 0 0" }}>{sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}