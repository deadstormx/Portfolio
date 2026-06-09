// import { motion } from "motion/react";
// import { Button } from "./ui/button";
// import { ExternalLink, Github } from "lucide-react";

// // ─── Replace GitHub/demo links with your real URLs ───────────────────────────
// const projects = [
//   {
//     title: "BookShelf",
//     description:
//       "A full-stack online book buying & rental platform built as my final year project at Herald College Kathmandu. Features real Khalti payment integration, Cloudinary cloud storage, email notifications, JWT auth, and a complete admin dashboard — built solo from requirements to deployment.",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", // ← replace with a screenshot of your actual project
//     tech: ["React", "Node.js", "MongoDB", "Khalti", "Cloudinary", "Express"],
//     featured: true,
//     gradient: "from-primary to-accent",
//     github: "https://github.com/deadstormx/Bookshelf-Frontend", // ← your real repo
//     demo: "https://bookshelf-frontend-jgc8.vercel.app/",              // ← your live URL, or remove if not deployed
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "This very portfolio — a responsive, animated developer portfolio built with React, Tailwind CSS, and Framer Motion. Features dark/light mode, smooth scroll animations, and a working contact form.",
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//     tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
//     featured: true,
//     gradient: "from-secondary to-purple-600",
//     github: "https://github.com/deadstormx/Portfolio", // ← your real repo
//     demo: "#",
//   },
//   // ─── Add your other real projects below ──────────────────────────────────
//   // If you have fewer than 4 additional projects just leave what you have.
//   {
//     title: "Coming Soon",
//     description:
//       "Currently working on new projects. Check back soon or visit my GitHub for the latest work.",
//     image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
//     tech: ["React", "Node.js"],
//     featured: false,
//     gradient: "from-cyan-400 to-blue-500",
//     github: "https://github.com/deadstormx",
//     demo: "#",
//   },
// ];
// // ─────────────────────────────────────────────────────────────────────────────

// export function ProjectsSection() {
//   return (
//     <section id="projects" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
//         <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block mb-4">
//             <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
//               Featured Work
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space mb-6">
//             Selected{" "}
//             <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A collection of projects that showcase my skills and creativity in
//             building modern web applications.
//           </p>
//         </motion.div>

//         {/* Featured Projects */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-8">
//           {projects
//             .filter((p) => p.featured)
//             .map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group"
//               >
//                 <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
//                   <div className="relative h-72 overflow-hidden">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
//                     <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       {project.demo && project.demo !== "#" && (
//                         <Button
//                           size="sm"
//                           className="bg-primary/90 hover:bg-primary backdrop-blur-sm"
//                           asChild
//                         >
//                           <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                             <ExternalLink className="w-4 h-4 mr-2" />
//                             Live Demo
//                           </a>
//                         </Button>
//                       )}
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="bg-background/90 hover:bg-background backdrop-blur-sm"
//                         asChild
//                       >
//                         <a href={project.github} target="_blank" rel="noopener noreferrer">
//                           <Github className="w-4 h-4 mr-2" />
//                           Code
//                         </a>
//                       </Button>
//                     </div>
//                   </div>
//                   <div className="p-8">
//                     <h3 className="text-2xl font-space mb-3 group-hover:text-primary transition-colors">
//                       {project.title}
//                     </h3>
//                     <p className="text-muted-foreground mb-6 leading-relaxed">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.map((tech) => (
//                         <span
//                           key={tech}
//                           className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current/20 backdrop-blur-sm`}
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//         </div>

//         {/* Other Projects */}
//         {projects.filter((p) => !p.featured).length > 0 && (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects
//               .filter((p) => !p.featured)
//               .map((project, index) => (
//                 <motion.div
//                   key={project.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="group"
//                 >
//                   <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
//                     </div>
//                     <div className="p-6 flex flex-col flex-grow">
//                       <h3 className="text-xl font-space mb-2 group-hover:text-primary transition-colors">
//                         {project.title}
//                       </h3>
//                       <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
//                         {project.description}
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {project.tech.slice(0, 3).map((tech) => (
//                           <span
//                             key={tech}
//                             className="px-2 py-1 rounded-full text-xs bg-muted/50 border border-border"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="flex gap-2">
//                         {project.demo && project.demo !== "#" && (
//                           <Button
//                             size="sm"
//                             variant="ghost"
//                             className="flex-1 hover:bg-primary/10 hover:text-primary"
//                             asChild
//                           >
//                             <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                               <ExternalLink className="w-3 h-3 mr-1" />
//                               Demo
//                             </a>
//                           </Button>
//                         )}
//                         <Button
//                           size="sm"
//                           variant="ghost"
//                           className="flex-1 hover:bg-primary/10 hover:text-primary"
//                           asChild
//                         >
//                           <a href={project.github} target="_blank" rel="noopener noreferrer">
//                             <Github className="w-3 h-3 mr-1" />
//                             Code
//                           </a>
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//           </div>
//         )}

//         {/* View More */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mt-12"
//         >
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-primary/30 hover:bg-primary/10"
//             asChild
//           >
//             <a href="https://github.com/deadstormx" target="_blank" rel="noopener noreferrer">
//               <Github className="w-4 h-4 mr-2" />
//               View All Projects on GitHub
//             </a>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }






















































// import { motion } from "motion/react";
// import { Button } from "./ui/button";
// import { ExternalLink, Github } from "lucide-react";

// const projects = [
//   {
//     title: "The BookShelf",
//     description:
//       "A full-stack online book buying & rental platform built as my final year project at Herald College Kathmandu. Features real Khalti payment integration, Cloudinary cloud storage, OTP email verification, Google OAuth, AI chatbot using Groq's Llama 3.3, real-time admin support chat via Socket.io, and a complete admin dashboard — built solo from requirements to deployment.",
//     image: "./Bookshelf.png",
//     tech: ["React", "Node.js", "MongoDB", "Khalti", "Cloudinary", "Socket.io"],
//     featured: true,
//     gradient: "from-primary to-accent",
//     github: "https://github.com/deadstormx/bookshelf",
//     demo: "https://bookshelf-frontend-jgc8.vercel.app/",
//   },
//   {
//     title: "Weather Forecast App",
//     description:
//       "A weather forecasting web app that shows real-time temperature, humidity, wind speed, and pressure for any city worldwide. Features a 7-day weekly forecast, dynamic weather icons, and a clean warm UI. Built with HTML, CSS, JavaScript and PHP with live weather API integration.",
//     image: "./Weather.png",
//     tech: ["HTML", "CSS", "JavaScript", "PHP", "Weather API"],
//     featured: true,
//     gradient: "from-cyan-400 to-blue-500",
//     github: "https://github.com/deadstormx/weather-app",
//     demo: "https://weatherapp.42web.io/",
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "This very portfolio — a responsive, animated developer portfolio built with React, Tailwind CSS, and Framer Motion. Features dark/light mode, smooth scroll animations, CV viewer modal, and a working EmailJS contact form.",
//     image: "./Portfolio.png",
//     tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
//     featured: false,
//     gradient: "from-secondary to-purple-600",
//     github: "https://github.com/deadstormx/portfolio",
//     demo: "",
//   },
// ];

// export function ProjectsSection() {
//   return (
//     <section id="projects" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
//         <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block mb-4">
//             <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
//               Featured Work
//             </span>
//           </div>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space mb-6">
//             Selected{" "}
//             <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Projects
//             </span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A collection of projects that showcase my skills and creativity in
//             building modern web applications.
//           </p>
//         </motion.div>

//         {/* Featured Projects */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-8">
//           {projects
//             .filter((p) => p.featured)
//             .map((project, index) => (
//               <motion.div
//                 key={project.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="group"
//               >
//                 <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
//                   <div className="relative h-72 overflow-hidden">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
//                     <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       {project.demo && (
//                         <Button
//                           size="sm"
//                           className="bg-primary/90 hover:bg-primary backdrop-blur-sm"
//                           asChild
//                         >
//                           <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                             <ExternalLink className="w-4 h-4 mr-2" />
//                             Live Demo
//                           </a>
//                         </Button>
//                       )}
//                       {project.github && (
//                         <Button
//                           size="sm"
//                           variant="outline"
//                           className="bg-background/90 hover:bg-background backdrop-blur-sm"
//                           asChild
//                         >
//                           <a href={project.github} target="_blank" rel="noopener noreferrer">
//                             <Github className="w-4 h-4 mr-2" />
//                             Code
//                           </a>
//                         </Button>
//                       )}
//                     </div>
//                   </div>
//                   <div className="p-8">
//                     <h3 className="text-2xl font-space mb-3 group-hover:text-primary transition-colors">
//                       {project.title}
//                     </h3>
//                     <p className="text-muted-foreground mb-6 leading-relaxed">
//                       {project.description}
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tech.map((tech) => (
//                         <span
//                           key={tech}
//                           className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current/20 backdrop-blur-sm`}
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//         </div>

//         {/* Other Projects */}
//         {projects.filter((p) => !p.featured).length > 0 && (
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects
//               .filter((p) => !p.featured)
//               .map((project, index) => (
//                 <motion.div
//                   key={project.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   className="group"
//                 >
//                   <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
//                     <div className="relative h-48 overflow-hidden">
//                       <img
//                         src={project.image}
//                         alt={project.title}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
//                     </div>
//                     <div className="p-6 flex flex-col flex-grow">
//                       <h3 className="text-xl font-space mb-2 group-hover:text-primary transition-colors">
//                         {project.title}
//                       </h3>
//                       <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
//                         {project.description}
//                       </p>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {project.tech.slice(0, 3).map((tech) => (
//                           <span
//                             key={tech}
//                             className="px-2 py-1 rounded-full text-xs bg-muted/50 border border-border"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="flex gap-2">
//                         {project.demo && (
//                           <Button
//                             size="sm"
//                             variant="ghost"
//                             className="flex-1 hover:bg-primary/10 hover:text-primary"
//                             asChild
//                           >
//                             <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                               <ExternalLink className="w-3 h-3 mr-1" />
//                               Demo
//                             </a>
//                           </Button>
//                         )}
//                         {project.github && (
//                           <Button
//                             size="sm"
//                             variant="ghost"
//                             className="flex-1 hover:bg-primary/10 hover:text-primary"
//                             asChild
//                           >
//                             <a href={project.github} target="_blank" rel="noopener noreferrer">
//                               <Github className="w-3 h-3 mr-1" />
//                               Code
//                             </a>
//                           </Button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//           </div>
//         )}

//         {/* View More */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mt-12"
//         >
//           <Button
//             size="lg"
//             variant="outline"
//             className="border-primary/30 hover:bg-primary/10"
//             asChild
//           >
//             <a href="https://github.com/deadstormx" target="_blank" rel="noopener noreferrer">
//               <Github className="w-4 h-4 mr-2" />
//               View All Projects on GitHub
//             </a>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }























































import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "The BookShelf",
    description:
      "A full-stack online book buying & rental platform built as my final year project at Herald College Kathmandu. Features real Khalti payment integration, Cloudinary cloud storage, OTP email verification, Google OAuth, AI chatbot using Groq's Llama 3.3, real-time admin support chat via Socket.io, and a complete admin dashboard — built solo from requirements to deployment.",
    image: "./Bookshelf.png",
    tech: ["React", "Node.js", "MongoDB", "Khalti", "Cloudinary", "Socket.io"],
    featured: true,
    gradient: "from-primary to-accent",
    github: "https://github.com/deadstormx/bookshelf",
    demo: "https://bookshelf-frontend-jgc8.vercel.app/",
  },
  {
    title: "GreenBin — Waste Management System",
    description:
      "A full-stack waste management system that allows users to schedule waste pickups, choose subscription plans, and pay via Esewa, Khalti, and IMEPay. Admins can manage pickup requests, monitor collection routes, and track waste statistics through a dedicated dashboard. Built with React, Node.js, and MongoDB Atlas with JWT authentication and OTP email verification.",
    image: "./GreenBin.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    featured: true,
    gradient: "from-green-400 to-emerald-500",
    github: "https://github.com/deadstormx/WMS-Frontend",
    demo: "https://wms-frontend-eosin.vercel.app/",
  },
  {
    title: "Weather Forecast App",
    description:
      "A weather forecasting web app that shows real-time temperature, humidity, wind speed, and pressure for any city worldwide. Features a 7-day weekly forecast, dynamic weather icons, and a clean warm UI. Built with HTML, CSS, JavaScript and PHP with live weather API integration.",
    image: "./Weather.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    featured: false,
    gradient: "from-cyan-400 to-blue-500",
    github: "https://github.com/deadstormx/weather-app",
    demo: "https://weatherapp.42web.io/",
  },
  {
    title: "Portfolio Website",
    description:
      "This very portfolio — a responsive, animated developer portfolio built with React, Tailwind CSS, and Framer Motion. Features dark/light mode, smooth scroll animations, CV viewer modal, and a working EmailJS contact form.",
    image: "./Portfolio.png",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    featured: false,
    gradient: "from-secondary to-purple-600",
    github: "https://github.com/deadstormx/portfolio",
    demo: "",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

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
              Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space mb-6">
            Selected{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and creativity in
            building modern web applications.
          </p>
        </motion.div>

        {/* Featured Projects — 2 column grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.demo && (
                        <Button
                          size="sm"
                          className="bg-primary/90 hover:bg-primary backdrop-blur-sm"
                          asChild
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-background/90 hover:bg-background backdrop-blur-sm"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-space mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${project.gradient} bg-opacity-10 border border-current/20 backdrop-blur-sm`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects — smaller cards */}
        {projects.filter((p) => !p.featured).length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-space mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-full text-xs bg-muted/50 border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {project.demo && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="flex-1 hover:bg-primary/10 hover:text-primary"
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {project.github && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="flex-1 hover:bg-primary/10 hover:text-primary"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        )}

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/deadstormx" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
