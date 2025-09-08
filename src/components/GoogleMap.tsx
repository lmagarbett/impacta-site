import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function GoogleMap() {
  const offices = [
    { name: 'Impacta Limited', lat: 52.5567301994829, lng: -2.072761963642796 },
  ];

  return (
    <div style={{ width: '100%', position: 'relative', zIndex: 10 }}>
    <h2 className="text-3xl font-bold text-impacta11 mb-8 text-center">Where We Are</h2>
    <MapContainer 
      center={[52.5567301994829, -2.072761963642796]} 
      zoom={10} 
      style={{ height: '500px', width: '100%', position: 'relative', zIndex: 10 }} 
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {offices.map((o, i) => (
        <Marker key={i} position={[o.lat, o.lng]}>
          <Popup>{o.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
}