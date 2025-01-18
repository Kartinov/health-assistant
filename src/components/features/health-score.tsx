import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HealthScoreProps {
  score: number;
  ingredients: string[];
}

export function HealthScore({ score, ingredients }: HealthScoreProps) {
  const getScoreInfo = (score: number) => {
    if (score <= 30) {
      return {
        label: 'Poor',
        color: 'text-red-500 dark:text-red-400',
        bgColor: 'bg-red-500 dark:bg-red-400',
        icon: XCircle,
        description: 'This product contains potentially harmful ingredients.'
      };
    }
    if (score <= 70) {
      return {
        label: 'Moderate',
        color: 'text-yellow-500 dark:text-yellow-400',
        bgColor: 'bg-yellow-500 dark:bg-yellow-400',
        icon: AlertTriangle,
        description: 'This product contains some concerning ingredients.'
      };
    }
    return {
      label: 'Excellent',
      color: 'text-green-500 dark:text-green-400',
      bgColor: 'bg-green-500 dark:bg-green-400',
      icon: CheckCircle2,
      description: 'This product contains mostly healthy ingredients.'
    };
  };

  const scoreInfo = getScoreInfo(score);
  const Icon = scoreInfo.icon;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className={cn("w-6 h-6", scoreInfo.color)} />
            Health Score
          </div>
          <div className={cn(
            "px-3 py-1 rounded-full text-sm font-medium text-white",
            scoreInfo.bgColor
          )}>
            {scoreInfo.label}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Score: {score}%</span>
              <span className="text-sm text-muted-foreground">{scoreInfo.description}</span>
            </div>
            <Progress
              value={score}
              className="h-3"
              indicatorClassName={cn(
                scoreInfo.bgColor,
                "transition-all duration-500"
              )}
            />
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              Ingredients Analysis
              <span className="text-muted-foreground font-normal">
                ({ingredients.length} ingredients found)
              </span>
            </h4>
            <div className="bg-muted/50 rounded-lg divide-y divide-border">
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm first:rounded-t-lg last:rounded-b-lg hover:bg-muted/80 transition-colors"
                >
                  {ingredient}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
