import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { Brain, Monitor, Dumbbell, Bone, Sun, Moon, Sparkles } from "lucide-react";
import adultsImg from "@/assets/yoga-adults.jpg";

const programs = [
  { icon: Brain, title: "Stress Relief Yoga", desc: "Calming sequences combining gentle poses with deep breathing to release tension and anxiety.", items: ["Child's Pose", "Forward Fold", "Legs Up the Wall", "Savasana"] },
  { icon: Monitor, title: "Office Stretch Yoga", desc: "Quick desk-friendly stretches to combat sitting all day and improve posture.", items: ["Seated Twist", "Neck Rolls", "Wrist Stretches", "Standing Forward Bend"] },
  { icon: Dumbbell, title: "Weight Loss Yoga", desc: "Dynamic flows that boost metabolism, build lean muscle, and burn calories.", items: ["Sun Salutations", "Warrior Series", "Plank Variations", "Boat Pose"] },
  { icon: Bone, title: "Back Pain Relief", desc: "Therapeutic poses targeting spinal health and core strength for lasting relief.", items: ["Cat-Cow", "Sphinx Pose", "Pigeon Pose", "Supine Twist"] },
];

const routines = [
  { icon: Sun, title: "Morning Routine (20 min)", steps: ["Sun Salutations × 5", "Standing poses (10 min)", "Pranayama (3 min)", "Setting intention (2 min)"] },
  { icon: Moon, title: "Evening Routine (15 min)", steps: ["Gentle forward folds", "Hip openers (5 min)", "Restorative poses (5 min)", "Yoga Nidra (5 min)"] },
  { icon: Sparkles, title: "Meditation Practice", steps: ["Find comfortable seat", "Focus on breath", "Body scan technique", "Loving-kindness meditation"] },
];

export default function YogaAdults() {
  return (
    <Layout>
      <section className="hero-section section-padding pt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader badge="Ages 18-55" title="Yoga for Adults" subtitle="Comprehensive yoga programs designed for the modern adult lifestyle — from stress management to fitness goals." />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={adultsImg} alt="Adult yoga practice" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Programs" title="Specialized Yoga Programs" />
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p, i) => (
              <GlassCard key={p.title} delay={i * 0.1}>
                <div className="flex items-center gap-3 mb-3">
                  <p.icon className="h-8 w-8 text-primary" />
                  <h3 className="font-heading text-lg font-semibold">{p.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.items.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{item}</span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Routines" title="Daily Practice Routines" />
          <div className="grid md:grid-cols-3 gap-6">
            {routines.map((r, i) => (
              <GlassCard key={r.title} delay={i * 0.1}>
                <r.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-4">{r.title}</h3>
                <ol className="space-y-2">
                  {r.steps.map((step, j) => (
                    <li key={step} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-medium">{j + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
