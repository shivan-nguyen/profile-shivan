import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, Code, Zap } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "R", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
        "NLP",
        "Computer Vision",
        "Deep Learning",
      ],
    },
    {
      title: "Web Development",
      icon: <Zap className="w-6 h-6" />,
      skills: ["React", "Node.js", "Express", "Next.js", "HTML/CSS", "Tailwind CSS", "REST APIs"],
    },
    {
      title: "Tools & Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["Git", "Docker", "MongoDB", "PostgreSQL", "Firebase", "AWS", "Jupyter"],
    },
  ];

  // Animate section header when it enters viewport
  const { ref: headerRef, isVisible } = useScrollAnimation();

  // Stagger cards
  const { containerRef, visibleItems } = useStaggeredAnimation(skillCategories.length, 160);

  // Stagger stats
  const { containerRef: statsRef, visibleItems: statsVisible } = useStaggeredAnimation(4, 150);

  return (
    <section id="skills" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full animate-rotate-slow" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full animate-rotate-slow"
          style={{ animationDirection: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header with appear animation */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and skills I&apos;ve learned and applied across projects.
          </p>
        </div>

        {/* Skills grid (cards) with staggered appear */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-card-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 group ${
                visibleItems.includes(index) ? "animate-scale-in" : "opacity-0 scale-75"
              }`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl group-hover:text-primary transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:animate-pulse-glow transition-all duration-300">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`bg-secondary/50 text-secondary-foreground transition-all duration-200 ${
                        visibleItems.includes(index) ? "animate-fade-in-up" : "opacity-0 translate-y-1"
                      } hover:bg-secondary/80 hover:scale-105`}
                      style={{ animationDelay: `${index * 0.12 + skillIndex * 0.05}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats with staggered appear */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: "3+", label: "Years learning" },
            { number: "10+", label: "Projects completed" },
            { number: "15+", label: "Technologies used" },
            { number: "100+", label: "Coding hours / week" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                statsVisible.includes(index) ? "animate-fade-in-up" : "opacity-0 translate-y-6"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 animate-bounce-gentle">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
