import React from 'react';
import { Sliders, ZoomIn, ZapOff } from 'lucide-react';
import { useArtifactStore } from '../store/artifactStore';

export function InkDetectionPanel() {
  const activeArtifact = useArtifactStore((state) => state.activeArtifact);
  const inkDetectionResults = useArtifactStore((state) => state.inkDetectionResults);

  if (!activeArtifact) return null;

  const results = inkDetectionResults[activeArtifact.id];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Ink Detection</h2>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Sliders className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ZoomIn className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ZapOff className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Confidence</span>
          <span className="font-medium">
            {results?.confidence ? `${(results.confidence * 100).toFixed(1)}%` : 'N/A'}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Detected Points</span>
          <span className="font-medium">
            {results?.coordinates?.length || 0}
          </span>
        </div>
      </div>
    </div>
  );
}