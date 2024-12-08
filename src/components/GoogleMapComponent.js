import React, { useCallback, useRef, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "70vw",
};

function GoogleMapComponent({ onBoundsChanged, problems, center, temporaryMarker, setTemporaryMarker }) {
  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onIdle = useCallback(() => {
    if (mapRef.current) {
      const bounds = mapRef.current.getBounds();
      if (bounds) {
        const northEast = bounds.getNorthEast();
        const southWest = bounds.getSouthWest();
        const newBounds = {
          north: northEast.lat(),
          east: northEast.lng(),
          south: southWest.lat(),
          west: southWest.lng(),
        };
        onBoundsChanged(newBounds);
      }
    }
  }, [onBoundsChanged]);

  useEffect(() => {
    if (mapRef.current && center) {
      // Pan către noul centru
      mapRef.current.panTo(center);

      // Scurtă pauză ca să se vadă mișcarea pe hartă
      setTimeout(() => {
        // Zoom intermediar
        mapRef.current.setZoom(10);
        setTimeout(() => {
          // Zoom final, un pic mai mare
          mapRef.current.setZoom(13);
        }, 200); // după încă 200ms
      }, 200); // după 200ms
    }
  }, [center]);

  const handleDragEnd = (event) => {
    if (setTemporaryMarker) {
      setTemporaryMarker({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={7} // Zoom inițial, va fi suprascris la click
        onLoad={onLoad}
        onIdle={onIdle}
      >
        {problems.map(problem => (
          <Marker key={problem.id} position={{ lat: problem.lat, lng: problem.lng }} />
        ))}
        {temporaryMarker && <Marker
            position={temporaryMarker}
            draggable
            onDragEnd={handleDragEnd} 
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png", // Marker galben
            }}/>
            }
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
