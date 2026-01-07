import { motion } from "framer-motion";
import { Dumbbell, Github, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { cn, gradients } from "../lib/utils";

export default function Footer() {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Workouts", path: "/workouts" },
    { name: "Push Day", path: "/push" },
    { name: "Pull Day", path: "/pull" },
    { name: "Leg Day", path: "/legs" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, href: "#" },
    { name: "Twitter", icon: <Twitter size={20} />, href: "#" },
    { name: "Instagram", icon: <Instagram size={20} />, href: "#" },
  ];

  return (
    <footer className="border-t border-border bg-background-secondary/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-500 text-white"
              >
                <Dumbbell size={20} />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Fit-Flow
              </span>
            </Link>
            <p className="text-foreground-secondary text-sm leading-relaxed max-w-xs">
              Scientifically designed workout routines for optimal muscle growth and recovery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-foreground-secondary hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground-secondary hover:text-primary-400 transition-colors duration-200 text-sm">
                  Exercise Library
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-secondary hover:text-primary-400 transition-colors duration-200 text-sm">
                  Nutrition Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-secondary hover:text-primary-400 transition-colors duration-200 text-sm">
                  Progress Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground-secondary hover:text-primary-400 transition-colors duration-200 text-sm">
                  Recovery Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-accent hover:bg-accent-secondary text-foreground-secondary hover:text-primary-400 transition-all duration-200"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-foreground-secondary text-sm">
            © 2025 FitFlow by Kunal. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-foreground-secondary hover:text-primary-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground-secondary hover:text-primary-400 transition-colors duration-200 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
