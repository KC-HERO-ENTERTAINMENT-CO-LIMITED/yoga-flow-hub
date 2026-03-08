import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { Armchair, CircleDot, Scale, Flower2, Wind, ShieldAlert } from "lucide-react";
import seniorsImg from "@/assets/yoga-seniors.jpg";

const categories = [
  { icon: Armchair, title: "Chair Yoga", desc: "Modified poses performed seated or using a chair for support.", poses: ["Seated Mountain", "Chair Pigeon", "Seated Twist", "Chair Forward Bend"] },
  { icon: CircleDot, title: "Joint Mobility", desc: "Gentle circular movements to maintain joint health and range of motion.", poses: ["Ankle Circles", "Wrist Rotations", "Shoulder Rolls", "Gentle Neck Turns"] },
  { icon: Scale, title: "Balance Yoga", desc: "Safe balance exercises to prevent falls and improve stability.", poses: ["Wall-Supported Tree", "Heel-Toe Walk", "Single Leg Stand", "Weight Shifting"] },
  { icon: Flower2, title: "Gentle Stretching", desc: "Slow, mindful stretches held comfortably to maintain flexibility.", poses: ["Side Stretch", "Hamstring Stretch", "Chest Opener", "Calf Stretch"] },
  { icon: Wind, title: "Breathing Exercises", desc: "Calming breathwork to improve lung capacity and reduce anxiety.", poses: ["Deep Belly Breathing", "Alternate Nostril", "4-7-8 Technique", "Humming Bee Breath"] },
];

const precautions = [
  "Consult your doctor before starting any new exercise program",
  "Always use a sturdy chair without wheels for chair yoga",
  "Move slowly and gently — never force a position",
  "Keep water nearby and stay hydrated",
  "Practice near a wall or support for balance poses",
  "Stop immediately if you feel pain, dizziness, or shortness of breath",
];

export default function YogaSeniors() {
  return (
    <Layout>
      <section className="hero-section section-padding pt-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader badge="Ages 55+" title="Yoga for Senior Citizens" subtitle="Gentle, safe, and effective yoga practices designed to enhance mobility, balance, and overall well-being for seniors." />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={seniorsImg} alt="Senior doing chair yoga" className="w-full h-80 object-cover" />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Programs" title="Senior-Friendly Practices" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <GlassCard key={c.title} delay={i * 0.1}>
                <c.icon className="h-10 w-10 text-primary mb-3" />
                <h3 className="font-heading text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.poses.map((p) => (
                    <span key={p} className="text-xs px-2 py-1 rounded-full bg-sage text-sage-foreground">{p}</span>
                  ))}
                </div>
              </GlassCard>
            ))}

            <GlassCard delay={0.5} className="border-lotus/30">
              <ShieldAlert className="h-10 w-10 text-lotus mb-3" />
              <h3 className="font-heading text-lg font-semibold mb-2">Health Precautions</h3>
              <ul className="space-y-2">
                {precautions.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-lotus mt-1.5 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
}
