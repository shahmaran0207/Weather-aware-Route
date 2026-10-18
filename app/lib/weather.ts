import type { Coordinates } from "./types";

// 완전 무료, API 키 불필요한 날씨 API (Open-Meteo)
// 문서: https://open-meteo.com/en/docs
const WEATHER_API_BASE_URL = "https://api.open-meteo.com/v1/forecast";

export type WeatherData = {
  temperatureC: number;
  humidityPercent: number;
  weatherCode: number;
};

// Open-Meteo의 WMO Weather Code를 한글 설명으로 변환
// 전체 코드 목록: https://open-meteo.com/en/docs#weathervariables
const WEATHER_CODE_LABELS: Record<number, string> = {
  0: "맑음",
  1: "대체로 맑음",
  2: "부분적으로 흐림",
  3: "흐림",
  45: "안개",
  48: "짙은 안개",
  51: "약한 이슬비",
  53: "이슬비",
  55: "강한 이슬비",
  61: "약한 비",
  63: "비",
  65: "강한 비",
  71: "약한 눈",
  73: "눈",
  75: "강한 눈",
  80: "소나기",
  81: "강한 소나기",
  82: "매우 강한 소나기",
  95: "뇌우",
};

export function weatherCodeToLabel(code: number): string {
  return WEATHER_CODE_LABELS[code] ?? "알 수 없음";
}

// TODO: Open-Meteo API를 호출해서 현재 날씨를 가져오기.
//   - WEATHER_API_BASE_URL에 쿼리 파라미터로
//     latitude, longitude, current=temperature_2m,relative_humidity_2m,weather_code 를 붙여서 fetch
//   - 응답 JSON의 `current` 객체에서 temperature_2m / relative_humidity_2m / weather_code 값을 꺼내
//     WeatherData 형태로 매핑해서 반환
//   - 응답이 실패(res.ok가 false)하면 에러를 throw
export async function getCurrentWeather(
  coordinates: Coordinates,
): Promise<WeatherData> {
  throw new Error("Not implemented");
}
