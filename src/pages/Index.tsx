import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Baby, Users, Heart, Brain, Moon, Smile, ArrowRight, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import heroImg from "@/assets/hero-yoga.jpg";
import childrenImg from "@/assets/yoga-children.jpg";
import adultsImg from "@/assets/yoga-adults.jpg";
import seniorsImg from "@/assets/yoga-seniors.jpg";

const ageGroups = [
  { title: "Children", desc: "Fun poses, breathing games & focus exercises", img: childrenImg, path: "/yoga-children", icon: Baby },
  { title: "Adults", desc: "Stress relief, office yoga & weight management", img: adultsImg, path: "/yoga-adults", icon: Users },
  { title: "Senior Citizens", desc: "Chair yoga, gentle stretching & balance work", img: seniorsImg, path: "/yoga-seniors", icon: Heart },
];

const solutions = [
  { icon: Brain, title: "Stress Relief", color: "text-primary" },
  { icon: Smile, title: "Mental Health", color: "text-ocean" },
  { icon: Moon, title: "Better Sleep", color: "text-accent" },
  { icon: Sparkles, title: "Weight Loss", color: "text-sun" },
];

const stats = [
  { value: "5000+", label: "Years of Tradition" },
  { value: "84", label: "Classic Asanas" },
  { value: "200M+", label: "Practitioners Worldwide" },
  { value: "100%", label: "Natural Healing" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center hero-section overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Yoga meditation at sunrise" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-background/60 to-background" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Leaf className="h-4 w-4" /> Yoga Awareness & Practice
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Find Your <span className="text-gradient">Inner Peace</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Discover the transformative power of yoga for every age. From playful children's poses to gentle senior exercises — your wellness journey starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/poses" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                Explore Poses <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/50 text-foreground font-medium hover:bg-card transition-colors">
                Learn About Yoga
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Yoga For Everyone */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="For Everyone" title="Yoga Tailored to Your Age" subtitle="Specially designed programs for children, adults, and senior citizens" />
          <div className="grid md:grid-cols-3 gap-6">
            {ageGroups.map((group, i) => (
              <GlassCard key={group.title} delay={i * 0.15} className="group overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <img src={group.img} alt={group.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <group.icon className="absolute bottom-4 left-4 h-8 w-8 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">{group.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{group.desc}</p>
                  <Link to={group.path} className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all">
                    Explore <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Solution Hub" title="Yoga Solutions for Life" subtitle="Targeted yoga programs for common health and wellness challenges" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {solutions.map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.1} className="text-center hover:scale-105 transition-transform cursor-pointer">
                <Link to="/solutions">
                  <s.icon className={`h-10 w-10 mx-auto mb-3 ${s.color}`} />
                  <h4 className="font-heading font-semibold">{s.title}</h4>
                </Link>
              </GlassCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/solutions" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              View All Solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16"
          >
            <Leaf className="h-12 w-12 text-primary mx-auto mb-4 animate-float" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Begin Your Yoga Journey</h2>
            <p className="text-muted-foreground mb-6">Join thousands who have transformed their lives through the ancient art of yoga.</p>
            <Link to="/poses" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
