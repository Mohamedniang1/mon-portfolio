import { FaGraduationCap, FaAward, FaServer } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 sm:px-6 scroll-mt-20">
      <div className="grid gap-8 md:grid-cols-3 items-start">

        {/* Colonne de Gauche : Résumé de profil */}
        <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-sm">
          <h2 className="text-2xl font-bold tracking-tight text-teal-400 sm:text-3xl">
            À propos de moi
          </h2>

          <div className="mt-6 space-y-4 text-slate-300 leading-relaxed text-base">
            <p>
              Actuellement **étudiant ingénieur en 4ème année à Galilée**, je me positionne à l'intersection de l'ingénierie des **Réseaux & Télécommunications** et du **Développement Cloud/Full-Stack**. Cette double culture technique me permet de concevoir des applications web performantes tout en maîtrisant les contraintes d'infrastructure, de routage et de sécurité réseau sous-jacentes.
            </p>
            <p>
              Ma démarche technique actuelle s'oriente fortement vers le **DevSecOps** et le *Security by Design*. Comme en témoigne mon projet e-commerce en cours, j'attache une importance cruciale à l'automatisation des pipelines CI/CD, à la conteneurisation (Docker) et à l'intégration d'audits de sécurité continus (SAST, scans de vulnérabilités).
            </p>
            <p>
              Rigoureux, curieux et habitué au travail en équipe — notamment à travers le développement de logiques embarquées en temps réel pour la robotique autonome — je recherche un **stage de 3 à 4 mois** pour mettre mes compétences en réseau, systèmes et développement logiciel au service de projets d'envergure.
            </p>
          </div>
        </div>

        {/* Colonne de Droite : Chiffres clés & Certifications */}
        <div className="space-y-6">
          {/* Carte Formation */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 backdrop-blur-sm hover:border-slate-700/80 transition-colors">
            <div className="flex items-center gap-3 text-teal-400 mb-3">
              <FaGraduationCap className="text-xl" />
              <h3 className="font-semibold text-slate-200">Cursus Actuel</h3>
            </div>
            <p className="text-sm font-medium text-slate-300">Diplôme d'Ingénieur (RT)</p>
            <p className="text-xs text-slate-400 mt-1">Sup Galilée, France (2024 - 2027)</p>
          </div>

          {/* Carte Certifications */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 backdrop-blur-sm hover:border-slate-700/80 transition-colors">
            <div className="flex items-center gap-3 text-emerald-400 mb-3">
              <FaAward className="text-xl" />
              <h3 className="font-semibold text-slate-200">Certifications Cisco</h3>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                CCST Cybersécurité (2023)
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                CCNA Networking Essentials (2022)
              </li>
            </ul>
          </div>

          {/* Carte Domaines d'intérêt */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-6 backdrop-blur-sm hover:border-slate-700/80 transition-colors">
            <div className="flex items-center gap-3 text-purple-400 mb-3">
              <FaServer className="text-xl" />
              <h3 className="font-semibold text-slate-200">Expertises clés</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400">Routage (OSPF, BGP)</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400">Next.js / Django</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400">Docker / DevSecOps</span>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400">VoIP (SIP/Asterisk)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}