# Cloud Konnect - Event Management Platform

A modern Next.js application built with Firebase Studio for managing cloud technology events and conferences.

🌐 **Live Site**: [https://studio--cloud-konnect.us-central1.hosted.app/](https://studio--cloud-konnect.us-central1.hosted.app/)

## 🚀 Features

- **Hero Section**: Eye-catching header with animated logo and event countdown timer
- **Speaker Management**: Interactive carousel displaying speakers and session topics
- **AI Session Suggester**: AI-powered tool that suggests relevant sessions based on user profiles
- **Community Stats**: Display of attendee numbers, speakers, and community metrics
- **Registration System**: Early bird pricing and registration management
- **Responsive Design**: Mobile-first approach with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives
- **AI Integration**: Google AI Genkit
- **Firebase**: Backend services and hosting
- **TypeScript**: Full type safety
- **Form Handling**: React Hook Form with Zod validation

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── favicon.ico        # App favicon
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main landing page
├── components/            # Reusable React components
│   ├── ui/               # Base UI components (Radix UI)
│   ├── ai-session-suggester.tsx  # AI-powered session recommendations
│   ├── animated-counter.tsx       # Animated number counters
│   ├── countdown.tsx             # Event countdown timer
│   └── logo.tsx                  # Animated logo component
├── ai/                   # AI and Genkit configuration
│   ├── flows/           # AI flow definitions
│   ├── dev.ts          # Development AI server
│   └── genkit.ts       # Genkit configuration
├── hooks/               # Custom React hooks
│   ├── use-mobile.tsx  # Mobile detection hook
│   └── use-toast.ts    # Toast notification hook
└── lib/                # Utility functions
    └── utils.ts        # Common utility functions
```

## 🎨 Design System

- **Primary**: White (#FFFFFF) - Main branding
- **Secondary**: Red (#EA4335) - CTAs and accents
- **Tertiary**: Green (#34A853) - Positive messaging
- **Quaternary**: Yellow (#FBBC04) - Interactive elements
- **Quinary**: Blue (#4285F4) - Links and UI elements
- **Font**: Poppins - Modern geometric sans-serif

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd studio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Add your Firebase and Google AI API keys
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run genkit:dev` - Start Genkit AI development server
- `npm run genkit:watch` - Start Genkit with file watching

## 🤖 AI Features

The application includes AI-powered session suggestions using Google's Genkit framework. The AI analyzes user profiles and preferences to recommend relevant sessions and speakers.

### AI Development

To work with AI features:

```bash
# Start the AI development server
npm run genkit:dev

# Or with file watching
npm run genkit:watch
```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - Shadcn/ui component configuration
- `apphosting.yaml` - Firebase App Hosting configuration

## 🚀 Deployment

This project is configured for Firebase App Hosting:

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
