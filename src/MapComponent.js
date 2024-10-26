// Import necessary components from React-Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixing marker icons for Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Initial map center (latitude, longitude)
      zoom={13}                 // Initial zoom level
      style={{ height: '100vh', width: '100%' }} // Full screen map
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

/*
MapContainer: This is the main container for your map. It sets up the view with a specific center (latitude and longitude) and zoom level. The style sets the height and width, ensuring the map fills the viewport.
TileLayer: Adds the map tiles (the visual base layer). We use OpenStreetMap’s free tiles for this example. The {s}, {z}, {x}, and {y} placeholders are dynamically replaced by Leaflet for the map’s tile system.
Marker: Adds a clickable marker to the specified position. The marker is styled based on Leaflet’s CSS, and it includes a Popup that displays when the marker is clicked.
Popup: Displays custom content when the marker is clicked. It’s useful for adding details or information at specific map points.
Icon Fix: Leaflet’s marker icons might not display correctly in React apps unless you provide these icon paths. This snippet ensures the marker icons are correctly loaded.
*/