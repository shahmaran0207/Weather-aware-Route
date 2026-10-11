"use client";

import { Map as MaplibreMap, Marker } from "maplibre-gl";
import { useEffect, useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";

// 완전 무료, API 키 불필요한 벡터 타일 스타일 (OpenFreeMap)
const MAP_STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";

// GPS 권한 거부/실패 시 폴백 좌표 (부산)
const DEFAULT_CENTER: [number, number] = [129.0756, 35.1796];
const DEFAULT_ZOOM = 13;

type Coordinates = {
  lat: number;
  lng: number;
};

export function MapView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MaplibreMap | null>(null);
  const markerRef = useRef<Marker | null>(null);

  const [currentPosition, setCurrentPosition] = useState<Coordinates | null>(
    null,
  );

  const [locationError, setLocationError] = useState<string | null>(()=>
      typeof navigator !== "undefined" && !navigator.geolocation
      ? "이 브라우저는 위치 정보를 지원하지 않습니다."
          : null
  );

  useEffect(() => {
    if (!containerRef.current) return;

    mapRef.current = new MaplibreMap({
      container: containerRef.current,
      style: MAP_STYLE_URL,
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
    })

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setCurrentPosition({lat, lng});
          },
          (error) => {
            setLocationError(error.message);
          }
      )
    }
  }, []);

  useEffect(() => {
    if (!currentPosition || !mapRef.current) return;

    const { lat, lng } = currentPosition;

    if (!markerRef.current) {
      markerRef.current = new Marker().setLngLat([lng, lat]).addTo(mapRef.current);
    } else {
      markerRef.current.setLngLat([lng, lat]);
    }
  }, [currentPosition]);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden rounded-card border border-panel-border">
      <div ref={containerRef} className="h-full w-full" />
      {locationError && (
        <div className="glass-panel absolute left-4 top-4 px-4 py-2 text-sm text-text-secondary">
          {locationError}
        </div>
      )}
    </div>
  );
}
