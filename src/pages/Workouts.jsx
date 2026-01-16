import { Link } from "react-router-dom";
import { 
  ArrowUpCircle, 
  ArrowDownCircle, 
  Circle,
  ChevronRight,
  Clock,
  Target,
  Flame
} from "lucide-react";
import { cn, gradients, shadows } from "../lib/utils";
import * as Accordion from "@radix-ui/react-accordion";

export default function Workouts() {
  const workoutSplit = [
    {
      id: "push",
      title: "Push Day",
      subtitle: "Chest, Shoulders, Triceps",
      icon: <ArrowUpCircle className="w-6 h-6" />,
      path: "/push",
      color: "from-red-500 to-pink-500",
      duration: "45-60 min",
      difficulty: "Intermediate",
      exercises: [
        "Incline Dumbbell Press",
        "Flat Dumbbell Press", 
        "Skullcrushers",
        "Dumbbell Lateral Raises",
        "Standing Cable Decline Press",
        "Triceps Pushdown"
      ],
      description: "Focus on pushing movements that target chest, shoulders, and triceps. Perfect for building upper body pressing strength and muscle mass."
    },
    {
      id: "pull",
      title: "Pull Day",
      subtitle: "Back, Biceps",
      icon: <ArrowDownCircle className="w-6 h-6" />,
      path: "/pull",
      color: "from-blue-500 to-cyan-500",
      duration: "45-60 min",
      difficulty: "Intermediate",
      exercises: [
        "Lat Pulldown",
        "Barbell Row",
        "Barbell Biceps Curl",
        "Straight Arm Lat Pulldown",
        "Rope Hammer Curl",
        "Reverse Pec Deck Fly"
      ],
      description: "Pulling movements that develop back width and thickness while building strong, defined biceps."
    },
    {
      id: "legs",
      title: "Leg Day",
      subtitle: "Quads, Hamstrings, Calves",
      icon: <Circle className="w-6 h-6" />,
      path: "/legs",
      color: "from-green-500 to-emerald-500",
      duration: "60-75 min",
      difficulty: "Advanced",
      exercises: [
        "Squat",
        "Hamstring Leg Curl",
        "Leg Press",
        "Dumbbell Shoulder Press",
        "Leg Extension",
        "Calf Raises"
      ],
      description: "Complete lower body training targeting all major muscle groups for strength, power, and stability."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Choose your{" "}
              <span className={gradients.primaryText}>
                workout split.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground-secondary">
              Select from our scientifically designed workout routines. Each split is optimized 
              for maximum muscle growth and recovery.
            </p>
          </div>

          {/* Workout Cards */}
          <Accordion.Root type="single" collapsible className="space-y-6 no-accordion-anim">
            {workoutSplit.map((workout, index) => (
              <Accordion.Item
                key={workout.id}
                value={workout.id}
                asChild
              >
                <div
                  className={cn(
                    "group rounded-2xl border border-border bg-accent/50 backdrop-blur-sm overflow-hidden",
                    "hover:border-border-secondary hover:bg-accent/70 transition-all duration-300",
                    shadows.card,
                    "hover:shadow-xl"
                  )}
                >
                  <Accordion.Trigger className="w-full p-8 text-left flex items-center justify-between hover:bg-accent/30 transition-colors duration-200">
                    <div className="flex items-center space-x-6">
                      <div className={cn(
                        "w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center text-white",
                        workout.color
                      )}>
                        {workout.icon}
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-1">
                          {workout.title}
                        </h3>
                        <p className="text-foreground-secondary">
                          {workout.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <ChevronRight className="w-6 h-6 text-foreground-muted group-data-[state=open]:rotate-90 transition-transform duration-200" />
                  </Accordion.Trigger>
                  
                  <Accordion.Content className="px-8 pb-8">
                    <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border/50">
                      <div className="space-y-4">
                        <p className="text-foreground-secondary leading-relaxed">
                          {workout.description}
                        </p>
                        
                        <div className="flex items-center space-x-6 text-sm text-foreground-muted">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{workout.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Target className="w-4 h-4" />
                            <span>{workout.difficulty}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Flame className="w-4 h-4" />
                            <span>{workout.exercises.length} exercises</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Exercise List:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {workout.exercises.map((exercise) => (
                            <div 
                              key={exercise}
                              className="flex items-center space-x-2 text-sm text-foreground-secondary"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                              <span>{exercise}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Link to={workout.path}>
                          <button
                            className={cn(
                              "mt-4 px-6 py-3 rounded-lg font-medium text-white transition-all duration-300",
                              `bg-gradient-to-r ${workout.color}`,
                              "hover:shadow-lg"
                            )}
                          >
                            Start {workout.title}
                            <ChevronRight className="inline ml-2 w-4 h-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </Accordion.Content>
                </div>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "p-8 rounded-2xl border border-border",
              gradients.card,
              "backdrop-blur-xl"
            )}
          >
            <h2 className="text-2xl font-bold mb-4">
              Training Tips
            </h2>
            <div className="space-y-3 text-foreground-secondary">
              <p>• Rest 48-72 hours between training the same muscle groups</p>
              <p>• Focus on progressive overload - gradually increase weight or reps</p>
              <p>• Maintain proper form throughout all exercises</p>
              <p>• Stay hydrated and fuel your workouts with adequate nutrition</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
