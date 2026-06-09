// import { motion } from "motion/react";
// import { Heart, ArrowUp } from "lucide-react";
// import { useState, useEffect } from "react";


// import githubIcon from "../../imports/github.png";
// import linkedinIcon from "../../imports/linkedin.png";
// import twitterIcon from "../../imports/twitter.png";
// import instagramIcon from "../../imports/instagram.png";

// const footerLinks = {
//   Quick: [
//     { name: "About", href: "#about" },
//     { name: "Projects", href: "#projects" },
//     { name: "Services", href: "#services" },
//     { name: "Contact", href: "#contact" },
//   ],
//   Social: [
//     { name: "GitHub", href: "https://github.com/deadstormx" },
//     { name: "LinkedIn", href: "https://www.linkedin.com/in/bibek-shrestha-1a489931b/" },
//     { name: "Twitter", href: "https://x.com/Bibeksh03700224" },
//     { name: "Instagram", href: "https://www.instagram.com/bib3kkkkk._/" },
//   ],
//   Resources: [
//     { name: "Experience", href: "#timeline" },
//     { name: "Skills", href: "#about" },
//     { name: "Resume", href: "/resume.pdf" }, // ← put your resume in /public/resume.pdf
//   ],
// };

// export function Footer() {
//   const [showScrollTop, setShowScrollTop] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setShowScrollTop(window.scrollY > 300);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="relative bg-background border-t border-border overflow-hidden">
//       {/* Background glow */}
//       <div className="absolute inset-0">
//         <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Main Footer Content */}
//         <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Brand */}
//           <div className="lg:col-span-1">
//             <motion.div whileHover={{ scale: 1.05 }} className="inline-block mb-4">
//               <h3 className="font-space text-2xl font-bold">
//                 <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                   Bibek Shrestha
//                 </span>
//               </h3>
//             </motion.div>
//             <p className="text-muted-foreground leading-relaxed mb-6">
//               Computer Science Student &amp; Full Stack Developer crafting beautiful digital
//               experiences with modern technologies.
//             </p>
//             <div className="flex gap-4">
//               {[
//                 { img: githubIcon, href: "https://github.com/deadstormx", label: "GitHub" },
//                 {img: linkedinIcon , href: "https://www.linkedin.com/in/bibek-shrestha-1a489931b/", label: "LinkedIn" },
//                 { img: twitterIcon, href: "https://x.com/Bibeksh03700224", label: "Twitter" },
//                 { img: instagramIcon, href: "https://www.instagram.com/bib3kkkkk._/", label: "Instagram" },
//                 { img: "✉️", href: "#contact", label: "Contact" },
//               ].map((social) => (
//                 <motion.a
//                   key={social.label}
//                   href={social.href}
//                   target={social.href.startsWith("http") ? "_blank" : "_self"}
//                   rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
//                   aria-label={social.label}
//                   whileHover={{ scale: 1.1, y: -2 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-10 h-10 rounded-lg bg-card/40 backdrop-blur-xl border border-border hover:border-primary/30 flex items-center justify-center transition-all"
//                 >
//                   <span className="text-lg">{social.img}</span>
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Links Sections */}
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <div key={category}>
//               <h4 className="font-space mb-4">{category} Links</h4>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.name}>
//                     <a
//                       href={link.href}
//                       target={link.href.startsWith("http") ? "_blank" : "_self"}
//                       rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
//                       className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
//                     >
//                       <span className="w-0 group-hover:w-2 h-px bg-primary transition-all" />
//                       {link.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div className="border-t border-border" />

//         {/* Bottom Bar */}
//         <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="text-sm text-muted-foreground flex items-center gap-2">
//             <span>© 2026 Bibek Shrestha</span>
//           </div>
//           <div className="flex items-center gap-6 text-sm text-muted-foreground">
//             <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
//             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top — only visible after scrolling 300px */}
//       <motion.button
//         onClick={scrollToTop}
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{
//           opacity: showScrollTop ? 1 : 0,
//           scale: showScrollTop ? 1 : 0.8,
//           pointerEvents: showScrollTop ? "auto" : "none",
//         }}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         transition={{ duration: 0.2 }}
//         className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] flex items-center justify-center transition-shadow z-40"
//         aria-label="Scroll to top"
//       >
//         <ArrowUp className="w-5 h-5" />
//       </motion.button>
//     </footer>
//   );
// }



import { motion } from "motion/react";
import { Heart, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

import githubIcon from "../../imports/github.png";
import linkedinIcon from "../../imports/linkedin.png";
import twitterIcon from "../../imports/twitter.png";
import instagramIcon from "../../imports/instagram.png";

const footerLinks = {
  Quick: [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
  Social: [
    { name: "GitHub", href: "https://github.com/deadstormx" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/bibek-shrestha-1a489931b/" },
    { name: "Twitter", href: "https://x.com/Bibeksh03700224" },
    { name: "Instagram", href: "https://www.instagram.com/bib3kkkkk._/" },
  ],
  Resources: [
    { name: "Experience", href: "#timeline" },
    { name: "Skills", href: "#about" },
    { name: "Resume", href: "/resume.pdf" },
  ],
};

const socialIcons = [
  { img: githubIcon,    href: "https://github.com/deadstormx",                         label: "GitHub"    },
  { img: linkedinIcon,  href: "https://www.linkedin.com/in/bibek-shrestha-1a489931b/", label: "LinkedIn"  },
  { img: twitterIcon,   href: "https://x.com/Bibeksh03700224",                         label: "Twitter"   },
  { img: instagramIcon, href: "https://www.instagram.com/bib3kkkkk._/",                label: "Instagram" },
];

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block mb-4">
              <h3 className="font-space text-2xl font-bold">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Bibek Shrestha
                </span>
              </h3>
            </motion.div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Computer Science Student &amp; Full Stack Developer crafting beautiful digital
              experiences with modern technologies.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-card/40 backdrop-blur-xl border border-border hover:border-primary/30 flex items-center justify-center transition-all overflow-hidden p-1.5"
                >
                  <img
                    src={social.img}
                    alt={social.label}
                    className={`w-full h-full object-contain ${
                      social.label === "GitHub" || social.label === "Twitter"
                        ? "dark:invert invert-0"
                        : ""
                    }`}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-space mb-4">{category} Links</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-primary transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border" />

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <span>© 2026 Bibek Shrestha</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] flex items-center justify-center transition-shadow z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
