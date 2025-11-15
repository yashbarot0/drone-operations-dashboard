import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const WS_URL = process.env.REACT_APP_WS_URL || 'ws://localhost:8081';

export default function AlertBanner() {
  const [alert, setAlert] = useState<string | null>(null);

  useEffect(() => {
    const socket = io(WS_URL);
    socket.on('drone-update', (drone: any) => {
      if (drone.battery < 20) {
        setAlert(`${drone.name} has low battery: ${drone.battery}%`);
        setTimeout(() => setAlert(null), 5000);
      }
    });
    return () => { socket.close(); };
  }, []);

  if (!alert) return null;

  return (
    <div className="bg-red-600 text-white p-3 text-center font-bold animate-pulse">
      ⚠️ {alert}
    </div>
  );
}