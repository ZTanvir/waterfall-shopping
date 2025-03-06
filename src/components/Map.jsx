import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "../styles/components/leafletMap.module.css";
import "leaflet/dist/leaflet.css";

const Map = ({ lat, long, street }) => {
  return (
    lat &&
    long && (
      <MapContainer
        center={[lat, long]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "300px", borderRadius: "16px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, long]}>
          <Popup>{street}</Popup>
        </Marker>
      </MapContainer>
    )
  );
};

export default Map;
