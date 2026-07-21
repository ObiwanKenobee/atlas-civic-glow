import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity,
  AlertTriangle,
  Atom,
  Bell,
  Brain,
  Building2,
  Circle,
  Cpu,
  Database,
  Dna,
  Droplets,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers,
  Leaf,
  LineChart,
  MessageCircle,
  Microscope,
  Network,
  Radar,
  Rocket,
  Satellite,
  Scale,
  Send,
  Settings,
  Shield,
  Signal,
  Sparkles,
  Stethoscope,
  Sun,
  Truck,
  Users,
  Waves,
  Wheat,
  Wind,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: AtlasSanctum,
});

/* ---------- shared bits ---------- */

function SectionTitle({
  eyebrow,
  title,
  right,
}: {
  eyebrow?: string;
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between mb-4">
      <div>
        {eyebrow && (
          <div className="text-[10px] tracking-[0.3em] text-cyan font-mono uppercase">
            {eyebrow}
          </div>
        )}
        <h2 className="text-lg font-medium tracking-tight text-foreground/95 mt-1">
          {title}
        </h2>
      </div>
      {right}
    </div>
  );
}

function Panel({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`glass-panel p-5 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-40 grid-bg" />
      <div className="relative">{children}</div>
    </div>
  );
}

function Chip({
  color = "cyan",
  children,
}: {
  color?: "cyan" | "emerald" | "violet" | "gold" | "danger" | "warning";
  children: React.ReactNode;
}) {
  const map: Record<string, string> = {
    cyan: "text-cyan border-[color:var(--cyan)]/40 bg-[color:var(--cyan)]/10",
    emerald:
      "text-emerald border-[color:var(--emerald)]/40 bg-[color:var(--emerald)]/10",
    violet:
      "text-violet border-[color:var(--violet)]/40 bg-[color:var(--violet)]/10",
    gold: "text-gold border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10",
    danger:
      "text-danger border-[color:var(--danger)]/40 bg-[color:var(--danger)]/10",
    warning:
      "text-warning border-[color:var(--warning)]/40 bg-[color:var(--warning)]/10",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${map[color]}`}
    >
      {children}
    </span>
  );
}

function Bar({
  value,
  color = "cyan",
}: {
  value: number;
  color?: "cyan" | "emerald" | "violet" | "gold" | "danger" | "warning";
}) {
  const bg: Record<string, string> = {
    cyan: "bg-[color:var(--cyan)]",
    emerald: "bg-[color:var(--emerald)]",
    violet: "bg-[color:var(--violet)]",
    gold: "bg-[color:var(--gold)]",
    danger: "bg-[color:var(--danger)]",
    warning: "bg-[color:var(--warning)]",
  };
  return (
    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
      <div
        className={`h-full ${bg[color]} rounded-full`}
        style={{
          width: `${value}%`,
          boxShadow: `0 0 12px var(--${color})`,
        }}
      />
    </div>
  );
}

/* ---------- top nav ---------- */

const NAV = [
  "Global Command",
  "Child Intelligence",
  "Nutrition Intelligence",
  "Microbiome Lab",
  "Precision Agriculture",
  "Environmental Intelligence",
  "Disease Surveillance",
  "AI Decision Engine",
  "Policy Simulator",
  "Knowledge Graph",
  "Atlas Copilot",
];

function TopBar({ time }: { time: string }) {
  return (
    <header className="glass-panel px-6 py-3 flex items-center gap-6 sticky top-3 z-40">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 grid place-items-center">
          <div className="absolute inset-0 rounded-full border border-cyan/40 animate-spin-slow" />
          <div className="absolute inset-1 rounded-full border border-violet/30 animate-spin-reverse" />
          <Atom className="h-5 w-5 text-cyan" />
        </div>
        <div className="leading-tight">
          <div className="text-[10px] font-mono tracking-[0.3em] text-cyan/80">
            ATLAS SANCTUM
          </div>
          <div className="text-sm font-medium">
            Child Flourishing Intelligence Network
          </div>
        </div>
      </div>

      <nav className="hidden xl:flex items-center gap-1 ml-6 overflow-x-auto">
        {NAV.map((n, i) => (
          <button
            key={n}
            className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-md whitespace-nowrap transition ${
              i === 0
                ? "text-cyan bg-cyan/10 border border-cyan/30 glow-cyan"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            {n}
          </button>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
          <Signal className="h-3.5 w-3.5 text-emerald" />
          <span>NETWORK 99.98%</span>
          <span className="text-cyan">·</span>
          <span>{time} UTC</span>
        </div>
        <button className="glass-panel h-9 px-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider hover:glow-cyan">
          <Sparkles className="h-3.5 w-3.5 text-cyan" /> AI Copilot
        </button>
        <button className="glass-panel h-9 px-3 flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider">
          <Globe2 className="h-3.5 w-3.5 text-emerald" /> Global View
        </button>
        <button className="glass-panel h-9 w-9 grid place-items-center">
          <Bell className="h-4 w-4" />
        </button>
        <button className="glass-panel h-9 w-9 grid place-items-center">
          <Settings className="h-4 w-4" />
        </button>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan to-violet grid place-items-center text-[10px] font-bold text-background">
          AS
        </div>
      </div>
    </header>
  );
}

/* ---------- left: system layers ---------- */

const LAYERS = [
  { name: "Biological", icon: Dna, color: "cyan", health: 92, conf: 96 },
  { name: "Microbiome", icon: Microscope, color: "emerald", health: 74, conf: 89 },
  { name: "Nutrition", icon: Wheat, color: "gold", health: 68, conf: 94 },
  { name: "Agriculture", icon: Leaf, color: "emerald", health: 71, conf: 87 },
  { name: "Healthcare", icon: Stethoscope, color: "cyan", health: 66, conf: 92 },
  { name: "Environment", icon: Wind, color: "violet", health: 58, conf: 90 },
  { name: "Education", icon: GraduationCap, color: "gold", health: 63, conf: 88 },
  { name: "Economic", icon: LineChart, color: "cyan", health: 55, conf: 84 },
  { name: "Governance", icon: Landmark, color: "violet", health: 72, conf: 91 },
  { name: "Climate", icon: Sun, color: "gold", health: 47, conf: 93 },
  { name: "Supply Chain", icon: Truck, color: "emerald", health: 69, conf: 86 },
  { name: "Atlas Intelligence", icon: Cpu, color: "violet", health: 96, conf: 99 },
] as const;

function SystemLayers() {
  return (
    <Panel>
      <SectionTitle
        eyebrow="System Layers"
        title="Civilization Stack"
        right={<Chip color="emerald">LIVE SYNC</Chip>}
      />
      <div className="space-y-2">
        {LAYERS.map((l) => {
          const Icon = l.icon;
          return (
            <div
              key={l.name}
              className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 hover:border-cyan/30 hover:bg-white/[0.04] transition"
            >
              <div
                className={`h-8 w-8 grid place-items-center rounded-md border border-[color:var(--${l.color})]/30 bg-[color:var(--${l.color})]/10 glow-${l.color}`}
              >
                <Icon className={`h-4 w-4 text-${l.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium">{l.name} Layer</div>
                <div className="mt-1 flex items-center gap-2">
                  <Bar value={l.health} color={l.color} />
                  <span className="text-[10px] font-mono text-muted-foreground w-8 text-right">
                    {l.health}%
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-[9px] font-mono uppercase text-muted-foreground">
                  AI conf
                </div>
                <div className={`text-[11px] font-mono text-${l.color}`}>
                  {l.conf}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

function DataIntegrity() {
  return (
    <Panel>
      <div className="flex items-center gap-2 mb-3">
        <Shield className="h-4 w-4 text-emerald" />
        <div className="text-[10px] font-mono tracking-[0.25em] text-emerald uppercase">
          Data Integrity
        </div>
      </div>
      <div className="text-3xl font-light">
        97.6<span className="text-lg text-muted-foreground">%</span>
      </div>
      <div className="text-[11px] text-muted-foreground mb-3">
        Verified sources · trust score
      </div>
      <Bar value={97.6} color="emerald" />
      <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] font-mono">
        <div>
          <div className="text-muted-foreground">SOURCES</div>
          <div className="text-emerald">14,208</div>
        </div>
        <div>
          <div className="text-muted-foreground">LEDGERS</div>
          <div className="text-cyan">Chain-locked</div>
        </div>
        <div>
          <div className="text-muted-foreground">AUDITS</div>
          <div className="text-gold">Real-time</div>
        </div>
      </div>
    </Panel>
  );
}

function NetworkStatus() {
  const rows = [
    ["Live Networks", "132", "emerald"],
    ["Communities", "2,845", "cyan"],
    ["Children Monitored", "5.7M", "violet"],
    ["Countries Connected", "47", "gold"],
  ] as const;
  return (
    <Panel>
      <SectionTitle eyebrow="Network" title="Global Status" />
      <div className="space-y-3">
        {rows.map(([k, v, c]) => (
          <div
            key={k}
            className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0"
          >
            <span className="text-[12px] text-muted-foreground">{k}</span>
            <span className={`text-[13px] font-mono text-${c}`}>{v}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[10px] font-mono">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
        </span>
        <span className="text-emerald">ALL SYSTEMS OPERATIONAL</span>
        <span className="ml-auto text-muted-foreground">Sync 09:42:11</span>
      </div>
    </Panel>
  );
}

/* ---------- centerpiece: child digital twin ---------- */

const RINGS = [
  { label: "Brain Development", val: 68, color: "violet" },
  { label: "Immune Health", val: 74, color: "cyan" },
  { label: "Microbiome Diversity", val: 68, color: "emerald" },
  { label: "Inflammation", val: 42, color: "danger" },
  { label: "Nutrition Status", val: 72, color: "gold" },
  { label: "Environmental Exposure", val: 55, color: "warning" },
  { label: "Growth Velocity", val: 61, color: "emerald" },
  { label: "Learning Capacity", val: 70, color: "violet" },
  { label: "Cognitive Potential", val: 68, color: "cyan" },
  { label: "Socioeconomic", val: 48, color: "gold" },
] as const;

function DigitalTwin() {
  return (
    <Panel className="min-h-[560px]">
      <SectionTitle
        eyebrow="Child Systems Digital Twin"
        title="Holographic Flourishing Model"
        right={
          <div className="flex gap-2">
            <Chip color="cyan">LONGITUDINAL</Chip>
            <Chip color="violet">PREDICTIVE</Chip>
            <Chip color="gold">RISK FACTORS</Chip>
          </div>
        }
      />

      <div className="relative h-[440px] grid place-items-center">
        {/* orbit rings */}
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <div className="relative">
            {[560, 460, 360, 260].map((s, i) => (
              <div
                key={s}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/20 ${
                  i % 2 === 0 ? "animate-spin-slow" : "animate-spin-reverse"
                }`}
                style={{
                  width: s,
                  height: s,
                  left: 0,
                  top: 0,
                  borderStyle: i === 1 ? "dashed" : "solid",
                  borderColor:
                    i === 0
                      ? "oklch(0.82 0.16 210 / 0.25)"
                      : i === 1
                      ? "oklch(0.7 0.22 300 / 0.25)"
                      : i === 2
                      ? "oklch(0.78 0.18 160 / 0.25)"
                      : "oklch(0.83 0.16 85 / 0.2)",
                }}
              />
            ))}
          </div>
        </div>

        {/* child figure svg */}
        <svg
          viewBox="0 0 200 320"
          className="h-[380px] drop-shadow-[0_0_30px_rgba(80,180,255,0.35)] animate-float"
        >
          <defs>
            <radialGradient id="body" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="oklch(0.9 0.15 210)" stopOpacity="0.9" />
              <stop offset="60%" stopColor="oklch(0.6 0.18 230)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="oklch(0.3 0.15 260)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="gut" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.85 0.2 25)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="oklch(0.5 0.2 25)" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="brain" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.85 0.2 300)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="oklch(0.4 0.2 300)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* head */}
          <circle cx="100" cy="50" r="34" fill="url(#body)" stroke="oklch(0.85 0.15 210)" strokeOpacity="0.6" />
          <circle cx="100" cy="45" r="18" fill="url(#brain)" />
          {/* body */}
          <path
            d="M70 90 Q100 78 130 90 L138 200 Q100 220 62 200 Z"
            fill="url(#body)"
            stroke="oklch(0.85 0.15 210)"
            strokeOpacity="0.5"
          />
          {/* arms */}
          <path d="M70 95 L45 180" stroke="oklch(0.8 0.15 210)" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
          <path d="M130 95 L155 180" stroke="oklch(0.8 0.15 210)" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
          {/* legs */}
          <path d="M85 210 L78 300" stroke="oklch(0.8 0.15 210)" strokeWidth="10" strokeLinecap="round" opacity="0.5" />
          <path d="M115 210 L122 300" stroke="oklch(0.8 0.15 210)" strokeWidth="10" strokeLinecap="round" opacity="0.5" />
          {/* gut / microbiome */}
          <circle cx="100" cy="160" r="26" fill="url(#gut)" />
          <g stroke="oklch(0.85 0.18 25)" strokeOpacity="0.6" fill="none">
            <circle cx="100" cy="160" r="14" />
            <circle cx="94" cy="156" r="4" />
            <circle cx="108" cy="162" r="3" />
            <circle cx="100" cy="168" r="3" />
          </g>
          {/* nervous system lines */}
          <path
            d="M100 84 L100 200"
            stroke="oklch(0.85 0.2 300)"
            strokeOpacity="0.5"
            strokeDasharray="2 3"
          />
        </svg>

        {/* labels around figure */}
        {RINGS.map((r, i) => {
          const angle = (i / RINGS.length) * Math.PI * 2 - Math.PI / 2;
          const radius = 240;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          return (
            <div
              key={r.label}
              className="absolute text-[10px] font-mono"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%,-50%)",
              }}
            >
              <div
                className={`glass px-2.5 py-1.5 rounded-lg border border-[color:var(--${r.color})]/40 glow-${r.color} min-w-[140px]`}
              >
                <div className="uppercase tracking-wider text-[9px] text-muted-foreground">
                  {r.label}
                </div>
                <div className={`text-${r.color} text-[12px]`}>
                  {r.val}
                  <span className="text-muted-foreground text-[10px]">/100</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-white/5 pt-3">
        <div>
          <div className="text-[10px] font-mono uppercase text-muted-foreground">
            Overall Development Index
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-light text-cyan">68</span>
            <span className="text-xs text-muted-foreground">/100</span>
            <Chip color="warning">AT RISK</Chip>
          </div>
        </div>
        <div className="flex gap-6 text-[11px] font-mono">
          {["LONGITUDINAL VIEW", "PREDICTIVE TRAJECTORY", "RISK FACTORS", "RECOMMENDATIONS"].map(
            (t, i) => (
              <button
                key={t}
                className={`pb-1 border-b ${
                  i === 0
                    ? "text-cyan border-cyan"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {t}
              </button>
            )
          )}
        </div>
      </div>
    </Panel>
  );
}

/* ---------- child development overview + map ---------- */

function ChildOverview() {
  return (
    <Panel>
      <SectionTitle eyebrow="Child Intelligence" title="Development Overview" />
      <div className="flex items-center gap-6">
        <div>
          <div className="text-4xl font-light">5,721,523</div>
          <div className="text-[11px] text-muted-foreground">
            Children in Network
          </div>
        </div>
        <div className="relative h-24 w-24">
          <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
            <circle cx="18" cy="18" r="15" fill="none" stroke="oklch(1 0 0 / 0.06)" strokeWidth="3" />
            <circle
              cx="18" cy="18" r="15" fill="none"
              stroke="var(--emerald)" strokeWidth="3"
              strokeDasharray={`${38 * 0.94} 100`} strokeLinecap="round"
            />
            <circle
              cx="18" cy="18" r="15" fill="none"
              stroke="var(--warning)" strokeWidth="3"
              strokeDasharray={`${62 * 0.94} 100`} strokeDashoffset={`-${38 * 0.94}`} strokeLinecap="round"
            />
            <circle
              cx="18" cy="18" r="15" fill="none"
              stroke="var(--danger)" strokeWidth="3"
              strokeDasharray={`${18 * 0.94} 100`} strokeDashoffset={`-${100 * 0.94}`} strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <div className="text-lg font-light text-warning">62%</div>
              <div className="text-[9px] text-muted-foreground font-mono">
                AT RISK
              </div>
            </div>
          </div>
        </div>
        <div className="text-[11px] font-mono space-y-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-emerald" /> Thriving
            <span className="ml-auto">38%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-warning" /> At Risk
            <span className="ml-auto">62%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-danger" /> Critical
            <span className="ml-auto">18%</span>
          </div>
        </div>
      </div>

      {/* Africa heatmap svg */}
      <div className="mt-5 relative h-[260px] rounded-lg overflow-hidden border border-white/5 bg-black/30">
        <AfricaMap />
        <div className="absolute top-2 right-2 glass px-2 py-1 rounded text-[10px] font-mono flex items-center gap-1">
          <Globe2 className="h-3 w-3 text-cyan" /> AFRICA
        </div>
        <div className="absolute bottom-2 left-3 text-[10px] font-mono text-muted-foreground">
          RISK DISTRIBUTION · by community
        </div>
        <div className="absolute bottom-2 right-2 flex gap-1 items-center text-[9px] font-mono">
          <span className="text-emerald">LOW</span>
          <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-emerald via-warning to-danger" />
          <span className="text-danger">HIGH</span>
        </div>
      </div>
    </Panel>
  );
}

function AfricaMap() {
  // stylized dotted heatmap grid
  const cols = 34;
  const rows = 22;
  const cells = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      // rough africa mask
      const cx = x - cols / 2;
      const cy = y - rows / 2;
      const inside =
        Math.abs(cx) < 6 + Math.sin(y * 0.4) * 3 &&
        cy > -8 && cy < 9 &&
        !(cx < -4 && cy > 4);
      if (!inside) continue;
      const seed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      const r = seed - Math.floor(seed);
      const hue =
        r < 0.35
          ? "var(--emerald)"
          : r < 0.6
          ? "var(--warning)"
          : r < 0.85
          ? "oklch(0.72 0.2 40)"
          : "var(--danger)";
      cells.push(
        <rect
          key={`${x}-${y}`}
          x={x * 14 + 20}
          y={y * 11 + 10}
          width="10"
          height="8"
          rx="1.5"
          fill={hue}
          opacity={0.4 + r * 0.6}
        />
      );
    }
  }
  return (
    <svg viewBox="0 0 520 260" className="w-full h-full">
      <defs>
        <radialGradient id="glowMap" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="oklch(0.4 0.15 220 / 0.4)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="520" height="260" fill="url(#glowMap)" />
      {cells}
      {/* satellite arcs */}
      <path d="M 40 200 Q 260 40 480 200" stroke="var(--cyan)" strokeOpacity="0.35" strokeDasharray="3 4" fill="none" />
      <path d="M 30 120 Q 260 200 490 100" stroke="var(--violet)" strokeOpacity="0.3" strokeDasharray="2 5" fill="none" />
    </svg>
  );
}

/* ---------- microbiome lab ---------- */

const TAXA = [
  { n: "Bifidobacterium", v: 68, c: "emerald" },
  { n: "Lactobacillus", v: 54, c: "cyan" },
  { n: "Prevotella", v: 35, c: "gold" },
  { n: "Faecalibacterium", v: 28, c: "violet" },
  { n: "Enterobacteriaceae", v: 12, c: "danger" },
] as const;

function MicrobiomeLab() {
  return (
    <Panel>
      <SectionTitle
        eyebrow="Microbiome Lab"
        title="Living Ecosystem Analysis"
        right={<Chip color="emerald">DIVERSITY 68%</Chip>}
      />
      <div className="grid grid-cols-2 gap-4">
        <div className="relative h-[220px] grid place-items-center">
          <div className="absolute inset-4 rounded-full border border-emerald/20 animate-spin-slow" />
          <div className="absolute inset-10 rounded-full border border-violet/20 animate-spin-reverse" />
          <svg viewBox="-100 -100 200 200" className="h-full w-full">
            <defs>
              <radialGradient id="micro" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.85 0.2 300 / 0.7)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle r="60" fill="url(#micro)" />
            {Array.from({ length: 40 }).map((_, i) => {
              const a = (i / 40) * Math.PI * 2;
              const rad = 30 + (i % 5) * 8;
              const x = Math.cos(a) * rad;
              const y = Math.sin(a) * rad;
              const good = i % 4 !== 0;
              return (
                <circle
                  key={i}
                  cx={x} cy={y}
                  r={2 + (i % 3)}
                  fill={good ? "var(--emerald)" : "var(--danger)"}
                  opacity={0.75}
                />
              );
            })}
            {Array.from({ length: 6 }).map((_, i) => (
              <circle
                key={`c${i}`}
                r={70 + i * 4}
                fill="none"
                stroke="oklch(0.85 0.18 160 / 0.15)"
                strokeDasharray="2 4"
              />
            ))}
          </svg>
          <div className="absolute bottom-0 left-0 right-0 text-center">
            <div className="text-[10px] font-mono text-muted-foreground uppercase">
              Diversity Index
            </div>
            <div className="text-2xl text-emerald">
              68<span className="text-sm text-muted-foreground">%</span>
            </div>
            <div className="text-[10px] font-mono text-muted-foreground">
              Optimal Range 70%+
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-[10px] font-mono text-muted-foreground uppercase mb-1">
            Key Taxa
          </div>
          {TAXA.map((t) => (
            <div key={t.n} className="text-[11px]">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full bg-${t.c}`}
                    style={{ boxShadow: `0 0 8px var(--${t.c})` }}
                  />
                  {t.n}
                </span>
                <span className={`font-mono text-${t.c}`}>{t.v}%</span>
              </div>
              <Bar value={t.v} color={t.c} />
            </div>
          ))}
          <div className="grid grid-cols-2 gap-2 pt-2 text-[10px] font-mono">
            <div className="glass p-2 rounded">
              <div className="text-muted-foreground">Inflammation</div>
              <div className="text-danger">Moderate</div>
            </div>
            <div className="glass p-2 rounded">
              <div className="text-muted-foreground">Gut Recovery</div>
              <div className="text-emerald">+12%</div>
            </div>
            <div className="glass p-2 rounded">
              <div className="text-muted-foreground">Absorption</div>
              <div className="text-cyan">74%</div>
            </div>
            <div className="glass p-2 rounded">
              <div className="text-muted-foreground">Conversion</div>
              <div className="text-gold">0.82</div>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-4 w-full glass border border-cyan/30 rounded-lg py-2 text-[11px] font-mono uppercase tracking-wider text-cyan hover:glow-cyan">
        View Microbiome Lab →
      </button>
    </Panel>
  );
}

/* ---------- active interventions ---------- */

const INTERVENTIONS = [
  { icon: HeartPulse, name: "Multi-Micronutrient Supplement", cov: 78, imp: 0.76 },
  { icon: Microscope, name: "Probiotic + Prebiotic", cov: 64, imp: 0.68 },
  { icon: Droplets, name: "Deworming Program", cov: 82, imp: 0.71 },
  { icon: Waves, name: "WASH Improvement", cov: 58, imp: 0.63 },
  { icon: Wheat, name: "Maternal Nutrition", cov: 71, imp: 0.74 },
  { icon: Shield, name: "Vaccination Campaign", cov: 88, imp: 0.81 },
  { icon: GraduationCap, name: "Early Learning", cov: 46, imp: 0.59 },
  { icon: Users, name: "Cash Transfers", cov: 39, imp: 0.52 },
];

function ActiveInterventions() {
  return (
    <Panel>
      <SectionTitle
        eyebrow="Interventions"
        title="Active Programs"
        right={<Chip color="gold">OPTIMIZED FOR MAX IMPACT</Chip>}
      />
      <div className="space-y-2">
        {INTERVENTIONS.map((i) => {
          const Icon = i.icon;
          return (
            <div
              key={i.name}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 hover:border-cyan/30 transition"
            >
              <div className="h-8 w-8 grid place-items-center rounded-md border border-cyan/30 bg-cyan/10">
                <Icon className="h-4 w-4 text-cyan" />
              </div>
              <div className="flex-1 min-w-0 text-[12px]">{i.name}</div>
              <div className="text-[10px] font-mono w-28">
                <div className="text-muted-foreground">Coverage {i.cov}%</div>
                <Bar value={i.cov} color="cyan" />
              </div>
              <div className="text-right w-24">
                <div className="text-[9px] font-mono text-muted-foreground">
                  IMPACT
                </div>
                <div className="text-[12px] font-mono text-emerald">
                  {i.imp.toFixed(2)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="mt-3 w-full glass border border-violet/30 rounded-lg py-2 text-[11px] font-mono uppercase tracking-wider text-violet hover:glow-violet">
        Design New Intervention +
      </button>
    </Panel>
  );
}

/* ---------- right column: alerts + impact + partners ---------- */

const ALERTS = [
  { sev: "HIGH", color: "danger", title: "High Inflammation Cluster", sub: "Western Kenya", icon: AlertTriangle },
  { sev: "MED", color: "warning", title: "WASH Risk Increasing", sub: "2 Districts", icon: Droplets },
  { sev: "MED", color: "warning", title: "Food Price Spike", sub: "3 Regions", icon: LineChart },
  { sev: "LOW", color: "emerald", title: "Disease Outbreak Risk", sub: "Contained", icon: Activity },
  { sev: "MED", color: "warning", title: "Migration Pressure", sub: "Sahel Corridor", icon: Users },
  { sev: "HIGH", color: "danger", title: "Crop Failure Prediction", sub: "Northern Belt", icon: Wheat },
] as const;

function EarlyWarning() {
  return (
    <Panel>
      <SectionTitle
        eyebrow="Early Warning"
        title="Signals & Alerts"
        right={<Chip color="danger">6 ACTIVE</Chip>}
      />
      <div className="space-y-2">
        {ALERTS.map((a) => {
          const Icon = a.icon;
          return (
            <div
              key={a.title}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
            >
              <div
                className={`h-8 w-8 grid place-items-center rounded-md border border-[color:var(--${a.color})]/30 bg-[color:var(--${a.color})]/10 glow-${a.color}`}
              >
                <Icon className={`h-4 w-4 text-${a.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-medium truncate">{a.title}</div>
                <div className="text-[10px] text-muted-foreground">{a.sub}</div>
              </div>
              <Chip color={a.color}>{a.sev}</Chip>
            </div>
          );
        })}
      </div>
      <button className="mt-3 w-full glass border border-cyan/30 rounded-lg py-2 text-[11px] font-mono uppercase tracking-wider text-cyan">
        View All Alerts
      </button>
    </Panel>
  );
}

const IMPACT = [
  ["Children Reached", "1.2M", "cyan"],
  ["Stunting Prevented", "72,381", "emerald"],
  ["IQ Points Gained (est.)", "+4.7 avg", "violet"],
  ["Healthcare Savings", "$21.3M", "gold"],
  ["Communities Improved", "1,087", "cyan"],
  ["CO₂ Impact Avoided", "315K t", "emerald"],
  ["School Attendance", "+18%", "gold"],
  ["Lifetime Earnings ↑", "$4.8B", "violet"],
] as const;

function ImpactDashboard() {
  return (
    <Panel>
      <SectionTitle eyebrow="Impact Dashboard" title="Outcomes This Year" />
      <div className="space-y-2">
        {IMPACT.map(([k, v, c]) => (
          <div
            key={k}
            className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0"
          >
            <span className="text-[12px] text-muted-foreground">{k}</span>
            <span className={`text-[13px] font-mono text-${c}`}>{v}</span>
          </div>
        ))}
      </div>
      <button className="mt-3 w-full glass border border-gold/30 rounded-lg py-2 text-[11px] font-mono uppercase tracking-wider text-gold">
        View Impact Report
      </button>
    </Panel>
  );
}

function CollaborationHub() {
  const rows = [
    ["Researchers", 412, Microscope],
    ["NGOs", 684, HeartPulse],
    ["Government", 376, Landmark],
    ["Communities", 673, Users],
    ["Universities", 218, GraduationCap],
  ] as const;
  return (
    <Panel>
      <SectionTitle eyebrow="Collaboration Hub" title="Connected Partners" />
      <div className="text-3xl font-light mb-3">2,145</div>
      <div className="space-y-2">
        {rows.map(([k, v, I]) => (
          <div
            key={k}
            className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0"
          >
            <span className="text-[12px] text-muted-foreground flex items-center gap-2">
              <I className="h-3.5 w-3.5 text-cyan" />
              {k}
            </span>
            <span className="text-[13px] font-mono text-cyan">{v}</span>
          </div>
        ))}
      </div>
      <button className="mt-3 w-full glass border border-violet/30 rounded-lg py-2 text-[11px] font-mono uppercase tracking-wider text-violet">
        Log to Hub
      </button>
    </Panel>
  );
}

/* ---------- lower row: predictive map, nutrition, environment, learning ---------- */

function PredictiveRiskMap() {
  return (
    <Panel>
      <SectionTitle
        eyebrow="Predictive Risk Map"
        title="Stunting Risk · Next 12 Months"
      />
      <div className="relative h-[220px] rounded-lg overflow-hidden border border-white/5 bg-black/30">
        <svg viewBox="0 0 400 220" className="w-full h-full">
          <defs>
            <radialGradient id="risk1" cx="30%" cy="40%" r="40%">
              <stop offset="0%" stopColor="oklch(0.75 0.25 320 / 0.9)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="risk2" cx="70%" cy="60%" r="45%">
              <stop offset="0%" stopColor="oklch(0.65 0.28 20 / 0.9)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="400" height="220" fill="url(#risk1)" />
          <rect width="400" height="220" fill="url(#risk2)" />
          {Array.from({ length: 80 }).map((_, i) => {
            const seed = Math.sin(i * 91.13) * 4738.5;
            const r = seed - Math.floor(seed);
            return (
              <circle
                key={i}
                cx={Math.abs((r * 3919) % 380) + 10}
                cy={Math.abs((r * 2731) % 200) + 10}
                r={1 + r * 2}
                fill="oklch(0.9 0.2 300)"
                opacity={0.6}
              />
            );
          })}
        </svg>
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[9px] font-mono">
          <span className="text-cyan">LOW RISK</span>
          <div className="h-1.5 flex-1 mx-3 rounded-full bg-gradient-to-r from-cyan via-violet to-danger" />
          <span className="text-danger">VERY HIGH RISK</span>
        </div>
      </div>
      <button className="mt-3 w-full glass border border-violet/30 rounded-lg py-2 text-[11px] font-mono uppercase tracking-wider text-violet">
        View Predictions
      </button>
    </Panel>
  );
}

const NUTRIENTS = [
  { n: "Protein", v: 78, s: "Good", c: "emerald" },
  { n: "Iron", v: 34, s: "Deficient", c: "danger" },
  { n: "Zinc", v: 42, s: "Low", c: "warning" },
  { n: "Vitamin A", v: 38, s: "Deficient", c: "danger" },
  { n: "Vitamin D", v: 55, s: "Low", c: "warning" },
  { n: "Iodine", v: 72, s: "Adequate", c: "emerald" },
  { n: "Calcium", v: 68, s: "Good", c: "emerald" },
  { n: "Omega-3", v: 44, s: "Low", c: "warning" },
  { n: "Fiber", v: 61, s: "Adequate", c: "cyan" },
  { n: "Amino Acids", v: 58, s: "Adequate", c: "cyan" },
  { n: "Calories", v: 82, s: "Good", c: "emerald" },
] as const;

function NutritionIntel() {
  return (
    <Panel>
      <SectionTitle eyebrow="Nutrition Intelligence" title="Diet Composition" />
      <div className="flex gap-4">
        <div className="w-40 shrink-0">
          <div className="text-3xl font-light">
            72<span className="text-sm text-muted-foreground">/100</span>
          </div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase">
            Diet Quality
          </div>
          <div className="mt-3 text-2xl text-cyan">
            6.2<span className="text-xs text-muted-foreground">/12</span>
          </div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase">
            Food Diversity
          </div>

          {/* nutrient pie */}
          <svg viewBox="-50 -50 100 100" className="mt-4 w-full">
            {NUTRIENTS.slice(0, 6).map((n, i) => {
              const a1 = ((i / 6) * Math.PI * 2) - Math.PI / 2;
              const a2 = (((i + 1) / 6) * Math.PI * 2) - Math.PI / 2;
              const r = 20 + (n.v / 100) * 20;
              const x1 = Math.cos(a1) * r;
              const y1 = Math.sin(a1) * r;
              const x2 = Math.cos(a2) * r;
              const y2 = Math.sin(a2) * r;
              return (
                <path
                  key={n.n}
                  d={`M 0 0 L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`}
                  fill={`var(--${n.c})`}
                  opacity={0.75}
                  stroke="oklch(0.14 0.03 260)"
                  strokeWidth="0.5"
                />
              );
            })}
          </svg>
        </div>
        <div className="flex-1 space-y-1.5">
          <div className="text-[10px] font-mono text-muted-foreground uppercase mb-1">
            Key Gaps
          </div>
          {NUTRIENTS.map((n) => (
            <div
              key={n.n}
              className="flex items-center gap-2 text-[11px]"
            >
              <span className="w-20">{n.n}</span>
              <Bar value={n.v} color={n.c} />
              <span className={`text-[10px] font-mono w-20 text-right text-${n.c}`}>
                {n.s}
              </span>
            </div>
          ))}
        </div>
      </div>
      <button className="mt-4 w-full glass border border-gold/30 rounded-lg py-2 text-[11px] font-mono uppercase tracking-wider text-gold">
        Optimize Local Diets
      </button>
    </Panel>
  );
}

function EnvironmentIntel() {
  return (
    <Panel>
      <SectionTitle eyebrow="Environmental Intelligence" title="Village Digital Twin" />
      <div className="grid grid-cols-2 gap-4">
        <div className="relative h-[200px] rounded-lg overflow-hidden border border-white/5 bg-gradient-to-b from-[oklch(0.25_0.06_240)] to-[oklch(0.15_0.04_260)]">
          {/* iso village */}
          <svg viewBox="0 0 200 160" className="w-full h-full">
            <defs>
              <linearGradient id="ground" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.35 0.1 160 / 0.5)" />
                <stop offset="100%" stopColor="oklch(0.2 0.05 240 / 0.5)" />
              </linearGradient>
            </defs>
            <polygon points="0,110 100,60 200,110 100,160" fill="url(#ground)" stroke="var(--cyan)" strokeOpacity="0.3" />
            {[
              [60, 90], [100, 80], [140, 92], [80, 105], [130, 108], [95, 118],
            ].map(([x, y], i) => (
              <g key={i}>
                <polygon
                  points={`${x - 8},${y} ${x + 8},${y} ${x + 8},${y + 10} ${x - 8},${y + 10}`}
                  fill="oklch(0.4 0.06 40)"
                  stroke="var(--gold)"
                  strokeOpacity="0.4"
                />
                <polygon
                  points={`${x - 10},${y} ${x + 10},${y} ${x},${y - 8}`}
                  fill="oklch(0.5 0.15 25)"
                />
              </g>
            ))}
            {/* particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <circle
                key={i}
                cx={(i * 37) % 200}
                cy={(i * 19) % 60 + 10}
                r="1"
                fill="var(--cyan)"
                opacity={0.5}
              />
            ))}
          </svg>
        </div>
        <div className="space-y-3 text-[11px]">
          <div>
            <div className="text-[10px] font-mono text-muted-foreground uppercase">
              WASH Index
            </div>
            <div className="text-2xl">
              58<span className="text-xs text-muted-foreground">/100</span>
            </div>
          </div>
          {[
            ["Water Quality", "Fair", "warning", 58],
            ["Sanitation Access", "42%", "danger", 42],
            ["Air Quality", "Moderate", "warning", 62],
            ["Housing Quality", "Low", "danger", 38],
            ["Climate Resilience", "Recovering", "cyan", 55],
          ].map(([k, v, c, val]) => (
            <div key={k as string}>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{k}</span>
                <span className={`text-${c} font-mono`}>{v}</span>
              </div>
              <Bar value={val as number} color={c as "cyan" | "emerald" | "violet" | "gold" | "danger" | "warning"} />
            </div>
          ))}
        </div>
      </div>
      <button className="mt-4 w-full glass border border-emerald/30 rounded-lg py-2 text-[11px] font-mono uppercase tracking-wider text-emerald">
        Improve Environment
      </button>
    </Panel>
  );
}

function LearningEngine() {
  return (
    <Panel>
      <SectionTitle
        eyebrow="Learning Engine"
        title="AI Decision Core"
        right={<Chip color="violet">NEURAL</Chip>}
      />
      <div className="relative h-[200px] grid place-items-center">
        <div className="absolute inset-0 grid place-items-center">
          <div className="h-40 w-40 rounded-full border border-violet/30 animate-spin-slow" />
          <div className="absolute h-28 w-28 rounded-full border border-cyan/30 animate-spin-reverse" />
        </div>
        <svg viewBox="-60 -60 120 120" className="h-40 w-40">
          <defs>
            <radialGradient id="brainG" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="oklch(0.85 0.2 300 / 0.9)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle r="40" fill="url(#brainG)" />
          {Array.from({ length: 20 }).map((_, i) => {
            const a = (i / 20) * Math.PI * 2;
            const x = Math.cos(a) * 40;
            const y = Math.sin(a) * 40;
            return <circle key={i} cx={x} cy={y} r="2" fill="var(--violet)" />;
          })}
          {Array.from({ length: 30 }).map((_, i) => {
            const a1 = (i * 137.5) * (Math.PI / 180);
            const a2 = ((i + 7) * 137.5) * (Math.PI / 180);
            return (
              <line
                key={i}
                x1={Math.cos(a1) * 40}
                y1={Math.sin(a1) * 40}
                x2={Math.cos(a2) * 40}
                y2={Math.sin(a2) * 40}
                stroke="var(--cyan)"
                strokeOpacity="0.25"
              />
            );
          })}
        </svg>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3 text-[11px] font-mono">
        <div className="glass p-2 rounded">
          <div className="text-muted-foreground">Model Performance</div>
          <div className="text-violet text-lg">94.2%</div>
        </div>
        <div className="glass p-2 rounded">
          <div className="text-muted-foreground">Insights Generated</div>
          <div className="text-cyan text-lg">12,843</div>
        </div>
        <div className="glass p-2 rounded">
          <div className="text-muted-foreground">Policy Simulations</div>
          <div className="text-gold text-lg">1,271</div>
        </div>
        <div className="glass p-2 rounded">
          <div className="text-muted-foreground">Patterns Detected</div>
          <div className="text-emerald text-lg">358</div>
        </div>
      </div>
      <button className="mt-3 w-full glass border border-violet/30 rounded-lg py-2 text-[11px] font-mono uppercase tracking-wider text-violet">
        View Insights
      </button>
    </Panel>
  );
}

/* ---------- analytics & governance & copilot rows ---------- */

function AnalyticsPanel() {
  const bars = [22, 34, 28, 45, 38, 52, 48, 61, 55, 68, 72, 65, 78, 82, 74, 88, 92, 85, 96, 90];
  return (
    <Panel>
      <SectionTitle
        eyebrow="Analytics"
        title="Predictive Trajectory · 20 Yr"
        right={
          <div className="flex gap-2">
            <Chip color="cyan">STUNTING ↓ 41%</Chip>
            <Chip color="emerald">IQ ↑ +6.2</Chip>
            <Chip color="gold">ROI 8.4x</Chip>
          </div>
        }
      />
      <div className="relative h-[180px]">
        <svg viewBox="0 0 400 160" className="w-full h-full">
          <defs>
            <linearGradient id="areaG" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 40, 80, 120].map((y) => (
            <line key={y} x1="0" x2="400" y1={y + 10} y2={y + 10} stroke="oklch(1 0 0 / 0.05)" />
          ))}
          <path
            d={`M 0 ${160 - bars[0]} ${bars
              .map((b, i) => `L ${(i / (bars.length - 1)) * 400} ${160 - b}`)
              .join(" ")} L 400 160 L 0 160 Z`}
            fill="url(#areaG)"
          />
          <path
            d={`M 0 ${160 - bars[0]} ${bars
              .map((b, i) => `L ${(i / (bars.length - 1)) * 400} ${160 - b}`)
              .join(" ")}`}
            fill="none"
            stroke="var(--cyan)"
            strokeWidth="2"
          />
          <path
            d={`M 0 ${160 - bars[0] * 0.6} ${bars
              .map((b, i) => `L ${(i / (bars.length - 1)) * 400} ${160 - b * 0.65}`)
              .join(" ")}`}
            fill="none"
            stroke="var(--violet)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d={`M 0 ${160 - bars[0] * 0.4} ${bars
              .map((b, i) => `L ${(i / (bars.length - 1)) * 400} ${160 - b * 0.45}`)
              .join(" ")}`}
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
          />
        </svg>
        <div className="absolute top-2 right-2 flex gap-3 text-[10px] font-mono">
          <span className="text-cyan">● Flourishing</span>
          <span className="text-violet">● Stunting Risk</span>
          <span className="text-gold">● Baseline</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-4 text-[11px]">
        {[
          ["Predictions", "428K", "cyan"],
          ["Simulations", "12.4K", "violet"],
          ["Expected Lives ↑", "3.1M", "emerald"],
          ["Confidence", "96%", "gold"],
        ].map(([k, v, c]) => (
          <div key={k} className="glass p-3 rounded">
            <div className="text-[10px] font-mono text-muted-foreground uppercase">
              {k}
            </div>
            <div className={`text-lg text-${c}`}>{v}</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function GovernancePanel() {
  const policies = [
    { n: "National Nutrition Act 2049", status: "Ratified", c: "emerald" },
    { n: "Micronutrient Fortification Mandate", status: "In Review", c: "warning" },
    { n: "Clean Water Access Directive", status: "Ratified", c: "emerald" },
    { n: "Child Data Sovereignty Charter", status: "Signed 47/54", c: "cyan" },
    { n: "AI Accountability Framework", status: "Draft v3", c: "violet" },
    { n: "Community Consent Protocol", status: "Active", c: "emerald" },
  ];
  return (
    <Panel>
      <SectionTitle
        eyebrow="Governance"
        title="Policy & Ethics Ledger"
        right={<Chip color="violet">CHAIN-VERIFIED</Chip>}
      />
      <div className="space-y-2">
        {policies.map((p) => (
          <div
            key={p.n}
            className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
          >
            <Scale className={`h-4 w-4 text-${p.c}`} />
            <span className="text-[12px] flex-1">{p.n}</span>
            <Chip color={p.c as "cyan" | "emerald" | "violet" | "gold" | "danger" | "warning"}>{p.status}</Chip>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] font-mono">
        <div className="glass p-2 rounded">
          <div className="text-muted-foreground">Ratified</div>
          <div className="text-emerald text-lg">128</div>
        </div>
        <div className="glass p-2 rounded">
          <div className="text-muted-foreground">Pending</div>
          <div className="text-warning text-lg">34</div>
        </div>
        <div className="glass p-2 rounded">
          <div className="text-muted-foreground">Simulated</div>
          <div className="text-cyan text-lg">1.2K</div>
        </div>
      </div>
    </Panel>
  );
}

function Copilot() {
  const [q, setQ] = useState("");
  return (
    <Panel>
      <SectionTitle
        eyebrow="Atlas AI Copilot"
        title="Conversational Intelligence"
        right={<Chip color="cyan">GPT-Ω · EXPLAINABLE</Chip>}
      />
      <div className="space-y-2 max-h-[220px] overflow-hidden">
        <div className="glass p-3 rounded-lg text-[12px]">
          <div className="text-[10px] font-mono text-cyan uppercase mb-1">
            You
          </div>
          What happens if we improve zinc intake by 20% across the Sahel corridor?
        </div>
        <div className="glass p-3 rounded-lg text-[12px] border border-violet/30">
          <div className="text-[10px] font-mono text-violet uppercase mb-1 flex items-center gap-2">
            <Sparkles className="h-3 w-3" /> Atlas
          </div>
          Projected 10-year outcome: <span className="text-emerald">stunting ↓ 14.2%</span>,{" "}
          <span className="text-cyan">IQ +2.1 avg</span>, healthcare savings{" "}
          <span className="text-gold">$4.6B</span>. Confidence 92%.
          <div className="mt-2 flex gap-2">
            <Chip color="emerald">RUN SIMULATION</Chip>
            <Chip color="cyan">EXPLAIN</Chip>
            <Chip color="violet">EXPORT POLICY</Chip>
          </div>
        </div>
      </div>
      <div className="mt-3 relative">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask Atlas anything · natural language · predictive scenarios…"
          className="w-full h-11 bg-white/[0.03] border border-cyan/30 rounded-lg px-4 pr-11 text-[12px] font-mono placeholder:text-muted-foreground focus:outline-none focus:border-cyan focus:glow-cyan"
        />
        <button className="absolute right-1.5 top-1.5 h-8 w-8 rounded-md bg-cyan/20 border border-cyan/40 grid place-items-center hover:glow-cyan">
          <Send className="h-3.5 w-3.5 text-cyan" />
        </button>
      </div>
    </Panel>
  );
}

/* ---------- data flow architecture bottom bar ---------- */

const FLOW = [
  { icon: Radar, label: "Data Collection", sub: "Field · IoT · Surveys", c: "emerald" },
  { icon: Database, label: "Data Integration", sub: "ETL · Validation", c: "cyan" },
  { icon: Layers, label: "Data Lake", sub: "Secure & Encrypted", c: "cyan" },
  { icon: Cpu, label: "AI/ML Engine", sub: "Patterns · Predictions", c: "violet" },
  { icon: Brain, label: "Decision Engine", sub: "Recommendations", c: "violet" },
  { icon: Zap, label: "Action Layer", sub: "Programs · Policies", c: "gold" },
  { icon: Network, label: "Feedback Loop", sub: "Monitor · Learn", c: "emerald" },
];

function DataFlow() {
  return (
    <Panel>
      <SectionTitle
        eyebrow="Data Flow Architecture"
        title="Planetary Intelligence Pipeline"
        right={
          <div className="text-[10px] font-mono text-muted-foreground italic">
            "We don't just collect data. We unlock human potential."
          </div>
        }
      />
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {FLOW.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={f.label} className="flex items-center gap-2 shrink-0">
              <div className="glass px-3 py-2 rounded-lg flex items-center gap-2 min-w-[160px]">
                <div
                  className={`h-8 w-8 grid place-items-center rounded-md border border-[color:var(--${f.c})]/40 bg-[color:var(--${f.c})]/10 glow-${f.c}`}
                >
                  <Icon className={`h-4 w-4 text-${f.c}`} />
                </div>
                <div>
                  <div className="text-[11px] font-medium">{f.label}</div>
                  <div className="text-[9px] font-mono text-muted-foreground">
                    {f.sub}
                  </div>
                </div>
              </div>
              {i < FLOW.length - 1 && (
                <svg width="24" height="12" className="shrink-0">
                  <line
                    x1="0" y1="6" x2="24" y2="6"
                    stroke="var(--cyan)"
                    strokeOpacity="0.6"
                    strokeDasharray="4 4"
                    className="animate-flow"
                  />
                  <polygon points="18,2 24,6 18,10" fill="var(--cyan)" opacity="0.7" />
                </svg>
              )}
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

/* ---------- disease surveillance + agriculture + knowledge graph strip ---------- */

function DiseaseSurveillance() {
  const rows = [
    { d: "Malaria", risk: 72, trend: "↑", c: "danger" },
    { d: "Cholera", risk: 34, trend: "↓", c: "emerald" },
    { d: "Measles", risk: 48, trend: "→", c: "warning" },
    { d: "Respiratory", risk: 61, trend: "↑", c: "warning" },
    { d: "Diarrheal", risk: 55, trend: "↓", c: "cyan" },
  ];
  return (
    <Panel>
      <SectionTitle
        eyebrow="Disease Surveillance"
        title="Outbreak Radar"
        right={<Chip color="cyan">R₀ MONITOR</Chip>}
      />
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.d}
            className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
          >
            <Stethoscope className={`h-4 w-4 text-${r.c}`} />
            <span className="text-[12px] flex-1">{r.d}</span>
            <Bar value={r.risk} color={r.c as "cyan" | "emerald" | "violet" | "gold" | "danger" | "warning"} />
            <span className={`text-[11px] font-mono text-${r.c} w-8 text-right`}>
              {r.risk}
            </span>
            <span className={`text-${r.c} text-lg leading-none w-4`}>{r.trend}</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function PrecisionAgri() {
  return (
    <Panel>
      <SectionTitle
        eyebrow="Precision Agriculture"
        title="Yield & Soil Intelligence"
        right={<Chip color="emerald">+18% YoY</Chip>}
      />
      <div className="grid grid-cols-2 gap-3">
        <div className="glass p-3 rounded">
          <div className="text-[10px] font-mono text-muted-foreground uppercase">
            Soil Health
          </div>
          <div className="text-2xl text-emerald">7.2<span className="text-xs text-muted-foreground">/10</span></div>
          <Bar value={72} color="emerald" />
        </div>
        <div className="glass p-3 rounded">
          <div className="text-[10px] font-mono text-muted-foreground uppercase">
            Crop Diversity
          </div>
          <div className="text-2xl text-gold">14</div>
          <Bar value={58} color="gold" />
        </div>
        <div className="glass p-3 rounded">
          <div className="text-[10px] font-mono text-muted-foreground uppercase">
            Water Efficiency
          </div>
          <div className="text-2xl text-cyan">82%</div>
          <Bar value={82} color="cyan" />
        </div>
        <div className="glass p-3 rounded">
          <div className="text-[10px] font-mono text-muted-foreground uppercase">
            Yield Forecast
          </div>
          <div className="text-2xl text-violet">+12%</div>
          <Bar value={68} color="violet" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
        <Satellite className="h-3 w-3 text-cyan" />
        SAT-04 · CROP-VISION · 3 min ago
      </div>
    </Panel>
  );
}

function KnowledgeGraph() {
  return (
    <Panel>
      <SectionTitle
        eyebrow="Knowledge Graph"
        title="Interconnected Intelligence"
        right={<Chip color="violet">42M NODES</Chip>}
      />
      <div className="relative h-[220px]">
        <svg viewBox="-100 -100 200 200" className="h-full w-full">
          {Array.from({ length: 40 }).map((_, i) => {
            const a1 = (i * 31) * (Math.PI / 180);
            const a2 = ((i + 11) * 47) * (Math.PI / 180);
            return (
              <line
                key={i}
                x1={Math.cos(a1) * 70} y1={Math.sin(a1) * 70}
                x2={Math.cos(a2) * 70} y2={Math.sin(a2) * 70}
                stroke="var(--cyan)" strokeOpacity="0.12"
              />
            );
          })}
          {Array.from({ length: 30 }).map((_, i) => {
            const a = (i / 30) * Math.PI * 2;
            const r = 60 + ((i * 13) % 30);
            const x = Math.cos(a) * r;
            const y = Math.sin(a) * r;
            const c = ["cyan", "emerald", "violet", "gold"][i % 4];
            return (
              <circle
                key={i} cx={x} cy={y} r={2 + (i % 3)}
                fill={`var(--${c})`}
                style={{ filter: `drop-shadow(0 0 6px var(--${c}))` }}
              />
            );
          })}
          <circle r="12" fill="var(--violet)" opacity="0.4" />
          <circle r="6" fill="var(--violet)" />
        </svg>
      </div>
      <div className="grid grid-cols-3 gap-2 text-[10px] font-mono">
        <div><span className="text-muted-foreground">Entities</span><div className="text-cyan">42.1M</div></div>
        <div><span className="text-muted-foreground">Relations</span><div className="text-emerald">218M</div></div>
        <div><span className="text-muted-foreground">Sources</span><div className="text-gold">14.2K</div></div>
      </div>
    </Panel>
  );
}

/* ---------- background particles ---------- */

function Particles() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <svg className="absolute inset-0 w-full h-full">
        {Array.from({ length: 60 }).map((_, i) => {
          const seed = Math.sin(i * 12.9898) * 43758.5453;
          const r = seed - Math.floor(seed);
          return (
            <circle
              key={i}
              cx={`${r * 100}%`}
              cy={`${((i * 91) % 100)}%`}
              r={1 + (i % 3)}
              fill={["var(--cyan)", "var(--violet)", "var(--emerald)"][i % 3]}
              opacity={0.4}
              className="animate-drift"
              style={{ animationDelay: `${i * 0.2}s`, animationDuration: `${8 + (i % 6)}s` }}
            />
          );
        })}
      </svg>
      {/* dna helix */}
      <svg className="absolute right-4 top-40 opacity-20" width="120" height="400" viewBox="0 0 120 400">
        {Array.from({ length: 40 }).map((_, i) => {
          const y = i * 10;
          const x1 = 60 + Math.sin(i * 0.5) * 40;
          const x2 = 60 - Math.sin(i * 0.5) * 40;
          return (
            <g key={i}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke="var(--cyan)" strokeOpacity="0.4" />
              <circle cx={x1} cy={y} r="2" fill="var(--emerald)" />
              <circle cx={x2} cy={y} r="2" fill="var(--violet)" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ---------- main ---------- */

function AtlasSanctum() {
  const [time, setTime] = useState("09:42:11");
  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date();
      setTime(
        `${String(d.getUTCHours()).padStart(2, "0")}:${String(
          d.getUTCMinutes()
        ).padStart(2, "0")}:${String(d.getUTCSeconds()).padStart(2, "0")}`
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen px-4 pt-4 pb-6 relative">
      <Particles />
      <TopBar time={time} />

      {/* mission header */}
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4 px-2">
        <div>
          <div className="text-[10px] font-mono tracking-[0.4em] text-cyan uppercase">
            Systems Architecture · Planetary Command
          </div>
          <h1 className="text-3xl md:text-4xl font-light tracking-tight mt-1">
            Child Flourishing Intelligence Network
          </h1>
          <p className="text-muted-foreground text-sm max-w-2xl mt-1">
            Ending hidden hunger and unlocking human potential — one child, one
            community, one civilization at a time.
          </p>
        </div>
        <div className="flex gap-3 text-[11px] font-mono">
          <div className="glass px-3 py-2 rounded flex items-center gap-2">
            <Rocket className="h-3.5 w-3.5 text-gold" />
            <span className="text-muted-foreground">MISSION T+</span>
            <span className="text-gold">07y 142d</span>
          </div>
          <div className="glass px-3 py-2 rounded flex items-center gap-2">
            <Building2 className="h-3.5 w-3.5 text-violet" />
            <span className="text-muted-foreground">NODES</span>
            <span className="text-violet">2,845</span>
          </div>
          <div className="glass px-3 py-2 rounded flex items-center gap-2">
            <Circle className="h-2 w-2 fill-emerald text-emerald" />
            <span className="text-emerald">LIVE</span>
          </div>
        </div>
      </div>

      {/* main grid */}
      <div className="mt-5 grid grid-cols-12 gap-4">
        {/* left column */}
        <aside className="col-span-12 lg:col-span-2 space-y-4">
          <SystemLayers />
          <DataIntegrity />
          <NetworkStatus />
        </aside>

        {/* center */}
        <main className="col-span-12 lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <ChildOverview />
            <div className="xl:col-span-2">
              <DigitalTwin />
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <MicrobiomeLab />
            <ActiveInterventions />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
            <PredictiveRiskMap />
            <NutritionIntel />
            <EnvironmentIntel />
            <LearningEngine />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div className="xl:col-span-2">
              <AnalyticsPanel />
            </div>
            <GovernancePanel />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <DiseaseSurveillance />
            <PrecisionAgri />
            <KnowledgeGraph />
          </div>

          <Copilot />
        </main>

        {/* right column */}
        <aside className="col-span-12 lg:col-span-3 space-y-4">
          <EarlyWarning />
          <ImpactDashboard />
          <CollaborationHub />
        </aside>
      </div>

      <div className="mt-4">
        <DataFlow />
      </div>

      <footer className="mt-6 flex items-center justify-between px-2 text-[10px] font-mono text-muted-foreground">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-3 w-3 text-cyan" />
          Atlas Sanctum v10.4 · Chain-verified · UN-aligned
        </div>
        <div>© 2050 · Planetary Intelligence Consortium</div>
      </footer>
    </div>
  );
}
