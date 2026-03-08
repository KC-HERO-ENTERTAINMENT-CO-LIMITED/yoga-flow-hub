import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { Video, Clock, Users, Calendar, Play, Filter } from "lucide-react";

const sessions = [
  { title: "Morning Sun Salutation Flow", trainer: "Rajesh Kumar", time: "6:00 AM", duration: "45 min", level: "Beginner", category: "Adults", day: "Mon, Wed, Fri", spots: 12, enrolled: 8 },
  { title: "Kids Fun Yoga Adventure", trainer: "Ananya Sharma", time: "4:00 PM", duration: "30 min", level: "Beginner", category: "Kids", day: "Tue, Thu", spots: 15, enrolled: 11 },
  { title: "Chair Yoga for Wellness", trainer: "Priya Patel", time: "10:00 AM", duration: "40 min", level: "Beginner", category: "Seniors", day: "Mon, Wed, Fri", spots: 10, enrolled: 7 },
  { title: "Power Vinyasa Flow", trainer: "Vikram Singh", time: "7:00 AM", duration: "60 min", level: "Intermediate", category: "Adults", day: "Tue, Thu, Sat", spots: 20, enrolled: 16 },
  { title: "Stress Relief & Meditation", trainer: "Rajesh Kumar", time: "8:00 PM", duration: "50 min", level: "All Levels", category: "Adults", day: "Daily", spots: 25, enrolled: 19 },
  { title: "Playful Animal Poses", trainer: "Meera Nair", time: "3:30 PM", duration: "25 min", level: "Beginner", category: "Kids", day: "Mon, Wed", spots: 12, enrolled: 10 },
  { title: "Gentle Morning Stretch", trainer: "Dr. Suresh Iyer", time: "9:00 AM", duration: "35 min", level: "Beginner", category: "Seniors", day: "Tue, Thu, Sat", spots: 8, enrolled: 5 },
  { title: "Back Pain Relief Yoga", trainer: "Vikram Singh", time: "6:30 PM", duration: "45 min", level: "Intermediate", category: "Adults", day: "Mon, Wed, Fri", spots: 15, enrolled: 13 },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-primary/10 text-primary",
  Intermediate: "bg-ocean/10 text-ocean",
  "All Levels": "bg-sun/10 text-sun",
};

const tutorials = [
  { title: "Complete Beginner's Guide to Yoga", duration: "22 min", views: "12.4K" },
  { title: "5-Minute Office Desk Stretches", duration: "5 min", views: "8.7K" },
  { title: "Yoga Nidra for Deep Sleep", duration: "30 min", views: "15.2K" },
  { title: "Kids Yoga: Animal Kingdom", duration: "15 min", views: "6.1K" },
];

export default function OnlineSessions() {
  const [catFilter, setCatFilter] = useState("All");
  const filtered = catFilter === "All" ? sessions : sessions.filter((s) => s.category === catFilter);

  return (
    <Layout>
      <section className="hero-section section-padding pt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Live & On-Demand" title="Online Yoga Sessions" subtitle="Join live classes or watch video tutorials at your own pace" />
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h3 className="font-heading text-2xl font-semibold">Live Class Schedule</h3>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              {["All", "Kids", "Adults", "Seniors"].map((c) => (
                <button
                  key={c}
                  onClick={() => setCatFilter(c)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    catFilter === c ? "gradient-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.05}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-heading font-semibold text-lg">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">with {s.trainer}</p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelColors[s.level]}`}>{s.level}</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{s.time}</span>
                  <span className="flex items-center gap-1"><Video className="h-3.5 w-3.5" />{s.duration}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{s.day}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>{s.enrolled}/{s.spots} enrolled</span>
                    <div className="w-16 h-1.5 bg-muted rounded-full ml-1">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${(s.enrolled / s.spots) * 100}%` }} />
                    </div>
                  </div>
                  <button className="px-4 py-1.5 rounded-lg gradient-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity">
                    Join
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Video tutorials */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="On Demand" title="Video Tutorials" subtitle="Watch anytime, anywhere" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tutorials.map((t, i) => (
              <GlassCard key={t.title} delay={i * 0.1} className="group cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="w-full h-32 rounded-lg bg-muted mb-3 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
                  </div>
                </div>
                <h4 className="font-heading font-semibold text-sm mb-1">{t.title}</h4>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{t.duration}</span>
                  <span>{t.views} views</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
