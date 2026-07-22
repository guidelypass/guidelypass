"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  attractions,
  categoryLabels,
  categoryIcons,
  type AttractionCategory,
  type ProfileTag,
  type Attraction,
} from "@/lib/rome-guide-data";

const profiles: { id: ProfileTag | "all"; label: string; icon: string }[] = [
  { id: "all", label: "Todos", icon: "🌍" },
  { id: "family", label: "Família", icon: "👨‍👩‍👧" },
  { id: "couple", label: "Casal", icon: "💑" },
  { id: "friends", label: "Amigos", icon: "👫" },
];

const categories: { id: AttractionCategory | "all"; label: string; icon: string }[] = [
  { id: "all", label: "Todos", icon: "✦" },
  { id: "monument", label: "Monumentos", icon: "🏛️" },
  { id: "museum", label: "Museus", icon: "🖼️" },
  { id: "church", label: "Igrejas", icon: "⛪" },
  { id: "square", label: "Praças & Fontes", icon: "⛲" },
  { id: "park", label: "Parques & Bairros", icon: "🌿" },
  { id: "experience", label: "Experiências", icon: "✨" },
];

const weatherColors: Record<Attraction["weather"], { bg: string; label: string; icon: string }> = {
  outdoor: { bg: "bg-amber-50 text-amber-700 border-amber-200", label: "Ao ar livre", icon: "☀️" },
  indoor: { bg: "bg-blue-50 text-blue-700 border-blue-200", label: "Interno", icon: "🏛️" },
  both: { bg: "bg-green-50 text-green-700 border-green-200", label: "Qualquer tempo", icon: "🌤️" },
};

const profileColors: Record<ProfileTag, string> = {
  family: "bg-orange-50 text-orange-600 border-orange-200",
  couple: "bg-pink-50 text-pink-600 border-pink-200",
  friends: "bg-purple-50 text-purple-600 border-purple-200",
};
const profileIcons: Record<ProfileTag, string> = {
  family: "👨‍👩‍👧",
  couple: "💑",
  friends: "👫",
};

function AttractionCard({
  attraction,
  selected,
  onToggle,
  dimmed,
}: {
  attraction: Attraction;
  selected: boolean;
  onToggle: () => void;
  dimmed: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const w = weatherColors[attraction.weather];

  return (
    <div className={`rounded-2xl border bg-white shadow-sm transition-all duration-300 ${dimmed ? "opacity-40 scale-[0.98]" : "hover:shadow-md"} ${selected ? "ring-2 ring-brand-500" : ""}`}>
      {/* Header */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              <span className="text-xs font-medium text-gray-400">{categoryIcons[attraction.category]} {categoryLabels[attraction.category]}</span>
              {attraction.mustSee && (
                <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">Imperdível</span>
              )}
            </div>
            <h3 className="text-base font-bold text-ink leading-tight">{attraction.name}</h3>
            <p className="mt-0.5 text-xs text-gray-400">{attraction.neighborhood}</p>
          </div>
          <button
            onClick={onToggle}
            className={`flex-shrink-0 h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${selected ? "border-brand-500 bg-brand-500 text-white" : "border-gray-200 text-gray-300 hover:border-brand-400"}`}
          >
            {selected ? "✓" : "+"}
          </button>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${w.bg}`}>
            {w.icon} {w.label}
          </span>
          {attraction.profiles.map((p) => (
            <span key={p} className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium ${profileColors[p]}`}>
              {profileIcons[p]}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className={`mt-3 text-sm text-gray-600 leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>
          {attraction.description}
        </p>

        {/* Tip */}
        {expanded && (
          <div className="mt-3 rounded-xl bg-amber-50 border border-amber-100 p-3">
            <p className="text-xs font-semibold text-amber-700 mb-1">💡 Dica</p>
            <p className="text-xs text-amber-800 leading-relaxed">{attraction.tip}</p>
          </div>
        )}

        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-xs font-semibold text-brand-600 hover:text-brand-700"
        >
          {expanded ? "▲ Ver menos" : "▼ Ver mais + dica"}
        </button>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-50 px-4 py-2.5 flex items-center justify-between">
        <span className="text-xs text-gray-400">⏱ {attraction.duration}</span>
        <span className="text-xs font-semibold text-gray-600">{attraction.cost}</span>
      </div>
    </div>
  );
}

export default function RomeGuide({ lang }: { lang: string }) {
  const [profile, setProfile] = useState<ProfileTag | "all">("all");
  const [category, setCategory] = useState<AttractionCategory | "all">("all");
  const [rainyDay, setRainyDay] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    return attractions.filter((a) => {
      if (profile !== "all" && !a.profiles.includes(profile as ProfileTag)) return false;
      if (category !== "all" && a.category !== category) return false;
      if (rainyDay && a.weather === "outdoor") return false;
      return true;
    });
  }, [profile, category, rainyDay]);

  const filteredIds = useMemo(() => new Set(filtered.map((a) => a.id)), [filtered]);

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  const selectedAttractions = attractions.filter((a) => selected.has(a.id));
  const totalHours = selectedAttractions.reduce((s, a) => s + a.durationHours, 0);
  const totalCost = selectedAttractions.reduce((s, a) => s + a.costEur, 0);
  const totalDays = Math.ceil(totalHours / 8);

  return (
    <div>
      {/* Controls */}
      <section className="sticky top-[57px] z-30 border-b border-gray-100 bg-white/95 backdrop-blur shadow-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 space-y-3">

          {/* Profile + Weather */}
          <div className="flex flex-wrap items-center gap-2 justify-between">
            <div className="flex flex-wrap gap-1.5">
              {profiles.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setProfile(p.id)}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 border ${profile === p.id ? "bg-brand-600 text-white border-brand-600" : "bg-white text-gray-600 border-gray-200 hover:border-brand-300"}`}
                >
                  <span>{p.icon}</span> {p.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setRainyDay((v) => !v)}
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold border transition-all duration-200 ${rainyDay ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-500 border-gray-200 hover:border-blue-300"}`}
            >
              🌧️ {rainyDay ? "Modo chuva ativo" : "Está chovendo?"}
            </button>
          </div>

          {/* Category tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-0.5 scrollbar-hide">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCategory(c.id)}
                className={`flex-shrink-0 flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 border ${category === c.id ? "bg-ink text-white border-ink" : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"}`}
              >
                {c.icon} {c.label}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="text-xs text-gray-400">
            {filtered.length} pontos turísticos{rainyDay ? " · modo chuva" : ""}
            {profile !== "all" ? ` · ${profiles.find((p) => p.id === profile)?.icon} ${profiles.find((p) => p.id === profile)?.label}` : ""}
          </p>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          {/* Attractions grid */}
          <div>
            {category === "all" ? (
              // Grouped by category
              Object.entries(categoryLabels).map(([cat, label]) => {
                const items = filtered.filter((a) => a.category === cat);
                if (!items.length) return null;
                return (
                  <div key={cat} className="mb-10">
                    <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-ink">
                      <span>{categoryIcons[cat as AttractionCategory]}</span> {label}
                      <span className="text-sm font-normal text-gray-400">({items.length})</span>
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {items.map((a) => (
                        <AttractionCard
                          key={a.id}
                          attraction={a}
                          selected={selected.has(a.id)}
                          onToggle={() => toggleSelect(a.id)}
                          dimmed={false}
                        />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                {filtered.map((a) => (
                  <AttractionCard
                    key={a.id}
                    attraction={a}
                    selected={selected.has(a.id)}
                    onToggle={() => toggleSelect(a.id)}
                    dimmed={!filteredIds.has(a.id)}
                  />
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <div className="py-16 text-center text-gray-400">
                <p className="text-4xl mb-3">🌧️</p>
                <p className="font-semibold text-ink">Nenhum ponto disponível com esses filtros</p>
                <p className="text-sm mt-1">Tente remover o modo chuva ou mudar o perfil</p>
              </div>
            )}
          </div>

          {/* Sidebar — Estimator */}
          <div className="space-y-4">
            <div className="sticky top-[160px]">
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5">
                <h3 className="font-bold text-ink mb-1">📋 Meu Roteiro</h3>
                <p className="text-xs text-gray-400 mb-4">Clique no + para adicionar pontos ao seu roteiro</p>

                {selectedAttractions.length === 0 ? (
                  <div className="rounded-xl bg-gray-50 p-4 text-center">
                    <p className="text-sm text-gray-400">Nenhum ponto selecionado ainda</p>
                    <p className="text-xs text-gray-300 mt-1">Clique no + em qualquer card</p>
                  </div>
                ) : (
                  <>
                    <ul className="space-y-2 mb-4">
                      {selectedAttractions.map((a) => (
                        <li key={a.id} className="flex items-center justify-between gap-2 text-sm">
                          <span className="truncate text-gray-700">{categoryIcons[a.category]} {a.name}</span>
                          <button onClick={() => toggleSelect(a.id)} className="flex-shrink-0 text-gray-300 hover:text-red-400 transition-colors">✕</button>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-gray-100 pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">⏱ Tempo estimado</span>
                        <span className="font-semibold text-ink">{totalHours.toFixed(1)}h</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">📅 Dias necessários</span>
                        <span className="font-semibold text-ink">~{totalDays} dia{totalDays > 1 ? "s" : ""}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">💶 Custo ingressos</span>
                        <span className="font-semibold text-ink">~€{totalCost}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Freemium teaser */}
              <div className="mt-4 rounded-2xl border border-brand-100 bg-brand-50 p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px] rounded-2xl z-10">
                  <div className="text-center px-4">
                    <div className="text-2xl mb-2">🔒</div>
                    <p className="text-sm font-bold text-ink">Roteiro automático</p>
                    <p className="text-xs text-gray-500 mt-1">Organize seus pontos por dia e bairro com o guia completo</p>
                    <Link
                      href={`/${lang}/contact`}
                      className="mt-3 inline-block rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white hover:bg-brand-700 transition-colors"
                    >
                      Quero o guia completo
                    </Link>
                  </div>
                </div>
                <div className="blur-sm select-none space-y-2 text-xs text-gray-600">
                  <p className="font-semibold">Dia 1 — Centro Histórico</p>
                  <p>9h Coliseu → 12h Fórum Romano → 14h Pantheon → 16h Fontana di Trevi</p>
                  <p className="font-semibold mt-2">Dia 2 — Vaticano</p>
                  <p>8h Museus do Vaticano → 12h São Pedro → 14h Castel Sant'Angelo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
