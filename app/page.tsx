import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import SkillGlobe from "@/components/SkillGlobe";

export default function Home() {
  return (
    <main>
      <section id="home">
        <Hero/>
      </section>
      <section id="projects">
        <ProjectGrid/>
      </section>
      <section id="skills">
        <SkillGlobe/>
      </section>
      <section id="about">
        <About/>
        <Footer/>
      </section>
    </main>
  );
}
