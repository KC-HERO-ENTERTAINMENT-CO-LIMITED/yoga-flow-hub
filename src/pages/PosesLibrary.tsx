import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { Search, Filter } from "lucide-react";

const poses = [
  { name: "Mountain Pose", sanskrit: "Tadasana", difficulty: "Beginner", category: "Standing", benefits: "Posture, balance, grounding" },
  { name: "Warrior I", sanskrit: "Virabhadrasana I", difficulty: "Beginner", category: "Standing", benefits: "Leg strength, hip flexibility" },
  { name: "Warrior II", sanskrit: "Virabhadrasana II", difficulty: "Beginner", category: "Standing", benefits: "Stamina, leg strength, focus" },
  { name: "Tree Pose", sanskrit: "Vrksasana", difficulty: "Beginner", category: "Balance", benefits: "Balance, focus, leg strength" },
  { name: "Downward Dog", sanskrit: "Adho Mukha Svanasana", difficulty: "Beginner", category: "Inversion", benefits: "Full body stretch, strength" },
  { name: "Cobra Pose", sanskrit: "Bhujangasana", difficulty: "Beginner", category: "Backbend", benefits: "Spine flexibility, chest opener" },
  { name: "Child's Pose", sanskrit: "Balasana", difficulty: "Beginner", category: "Resting", benefits: "Relaxation, gentle stretch" },
  { name: "Triangle Pose", sanskrit: "Trikonasana", difficulty: "Intermediate", category: "Standing", benefits: "Hamstrings, balance, core" },
  { name: "Crow Pose", sanskrit: "Bakasana", difficulty: "Advanced", category: "Arm Balance", benefits: "Arm strength, core, balance" },
  { name: "Headstand", sanskrit: "Sirsasana", difficulty: "Advanced", category: "Inversion", benefits: "Circulation, core, focus" },
  { name: "Pigeon Pose", sanskrit: "Kapotasana", difficulty: "Intermediate", category: "Hip Opener", benefits: "Hip flexibility, stress relief" },
  { name: "Boat Pose", sanskrit: "Navasana", difficulty: "Intermediate", category: "Core", benefits: "Core strength, balance" },
  { name: "Bridge Pose", sanskrit: "Setu Bandhasana", difficulty: "Beginner", category: "Backbend", benefits: "Spine, glutes, chest opener" },
  { name: "Plank Pose", sanskrit: "Phalakasana", difficulty: "Beginner", category: "Core", benefits: "Full body strength" },
  { name: "Lotus Pose", sanskrit: "Padmasana", difficulty: "Intermediate", category: "Seated", benefits: "Meditation, hip flexibility" },
  { name: "Corpse Pose", sanskrit: "Savasana", difficulty: "Beginner", category: "Resting", benefits: "Deep relaxation, awareness" },
];

const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
const difficultyColors: Record<string, string> = {
  Beginner: "bg-primary/10 text-primary",
  Intermediate: "bg-ocean/10 text-ocean",
  Advanced: "bg-lotus/10 text-lotus",
};

export default function PosesLibrary() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");

  const filtered = poses.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.sanskrit.toLowerCase().includes(search.toLowerCase());
    const matchDiff = difficulty === "All" || p.difficulty === difficulty;
    return matchSearch && matchDiff;
  });

  return (
    <Layout>
      <section className="hero-section section-padding pt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Library" title="Yoga Poses Library" subtitle="Explore our collection of yoga poses with benefits, difficulty levels, and categories" />

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search poses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              {difficulties.map((d) => (
                <button
                  key={d}
                  onClick={() => setDifficulty(d)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    difficulty === d ? "gradient-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((pose, i) => (
              <GlassCard key={pose.name} delay={i * 0.03} className="hover:scale-[1.02] transition-transform">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColors[pose.difficulty]}`}>{pose.difficulty}</span>
                  <span className="text-xs text-muted-foreground">{pose.category}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold">{pose.name}</h3>
                <p className="text-xs text-primary italic mb-2">{pose.sanskrit}</p>
                <p className="text-xs text-muted-foreground">{pose.benefits}</p>
              </GlassCard>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No poses found matching your search.</p>
          )}
        </div>
      </section>
    </Layout>
  );
}
