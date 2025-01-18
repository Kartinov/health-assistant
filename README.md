# Health Score Application

An AI-powered application that analyzes product ingredients from images and provides health scores.

## Features

- 📸 Image upload with drag-and-drop support
- 🤖 AI-powered ingredient recognition (using Gemini Model 2.0)
- 🎯 Health score calculation with color-coded results
- 📋 Detailed ingredient listing and analysis
- 🌓 Dark mode support
- 📱 Responsive design

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (version 18.0.0 or higher)
- npm (version 9.0.0 or higher)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/health-score.git
   cd health-score
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Development Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide Icons
- **Theme**: next-themes for dark mode
- **Language**: TypeScript

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── features/    # Feature-specific components
│   └── ui/          # Reusable UI components
└── lib/             # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
