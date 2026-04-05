import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import DynamicTitle from '@/components/DynamicTitle'
import ParallaxBackground from '@/components/ParallaxBackground'

export default function Home() {
  return (
    <>
      <ParallaxBackground />
      <main className="relative z-10 w-full overflow-hidden">
        <DynamicTitle />
        
        <div id="hero" className="w-full">
          <Hero />
        </div>
        
        <div id="about" className="w-full relative z-20">
          <About />
        </div>
        
        <div id="skills" className="w-full relative z-20">
          <Skills />
        </div>
        
        <div id="projects" className="w-full relative z-20">
          <Projects />
        </div>
        
        <div id="contact" className="w-full relative z-30">
          <Contact />
        </div>
      </main>
    </>
  );
}