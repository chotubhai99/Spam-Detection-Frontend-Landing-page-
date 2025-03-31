import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Upload, MessageSquare, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import * as Tesseract from 'tesseract.js';

interface SpamAnalysisResult {
  isSpam: boolean;
  confidence: number;
  message: string;
  analyzedText?: string;
}

function SpamDetection() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SpamAnalysisResult | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ocrProgress, setOcrProgress] = useState(0);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
      setText('');
      setResult(null);
      setError(null);
    }
  }, []);

  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError(null);
  }, []);

  const analyzeText = async (text: string): Promise<SpamAnalysisResult> => {
    const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/spam-detection`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error('Failed to analyze text');
    }

    return response.json();
  };

  const extractTextFromImage = async (imageFile: File): Promise<string> => {
    setOcrProgress(0);
    
    const result = await Tesseract.recognize(
      imageFile,
      'eng',
      {
        logger: m => {
          if (m.status === 'recognizing text') {
            setOcrProgress(Math.round(m.progress * 100));
          }
        }
      }
    );
    
    return result.data.text;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      if (file) {
        // Extract text from image using OCR
        const extractedText = await extractTextFromImage(file);
        
        if (!extractedText.trim()) {
          throw new Error('No text could be extracted from the image');
        }
        
        const result = await analyzeText(extractedText);
        setResult({
          ...result,
          analyzedText: extractedText
        });
      } else if (text) {
        const result = await analyzeText(text);
        setResult(result);
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
      setOcrProgress(0);
    }
  };

  return (
    <div className="pt-16">
      <section className="min-h-screen py-20 px-4 bg-gradient-to-br from-white to-gray-100 dark:from-navy dark:to-navy-darker">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Spam Detection
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                Analysis Tool
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Upload an image or enter text to analyze for potential spam content.
              Our AI-powered system will provide instant results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-navy-darker rounded-2xl shadow-xl p-8"
          >
            {error && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* File Upload Section */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold mb-2">
                  Upload Image for Analysis
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center justify-center"
                  >
                    <Upload className="w-12 h-12 text-gray-400 dark:text-gray-500 mb-4" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-500">
                      PNG, JPG up to 10MB
                    </span>
                  </label>
                </div>

                {previewUrl && (
                  <div className="mt-4">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-h-64 mx-auto rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
                <span className="mx-4 text-gray-500 dark:text-gray-400">OR</span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
              </div>

              {/* Text Input Section */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold mb-2">
                  Enter Text for Analysis
                </label>
                <textarea
                  value={text}
                  onChange={handleTextChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400 transition-all resize-none"
                  placeholder="Enter the text you want to analyze..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading || (!file && !text)}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  isLoading || (!file && !text)
                    ? 'bg-gray-300 dark:bg-gray-700 cursor-not-allowed'
                    : 'bg-green-500 dark:bg-green-400 text-white hover:bg-green-600 dark:hover:bg-green-500'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    {ocrProgress > 0 ? `Processing Image (${ocrProgress}%)` : 'Analyzing...'}
                  </span>
                ) : (
                  'Analyze Content'
                )}
              </button>
            </form>

            {/* Results Section */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 rounded-lg bg-gray-50 dark:bg-navy-light"
              >
                <div className="flex items-center mb-4">
                  {result.isSpam ? (
                    <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
                  ) : (
                    <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                  )}
                  <h3 className="text-xl font-semibold">
                    {result.isSpam ? 'Spam Detected' : 'Content is Safe'}
                  </h3>
                </div>
                <div className="space-y-4">
                  {result.analyzedText && (
                    <div>
                      <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Extracted Text:
                      </h4>
                      <div className="bg-gray-100 dark:bg-navy rounded p-3 text-gray-800 dark:text-gray-200">
                        {result.analyzedText}
                      </div>
                    </div>
                  )}
                  <p className="text-gray-600 dark:text-gray-400">
                    Confidence Score: {result.confidence.toFixed(2)}%
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {result.message}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SpamDetection;