import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// ❌ Không cần Button nữa nên bỏ import
import { 
  Mail, 
  Phone, 
  MapPin
} from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "hohongphucnguyen@gmail.com",
      icon: Mail,
      href: "mailto:hohongphucnguyen@gmail.com"
    },
    {
      title: "Phone",
      value: "+84 787 185 407",
      icon: Phone,
      href: "tel:+84787185407"
    },
    {
      title: "Location",
      value: "TP. Hồ Chí Minh, Việt Nam",
      icon: MapPin,
      href: "#"
    }
  ];

  const { ref, isVisible } = useScrollAnimation();
  const { containerRef, visibleItems } = useStaggeredAnimation(contactInfo.length, 150);

  return (
    <section
      ref={ref}
      id="contact"
      // ⬆️ Tăng padding + đặt min-height để section không bị “lùn”
      className="py-40 md:py-48 min-h-[620px] bg-muted/20 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full animate-rotate-slow opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I’m always open to discussing collaboration opportunities, internships, or exciting projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={info.title}
                className={`bg-card/50 backdrop-blur-sm border-primary/20 hover:shadow-card-glow transition-all duration-500 hover:scale-105 hover:-translate-y-2 group ${
                  visibleItems.includes(index) ? 'animate-scale-in' : 'opacity-0 scale-75'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg group-hover:text-primary transition-colors duration-300">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:animate-pulse-glow transition-all duration-300">
                      <info.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {info.href === "#" ? (
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{info.value}</span>
                  ) : (
                    <a 
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {info.value}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Spacer giữ layout thay cho CTA */}
          <div className="mt-8 h-16 md:h-24" aria-hidden />
        </div>
      </div>
    </section>
  );
};

export default Contact;
