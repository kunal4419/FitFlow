import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import PushDay from "./pages/PushDay";
import PullDay from "./pages/PullDay";
import LegDay from "./pages/LegDay";
import { cn } from "./lib/utils";

export default function App() {

  function PageTransition({ children }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.4,
          ease: [0.4, 0.0, 0.2, 1]
        }}
      >
        {children}
      </motion.div>
    );
  }

  function AnimatedRoutes() {
    const location = useLocation();
    
    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            } 
          />
          <Route 
            path="/workouts" 
            element={
              <PageTransition>
                <Workouts />
              </PageTransition>
            } 
          />
          <Route 
            path="/push" 
            element={
              <PageTransition>
                <PushDay />
              </PageTransition>
            } 
          />
          <Route 
            path="/pull" 
            element={
              <PageTransition>
                <PullDay />
              </PageTransition>
            } 
          />
          <Route 
            path="/legs" 
            element={
              <PageTransition>
                <LegDay />
              </PageTransition>
            } 
          />
        </Routes>
      </AnimatePresence>
    );
  }

  function ConditionalFooter() {
    const location = useLocation();
    // Only show footer on the home page
    return location.pathname === "/" ? <Footer /> : null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <ConditionalFooter />
        </div>
      </Router>
    </div>
  );
}
