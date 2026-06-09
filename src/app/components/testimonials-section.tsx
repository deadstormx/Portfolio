import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content:
      "Alex delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and code quality was outstanding. Highly recommended!",
    rating: 5,
    company: "TechStartup Inc",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, FinTech Co",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content:
      "Working with Alex was a game-changer for our product. The real-time features and performance optimizations transformed our user experience completely.",
    rating: 5,
    company: "FinTech Solutions",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DesignHub",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content:
      "Incredible developer who truly understands both design and functionality. Alex brought our vision to life with pixel-perfect implementation and smooth animations.",
    rating: 5,
    company: "DesignHub Studio",
  },
  {
    name: "David Park",
    role: "CTO, CloudBase",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    content:
      "Alex's expertise in full-stack development helped us scale our platform efficiently. The microservices architecture was perfectly executed.",
    rating: 5,
    company: "CloudBase Systems",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director, GrowthCo",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&q=80",
    content:
      "The landing pages Alex created for our campaigns had amazing conversion rates. Fast, beautiful, and optimized for performance.",
    rating: 5,
    company: "GrowthCo Marketing",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-space mb-6">
            What{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what people I've worked with
            have to say.
          </p>
        </motion.div>

        {/* Featured testimonial - larger card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-card/40 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-primary/30 transition-all">
            {/* Quote icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10 group-hover:text-primary/20 transition-colors" />

            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-primary/30 p-1 bg-gradient-to-br from-primary to-accent">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author info */}
                <div>
                  <div className="font-space text-lg mb-1">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role} •{" "}
                    {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.div>

        {/* Testimonial carousel navigation */}
        <div className="flex justify-center gap-4 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`relative group ${
                activeIndex === index ? "w-16" : "w-12"
              } h-12 transition-all duration-300`}
            >
              <div
                className={`w-full h-full rounded-xl overflow-hidden border-2 ${
                  activeIndex === index
                    ? "border-primary"
                    : "border-transparent hover:border-primary/30"
                } transition-all`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {activeIndex === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Additional testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-card/40 backdrop-blur-xl border border-border rounded-2xl p-6 hover:border-primary/30 transition-all group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content.slice(0, 120)}..."
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-primary/30">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
