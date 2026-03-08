import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { Brain, Flame, CloudRain, Dumbbell, Moon as MoonIcon, Heart, ArrowLeft, CheckCircle } from "lucide-react";

const solutionData: Record<string, {
  icon: typeof Brain; title: string; color: string; problem: string;
  poses: { name: string; desc: string }[]; breathing: { name: string; desc: string };
  meditation: string; routine: string[];
}> = {
  stress: {
    icon: Brain, title: "Stress Relief", color: "text-primary",
    problem: "Chronic stress activates the body's fight-or-flight response, leading to elevated cortisol levels, muscle tension, sleep disturbances, and weakened immunity. Yoga helps activate the parasympathetic nervous system, promoting deep relaxation.",
    poses: [
      { name: "Child's Pose (Balasana)", desc: "Calms the mind and relieves tension in the back and shoulders." },
      { name: "Standing Forward Fold", desc: "Releases hamstring tension and calms the nervous system." },
      { name: "Legs Up the Wall", desc: "Reduces anxiety and promotes blood circulation." },
      { name: "Corpse Pose (Savasana)", desc: "Deep full-body relaxation and mental stillness." },
    ],
    breathing: { name: "4-7-8 Breathing", desc: "Inhale for 4 counts, hold for 7, exhale for 8. Activates the vagus nerve and promotes calm." },
    meditation: "Body scan meditation — lie down comfortably, bring awareness to each body part from toes to head, releasing tension as you go. Practice for 10-15 minutes.",
    routine: ["Gentle warm-up stretches", "Child's Pose + Cat-Cow flow", "4-7-8 Breathing (5 rounds)", "Standing Forward Fold hold", "Legs Up the Wall (5 min)", "Body Scan Meditation (10 min)", "Journaling + Rest day"],
  },
  anger: {
    icon: Flame, title: "Anger Management", color: "text-lotus",
    problem: "Unmanaged anger triggers adrenaline spikes, raises blood pressure, and creates chronic tension. Yoga channels this intense energy through powerful movements and cooling breathwork, transforming reactivity into awareness.",
    poses: [
      { name: "Warrior II (Virabhadrasana II)", desc: "Channels strength and builds focused determination." },
      { name: "Lion's Pose (Simhasana)", desc: "Releases facial and jaw tension with a powerful exhale." },
      { name: "Eagle Pose (Garudasana)", desc: "Requires concentration, redirecting mental energy." },
      { name: "Pigeon Pose", desc: "Releases stored emotions in the hip flexors." },
    ],
    breathing: { name: "Sheetali (Cooling Breath)", desc: "Roll the tongue and inhale through it, exhale through the nose. Cools the body and calms the mind." },
    meditation: "Loving-kindness meditation — silently repeat phrases of goodwill toward yourself and others. Start with 'May I be peaceful' and extend outward.",
    routine: ["Sun Salutations (energetic)", "Warrior sequence flow", "Lion's Pose (3 rounds)", "Eagle Pose + balance", "Cooling Breath (10 rounds)", "Hip openers + Pigeon Pose", "Loving-kindness meditation"],
  },
  depression: {
    icon: CloudRain, title: "Depression Support", color: "text-ocean",
    problem: "Depression affects energy levels, motivation, and the ability to experience joy. Gentle heart-opening yoga postures, combined with rhythmic breathing, stimulate the release of endorphins and serotonin.",
    poses: [
      { name: "Camel Pose (Ustrasana)", desc: "Opens the chest and heart center, energizing the body." },
      { name: "Bridge Pose", desc: "Stimulates the thyroid and lifts mood through gentle inversion." },
      { name: "Sun Salutation", desc: "Rhythmic flow that builds energy and warmth." },
      { name: "Upward-Facing Dog", desc: "Heart opener that combats lethargy." },
    ],
    breathing: { name: "Kapalabhati (Skull-Shining Breath)", desc: "Rapid exhales through the nose with passive inhales. Energizes and clears mental fog." },
    meditation: "Gratitude meditation — focus on 3 things you're grateful for, no matter how small. Sit with each one and feel its warmth for 2-3 minutes.",
    routine: ["Gentle Sun Salutations", "Heart-opening sequence", "Kapalabhati (3 rounds)", "Bridge + Camel flow", "Upward Dog holds", "Gratitude meditation (10 min)", "Gentle rest + journaling"],
  },
  "weight-loss": {
    icon: Dumbbell, title: "Weight Loss", color: "text-sun",
    problem: "Excess weight often results from stress eating, sedentary lifestyle, and metabolic slowdown. Dynamic yoga sequences boost metabolism, build lean muscle, and cultivate mindful eating habits.",
    poses: [
      { name: "Plank Pose", desc: "Core activation and full-body strengthening." },
      { name: "Boat Pose (Navasana)", desc: "Intense core engagement and metabolism boost." },
      { name: "Chair Pose (Utkatasana)", desc: "Strengthens legs and glutes, burns calories." },
      { name: "Twisted Chair Pose", desc: "Aids digestion and tones the obliques." },
    ],
    breathing: { name: "Breath of Fire", desc: "Rapid rhythmic breathing through the nose. Boosts metabolism, energizes, and strengthens core muscles." },
    meditation: "Mindful eating meditation — before meals, pause, take 3 breaths, notice the food with all senses. Eat slowly and chew thoroughly.",
    routine: ["Dynamic Sun Salutations × 10", "Standing pose flow (Warriors + Chair)", "Core sequence (Plank + Boat)", "Breath of Fire (3 rounds)", "Twisted poses for digestion", "Cool-down stretches", "Mindful eating meditation"],
  },
  sleep: {
    icon: MoonIcon, title: "Better Sleep", color: "text-accent",
    problem: "Poor sleep disrupts hormonal balance, impairs cognitive function, and weakens immunity. Evening yoga sequences calm the nervous system, release physical tension, and prepare the mind for restorative sleep.",
    poses: [
      { name: "Reclined Butterfly (Supta Baddha Konasana)", desc: "Opens hips and promotes deep relaxation." },
      { name: "Legs Up the Wall", desc: "Calms the nervous system and reduces swelling." },
      { name: "Supine Twist", desc: "Releases spinal tension from the day." },
      { name: "Corpse Pose (Savasana)", desc: "Full-body relaxation into sleep readiness." },
    ],
    breathing: { name: "Left Nostril Breathing", desc: "Close the right nostril, breathe only through the left. Activates the calming lunar energy channel." },
    meditation: "Yoga Nidra (yogic sleep) — a guided body-awareness practice done lying down. Brings you to the edge of sleep while maintaining consciousness.",
    routine: ["Gentle forward folds", "Reclined hip openers", "Left Nostril Breathing (5 min)", "Supine Twist + Legs Up Wall", "Restorative poses with props", "Yoga Nidra (15 min)", "Sleep!"],
  },
  "mental-health": {
    icon: Heart, title: "Mental Health & Wellness", color: "text-primary",
    problem: "Mental health encompasses emotional, psychological, and social well-being. Yoga offers a holistic approach by combining physical movement, breath regulation, and meditation to build resilience and emotional balance.",
    poses: [
      { name: "Tree Pose (Vrksasana)", desc: "Builds focus, balance, and inner stability." },
      { name: "Warrior III", desc: "Develops concentration and mental strength." },
      { name: "Lotus Pose", desc: "Traditional meditation seat for stillness." },
      { name: "Fish Pose (Matsyasana)", desc: "Opens the throat and heart, releasing emotions." },
    ],
    breathing: { name: "Alternate Nostril Breathing (Nadi Shodhana)", desc: "Alternately breathe through each nostril to balance the brain hemispheres and calm the mind." },
    meditation: "Mindfulness meditation — sit quietly, observe thoughts without judgment. When the mind wanders, gently return to the breath. Start with 5 minutes, build to 20.",
    routine: ["Grounding warm-up", "Balance pose sequence", "Alternate Nostril Breathing", "Heart-opening flow", "Seated meditation (10 min)", "Journaling reflections", "Gratitude + intention setting"],
  },
};

export default function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const data = solutionData[slug || ""];

  if (!data) {
    return (
      <Layout>
        <section className="section-padding pt-24 text-center">
          <p className="text-muted-foreground">Solution not found.</p>
          <Link to="/solutions" className="text-primary mt-4 inline-block">← Back to Solutions</Link>
        </section>
      </Layout>
    );
  }

  const Icon = data.icon;

  return (
    <Layout>
      <section className="hero-section section-padding pt-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/solutions" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Solutions
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <Icon className={`h-12 w-12 ${data.color}`} />
            <h1 className="font-heading text-4xl font-bold">{data.title}</h1>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold mb-3">Understanding the Problem</h2>
            <p className="text-muted-foreground leading-relaxed">{data.problem}</p>
          </GlassCard>
        </div>
      </section>

      {/* Poses */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Recommended Yoga Poses" />
          <div className="grid md:grid-cols-2 gap-4">
            {data.poses.map((p, i) => (
              <GlassCard key={p.name} delay={i * 0.1}>
                <h3 className="font-heading font-semibold mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Breathing + Meditation */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold mb-3">Breathing Technique</h2>
            <h3 className="text-primary font-medium mb-2">{data.breathing.name}</h3>
            <p className="text-sm text-muted-foreground">{data.breathing.desc}</p>
          </GlassCard>
          <GlassCard>
            <h2 className="font-heading text-xl font-semibold mb-3">Meditation Practice</h2>
            <p className="text-sm text-muted-foreground">{data.meditation}</p>
          </GlassCard>
        </div>
      </section>

      {/* 7-Day Routine */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="7-Day Practice Routine" />
          <div className="space-y-3">
            {data.routine.map((step, i) => (
              <GlassCard key={i} delay={i * 0.05} className="flex items-center gap-4 py-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  D{i + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][i]}</p>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
                <CheckCircle className="h-5 w-5 text-muted-foreground/30" />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
