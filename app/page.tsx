import { GlassCard } from "./components/GlassCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-6 p-8">
      <div>
        <h1 className="text-2xl font-semibold text-accent-cyan">
          Weather-aware Route
        </h1>
        <p className="mt-1 text-text-secondary">
          날씨와 환경에 따라 가장 이동하기 좋은 길을 찾아주는 지도
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <GlassCard>
          <p className="text-sm text-text-secondary">현재 위치</p>
          <p className="mt-1 text-lg">부산 강서구</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm text-text-secondary">날씨</p>
          <p className="mt-1 text-lg">맑음 · 31℃</p>
        </GlassCard>
        <GlassCard>
          <p className="text-sm text-text-secondary">환경 점수</p>
          <p className="mt-1 text-lg text-accent-cyan">⭐⭐⭐⭐⭐</p>
        </GlassCard>
      </div>
    </main>
  );
}
