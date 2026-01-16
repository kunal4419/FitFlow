import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn, animations } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change and restore scroll
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Workouts", path: "/workouts" },
    { name: "Push", path: "/push" },
    { name: "Pull", path: "/pull" },
    { name: "Legs", path: "/legs" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 relative",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
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

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                    location.pathname === item.path
                      ? "text-primary-400"
                      : "text-foreground-secondary hover:text-foreground"
                  )}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-500/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-accent text-foreground-secondary hover:text-foreground hover:bg-accent-secondary transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.28, ease: [0.4, 0.0, 0.2, 1] }}
        className={cn(
          "md:hidden absolute inset-x-0 top-16 overflow-hidden border-b border-border",
          "bg-background-secondary/95 backdrop-blur-md shadow-xl shadow-black/25",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200",
                location.pathname === item.path
                  ? "bg-primary-500/10 text-primary-400"
                  : "text-foreground-secondary hover:text-foreground hover:bg-accent"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
