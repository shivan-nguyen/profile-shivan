import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage:
            "url(lovable-uploads/7d29aa91-0457-4dfe-a647-3a3b86992d0f.png)",
        }}
      />

      {/* Animated shapes */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full animate-bounce-gentle" />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/30 rounded-full animate-pulse-glow" />
        <div
          className="absolute bottom-40 right-1/3 w-24 h-24 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 translate-y-16">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Headline */}
          <div className="relative inline-block px-4 py-2">
            {/* soft glow behind text */}
            <div className="pointer-events-none absolute -inset-x-12 -inset-y-8 rounded-full bg-primary/15 blur-3xl" />
            <h1 className="relative z-10 font-black tracking-tight leading-tight text-5xl md:text-8xl">
              <span className="text-foreground/90">Hi,</span>{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%] drop-shadow-[0_6px_24px_rgba(120,80,255,0.35)]">
                I’m Nguyên
              </span>
            </h1>
            {/* gradient underline */}
            <span className="relative z-10 block mx-auto mt-5 h-[3px] w-28 md:w-40 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-pulse" />
          </div>

          {/* spacer to keep layout breathing */}
          <div className="h-16" aria-hidden />

          {/* Scroll indicator */}
          <div
            className={`animate-bounce-gentle transition-all duration-1000 delay-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection("about")}
              className="p-2 hover:bg-primary/10 transition-colors duration-300"
              aria-label="Scroll to About"
            >
              <ArrowDown className="w-6 h-6 animate-bounce-gentle" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
