import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

// ─── Replace these with your real EmailJS credentials ───────────────────────
const EMAILJS_SERVICE_ID = "service_gzfs7xl";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_rv1mxyz"; // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "GbkMAOEgC4vzd9NcW";   // e.g. "abcDEF123456"
// ─────────────────────────────────────────────────────────────────────────────

// ─── Replace with your real social handles ───────────────────────────────────
const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/deadstormx",
    username: "@deadstormx",
    gradient: "from-gray-400 to-gray-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bibek-shrestha-1a489931b/",
    username: "Bibek Shrestha",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:bibekshrestha378@gmail.com", // ← replace with your real email
    username: "bibekshrestha378@gmail.com",    // ← replace with your real email
    gradient: "from-red-400 to-pink-600",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("Something went wrong. Please try emailing me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
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
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-8 hover:border-primary/30 transition-all">
              <h3 className="text-2xl font-space mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-input-background border-border focus:border-primary transition-colors"
                      disabled={isLoading}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-muted-foreground">
                      Your Email <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-input-background border-border focus:border-primary transition-colors"
                      disabled={isLoading}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Subject</label>
                  <Input
                    type="text"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-input-background border-border focus:border-primary transition-colors"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-input-background border-border focus:border-primary transition-colors resize-none"
                    disabled={isLoading}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info card */}
            <div className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-space mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Email</div>
                  <a
                    href="mailto:bibekshrestha378@gmail.com" // ← replace with your real email
                    className="text-lg hover:text-primary transition-colors"
                  >
                    bibekshrestha378@gmail.com {/* ← replace with your real email */}
                  </a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Location</div>
                  <div className="text-lg">Lalitpur, Nepal</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Availability</div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-lg">Available for freelance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-space">Connect on Social</h3>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 bg-card/40 backdrop-blur-xl border border-border rounded-xl p-4 hover:border-primary/30 transition-all group"
                >
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${social.gradient} bg-opacity-10 border border-current/20 group-hover:scale-110 transition-transform`}
                  >
                    <social.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium group-hover:text-primary transition-colors">
                      {social.label}
                    </div>
                    <div className="text-sm text-muted-foreground">{social.username}</div>
                  </div>
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">→</div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
