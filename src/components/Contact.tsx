import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 sm:px-6 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-teal-400 sm:text-4xl">
          Me Contacter
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto">
          Une opportunité de stage ? Une question sur mes projets ? N'hésitez pas à me joindre.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-5 items-stretch">
        {/* Infos de contact direct */}
        <div className="md:col-span-2 flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-sm">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-slate-200">Mes Coordonnées</h3>

            <div className="space-y-4">
              <a
                href="mailto:mohamedniang0606@gmail.com"
                className="flex items-center gap-4 text-slate-400 hover:text-teal-400 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-slate-800 group-hover:bg-teal-500/10 transition-colors text-teal-400">
                  <FaEnvelope />
                </div>
                <span className="text-sm break-all">mohamedniang0606@gmail.com</span>
              </a>

              <a
                href="tel:+33672150549"
                className="flex items-center gap-4 text-slate-400 hover:text-teal-400 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-slate-800 group-hover:bg-teal-500/10 transition-colors text-teal-400">
                  <FaPhoneAlt />
                </div>
                <span className="text-sm">06 72 15 05 49</span>
              </a>

              <div className="flex items-center gap-4 text-slate-400 group">
                <div className="p-3 rounded-xl bg-slate-800 text-teal-400">
                  <FaMapMarkerAlt />
                </div>
                <span className="text-sm">Saint-Denis, France</span>
              </div>
            </div>
          </div>

          {/* Réseaux Sociaux */}
          <div className="mt-8 border-t border-slate-800/80 pt-6">
            <h4 className="text-xs font-semibold text-slate-500 tracking-wider uppercase mb-3">Réseaux</h4>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/mohamedniang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 transition-all text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Mohamedniang1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire de Contact */}
        <form className="md:col-span-3 flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">Nom complet</label>
              <input
                type="text"
                id="name"
                required
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">Adresse email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5">Objet</label>
            <input
              type="text"
              id="subject"
              required
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors"
              placeholder="Proposition de stage / Échange technique"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">Votre message</label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-colors resize-none"
              placeholder="Bonjour Mohamed, votre profil nous intéresse..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex h-11 items-center justify-center rounded-xl bg-slate-800 border border-slate-700 hover:border-teal-500/50 hover:bg-slate-800/80 text-teal-400 font-medium text-sm transition-all active:scale-[0.98]"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}