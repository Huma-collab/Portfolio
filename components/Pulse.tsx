// A stylised ECG trace drawn in SVG, used as the hero's signature line.

function beat(x: number, base: number) {
  // P wave, QRS complex, T wave — one heartbeat 120 units wide
  return [
    `L ${x + 18} ${base}`,
    `Q ${x + 24} ${base - 9} ${x + 30} ${base}`,
    `L ${x + 40} ${base}`,
    `L ${x + 44} ${base + 7}`,
    `L ${x + 50} ${base - 46}`,
    `L ${x + 56} ${base + 16}`,
    `L ${x + 60} ${base}`,
    `L ${x + 76} ${base}`,
    `Q ${x + 86} ${base - 16} ${x + 96} ${base}`,
    `L ${x + 120} ${base}`,
  ].join(" ");
}

export default function Pulse() {
  const base = 60;
  let d = `M 0 ${base}`;
  for (let i = 0; i < 12; i++) d += " " + beat(i * 120, base);

  return (
    <div className="pulse" aria-hidden="true">
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d={d} className="pulse-ghost" />
        <path d={d} className="pulse-line" pathLength={1} />
      </svg>
    </div>
  );
}
