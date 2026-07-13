import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 antialiased selection:bg-teal-500 selection:text-slate-900">
      <Hero />
      <div className="space-y-24 pb-24">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}