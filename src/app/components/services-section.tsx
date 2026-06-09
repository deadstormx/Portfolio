import { motion } from "motion/react";
import { Code2, Palette, Server, Database } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Building responsive, performant web applications using modern frameworks and best practices.",
    features: [
      "React & Next.js Development",
      "Progressive Web Apps",
      "Single Page Applications",
      "Cross-browser Compatibility",
    ],
    gradient: "from-primary to-accent",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive user interfaces that provide exceptional user experiences.",
    features: [
      "User Interface Design",
      "Wireframing & Prototyping",
      "Design Systems",
      "Responsive Design",
    ],
    gradient: "from-secondary to-purple-600",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Developing robust server-side applications with scalable architecture and clean code.",
    features: [
      "RESTful API Development",
      "Microservices Architecture",
      "Authentication & Security",
      "Third-party Integrations",
    ],
    gradient: "from-green-400 to-emerald-600",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Designing efficient database schemas and optimizing queries for maximum performance.",
    features: [
      "SQL & NoSQL Databases",
      "Data Modeling",
      "Query Optimization",
      "Data Migration",
    ],
    gradient: "from-orange-400 to-red-500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

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
              What I Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development solutions tailored to bring your digital
            ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Glassmorphism card */}
                <div className="relative bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-8 h-full hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} bg-opacity-10 border border-current/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-space mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2`}
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Gradient background effect */}
                  <div
                    className={`absolute -bottom-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  {/* Border glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                </div>

                {/* Card shadow/glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-space mb-4">
                Have a project in mind?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help bring your ideas to life with
                cutting-edge technology and design.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] transition-all duration-300 font-medium"
              >
                Start a Conversation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
