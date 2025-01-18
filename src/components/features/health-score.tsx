import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface HealthScoreProps {
  score: number;
  ingredients: string[];
}

export function HealthScore({ score, ingredients }: HealthScoreProps) {
  const getScoreColor = (score: number) => {
    if (score <= 30) return 'bg-red-500';
    if (score <= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getScoreText = (score: number) => {
    if (score <= 30) return 'Poor';
    if (score <= 70) return 'Moderate';
    return 'Excellent';
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Health Score
          <span className={`text-white px-3 py-1 rounded-full text-sm ${getScoreColor(score)}`}>
            {getScoreText(score)}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Score: {score}%</span>
            </div>
            <Progress
              value={score}
              className="h-3"
              indicatorClassName={getScoreColor(score)}
            />
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Ingredients:</h4>
            <div className="bg-muted p-3 rounded-md">
              <ul className="list-disc list-inside space-y-1">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="text-sm">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
