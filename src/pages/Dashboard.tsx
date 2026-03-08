import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { motion } from "framer-motion";
import {
  Trophy, Flame, Target, TrendingUp, Smile, Moon, Dumbbell,
  Award, Calendar, CheckCircle, Star, Heart, Zap, Crown
} from "lucide-react";

// Mock data
const weeklyProgress = [40, 65, 30, 80, 55, 90, 70];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const badges = [
  { icon: Flame, label: "7-Day Streak", earned: true },
  { icon: Star, label: "First Session", earned: true },
  { icon: Heart, label: "Self-Care Hero", earned: true },
  { icon: Zap, label: "Early Bird", earned: true },
  { icon: Crown, label: "30-Day Master", earned: false },
  { icon: Trophy, label: "Century Club", earned: false },
];

const activityHistory = [
  { date: "Today", activity: "Morning Sun Salutation", duration: "45 min", type: "Yoga" },
  { date: "Today", activity: "Mood Check-in", duration: "2 min", type: "Tracker" },
  { date: "Yesterday", activity: "Stress Relief Meditation", duration: "20 min", type: "Meditation" },
  { date: "Yesterday", activity: "Evening Stretch", duration: "15 min", type: "Yoga" },
  { date: "Mar 5", activity: "Power Vinyasa Flow", duration: "60 min", type: "Yoga" },
];

const moodOptions = ["😊", "😌", "😐", "😟", "😢"];

export default function Dashboard() {
  const [streak] = useState(12);
  const [mood, setMood] = useState(0);
  const [sleepHours, setSleepHours] = useState(7);
  const [weight, setWeight] = useState(68);
  const [challengeDay] = useState(12);
  const [goals] = useState([
    { label: "Complete 5 sessions this week", progress: 3, total: 5 },
    { label: "Meditate 10 minutes daily", progress: 5, total: 7 },
    { label: "Try 3 new poses", progress: 1, total: 3 },
  ]);

  return (
    <Layout>
      <section className="hero-section section-padding pt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Your Journey" title="Dashboard" subtitle="Track your progress, set goals, and celebrate achievements" />

          {/* Top stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Flame, label: "Day Streak", value: streak, color: "text-sun" },
              { icon: CheckCircle, label: "Sessions Done", value: 47, color: "text-primary" },
              { icon: Calendar, label: "Challenge Day", value: `${challengeDay}/30`, color: "text-ocean" },
              { icon: Trophy, label: "Badges Earned", value: 4, color: "text-lotus" },
            ].map((s, i) => (
              <GlassCard key={s.label} delay={i * 0.1} className="text-center">
                <s.icon className={`h-8 w-8 mx-auto mb-2 ${s.color}`} />
                <p className="text-2xl font-heading font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </GlassCard>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Weekly Progress Chart */}
            <GlassCard className="lg:col-span-2">
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" /> Weekly Progress
              </h3>
              <div className="flex items-end gap-3 h-40">
                {weeklyProgress.map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${val}%` }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="w-full rounded-t-md gradient-primary min-h-[4px]"
                    />
                    <span className="text-xs text-muted-foreground">{days[i]}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* 30-Day Challenge */}
            <GlassCard>
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-ocean" /> 30-Day Challenge
              </h3>
              <div className="grid grid-cols-6 gap-1.5">
                {Array.from({ length: 30 }, (_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-md flex items-center justify-center text-[10px] font-medium ${
                      i < challengeDay ? "gradient-primary text-primary-foreground" : i === challengeDay ? "border-2 border-primary text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-muted-foreground">{challengeDay} of 30 days completed</p>
                <div className="w-full h-2 bg-muted rounded-full mt-2">
                  <div className="h-full gradient-primary rounded-full transition-all" style={{ width: `${(challengeDay / 30) * 100}%` }} />
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Trackers Row */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {/* Mood Tracker */}
            <GlassCard>
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Smile className="h-5 w-5 text-sun" /> Mood Tracker
              </h3>
              <p className="text-sm text-muted-foreground mb-3">How are you feeling today?</p>
              <div className="flex justify-between">
                {moodOptions.map((emoji, i) => (
                  <button
                    key={i}
                    onClick={() => setMood(i)}
                    className={`text-2xl p-2 rounded-lg transition-all ${mood === i ? "bg-primary/10 scale-125" : "hover:bg-muted"}`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </GlassCard>

            {/* Sleep Tracker */}
            <GlassCard>
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Moon className="h-5 w-5 text-accent" /> Sleep Tracker
              </h3>
              <p className="text-sm text-muted-foreground mb-3">Hours of sleep last night</p>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={3}
                  max={12}
                  step={0.5}
                  value={sleepHours}
                  onChange={(e) => setSleepHours(parseFloat(e.target.value))}
                  className="flex-1 accent-primary"
                />
                <span className="text-2xl font-heading font-bold text-accent">{sleepHours}h</span>
              </div>
            </GlassCard>

            {/* Weight Tracker */}
            <GlassCard>
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-lotus" /> Weight Tracker
              </h3>
              <p className="text-sm text-muted-foreground mb-3">Current weight (kg)</p>
              <div className="flex items-center gap-3">
                <button onClick={() => setWeight((w) => Math.max(30, w - 0.5))} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted">−</button>
                <span className="text-2xl font-heading font-bold text-lotus flex-1 text-center">{weight} kg</span>
                <button onClick={() => setWeight((w) => w + 0.5)} className="w-8 h-8 rounded-lg border border-border flex items-center justify-center hover:bg-muted">+</button>
              </div>
            </GlassCard>
          </div>

          {/* Goals + Badges + Activity */}
          <div className="grid lg:grid-cols-3 gap-6 mt-6">
            {/* Personal Goals */}
            <GlassCard>
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" /> Personal Goals
              </h3>
              <div className="space-y-4">
                {goals.map((g) => (
                  <div key={g.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{g.label}</span>
                      <span className="text-muted-foreground">{g.progress}/{g.total}</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full">
                      <div className="h-full gradient-primary rounded-full transition-all" style={{ width: `${(g.progress / g.total) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Badges */}
            <GlassCard>
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-sun" /> Badges
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {badges.map((b) => (
                  <div key={b.label} className={`text-center p-2 rounded-lg ${b.earned ? "bg-primary/10" : "bg-muted opacity-40"}`}>
                    <b.icon className={`h-6 w-6 mx-auto mb-1 ${b.earned ? "text-primary" : "text-muted-foreground"}`} />
                    <p className="text-[10px] text-muted-foreground">{b.label}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Activity History */}
            <GlassCard>
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-ocean" /> Activity History
              </h3>
              <div className="space-y-3">
                {activityHistory.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground truncate">{a.activity}</p>
                      <p className="text-xs text-muted-foreground">{a.date} · {a.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Leaderboard */}
          <GlassCard className="mt-6">
            <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-sun" /> Community Leaderboard
            </h3>
            <div className="space-y-2">
              {[
                { rank: 1, name: "Priya M.", streak: 45, sessions: 120 },
                { rank: 2, name: "Arjun K.", streak: 38, sessions: 98 },
                { rank: 3, name: "Sneha R.", streak: 30, sessions: 87 },
                { rank: 4, name: "You", streak: 12, sessions: 47 },
                { rank: 5, name: "Amit D.", streak: 10, sessions: 42 },
              ].map((u) => (
                <div key={u.rank} className={`flex items-center gap-4 p-3 rounded-lg ${u.name === "You" ? "bg-primary/10 border border-primary/20" : "hover:bg-muted/50"} transition-colors`}>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    u.rank === 1 ? "bg-sun/20 text-sun" : u.rank === 2 ? "bg-muted text-muted-foreground" : u.rank === 3 ? "bg-lotus/20 text-lotus" : "bg-muted text-muted-foreground"
                  }`}>
                    {u.rank}
                  </span>
                  <span className="flex-1 font-medium text-sm">{u.name}</span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Flame className="h-3 w-3 text-sun" />{u.streak}d</span>
                  <span className="text-xs text-muted-foreground">{u.sessions} sessions</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
    </Layout>
  );
}
