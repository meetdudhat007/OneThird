import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";

type Stat = {
  value: number | null;
  prefix?: string;
  suffix?: string;
  label: string | null;
};

// Content rule: never invent metrics. Fill these in only with real, confirmed
// numbers; while value/label are null the slot shows a visible placeholder.
const stats: Stat[] = [
  { value: null, label: null },
  { value: null, label: null },
];

function StatItem({ stat }: { stat: Stat }) {
  return (
    <div>
      {stat.value === null ? (
        <p className="text-lg text-on-inverse/70">[NEEDS INPUT] number</p>
      ) : (
        <p className="text-5xl tracking-tight">
          <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
        </p>
      )}
      <p className="mt-3 text-sm text-on-inverse/60">
        {stat.label ?? "[NEEDS INPUT] what this number measures"}
      </p>
    </div>
  );
}

export default function IntroBand() {
  return (
    <section className="mt-16 bg-inverse px-4 py-20 text-on-inverse sm:px-6 lg:mt-24 lg:px-8">
      <Reveal className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <h2 className="text-balance text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Built by engineers, <em className="block">not account managers.</em>
        </h2>

        <div>
          <p className="text-pretty text-xl leading-snug">
            When you work with ZapStack, you talk directly to the people designing and writing
            your software.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-on-inverse/60">
            We learn how your business runs day to day, then build the system around it, so
            the software fits your process instead of forcing a new one.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <StatItem key={i} stat={stat} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
