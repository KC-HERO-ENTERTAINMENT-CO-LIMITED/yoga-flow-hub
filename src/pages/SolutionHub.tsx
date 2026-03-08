import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { Brain, Flame, CloudRain, Dumbbell, Moon, Heart, ArrowRight } from "lucide-react";

const solutions = [
  { icon: Brain, title: "Stress", slug: "stress", color: "text-primary", desc: "Yoga techniques to calm the nervous system and manage daily stress.", poses: ["Child's Pose", "Forward Fold", "Legs Up Wall"], breathing: "4-7-8 Breathing" },
  { icon: Flame, title: "Anger", slug: "anger", color: "text-lotus", desc: "Channel intense emotions through powerful flows and cooling breathwork.", poses: ["Warrior II", "Lion's Pose", "Eagle Pose"], breathing: "Sheetali (Cooling Breath)" },
  { icon: CloudRain, title: "Depression", slug: "depression", color: "text-ocean", desc: "Gentle heart-opening poses and uplifting sequences to boost mood.", poses: ["Camel Pose", "Bridge Pose", "Sun Salutation"], breathing: "Kapalabhati" },
  { icon: Dumbbell, title: "Weight Loss", slug: "weight-loss", color: "text-sun", desc: "Dynamic sequences that boost metabolism and build lean muscle.", poses: ["Plank", "Boat Pose", "Chair Pose"], breathing: "Breath of Fire" },
  { icon: Moon, title: "Sleep", slug: "sleep", color: "text-accent", desc: "Restorative evening practices for deep, restful sleep.", poses: ["Reclined Butterfly", "Legs Up Wall", "Savasana"], breathing: "Left Nostril Breathing" },
  { icon: Heart, title: "Mental Health", slug: "mental-health", color: "text-primary", desc: "Holistic practices combining movement, breath, and meditation for mental wellness.", poses: ["Tree Pose", "Warrior III", "Lotus"], breathing: "Alternate Nostril" },
];

export default function SolutionHub() {
  return (
    <Layout>
      <section className="hero-section section-padding pt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Solutions" title="Yoga Solution Hub" subtitle="Targeted yoga programs for common life challenges — each with specific poses, breathing techniques, and a 7-day practice plan" />
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <GlassCard key={s.slug} delay={i * 0.1} className="flex flex-col">
              <s.icon className={`h-10 w-10 mb-4 ${s.color}`} />
              <h3 className="font-heading text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{s.desc}</p>
              <div className="mb-3">
                <p className="text-xs font-semibold text-foreground mb-1">Recommended Poses</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.poses.map((p) => (
                    <span key={p} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{p}</span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-xs font-semibold text-foreground mb-1">Breathing Technique</p>
                <span className="text-xs text-muted-foreground">{s.breathing}</span>
              </div>
              <Link to={`/solutions/${s.slug}`} className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all mt-auto">
                View Full Program <ArrowRight className="h-3 w-3" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center glass-card p-10">
          <h2 className="font-heading text-2xl font-bold mb-3">7-Day Practice Template</h2>
          <p className="text-muted-foreground mb-6">Each solution includes a structured weekly plan:</p>
          <div className="grid grid-cols-7 gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
              <div key={day} className="glass-card p-3 text-center">
                <p className="text-xs font-semibold text-primary">{day}</p>
                <p className="text-[10px] text-muted-foreground mt-1">
                  {["Poses", "Breathing", "Meditation", "Poses", "Flow", "Rest", "Review"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
