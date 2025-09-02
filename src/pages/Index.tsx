import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import About from "@/components/About"; // ✅ giữ nguyên

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <About />    {/* 👈 sẽ hiển thị ngay sau Hero */}
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </div>
    </div>
  );
};

export default Index;
