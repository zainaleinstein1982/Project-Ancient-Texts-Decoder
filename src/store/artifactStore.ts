import { create } from 'zustand';
import { Artifact, InkDetectionResult, SegmentationResult } from '../types';

interface ArtifactState {
  artifacts: Artifact[];
  activeArtifact: Artifact | null;
  segmentationResults: Record<string, SegmentationResult>;
  inkDetectionResults: Record<string, InkDetectionResult>;
  setActiveArtifact: (artifact: Artifact) => void;
  addArtifact: (artifact: Artifact) => void;
  updateSegmentation: (artifactId: string, result: SegmentationResult) => void;
  updateInkDetection: (artifactId: string, result: InkDetectionResult) => void;
}

export const useArtifactStore = create<ArtifactState>((set) => ({
  artifacts: [],
  activeArtifact: null,
  segmentationResults: {},
  inkDetectionResults: {},
  
  setActiveArtifact: (artifact) => set({ activeArtifact: artifact }),
  
  addArtifact: (artifact) => 
    set((state) => ({ artifacts: [...state.artifacts, artifact] })),
  
  updateSegmentation: (artifactId, result) =>
    set((state) => ({
      segmentationResults: {
        ...state.segmentationResults,
        [artifactId]: result,
      },
    })),
    
  updateInkDetection: (artifactId, result) =>
    set((state) => ({
      inkDetectionResults: {
        ...state.inkDetectionResults,
        [artifactId]: result,
      },
    })),
}));