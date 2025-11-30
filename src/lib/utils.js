import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const animations = {
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up", 
  slideDown: "animate-slide-down",
  scaleIn: "animate-scale-in",
  glow: "animate-glow"
};

export const gradients = {
  primary: "bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600",
  primaryText: "bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent",
  hero: "bg-gradient-to-br from-background via-background-secondary to-background-tertiary",
  card: "bg-gradient-to-b from-accent/50 to-accent-secondary/50",
  glow: "bg-gradient-to-r from-primary-500/20 via-primary-400/30 to-primary-600/20"
};

export const shadows = {
  glow: "shadow-lg shadow-primary-500/25",
  glowHover: "shadow-xl shadow-primary-500/40",
  card: "shadow-lg shadow-black/25",
  cardHover: "shadow-xl shadow-black/40"
};
