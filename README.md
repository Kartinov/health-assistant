# Health Score Application

## Project Overview
The Health Score Application is an AI-powered web platform that analyzes product ingredients from images and provides comprehensive health assessments. Using advanced image recognition and natural language processing, it helps users make informed decisions about the products they consume.

## Core Functionality
The application processes images of product ingredient lists through the following pipeline:
1. Image Upload & Processing
2. Ingredient Recognition (Gemini Model 2.0)
3. Health Score Calculation
4. Detailed Analysis Presentation

## Key Features

### Image Processing
- 📸 Drag-and-drop image upload interface
- 🔍 Support for multiple image formats (JPEG, PNG, WebP)
- ⚡ Real-time image preview and validation
- 📏 Automatic image resizing and optimization
- ❌ Invalid file type and size detection

### AI Integration
- 🤖 Powered by Google's Gemini Model 2.0
- 📝 Accurate ingredient text extraction
- 🔄 Natural language processing for ingredient analysis
- 📊 Machine learning-based health scoring
- 🎯 Confidence scoring for recognition accuracy

### Health Analysis
- 💯 Numerical health score (0-100)
- 🎨 Color-coded health indicators
- 📋 Detailed ingredient breakdown
- ⚠️ Allergen and sensitivity warnings
- 💊 Nutritional impact assessment

### User Interface
- 🌓 Dark/Light mode support
- 📱 Responsive design (mobile-first approach)
- ⚡ Real-time updates and animations
- 🎨 Modern, clean aesthetic
- 👥 Accessibility-compliant design

## Technical Architecture

### Frontend Architecture
```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main application page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── features/          # Feature-specific components
│   │   ├── image-upload/  # Image upload functionality
│   │   └── health-score/  # Health score display
│   └── ui/               # Reusable UI components
└── lib/                  # Utility functions
    ├── types/            # TypeScript definitions
    └── utils/            # Helper functions
```

### Tech Stack
- **Framework**: Next.js 14 (React 19)
- **Language**: TypeScript 5.2
- **Styling**: 
  - Tailwind CSS 3.4
  - CSS Modules
  - CSS Variables for theming
- **UI Components**: 
  - shadcn/ui (accessible components)
  - Lucide Icons
- **State Management**: React Context
- **Theme Management**: next-themes
- **Image Processing**: Sharp
- **Testing**: Jest + React Testing Library

### API Integration
- **Image Recognition**: Google Gemini Model 2.0
- **Data Processing**: Server-side Node.js
- **Caching**: Next.js built-in cache

## Development Setup

### Prerequisites
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Installation
```bash
# Clone repository
git clone https://github.com/yourusername/health-score.git
cd health-score

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables
```bash
# Required for development
NEXT_PUBLIC_API_URL=http://localhost:3000
GEMINI_API_KEY=your_api_key_here

# Optional
DEBUG_MODE=true
CACHE_DURATION=3600
```

### Development Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npm run test        # Run tests
npm run type-check  # Run TypeScript checks
```

## Code Conventions

### Component Structure
```typescript
// Standard component template
import { type FC } from 'react'
import styles from './ComponentName.module.css'

interface ComponentNameProps {
  // Props definition
}

export const ComponentName: FC<ComponentNameProps> = ({ props }) => {
  // Component logic
  return (
    // JSX
  )
}
```

### Naming Conventions
- **Files**: kebab-case (e.g., `image-upload.tsx`)
- **Components**: PascalCase (e.g., `ImageUpload`)
- **Functions**: camelCase (e.g., `processImage`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_FILE_SIZE`)

### State Management
- Use React Context for global state
- Prefer hooks for component-level state
- Implement proper error boundaries

## Testing Strategy
- Unit tests for utility functions
- Component tests with React Testing Library
- Integration tests for main features
- E2E tests for critical user flows

## Performance Optimization
- Image optimization with Sharp
- Code splitting with dynamic imports
- Proper caching strategies
- Lazy loading of components
- Performance monitoring with Lighthouse

## Security Considerations
- Input validation for file uploads
- Secure API key handling
- XSS prevention
- CORS configuration
- Rate limiting

## Contributing
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## AI Development Notes
This section contains information specifically for AI models working with this codebase:

### Key Files for AI Analysis
- `src/components/features/image-upload.tsx`: Image processing logic
- `src/components/features/health-score.tsx`: Score calculation
- `src/lib/utils/image-processing.ts`: Image manipulation utilities
- `src/lib/utils/health-calculations.ts`: Health score algorithms

### Component Dependencies
All components are designed to be modular with clear interfaces. AI models should focus on:
- Type definitions in `src/lib/types`
- Component props interfaces
- State management patterns
- Error handling approaches

### Future Development Areas
- Enhanced ingredient recognition
- Personalized health recommendations
- Historical data analysis
- Social sharing features
- Offline support
