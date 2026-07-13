import Image from 'next/image';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center md:px-8">
      {/* Effet d'arrière-plan lumineux moderne */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
        <div className="h-[300px] w-[300px] rounded-full bg-teal-500/10 blur-[120px] md:h-[500px] md:w-[500px]" />
      </div>

      {/* Tag de statut de recherche */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/5 px-4 py-1.5 text-xs font-medium text-teal-300 backdrop-blur-sm animate-pulse">
        <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
        Recherche Stage de 3 à 4 mois
      </div>

      {/* Avatar / Photo de Profil réintégrée */}
      <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-teal-400 shadow-xl shadow-teal-500/10">
        <Image
          src="/avatar.png"
          alt="Mohamed NIANG"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Titres et Accroche */}
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Mohamed <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">NIANG</span>
      </h1>

      <p className="mt-4 max-w-2xl text-xl font-semibold text-slate-200">
        Étudiant Ingénieur en Réseaux, Télécommunications & Informatique
      </p>

      <p className="mt-3 max-w-xl text-base text-slate-400 leading-relaxed">
        Actuellement en 4ème année à <span className="text-slate-300 font-medium">Sup Galilée</span>. Passionné par les architectures systèmes sécurisées, les infrastructures réseaux et le développement full-stack moderne (Next.js / Django).
      </p>

      {/* Boutons d'action rapides (CTA) */}
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#projects"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 font-semibold text-slate-900 transition-all hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/20 active:scale-95"
        >
          Découvrir mes projets <FaArrowRight className="text-xs" />
        </a>
        <a
          href="/CV_Mohamed_Niang.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/40 px-6 font-medium text-slate-200 backdrop-blur-sm transition-all hover:bg-slate-800 hover:text-white active:scale-95"
        >
          <FaDownload className="text-xs text-teal-400" /> Télécharger mon CV
        </a>
      </div>
    </section>
  );
}