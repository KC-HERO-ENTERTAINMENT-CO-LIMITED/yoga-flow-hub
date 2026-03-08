import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { Leaf, Sun, Heart, Brain, Sparkles, Clock } from "lucide-react";

const benefits = [
  { icon: Heart, title: "Physical Health", desc: "Improves flexibility, strength, balance, and cardiovascular health through regular practice." },
  { icon: Brain, title: "Mental Clarity", desc: "Reduces stress, anxiety, and depression while enhancing focus and emotional well-being." },
  { icon: Sun, title: "Spiritual Growth", desc: "Connects mind, body, and spirit through meditation and mindful breathing practices." },
  { icon: Sparkles, title: "Better Sleep", desc: "Promotes deep relaxation and improved sleep quality through gentle evening routines." },
  { icon: Leaf, title: "Natural Healing", desc: "Supports the body's natural healing processes and boosts immune system function." },
  { icon: Clock, title: "Longevity", desc: "Regular practitioners enjoy improved quality of life and enhanced vitality at every age." },
];

const types = [
  { name: "Hatha Yoga", desc: "Foundation of all yoga styles. Focuses on physical postures and breathing techniques." },
  { name: "Vinyasa Yoga", desc: "Flow-based practice linking breath with movement in a dynamic sequence." },
  { name: "Ashtanga Yoga", desc: "Rigorous style following a specific sequence of postures linked by breath." },
  { name: "Kundalini Yoga", desc: "Combines postures, breathing, meditation, and chanting to awaken energy." },
  { name: "Yin Yoga", desc: "Slow-paced style with poses held for longer periods targeting deep connective tissues." },
  { name: "Pranayama", desc: "Yogic breathing exercises that control vital life force energy." },
];

export default function AboutYoga() {
  return (
    <Layout>
      <section className="hero-section section-padding pt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Ancient Wisdom" title="About Yoga" subtitle="Yoga is a 5,000-year-old practice originating from ancient India that unites the body, mind, and spirit through physical postures, breathing techniques, and meditation." />
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Why Yoga" title="Benefits of Yoga" subtitle="Discover how yoga transforms your life from the inside out" />
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <GlassCard key={b.title} delay={i * 0.1}>
                <b.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Styles" title="Types of Yoga" subtitle="Find the style that resonates with you" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {types.map((t, i) => (
              <GlassCard key={t.name} delay={i * 0.1}>
                <h3 className="font-heading text-lg font-semibold mb-2 text-primary">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <SectionHeader badge="Philosophy" title="The Eight Limbs of Yoga" subtitle="Patanjali's Yoga Sutras outline eight limbs as a guide to living a meaningful life" />
          <div className="space-y-4">
            {["Yama — Ethical standards", "Niyama — Self-discipline", "Asana — Physical postures", "Pranayama — Breath control", "Pratyahara — Sensory withdrawal", "Dharana — Concentration", "Dhyana — Meditation", "Samadhi — Enlightenment"].map((limb, i) => (
              <GlassCard key={i} delay={i * 0.05} className="flex items-center gap-4 py-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">{i + 1}</span>
                <span className="text-foreground font-medium">{limb}</span>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
