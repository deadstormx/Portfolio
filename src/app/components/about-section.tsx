import { motion } from "motion/react";
import { Code2, Database, Palette, Rocket } from "lucide-react";

const skills = [
  { name: "Python", level: 90, color: "from-yellow-400 to-blue-500" },
  { name: "HTML/CSS", level: 95, color: "from-orange-400 to-pink-500" },
  { name: "JavaScript", level: 92, color: "from-yellow-300 to-yellow-500" },
  { name: "React", level: 88, color: "from-primary to-accent" },
  { name: "Node.js", level: 85, color: "from-green-400 to-emerald-600" },
  { name: "MongoDB", level: 82, color: "from-green-500 to-teal-500" },
];

const techStack = [
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python", category: "Backend" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML", category: "Frontend" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS", category: "Styling" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript", category: "Frontend" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React", category: "Framework" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", name: "Node.js", category: "Backend" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", name: "MongoDB", category: "Database" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", name: "Firebase", category: "Backend" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind", category: "Styling" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", name: "Figma", category: "Design" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub", category: "Tools" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", name: "Next.js", category: "Framework" },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Shipping products on time",
  },
  {
    icon: Palette,
    title: "Great Design",
    description: "Pixel-perfect implementations",
  },
  {
    icon: Database,
    title: "Optimization",
    description: "Performance-first approach",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

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
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space mb-6">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a Computer Science student and full-stack developer passionate
            about creating innovative web solutions that make a difference.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="relative z-10">
                <h3 className="text-2xl font-space mb-4">My Story</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a Computer Science student at Herald College Kathmandu with a passion
                    for building production-ready web applications. My journey in web development
                    has been driven by curiosity and the desire to solve real-world problems through code.
                  </p>
                  <p>
                    I specialize in the MERN stack and have hands-on experience building complete
                    full-stack applications from scratch. My final year project, BookShelf, is a fully
                    functional e-commerce platform with real payment integration, cloud storage, and email services.
                  </p>
                  <p>
                    I believe in learning by doing and always strive to write clean, maintainable code
                    that delivers value. When I'm not coding, you'll find me exploring new technologies
                    and working on side projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card/40 backdrop-blur-xl border border-border rounded-xl p-6 hover:border-primary/30 transition-all cursor-pointer group"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-space mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-space mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-space text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-card/40 backdrop-blur-xl border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 mb-3 mx-auto group-hover:scale-110 transition-transform">
  <img
    src={tech.icon}
    alt={tech.name}
    className="w-full h-full object-contain"
  />
</div>
                <div className="text-sm font-medium mb-1">{tech.name}</div>
                <div className="text-xs text-muted-foreground">
                  {tech.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
