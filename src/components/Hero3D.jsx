import Spline from "@splinetool/react-spline";

export default function Hero3D() {
  return (
    <section className="relative">
      <div className="relative mx-auto h-[380px] w-full max-w-7xl overflow-hidden rounded-2xl border border-slate-200">
        <Spline
          scene="https://prod.spline.design/6h9m8OQ1y7v0v3oT/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <div className="pointer-events-none select-none">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Unified, expiry‑aware inventory across every location
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              FEFO picking, lot tracking, and smart replenishment for B2B and B2C in one platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
