# WorkoutSplit - Modern Fitness App

A beautifully designed workout split application featuring a modern, clean aesthetic inspired by Nexus UI. Built with React, Tailwind CSS, and Radix UI components for a premium user experience.

## 🎨 Design Features

### Visual Style
- **Dark Theme**: Professional dark color scheme as default
- **Gradient Effects**: Smooth color transitions with subtle glows  
- **Typography**: Clean Inter font with proper hierarchy
- **Color Palette**: Primary purple-blue (#6366F1) with accent colors
- **Spacing**: Generous whitespace for modern feel
- **Animations**: Smooth transitions and micro-interactions

### Modern Components  
- **Navigation**: Fixed navbar with smooth animations and theme toggle
- **Hero Section**: Large impactful headings with gradient text effects
- **Cards**: Clean workout cards with hover effects and shadows
- **Accordion**: Expandable workout sections for organization
- **Modals**: Exercise detail overlays with backdrop blur
- **Responsive**: Mobile-first responsive design

## 🚀 Technology Stack

- **React 19** - Latest React with modern hooks
- **Tailwind CSS** - Utility-first styling system
- **Radix UI** - Accessible component primitives  
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful modern icons

## 📱 Features

### Workout Programs
- **Push Day** - Chest, shoulders, and triceps workouts
- **Pull Day** - Back and biceps training routines  
- **Leg Day** - Complete lower body development

### User Experience
- **Interactive Exercise Library** - Detailed exercise information
- **Responsive Design** - Optimized for all devices
- **Dark/Light Theme** - Toggle between themes
- **Smooth Animations** - Enhanced user interactions
- **Accessibility** - WCAG compliant components

## 🎯 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kunal4419/Workout-Split-Web.git
   cd workout-split
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with theme toggle
│   └── Footer.jsx      # Footer with links
├── pages/              # Page components  
│   ├── Home.jsx        # Hero section with features
│   ├── Workouts.jsx    # Accordion workout selection
│   ├── PushDay.jsx     # Push workout details
│   ├── PullDay.jsx     # Pull workout details
│   └── LegDay.jsx      # Leg workout details
├── lib/                # Utilities
│   └── utils.js        # Helper functions
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Design System

### Color Palette
```css
Primary: #6366F1 (Indigo)
Background: #0a0a0a (Deep Black)  
Secondary: #111111 (Dark Gray)
Accent: #18181b (Charcoal)
Text: #ffffff (White)
Muted: #a1a1aa (Light Gray)
```

### Component Colors
- **Push Day**: Red to Pink gradient
- **Pull Day**: Blue to Cyan gradient  
- **Leg Day**: Green to Emerald gradient

## 📱 Pages

### Home (`/`)
- Hero section with gradient text effects
- Feature cards highlighting workout splits
- Stats display and call-to-action
- Background animations and effects

### Workouts (`/workouts`)  
- Accordion-style workout selection
- Exercise counts and difficulty indicators
- Expandable details with tips and duration
- Smooth hover and expand animations

### Individual Workout Pages
- Exercise library with modal details
- Sets, reps, and muscle targeting info
- Exercise tips and proper form guidance
- Color-coded by workout type

## 🔧 Customization

The design system is built with CSS custom properties:

- **Colors**: Defined in `tailwind.config.js`
- **Animations**: Custom keyframes and transitions  
- **Components**: Utility classes in `lib/utils.js`
- **Spacing**: Consistent scale using Tailwind

## 📦 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure build command: `npm run build`
4. Set publish directory: `dist`

### Other Platforms
The app works with any static hosting service:
- Vercel
- GitHub Pages  
- Firebase Hosting
- AWS S3 + CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly  
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Design inspired by [Nexus UI](https://nexus-ui-dev.netlify.app/)
- Icons by [Lucide](https://lucide.dev/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ for the fitness community**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
