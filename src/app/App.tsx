import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ProjectsSection } from "./components/projects-section";
import { TimelineSection } from "./components/timeline-section";
import { ServicesSection } from "./components/services-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import { Toaster } from "./components/ui/sonner"; // ← added so toasts render

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TimelineSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <Toaster richColors position="top-right" /> {/* ← renders toast notifications */}
    </div>
  );
}
