'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import { COMPANY_INFO } from '@/lib/constants';

export type MarkerPosition = {
  lat: number;
  lng: number;
};

interface MapProps {
  marker: MarkerPosition | null;
  setMarker: (position: MarkerPosition) => void;
}

const customIcon = L.divIcon({
  className: 'custom-marker',
  html: `
    <div style="
      width:42px;
      height:42px;
      background:linear-gradient(135deg,#0B4C8C,#2CA9E1);
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      border:3px solid white;
      box-shadow:0 5px 20px rgba(11,76,140,.45);
      display:flex;
      align-items:center;
      justify-content:center;
    ">
      <span style="transform:rotate(45deg);font-size:20px">💧</span>
    </div>
  `,
  iconSize: [42, 42],
  iconAnchor: [21, 42],
});

function ClickHandler({
  setMarker,
}: {
  setMarker: (position: MarkerPosition) => void;
}) {
  useMapEvents({
    click(event) {
      setMarker({
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      });
    },
  });

  return null;
}

function MapUpdater({ marker }: { marker: MarkerPosition | null }) {
  const map = useMap();

  useEffect(() => {
    if (marker) {
      map.flyTo([marker.lat, marker.lng], 15, {
        duration: 1.5,
      });
    }
  }, [marker, map]);

  return null;
}

export default function MapComponent({
  marker,
  setMarker,
}: MapProps) {
  return (
    <MapContainer
      center={[
        COMPANY_INFO.coordinates.lat,
        COMPANY_INFO.coordinates.lng,
      ]}
      zoom={12}
      scrollWheelZoom
      style={{ height: '450px', width: '100%' }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap &copy; CARTO"
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />

      <ClickHandler setMarker={setMarker} />
      <MapUpdater marker={marker} />

      {marker && (
        <Marker
          position={[marker.lat, marker.lng]}
          icon={customIcon}
        />
      )}
    </MapContainer>
  );
}
