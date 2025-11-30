import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Target, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { cn, gradients, shadows } from "../lib/utils";

export default function Home() {
  const features = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Push Day",
      description: "Chest, shoulders, and triceps workouts designed for maximum growth.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Pull Day", 
      description: "Back and biceps exercises to build a powerful upper body.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Leg Day",
      description: "Comprehensive lower body training for strength and stability.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "3", label: "Workout Days" },
    { number: "20+", label: "Exercises" },
    { number: "100%", label: "Results" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary-500/5 via-transparent to-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium"
            >
              <Zap className="w-4 h-4 mr-2" />
              The Ultimate Workout Split
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Build faster with{" "}
              <span className={cn(gradients.primaryText, "animate-glow")}>
                Precision
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground-secondary leading-relaxed">
              A structured push–pull–legs system crafted using proven methods and optimal recovery principles.
Created by Kunal with a focus on effectiveness and simplicity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link to="/workouts">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "group px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300",
                    gradients.primary,
                    shadows.glow,
                    "hover:shadow-xl hover:shadow-primary-500/40"
                  )}
                >
                  Get Started
                  <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl font-semibold bg-accent hover:bg-accent-secondary text-foreground border border-border hover:border-border-secondary transition-all duration-300"
              >
                View Exercises
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-400">
                  {stat.number}
                </div>
                <div className="text-foreground-secondary text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Stack your{" "}
              <span className={gradients.primaryText}>
                workout routine.
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground-secondary">
              Mix and match exercises to rapidly optimize your training. Everything fits 
              together perfectly out of the box.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={cn(
                  "group p-8 rounded-2xl border border-border bg-accent/50 backdrop-blur-sm",
                  "hover:border-border-secondary hover:bg-accent/70 transition-all duration-300",
                  shadows.card,
                  "hover:shadow-xl hover:shadow-black/40"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-6 text-white",
                  feature.color
                )}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-foreground-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={cn(
              "p-12 rounded-3xl border border-border",
              gradients.card,
              "backdrop-blur-xl"
            )}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to start your{" "}
              <span className={gradients.primaryText}>
                transformation?
              </span>
            </h2>
            
            <p className="text-lg text-foreground-secondary mb-8 max-w-2xl mx-auto">
              Join thousands who have transformed their physique with our scientifically-backed 
              push, pull, legs split routine.
            </p>
            
            <Link to="/workouts">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300",
                  gradients.primary,
                  shadows.glow,
                  "hover:shadow-xl hover:shadow-primary-500/40"
                )}
              >
                Start Training Today
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
