import React, { useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ImageIcon, UploadCloud } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  isLoading?: boolean;
}

export function ImageUpload({ onImageUpload, isLoading = false }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const validateFile = (file: File): boolean => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return false;
    }
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError('Image size should be less than 5MB');
      return false;
    }
    return true;
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setError(null);

    const file = e.dataTransfer.files?.[0];
    if (file && validateFile(file)) {
      handleFile(file);
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError(null);
    if (file && validateFile(file)) {
      handleFile(file);
    }
  }, []);

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onImageUpload(file);
  };

  const clearImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setError(null);
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (input) input.value = '';
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="w-6 h-6" />
          Upload Ingredient List
        </CardTitle>
        <CardDescription>
          Upload an image of your product's ingredient list to get a health score. 
          Supported formats: JPG, PNG, GIF (max 5MB)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={cn(
            "relative border-2 border-dashed rounded-lg transition-colors",
            dragActive ? "border-primary bg-primary/5" : "border-muted",
            isLoading && "opacity-50 cursor-not-allowed",
            "hover:border-primary hover:bg-primary/5"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*"
            onChange={handleChange}
            disabled={isLoading}
          />
          
          {previewUrl ? (
            <div className="relative aspect-video">
              <img
                src={previewUrl}
                alt="Preview"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <UploadCloud className="w-12 h-12 mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">
                Drag and drop your image here, or click to select
              </p>
              <Button variant="secondary" size="sm" className="mt-2">
                Choose File
              </Button>
            </div>
          )}
          
          {isLoading && (
            <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center rounded-lg">
              <div className="flex flex-col items-center gap-2">
                <Spinner size="lg" />
                <p className="text-sm font-medium">Analyzing ingredients...</p>
              </div>
            </div>
          )}
        </div>
        
        {error && (
          <p className="mt-2 text-sm text-destructive">{error}</p>
        )}
        
        {previewUrl && !isLoading && (
          <div className="mt-4 flex justify-end">
            <Button
              onClick={clearImage}
              variant="outline"
              size="sm"
              className="text-destructive hover:text-destructive"
            >
              Clear Image
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
