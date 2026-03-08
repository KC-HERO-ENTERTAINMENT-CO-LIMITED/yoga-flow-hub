import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import GlassCard from "@/components/GlassCard";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="hero-section section-padding pt-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Get in Touch" title="Contact Us" subtitle="Have questions about yoga or our programs? We'd love to hear from you." />
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Send a Message</h3>
            {submitted ? (
              <GlassCard className="text-center py-12">
                <Send className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-heading text-lg font-semibold mb-2">Message Sent!</h4>
                <p className="text-sm text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
              </GlassCard>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Your message..." />
                </div>
                <button type="submit" className="w-full py-3 rounded-lg gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-xl font-semibold mb-6">Contact Info</h3>
            <GlassCard className="flex items-center gap-4">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">hello@yogaflow.edu</p>
              </div>
            </GlassCard>
            <GlassCard className="flex items-center gap-4">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
            </GlassCard>
            <GlassCard className="flex items-center gap-4">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">Yoga Center, University Campus</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </Layout>
  );
}
