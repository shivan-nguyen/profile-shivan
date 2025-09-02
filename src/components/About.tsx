// src/components/sections/About.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Workflow, GraduationCap } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  // Header xuất hiện khi section vào viewport
  const { ref, isVisible } = useScrollAnimation();
  // Stagger 4 khối: [brief, focus, care, how]
  const { containerRef, visibleItems } = useStaggeredAnimation(4, 160);

  return (
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden py-28 md:py-36 bg-muted/20"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 right-10 h-60 w-60 rounded-full bg-accent/10 blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-[48px] bg-gradient-to-r from-primary/10 via-transparent to-accent/10 blur-3xl opacity-70" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header (đã bỏ pill) */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="bg-hero-gradient bg-clip-text text-transparent text-4xl md:text-5xl font-bold">
            About me
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            {/* CS @ <b>HCMUT</b>. Mình build hệ thống AI và đưa chúng từ{" "}
            <span className="font-semibold">research → production</span>. */}
          </p>
          <div className="mx-auto mt-8 h-px w-48 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Content grid – từng card reveal theo scroll (stagger) */}
        <div ref={containerRef} className="grid grid-cols-1 gap-6 md:grid-cols-5">
          {/* 0. Brief + badges */}
          <Card
            className={`md:col-span-2 bg-card/60 backdrop-blur-sm transition-all duration-700 ${
              visibleItems.includes(0)
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-6"
            }`}
            style={{ animationDelay: "0ms" }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-3 text-xl">
                <GraduationCap className="h-6 w-6 text-primary" />
                Brief
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Hi, My name is Hồ Hồng Phúc Nguyên, a Computer Science student at HCMUT (Vietnam) aiming to become an AI Engineer. I’m excited about building intelligent systems and taking them from research to production.
              </p>
              {/* <div className="flex flex-wrap gap-2 pt-2">
                {["Python", "PyTorch", "Mediapipe", "I3D", "React", "Tailwind", "Docker"].map(
                  (t) => (
                    <Badge key={t} variant="secondary" className="backdrop-blur">
                      {t}
                    </Badge>
                  )
                )}
              </div> */}
            </CardContent>
          </Card>

          {/* 1–3. Focus / Care / How I Work */}
          <div className="md:col-span-3 grid grid-cols-1 gap-6">
            {/* 1. Focus Areas */}
            <Card
              className={`bg-card/60 backdrop-blur-sm hover:shadow-card-glow transition-all duration-700 ${
                visibleItems.includes(1)
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ animationDelay: "160ms" }}
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Brain className="h-6 w-6 text-primary" />
                  Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Vision: detection/segmentation, pose/keypoints, multimodal</li>
                  <li>NLP: classification, sequence labeling, RAG</li>
                  <li>GenAI: prompt engineering, fine-tuning, eval &amp; guardrails</li>
                </ul>
              </CardContent>
            </Card>

            {/* 2. What I Care About */}
            <Card
              className={`bg-card/60 backdrop-blur-sm hover:shadow-card-glow transition-all duration-700 ${
                visibleItems.includes(2)
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ animationDelay: "320ms" }}
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Heart className="h-6 w-6 text-primary" />
                  What I Care About
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Practical impact &amp; clean design</li>
                  <li>Metrics-first mindset</li>
                  <li>Users &gt; demos</li>
                </ul>
              </CardContent>
            </Card>

            {/* 3. How I Work */}
            <Card
              className={`bg-card/60 backdrop-blur-sm hover:shadow-card-glow transition-all duration-700 ${
                visibleItems.includes(3)
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ animationDelay: "480ms" }}
            >
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Workflow className="h-6 w-6 text-primary" />
                  How I Work
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Iterate fast → validate quickly</li>
                  <li>Document well → onboard fast</li>
                  <li>Automate early → scale safely</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
