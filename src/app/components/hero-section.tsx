// import { motion } from "motion/react";
// import { Button } from "./ui/button";
// import { ArrowRight, Download } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";

// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Animated background gradient orbs */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/3 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
//           animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.4, 0.3] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       {/* Grid overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left content */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="space-y-8"
//           >
//             <div className="space-y-4">
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-space leading-tight"
//               >
//                 Hi, I'm{" "}
//                 <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
//                   Bibek Shrestha
//                 </span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//                 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-space"
//               >
//                 Full Stack Developer &{" "}
//                 <span className="text-accent">Creative Problem Solver</span>
//               </motion.p>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 className="text-lg text-muted-foreground max-w-xl leading-relaxed"
//               >
//                 I craft beautiful, functional digital experiences with modern
//                 technologies. Specialized in building scalable web applications
//                 that users love.
//               </motion.p>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//               className="flex flex-col sm:flex-row flex-wrap gap-4"
//             >
//               {/* View Projects scrolls to #projects */}
//               <Button
//                 size="lg"
//                 className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] transition-all duration-300 group"
//                 onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
//               >
//                 View Projects
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </Button>

//               {/* Download CV — replace the href with your actual resume URL or file path */}
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 backdrop-blur-sm"
//                 asChild
//               >
//                 <a href="/resume.pdf" download>
//                   <Download className="mr-2 h-4 w-4" />
//                   Download CV
//                 </a>
//               </Button>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.8 }}
//               className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
//             >
//               <div>
//                 <div className="text-3xl font-space text-primary">10+</div>
//                 <div className="text-sm text-muted-foreground">Projects</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-space text-secondary">4+</div>
//                 <div className="text-sm text-muted-foreground">Years Coding</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-space text-accent">100%</div>
//                 <div className="text-sm text-muted-foreground">Dedication</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right visual — Profile Photo */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.4, duration: 1 }}
//             className="relative hidden lg:flex justify-center items-center"
//           >
//             <div className="relative">
//               {/* Floating shapes */}
//               <motion.div
//                 animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-3xl backdrop-blur-sm"
//               />
//               <motion.div
//                 animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
//                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-secondary/20 to-transparent border border-secondary/30 rounded-full backdrop-blur-sm"
//               />
//               <motion.div
//                 animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
//                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute top-1/2 -right-16 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-2xl backdrop-blur-sm"
//               />

//               {/* Profile Photo Container */}
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-xl opacity-60 animate-pulse" />
//                 <div className="relative bg-card/40 backdrop-blur-xl border-2 border-primary/30 rounded-3xl p-3 shadow-2xl">
//                   <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
//                     {/*
//                       HOW TO ADD YOUR PHOTO:
//                       1. Put your photo in the /public folder, e.g. /public/bibek.jpg
//                       2. Change the src below to "/bibek.jpg"
//                       That's it!
//                     */}
//                     <ImageWithFallback
//                       src="Bibek.jpg"
//                       alt="Bibek Shrestha — Full Stack Developer"
//                       className="w-full h-full object-cover"
//                     />

//                     {/* Gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

//                     {/* Status badge */}
//                     <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm flex items-center gap-2">
//                       <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                       <span className="text-xs text-green-300 font-medium">Available</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl -z-10 blur-2xl" />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2"
//         >
//           <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }














































// import { motion, AnimatePresence } from "motion/react";
// import { Button } from "./ui/button";
// import { ArrowRight, Download, X } from "lucide-react";
// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { useState } from "react";

// export function HeroSection() {
//   const [showCV, setShowCV] = useState(false);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Animated background gradient orbs */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
//           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute top-1/3 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
//           animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
//           animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.4, 0.3] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       {/* Grid overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//           {/* Left content */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="space-y-8"
//           >
//             <div className="space-y-4">
//               <motion.h1
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-space leading-tight"
//               >
//                 Hi, I'm{" "}
//                 <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
//                   Bibek Shrestha
//                 </span>
//               </motion.h1>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//                 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-space"
//               >
//                 Full Stack Developer &{" "}
//                 <span className="text-accent">Creative Problem Solver</span>
//               </motion.p>

//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6, duration: 0.8 }}
//                 className="text-lg text-muted-foreground max-w-xl leading-relaxed"
//               >
//                 I craft beautiful, functional digital experiences with modern
//                 technologies. Specialized in building scalable web applications
//                 that users love.
//               </motion.p>
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//               className="flex flex-col sm:flex-row flex-wrap gap-4"
//             >
//               {/* View Projects */}
//               <Button
//                 size="lg"
//                 className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] transition-all duration-300 group"
//                 onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
//               >
//                 View Projects
//                 <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </Button>

//               {/* Download CV — opens modal */}
//               <Button
//                 size="lg"
//                 variant="outline"
//                 className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 backdrop-blur-sm"
//                 onClick={() => setShowCV(true)}
//               >
//                 <Download className="mr-2 h-4 w-4" />
//                 View CV
//               </Button>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1, duration: 0.8 }}
//               className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
//             >
//               <div>
//                 <div className="text-3xl font-space text-primary">4+</div>
//                 <div className="text-sm text-muted-foreground">Projects</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-space text-secondary">3+</div>
//                 <div className="text-sm text-muted-foreground">Years Coding</div>
//               </div>
//               <div>
//                 <div className="text-3xl font-space text-accent">100%</div>
//                 <div className="text-sm text-muted-foreground">Dedication</div>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right visual — Profile Photo */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.4, duration: 1 }}
//             className="relative hidden lg:flex justify-center items-center"
//           >
//             <div className="relative">
//               <motion.div
//                 animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-3xl backdrop-blur-sm"
//               />
//               <motion.div
//                 animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
//                 transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-secondary/20 to-transparent border border-secondary/30 rounded-full backdrop-blur-sm"
//               />
//               <motion.div
//                 animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
//                 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute top-1/2 -right-16 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-2xl backdrop-blur-sm"
//               />

//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-xl opacity-60 animate-pulse" />
//                 <div className="relative bg-card/40 backdrop-blur-xl border-2 border-primary/30 rounded-3xl p-3 shadow-2xl">
//                   <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
//                     {/* Put your photo as public/bibek.jpg */}
//                     <ImageWithFallback
//                       src="/Bibek.jpg"
//                       alt="Bibek Shrestha — Full Stack Developer"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
//                     <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm flex items-center gap-2">
//                       <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                       <span className="text-xs text-green-300 font-medium">Available</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl -z-10 blur-2xl" />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2"
//         >
//           <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
//         </motion.div>
//       </motion.div>

//       {/* ── CV MODAL ── */}
//       <AnimatePresence>
//         {showCV && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
//             onClick={(e) => { if (e.target === e.currentTarget) setShowCV(false); }}
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: 20 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: 20 }}
//               transition={{ duration: 0.3 }}
//               className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
//             >
//               {/* Modal Header */}
//               <div className="flex items-center justify-between px-6 py-4 bg-[#0d0d0d] border-b border-white/10 flex-shrink-0">
//                 <div>
//                   <h3 className="text-white font-space font-semibold">Bibek Shrestha — CV</h3>
//                   <p className="text-white/50 text-xs mt-0.5">Full Stack Developer</p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   {/* Download button */}
//                   <a
//                     href="/bibek_cv.html"
//                     download="Bibek_Shrestha_CV.html"
//                     className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all"
//                   >
//                     <Download className="w-4 h-4" />
//                     Download
//                   </a>
//                   {/* Close button */}
//                   <button
//                     onClick={() => setShowCV(false)}
//                     className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
//                   >
//                     <X className="w-5 h-5 text-white" />
//                   </button>
//                 </div>
//               </div>

//               {/* CV iframe */}
//               <iframe
//                 src="/bibek_cv.html"
//                 className="flex-1 w-full border-none"
//                 title="Bibek Shrestha CV"
//               />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { ArrowRight, Download, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function HeroSection() {
  const [showCV, setShowCV] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-space leading-tight"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                  Bibek Shrestha
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-space"
              >
                Full Stack Developer &{" "}
                <span className="text-accent">Creative Problem Solver</span>
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                I craft beautiful, functional digital experiences with modern
                technologies. Specialized in building scalable web applications
                that users love.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] transition-all duration-300 group"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 backdrop-blur-sm"
                onClick={() => setShowCV(true)}
              >
                <Download className="mr-2 h-4 w-4" />
                View CV
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50"
            >
              <div>
                <div className="text-3xl font-space text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-space text-secondary">4+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div>
                <div className="text-3xl font-space text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual — Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 rounded-3xl backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-secondary/20 to-transparent border border-secondary/30 rounded-full backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-16 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent border border-accent/30 rounded-2xl backdrop-blur-sm"
              />

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl blur-xl opacity-60 animate-pulse" />
                <div className="relative bg-card/40 backdrop-blur-xl border-2 border-primary/30 rounded-3xl p-3 shadow-2xl">
                  <div className="relative w-[400px] h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-muted/30">
                    {/* Place your photo at: public/Bibek.jpg */}
                    <ImageWithFallback
                      src="/Bibek.jpg"
                      alt="Bibek Shrestha — Full Stack Developer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-sm flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-xs text-green-300 font-medium">Available</span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl -z-10 blur-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>

      {/* ── CV MODAL ── */}
      <AnimatePresence>
        {showCV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowCV(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#0d0d0d] border-b border-white/10 flex-shrink-0">
                <div>
                  <h3 className="text-white font-space font-semibold">
                    Bibek Shrestha — CV
                  </h3>
                  <p className="text-white/50 text-xs mt-0.5">Full Stack Developer</p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/bibek_cv.html"
                    download="Bibek_Shrestha_CV.html"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(14,165,233,0.4)] transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                  <button
                    onClick={() => setShowCV(false)}
                    className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* CV iframe */}
              <iframe
                src="/bibek_cv.html"
                className="flex-1 w-full border-none"
                title="Bibek Shrestha CV"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
