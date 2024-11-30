import React from 'react';
import { Viewer3D } from './components/Viewer3D';
import { InkDetectionPanel } from './components/InkDetectionPanel';
import { Scroll, Settings } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scroll className="w-8 h-8 text-indigo-600" />
            <h1 className="text-xl font-semibold text-gray-900">Ancient Text Decoder</h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 bg-white rounded-lg shadow-lg p-4 h-[600px]">
            <Viewer3D />
          </div>
          <div className="space-y-6">
            <InkDetectionPanel />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;