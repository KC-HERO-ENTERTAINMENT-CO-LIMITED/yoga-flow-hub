import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { Star, Baby, Users, Heart, MapPin, Award, Calendar } from "lucide-react";

const trainers = [
  { name: "Ananya Sharma", specialization: "Kids", rating: 4.9, sessions: 320, location: "Mumbai", bio: "Certified children's yoga instructor with 8+ years making yoga fun for kids.", tags: ["Playful Yoga", "Focus Training", "Breathing Games"] },
  { name: "Rajesh Kumar", specialization: "Adults", rating: 4.8, sessions: 540, location: "Delhi", bio: "Hatha & Vinyasa expert specializing in stress management and office wellness.", tags: ["Stress Relief", "Vinyasa Flow", "Meditation"] },
  { name: "Priya Patel", specialization: "Seniors", rating: 5.0, sessions: 280, location: "Bangalore", bio: "Gentle yoga specialist with therapeutic training for senior wellness.", tags: ["Chair Yoga", "Joint Mobility", "Balance"] },
  { name: "Vikram Singh", specialization: "Adults", rating: 4.7, sessions: 410, location: "Pune", bio: "Power yoga & weight management expert with a dynamic teaching style.", tags: ["Power Yoga", "Weight Loss", "Core Strength"] },
  { name: "Meera Nair", specialization: "Kids", rating: 4.9, sessions: 195, location: "Chennai", bio: "Early childhood educator turned yoga instructor for children aged 4-12.", tags: ["Story Yoga", "Animal Poses", "Mindfulness"] },
  { name: "Dr. Suresh Iyer", specialization: "Seniors", rating: 4.8, sessions: 370, location: "Hyderabad", bio: "Physiotherapist & yoga therapist providing safe practices for elderly.", tags: ["Therapeutic Yoga", "Breathing", "Gentle Stretch"] },
];

const specIcons: Record<string, typeof Baby> = { Kids: Baby, Adults: Users, Seniors: Heart };
const specColors: Record<string, string> = { Kids: "bg-sun/10 text-sun", Adults: "bg-ocean/10 text-ocean", Seniors: "bg-lotus/10 text-lotus" };

export default function Trainers() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? trainers : trainers.filter((t) => t.specialization === filter);

  return (
    <Layout>
      <section className="hero-section section-padding pt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Expert Guidance" title="Our Yoga Trainers" subtitle="Certified professionals specializing in yoga for every age group" />

          <div className="flex justify-center gap-2 mb-10">
            {["All", "Kids", "Adults", "Seniors"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === f ? "gradient-primary text-primary-foreground" : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => {
              const Icon = specIcons[t.specialization];
              return (
                <GlassCard key={t.name} delay={i * 0.1} className="flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-heading text-lg font-semibold">{t.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${specColors[t.specialization]}`}>
                          <Icon className="h-3 w-3" /> {t.specialization}
                        </span>
                        <span className="flex items-center gap-0.5 text-xs text-sun">
                          <Star className="h-3 w-3 fill-current" /> {t.rating}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg">
                      {t.name.charAt(0)}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 flex-1">{t.bio}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {t.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{t.location}</span>
                    <span className="flex items-center gap-1"><Award className="h-3 w-3" />{t.sessions} sessions</span>
                  </div>
                  <button className="mt-4 w-full py-2.5 rounded-lg gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" /> Book Session
                  </button>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
