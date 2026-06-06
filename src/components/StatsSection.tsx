import AnimatedCounter from "./AnimatedCounter";

export default function StatsSection() {
  return (
    <section className="bg-navy py-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 reveal-scale">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {/* Empresas apoyadas */}
          <div className="text-center md:border-r md:border-white/10">
            <div className="font-[var(--font-heading)] font-bold text-4xl md:text-5xl text-brand-light">
              <AnimatedCounter end={500} prefix="+" />
            </div>
            <div className="text-white/70 text-sm mt-2">Empresas apoyadas</div>
          </div>

          {/* Afianzadoras */}
          <div className="text-center md:border-r md:border-white/10">
            <div className="font-[var(--font-heading)] font-bold text-4xl md:text-5xl text-brand-light">
              <AnimatedCounter end={7} prefix="+" />
            </div>
            <div className="text-white/70 text-sm mt-2">Afianzadoras disponibles</div>
          </div>

          {/* Tiempo de cotización */}
          <div className="text-center md:border-r md:border-white/10">
            <div className="font-[var(--font-heading)] font-bold text-4xl md:text-5xl text-brand-light">
              <AnimatedCounter end={2} suffix=" hrs" />
            </div>
            <div className="text-white/70 text-sm mt-2">Cotización promedio</div>
          </div>

          {/* Cobertura */}
          <div className="text-center">
            <div className="font-[var(--font-heading)] font-bold text-3xl md:text-4xl text-brand-light leading-tight pt-1 md:pt-2">
              Todo México
            </div>
            <div className="text-white/70 text-sm mt-2">Cobertura nacional</div>
          </div>
        </div>
      </div>
    </section>
  );
}
