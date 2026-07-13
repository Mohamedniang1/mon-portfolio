import { FaGithub, FaExternalLinkAlt, FaRocket, FaNetworkWired, FaRobot } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Plateforme E-commerce Sécurisée",
      status: "En cours (2026)",
      description: "Développement full-stack d'une application de fournitures de bureau selon les principes Security by Design et DevSecOps. Architecture conteneurisée et pipeline CI/CD automatisé.",
      icon: <FaRocket className="text-teal-400 text-2xl" />,
      stack: ["Next.js", "Django REST", "PostgreSQL", "Docker", "Redis", "GitHub Actions", "DevSecOps (Trivy, Bandit)"],
      github: "https://github.com/Mohamedniang1", // À adapter si besoin
      demo: null,
    },
    {
      title: "Planification de Réseaux Cellulaires",
      status: "2025 - 2026",
      description: "Optimisation du placement et de la configuration des stations de base pour maximiser la couverture et la qualité de service. Modélisation de la mobilité et simulations de performances.",
      icon: <FaNetworkWired className="text-emerald-400 text-2xl" />,
      stack: ["NS-3", "Réseaux Cellulaires", "GNS3", "Linux", "Modélisation de mobilité"],
      github: "https://github.com/Mohamedniang1",
      demo: null,
    },
    {
      title: "Robot Autonome - Coupe de France",
      status: "Janv - Mai 2025",
      description: "Conception et programmation en C/C++ de l'intelligence embarquée et de la logique de navigation en temps réel d'un robot autonome pour l'équipe de robotique CRIG.",
      icon: <FaRobot className="text-purple-400 text-2xl" />,
      stack: ["C", "C++", "Gestion Capteurs", "Navigation Temps Réel", "Électronique / Robotique"],
      github: "https://github.com/Mohamedniang1",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 sm:px-6 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-teal-400 sm:text-4xl">
          Projets & Réalisations
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto">
          Un aperçu de mes travaux en ingénierie logicielle, réseaux et systèmes embarqués.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-teal-500/5"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                  {project.icon}
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.stack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-medium bg-slate-800/60 text-teal-300/90 px-2 py-0.5 rounded border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 border-t border-slate-800/80 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors gap-2"
                >
                  <FaGithub /> Code source
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors gap-1"
                  >
                    Démo <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}