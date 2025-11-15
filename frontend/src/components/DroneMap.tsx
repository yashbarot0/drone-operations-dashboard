import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface Drone {
  id: string;
  name: string;
  lat: number;
  lng: number;
  altitude: number;
  battery: number;
  status: string;
}

const WS_URL = process.env.REACT_APP_WS_URL || 'ws://localhost:8081';

export default function DroneMap() {
  const [drones, setDrones] = useState<Drone[]>([]);

  useEffect(() => {
    const socket = io(WS_URL);
    socket.on('connect', () => console.log('WS Connected'));
    socket.on('drone-update', (drone: Drone) => {
      setDrones(prev => {
        const filtered = prev.filter(d => d.id !== drone.id);
        return [...filtered, drone];
      });
    });
    return () => { socket.close(); };
  }, []);

  return (
    <div className="h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer center={[37.7749, -122.4194]} zoom={13} style={{ height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {drones.map(d => (
          <Marker key={d.id} position={[d.lat, d.lng]}>
            <Popup>
              <div>
                <strong>{d.name}</strong><br/>
                Status: {d.status}<br/>
                Battery: {d.battery}%<br/>
                Alt: {d.altitude}m
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}