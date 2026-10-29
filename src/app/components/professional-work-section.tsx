import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ExternalLink, Lock } from "lucide-react";

const professionalWork = [
  {
    title: "Navyata Style — B2B Wholesale Platform",
    badge: "Freelance · Client Project",
    description:
      "A wholesale footwear platform for retailers, with a full product catalog, category and subcategory filters, size and color stock tracking, and an inquiry system with a public tracking page. The admin panel manages products, hero slides, offer banners, festival promotions and low-stock email alerts.",
    image: "./Navyata.png",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Cloudinary"],
    gradient: "from-primary to-accent",
    demo: "https://navyata-style.vercel.app/", 
  },
  {
    title: "VoxPega — AI Speech Studio",
    badge: "Company Project · 21st Tech Private Limited",
    description:
      "A text-to-speech platform that turns text into natural AI voices, with speed control and audio downloads. Includes Google and email sign-in, a credit system and an admin panel. Built together with a teammate.",
    image: "./VoxPega.png",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Vercel"], // replace with your real stack
    gradient: "from-secondary to-purple-600",
    demo: "https://text-to-speech-iaos.vercel.app/",
  },
];

export function ProfessionalWorkSection() {
  return (
    <section
      id="professional"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
              Client & Company Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real products I built for clients and companies. The source code is
            private, so there are no repository links.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {professionalWork.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm border border-border">
                    {work.badge}
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-space mb-3 group-hover:text-primary transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {work.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${work.gradient} bg-opacity-10 border border-current/20 backdrop-blur-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center text-xs text-muted-foreground">
                      <Lock className="w-3 h-3 mr-1" />
                      Source code is private
                    </span>
                    {work.demo && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="hover:bg-primary/10 hover:text-primary"
                        asChild
                      >
                        <a
                          href={work.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}