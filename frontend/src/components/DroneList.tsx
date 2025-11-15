import { useEffect, useState } from 'react';
import io from 'socket.io-client';

interface Drone {
  id: string;
  name: string;
  battery: number;
  status: string;
  mission: string;
}

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';
const WS_URL = process.env.REACT_APP_WS_URL || 'ws://localhost:8081';

export default function DroneList() {
  const [drones, setDrones] = useState<Drone[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/drones`)
      .then(r => r.json())
      .then(setDrones);

    const socket = io(WS_URL);
    socket.on('drone-update', (drone: Drone) => {
      setDrones(prev => prev.map(d => d.id === drone.id ? { ...d, ...drone } : d));
    });
    return () => { socket.close(); };
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h2 className="text-xl font-bold mb-2">Fleet Status</h2>
      {drones.map(d => (
        <div key={d.id} className="flex justify-between items-center py-2 border-b">
          <div>
            <div className="font-medium">{d.name}</div>
            <div className="text-sm text-gray-600">{d.mission}</div>
          </div>
          <div className="text-right">
            <div className={`font-bold ${d.battery < 20 ? 'text-red-600' : ''}`}>
              {d.battery}%
            </div>
            <div className="text-xs">{d.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
}