import { Link } from "react-router-dom";
import { Leaf, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-heading text-lg font-bold">YogaFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">Empowering wellness through yoga awareness and mindful practice for everyone.</p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Yoga For</h4>
            <div className="space-y-2 text-sm">
              <Link to="/yoga-children" className="block text-muted-foreground hover:text-primary transition-colors">Children</Link>
              <Link to="/yoga-adults" className="block text-muted-foreground hover:text-primary transition-colors">Adults</Link>
              <Link to="/yoga-seniors" className="block text-muted-foreground hover:text-primary transition-colors">Senior Citizens</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Solutions</h4>
            <div className="space-y-2 text-sm">
              <Link to="/solutions" className="block text-muted-foreground hover:text-primary transition-colors">Stress Relief</Link>
              <Link to="/solutions" className="block text-muted-foreground hover:text-primary transition-colors">Better Sleep</Link>
              <Link to="/solutions" className="block text-muted-foreground hover:text-primary transition-colors">Mental Health</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/poses" className="block text-muted-foreground hover:text-primary transition-colors">Pose Library</Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Yoga</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">Made with <Heart className="h-3 w-3 text-lotus" /> for CEP Project — YogaFlow © 2026</p>
        </div>
      </div>
    </footer>
  );
}
