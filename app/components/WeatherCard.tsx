"use client";

import { useEffect, useState } from "react";
import { GlassCard } from "./GlassCard";
import { getCurrentWeather, weatherCodeToLabel, type WeatherData } from "../lib/weather";
import type { Coordinates } from "../lib/types";

type WeatherCardProps = {
  coordinates: Coordinates | null;
};

export function WeatherCard({ coordinates }: WeatherCardProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // TODO: coordinates가 바뀔 때마다 getCurrentWeather(coordinates)를 호출.
  //   - coordinates가 null이면 아무것도 하지 않고 종료
  //   - 성공하면 setWeather(data)
  //   - 실패(throw)하면 catch해서 setError에 메시지 저장
  useEffect(() => {
    // TODO: 구현
  }, [coordinates]);

  return (
    <GlassCard>
      <p className="text-sm text-text-secondary">날씨</p>
      {/* TODO: 상태에 따라 다른 내용 표시
          - weather가 있으면: `${weatherCodeToLabel(weather.weatherCode)} · ${weather.temperatureC}℃`
          - error가 있으면: 에러 메시지
          - coordinates가 아직 없으면: "위치 확인 중..." 등 로딩 표시 */}
    </GlassCard>
  );
}
