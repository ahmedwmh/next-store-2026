'use client';

import { getCountryByCode } from '@/utils/countries';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import CountryFlag from '../card/CountryFlag';

/** When country code is missing or unknown */
const DEFAULT_CENTER: [number, number] = [20, 0];

const LEAFLET_CDN = 'https://unpkg.com/leaflet@1.9.4/dist/images';

function useFixedLeafletIcons() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: string })
      ._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconUrl: `${LEAFLET_CDN}/marker-icon.png`,
      iconRetinaUrl: `${LEAFLET_CDN}/marker-icon-2x.png`,
      shadowUrl: `${LEAFLET_CDN}/marker-shadow.png`,
    });
  }, []);
}

function PropertyMap({ contryCode }: { contryCode: string }) {
  useFixedLeafletIcons();
  
  const position = useMemo((): [number, number] => {
    const loc = getCountryByCode(contryCode)?.location; //[number, number]
    if (
      Array.isArray(loc) &&
      loc.length === 2 &&
      typeof loc[0] === 'number' &&
      typeof loc[1] === 'number'
    ) {
      return [loc[0], loc[1]];
    }
    return DEFAULT_CENTER;
  }, [contryCode]);

  return (
    <div className="mt-4">
      <div className="mb-4">
        <h2 className="text-lg font-semibold tracking-tight">
          Where You will be staying
        </h2>
        <CountryFlag countryCode={contryCode} />
      </div>
      <MapContainer
        key={`${position[0]}-${position[1]}`}
        scrollWheelZoom={false}
        zoomControl={false}
        className="relative z-0 h-[50vh] rounded-lg [&_.leaflet-container]:h-full [&_.leaflet-container]:w-full"
        center={position}
        zoom={6}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
}

export default PropertyMap