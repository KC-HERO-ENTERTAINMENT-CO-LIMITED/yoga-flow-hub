import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { TreePine, Bug, Cat, Snail, Wind, Brain, Shield, Star } from "lucide-react";
import childrenImg from "@/assets/yoga-children.jpg";

const poses = [
  { icon: TreePine, name: "Tree Pose", desc: "Stand on one leg like a tall tree. Great for balance and focus!", color: "text-primary" },
  { icon: Bug, name: "Butterfly Pose", desc: "Sit and flap your knees like butterfly wings. Opens hips gently.", color: "text-lotus" },
  { icon: Cat, name: "Cat-Cow Pose", desc: "On all fours, arch and round your back. Fun spinal movement!", color: "text-ocean" },
  { icon: Snail, name: "Cobra Pose", desc: "Lie on your belly and lift your chest like a snake. Strengthens back.", color: "text-sun" },
];

const sections = [
  { icon: Brain, title: "Focus & Memory", items: ["Trataka (candle gazing game)", "Balance poses with counting", "Memory yoga sequences", "Alphabet yoga poses"] },
  { icon: Wind, title: "Breathing Games", items: ["Balloon breathing", "Bee breath (Bhramari)", "Lion's breath roar", "Pinwheel breathing"] },
  { icon: Star, title: "Daily Routine (15 min)", items: ["2 min warm-up stretches", "5 min fun pose play", "3 min breathing game", "5 min relaxation story"] },
  { icon: Shield, title: "Safety Tips", items: ["Always on a yoga mat", "No forcing any pose", "Adult supervision recommended", "Stop if anything hurts"] },
];

export default function YogaChildren() {
  return (
    <Layout>
      <section className="hero-section section-padding pt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader badge="Ages 5-12" title="Yoga for Children" subtitle="Fun, playful yoga designed to help kids build strength, flexibility, focus, and confidence through imaginative poses and breathing games." />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={childrenImg} alt="Children doing yoga" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Fun Poses" title="Kid-Friendly Yoga Poses" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {poses.map((p, i) => (
              <GlassCard key={p.name} delay={i * 0.1} className="text-center">
                <p.icon className={`h-12 w-12 mx-auto mb-3 ${p.color}`} />
                <h3 className="font-heading text-lg font-semibold mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="h-8 w-8 text-primary" />
                  <h3 className="font-heading text-xl font-semibold">{s.title}</h3>
                </div>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
