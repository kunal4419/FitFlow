import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle, Play, Clock, BarChart3, Repeat } from "lucide-react";
import { cn, shadows } from "../lib/utils";
import VideoPlayer from "../components/VideoPlayer";

export default function PullDay() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [videoPlayer, setVideoPlayer] = useState({ isOpen: false, video: "", title: "" });

  const exercises = [
    {
      id: 1,
      name: "Lat Pulldown",
      sets: "4 sets",
      reps: "8-12 reps",
      video: "/assets/lat-pulldown.mp4",
      description: "Primary back exercise for building width and V-taper.",
      tips: ["Pull to upper chest", "Squeeze shoulder blades", "Control the negative"],
      muscles: ["Lats", "Rhomboids", "Rear Delts", "Biceps"]
    },
    {
      id: 2,
      name: "Barbell Row",
      sets: "4 sets",
      reps: "8-12 reps", 
      video: "/assets/barbell-row.mp4",
      description: "Compound movement for overall back thickness and strength.",
      tips: ["Hinge at hips", "Row to lower chest", "Keep core engaged"],
      muscles: ["Middle Traps", "Rhomboids", "Lats", "Biceps"]
    },
    {
      id: 3,
      name: "Barbell Biceps Curl",
      sets: "3 sets",
      reps: "10-12 reps",
      video: "/assets/barbell-biceps-curl.mp4",
      description: "Classic bicep builder for mass and peak development.", 
      tips: ["Keep elbows stationary", "Full range of motion", "Squeeze at top"],
      muscles: ["Biceps", "Forearms"]
    },
    {
      id: 4,
      name: "Straight Arm Lat Pulldown",
      sets: "3 sets",
      reps: "12-15 reps",
      video: "/assets/straight-arm-lat-pulldown.mp4", 
      description: "Isolation exercise targeting lat width and mind-muscle connection.",
      tips: ["Keep arms straight", "Focus on lats", "Controlled movement"],
      muscles: ["Lats", "Rear Delts"]
    },
    {
      id: 5,
      name: "Rope Hammer Curl",
      sets: "3 sets",
      reps: "12-15 reps", 
      video: "/assets/rope-hammer-curl.mp4",
      description: "Neutral grip curl targeting brachialis and forearms.",
      tips: ["Neutral grip throughout", "Control the weight", "Focus on squeeze"],
      muscles: ["Brachialis", "Biceps", "Forearms"]
    },
    {
      id: 6,
      name: "Reverse Pec Deck Fly",
      sets: "3 sets", 
      reps: "12-15 reps",
      video: "/assets/reverse-pec-deck-fly.mp4",
      description: "Rear delt isolation for balanced shoulder development.",
      tips: ["Lead with pinkies", "Squeeze at back", "Don't use momentum"],
      muscles: ["Rear Delts", "Rhomboids"]
    }
  ];

  const handlePlayVideo = (exercise, event) => {
    event.stopPropagation(); // Prevent the card click event
    setVideoPlayer({
      isOpen: true,
      video: exercise.video,
      title: exercise.name
    });
  };

  const closeVideoPlayer = () => {
    setVideoPlayer({ isOpen: false, video: "", title: "" });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                <ArrowDownCircle size={32} />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
                Pull Day
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground-secondary mb-8">
              Back & Biceps • {exercises.length} Exercises • 45-60 minutes
            </p>

            <div className="flex items-center justify-center space-x-8 text-sm text-foreground-muted">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>45-60 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-4 h-4" />
                <span>Intermediate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Repeat className="w-4 h-4" />
                <span>2x per week</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exercise List */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {exercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={cn(
                  "group p-6 rounded-2xl border border-border bg-accent/50 backdrop-blur-sm cursor-pointer",
                  "hover:border-blue-500/30 hover:bg-accent/70 transition-all duration-300",
                  shadows.card,
                  "hover:shadow-xl hover:shadow-blue-500/10"
                )}
                onClick={() => setSelectedExercise(exercise)}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <button
                      onClick={(e) => handlePlayVideo(exercise, e)}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-200"
                    >
                      <Play className="w-6 h-6 text-blue-400" />
                    </button>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-blue-400 transition-colors duration-200">
                      {exercise.name}
                    </h3>
                    <p className="text-foreground-secondary text-sm mb-3">
                      {exercise.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-xs text-foreground-muted">
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md">
                        {exercise.sets}
                      </span>
                      <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-md">
                        {exercise.reps}
                      </span>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-1">
                      {exercise.muscles.map((muscle) => (
                        <span 
                          key={muscle}
                          className="text-2xs px-2 py-1 bg-accent text-foreground-muted rounded"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exercise Modal */}
      {selectedExercise && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedExercise(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="max-w-2xl w-full bg-background-secondary rounded-2xl border border-border overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                {selectedExercise.name}
              </h2>
              
              <p className="text-foreground-secondary mb-4">
                {selectedExercise.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-accent rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">Sets & Reps</h4>
                  <p className="text-foreground-secondary">{selectedExercise.sets}</p>
                  <p className="text-foreground-secondary">{selectedExercise.reps}</p>
                </div>
                
                <div className="p-4 bg-accent rounded-xl">
                  <h4 className="font-semibold text-foreground mb-2">Target Muscles</h4>
                  {selectedExercise.muscles.map((muscle) => (
                    <p key={muscle} className="text-foreground-secondary text-sm">{muscle}</p>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Exercise Tips</h4>
                <ul className="space-y-2">
                  {selectedExercise.tips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2 text-foreground-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={() => setSelectedExercise(null)}
                className="w-full px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Video Player */}
      <VideoPlayer
        videoSrc={videoPlayer.video}
        title={videoPlayer.title}
        isOpen={videoPlayer.isOpen}
        onClose={closeVideoPlayer}
      />
    </div>
  );
}
