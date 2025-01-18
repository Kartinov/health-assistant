'use client';

import { useState } from 'react';
import { ImageUpload } from '@/components/features/image-upload';
import { HealthScore } from '@/components/features/health-score';

export default function Home() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [healthData, setHealthData] = useState<{ score: number; ingredients: string[] } | null>(null);

  const handleImageUpload = async (file: File) => {
    setIsProcessing(true);
    // TODO: Implement actual image processing logic with Gemini
    // This is just a mock implementation
    setTimeout(() => {
      setHealthData({
        score: 75,
        ingredients: [
          'Water',
          'Sugar',
          'Natural Flavors',
          'Citric Acid',
          'Vitamin C',
        ],
      });
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Health Score</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload an image of your product's ingredient list and get an instant health score based on the ingredients.
          </p>
        </div>

        <div className="space-y-8">
          <ImageUpload onImageUpload={handleImageUpload} isLoading={isProcessing} />
          
          {healthData && (
            <HealthScore
              score={healthData.score}
              ingredients={healthData.ingredients}
            />
          )}
        </div>
      </div>
    </main>
  );
}
