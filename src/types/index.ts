export interface Artifact {
  id: string;
  name: string;
  type: 'scroll' | 'tablet' | 'papyrus';
  scanData: ArrayBuffer;
  metadata: {
    dateScanned: string;
    resolution: number;
    energyLevels: number[];
  };
}

export interface InkDetectionResult {
  confidence: number;
  coordinates: [number, number, number][];
  intensity: number[];
}

export interface SegmentationResult {
  segments: {
    id: string;
    points: [number, number, number][];
    inkDetection?: InkDetectionResult;
  }[];
}