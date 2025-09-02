import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Bot, Eye, BarChart3 } from "lucide-react";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot với NLP",
      description: "Phát triển chatbot thông minh sử dụng xử lý ngôn ngữ tự nhiên để trả lời câu hỏi của người dùng. Tích hợp với mô hình transformer và có khả năng học từ dữ liệu hội thoại.",
      technologies: ["Python", "TensorFlow", "NLTK", "Flask", "React"],
      github: "#",
      demo: "#",
      icon: Bot
    },
    {
      title: "Hệ thống Nhận diện Khuôn mặt",
      description: "Ứng dụng computer vision để nhận diện và xác thực khuôn mặt trong thời gian thực. Sử dụng deep learning với độ chính xác cao và tốc độ xử lý nhanh.",
      technologies: ["Python", "OpenCV", "PyTorch", "FastAPI", "React"],
      github: "#",
      demo: "#",
      icon: Eye
    },
    {
      title: "Dashboard Analytics với AI",
      description: "Platform phân tích dữ liệu tự động sử dụng machine learning để dự đoán xu hướng và tạo báo cáo thông minh. Giao diện trực quan với các biểu đồ tương tác.",
      technologies: ["JavaScript", "D3.js", "Python", "Pandas", "MongoDB"],
      github: "#",
      demo: "#",
      icon: BarChart3
    }
  ];

  const { containerRef, visibleItems } = useStaggeredAnimation(projects.length, 300);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full animate-bounce-gentle"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            Dự Án Nổi Bật
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Một số dự án AI và web development tôi đã thực hiện trong quá trình học tập
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-card-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 group ${
                visibleItems.includes(index) ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full group-hover:animate-pulse-glow transition-all duration-300">
                  <project.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary/80 hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
                      style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.05)}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Xem thêm trên GitHub
            <Github className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;