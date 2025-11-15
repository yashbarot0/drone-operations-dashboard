import React from 'react';
import DroneMap from './components/DroneMap';
import DroneList from './components/DroneList';
import TelemetryPanel from './components/TelemetryPanel';
import AlertBanner from './components/AlertBanner';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white p-4">
        <h1 className="text-2xl font-bold">Drone Operations Dashboard</h1>
      </header>
      <AlertBanner />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
        <div className="lg:col-span-2">
          <DroneMap />
        </div>
        <div>
          <DroneList />
          <TelemetryPanel />
        </div>
      </div>
    </div>
  );
}

export default App;