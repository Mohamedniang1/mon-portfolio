import {
  FaNetworkWired,
  FaCode,
  FaDatabase,
  FaTools,
  FaShieldAlt,
  FaServer
} from 'react-icons/fa';

export default function Skills() {
  const skillCategories = [
    {
      title: "Réseaux & Infrastructures",
      icon: <FaNetworkWired className="text-xl text-teal-400" />,
      skills: ["TCP/IP", "VLAN", "Routage (RIP, OSPF, BGP)", "Wi-Fi", "Fibre optique", "xDSL"],
    },
    {
      title: "Services Réseau & VoIP",
      icon: <FaServer className="text-xl text-emerald-400" />,
      skills: ["DNS", "DHCP", "FTP", "VPN", "NAT", "LDAP", "Apache", "SIP/RTP", "H.323", "Asterisk (SVI)"],
    },
    {
      title: "Développement Software",
      icon: <FaCode className="text-xl text-blue-400" />,
      skills: ["Next.js", "React", "Django (REST Framework)", "Python", "C / C++", "Java", "HTML5 / CSS3", "Matlab"],
    },
    {
      title: "Architecture & DevOps",
      icon: <FaTools className="text-xl text-purple-400" />,
      skills: ["Docker", "Docker Compose", "Nginx", "GitHub Actions (CI/CD)", "Git & GitHub", "Vercel", "Linux (Ubuntu)"],
    },
    {
      title: "Sécurité & DevSecOps",
      icon: <FaShieldAlt className="text-xl text-red-400" />,
      skills: ["Security by Design", "SAST (Bandit)", "Secrets (Gitleaks)", "Vulnerability Analysis (Trivy)", "Authentification strong (2FA)"],
    },
    {
      title: "Bases de Données & Outils",
      icon: <FaDatabase className="text-xl text-amber-400" />,
      skills: ["PostgreSQL", "MySQL", "Redis", "SQL Server 2012", "Wireshark", "GNS3", "Packet Tracer", "NS-3", "Postman"],
    },
  ];

  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 sm:px-6 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-teal-400 sm:text-4xl">
          Compétences Techniques
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto">
          Un panorama complet de mes compétences en ingénierie réseaux, télécommunications et développement logiciel sécurisé.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-900/60"
          >
            <div className="flex items-center gap-3 mb-4 border-b border-slate-800/60 pb-3">
              <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/40">
                {category.icon}
              </div>
              <h3 className="font-semibold text-slate-100 text-base">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-lg bg-slate-800/40 border border-slate-700/30 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-teal-500/30 hover:text-teal-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}