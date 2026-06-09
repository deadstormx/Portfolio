// import { motion } from "motion/react";
// import { Briefcase, GraduationCap } from "lucide-react";

// const experiences = [
//   {
//     type: "work",
//     title: "Full Stack Developer (Academic Project)",
//     company: "BookShelf — Final Year Project, Herald College Kathmandu",
//     period: "2024 — 2025",
//     description:
//       "Built and deployed a complete online book buying and rental platform used as a production-ready system. Managed the entire development lifecycle solo — from requirements, database design, backend APIs, frontend UI, to cloud deployment. Integrated real payment gateway (Khalti), real email service, real cloud storage (Cloudinary).",
//     tech: ["React", "Node.js", "MongoDB", "Khalti Payment", "Cloudinary"],
//   },
//   {
//     type: "education",
//     title: "B.Sc. Computer Science",
//     company: "Herald College Kathmandu",
//     period: "2021 — 2025",
//     description:
//       "Focused on software engineering, full-stack web development, and modern technologies. Completed final year project building a production-ready e-commerce platform.",
//     tech: ["Web Development", "Database Design", "Software Engineering", "Cloud Computing"],
//   },
// ];

// export function TimelineSection() {
//   return (
//     <section id="timeline" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <div className="inline-block mb-4">
//             <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
//               Journey
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space mb-6">
//             Experience &{" "}
//             <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Education
//             </span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             My professional journey and academic achievements that shaped my
//             career in software development.
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="max-w-4xl mx-auto">
//           <div className="relative">
//             {/* Central line */}
//             <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

//             {/* Timeline items */}
//             <div className="space-y-12">
//               {experiences.map((item, index) => {
//                 const isEven = index % 2 === 0;
//                 const isWork = item.type === "work";

//                 return (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     className={`relative flex items-center ${
//                       isEven ? "md:flex-row" : "md:flex-row-reverse"
//                     } flex-row`}
//                   >
//                     {/* Timeline node */}
//                     <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
//                       <motion.div
//                         whileHover={{ scale: 1.2 }}
//                         className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
//                           isWork
//                             ? "from-primary to-accent"
//                             : "from-secondary to-purple-600"
//                         } p-0.5 rotate-45 shadow-lg`}
//                       >
//                         <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center -rotate-45">
//                           {isWork ? (
//                             <Briefcase className="w-6 h-6 text-primary" />
//                           ) : (
//                             <GraduationCap className="w-6 h-6 text-secondary" />
//                           )}
//                         </div>
//                       </motion.div>
//                     </div>

//                     {/* Content card */}
//                     <div
//                       className={`flex-1 ${
//                         isEven
//                           ? "md:pr-12 md:text-right pl-24 md:pl-0"
//                           : "md:pl-12 md:text-left pl-24 md:pl-12"
//                       }`}
//                     >
//                       <motion.div
//                         whileHover={{ scale: 1.02 }}
//                         className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all group"
//                       >
//                         {/* Period badge */}
//                         <div
//                           className={`inline-block mb-3 ${
//                             isEven ? "md:float-right md:ml-4" : "md:float-left md:mr-4"
//                           }`}
//                         >
//                           <span className="px-3 py-1 rounded-full bg-muted/50 border border-border text-sm text-muted-foreground">
//                             {item.period}
//                           </span>
//                         </div>

//                         <h3 className="text-xl md:text-2xl font-space mb-2 group-hover:text-primary transition-colors">
//                           {item.title}
//                         </h3>
//                         <div
//                           className={`text-muted-foreground mb-4 flex items-center gap-2 ${
//                             isEven ? "md:justify-end" : "md:justify-start"
//                           }`}
//                         >
//                           {isWork ? (
//                             <Briefcase className="w-4 h-4" />
//                           ) : (
//                             <GraduationCap className="w-4 h-4" />
//                           )}
//                           <span>{item.company}</span>
//                         </div>

//                         <p className="text-muted-foreground mb-6 leading-relaxed">
//                           {item.description}
//                         </p>

//                         {/* Tech tags */}
//                         <div
//                           className={`flex flex-wrap gap-2 ${
//                             isEven ? "md:justify-end" : "md:justify-start"
//                           }`}
//                         >
//                           {item.tech.map((tech) => (
//                             <span
//                               key={tech}
//                               className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${
//                                 isWork
//                                   ? "from-primary/10 to-accent/10 border-primary/20"
//                                   : "from-secondary/10 to-purple-600/10 border-secondary/20"
//                               } border backdrop-blur-sm`}
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>

//                         {/* Glow effect */}
//                         <div
//                           className={`absolute inset-0 bg-gradient-to-br ${
//                             isWork
//                               ? "from-primary/5 to-accent/5"
//                               : "from-secondary/5 to-purple-600/5"
//                           } rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}
//                         />
//                       </motion.div>
//                     </div>

//                     {/* Spacer for the other side on desktop */}
//                     <div className="hidden md:block flex-1" />
//                   </motion.div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }















import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer (Academic Project)",
    company: "BookShelf — Final Year Project, Herald College Kathmandu",
    period: "2024 — 2025",
    description:
      "Built and deployed a complete online book buying and rental platform used as a production-ready system. Managed the entire development lifecycle solo — from requirements, database design, backend APIs, frontend UI, to cloud deployment. Integrated real payment gateway (Khalti), real email service, real cloud storage (Cloudinary).",
    tech: ["React", "Node.js", "MongoDB", "Khalti Payment", "Cloudinary"],
  },
  {
    type: "education",
    title: "B.Sc. (Hons) Computer Science",
    company: "Herald College Kathmandu · University of Wolverhampton, UK",
    period: "2023 — Present",
    description:
      "Focused on software engineering, full-stack web development, and modern technologies. Completed final year project building a production-ready e-commerce platform with real-world integrations.",
    tech: ["Web Development", "Database Design", "Software Engineering", "Cloud Computing"],
  },
  {
    type: "education",
    title: "+2 Science (Computer Science Stream)",
    company: "DAV College · Physics, Chemistry, Mathematics & Computer Science",
    period: "2021 — 2023",
    description:
      "Completed higher secondary education with a focus on Computer Science and Physics. Gained foundational knowledge in programming, algorithms, and problem-solving that sparked my passion for software development.",
    tech: ["Computer Science", "Physics", "Mathematics", "C Programming"],
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
              Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space mb-6">
            Experience &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic achievements that shaped my
            career in software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Central line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

            {/* Timeline items */}
            <div className="space-y-12">
              {experiences.map((item, index) => {
                const isEven = index % 2 === 0;
                const isWork = item.type === "work";

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-row`}
                  >
                    {/* Timeline node */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          isWork
                            ? "from-primary to-accent"
                            : "from-secondary to-purple-600"
                        } p-0.5 rotate-45 shadow-lg`}
                      >
                        <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center -rotate-45">
                          {isWork ? (
                            <Briefcase className="w-6 h-6 text-primary" />
                          ) : (
                            <GraduationCap className="w-6 h-6 text-secondary" />
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 ${
                        isEven
                          ? "md:pr-12 md:text-right pl-24 md:pl-0"
                          : "md:pl-12 md:text-left pl-24 md:pl-12"
                      }`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all group"
                      >
                        {/* Period badge */}
                        <div
                          className={`inline-block mb-3 ${
                            isEven ? "md:float-right md:ml-4" : "md:float-left md:mr-4"
                          }`}
                        >
                          <span className="px-3 py-1 rounded-full bg-muted/50 border border-border text-sm text-muted-foreground">
                            {item.period}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-space mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <div
                          className={`text-muted-foreground mb-4 flex items-center gap-2 ${
                            isEven ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          {isWork ? (
                            <Briefcase className="w-4 h-4 shrink-0" />
                          ) : (
                            <GraduationCap className="w-4 h-4 shrink-0" />
                          )}
                          <span>{item.company}</span>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Tech tags */}
                        <div
                          className={`flex flex-wrap gap-2 ${
                            isEven ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          {item.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${
                                isWork
                                  ? "from-primary/10 to-accent/10 border-primary/20"
                                  : "from-secondary/10 to-purple-600/10 border-secondary/20"
                              } border backdrop-blur-sm`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Glow effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${
                            isWork
                              ? "from-primary/5 to-accent/5"
                              : "from-secondary/5 to-purple-600/5"
                          } rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                        />
                      </motion.div>
                    </div>

                    {/* Spacer for the other side on desktop */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
