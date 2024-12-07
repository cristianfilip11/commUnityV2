import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 44.4268, // Coordonatele pentru București
  lng: 26.1025,
};

function GoogleMapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCLBsEGceslg7sg1rqT9NWJhZ9qCDTk25o">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Adaugă markere aici */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
