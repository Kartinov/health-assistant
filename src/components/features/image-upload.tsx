import React, { useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  isLoading?: boolean;
}

export function ImageUpload({ onImageUpload, isLoading = false }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleFile(file);
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  }, []);

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onImageUpload(file);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Upload Ingredient List</CardTitle>
        <CardDescription>
          Upload an image of your product's ingredient list to get a health score
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`relative border-2 border-dashed rounded-lg p-6 ${
            dragActive ? 'border-primary' : 'border-gray-300'
          } ${isLoading ? 'opacity-50' : ''}`}
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
            <div className="text-center">
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Drag and drop your image here, or click to select a file
                </p>
              </div>
            </div>
          )}
          
          {isLoading && (
            <div className="absolute inset-0 bg-background/50 flex items-center justify-center rounded-lg">
              <div className="animate-pulse">Processing...</div>
            </div>
          )}
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button
            onClick={() => {
              setPreviewUrl(null);
              // Reset file input
              const input = document.querySelector('input[type="file"]') as HTMLInputElement;
              if (input) input.value = '';
            }}
            variant="outline"
            className="mr-2"
            disabled={!previewUrl || isLoading}
          >
            Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
