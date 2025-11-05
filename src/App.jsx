import Spline from "@splinetool/react-spline";
import Header from "./components/Header";
import DashboardSummary from "./components/DashboardSummary";
import InventoryTable from "./components/InventoryTable";
import AlertsPanel from "./components/AlertsPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <Header />

      {/* 3D Hero Scene */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="h-[260px] sm:h-[320px]">
            <Spline
              scene="https://prod.spline.design/6h9m8OQ1y7v0v3oT/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Expiry-aware inventory across every location</h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              FEFO-ready operations with real-time lots, shelf-life, and transfer suggestions. Built for both wholesale and consumer channels.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <DashboardSummary />
        <InventoryTable />
        <AlertsPanel />

        <section className="mt-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-base font-semibold text-slate-900 mb-2">B2B & B2C Portals</h3>
            <p className="text-sm text-slate-600">
              Wholesale buyers see negotiated pricing, MOQs, live availability, and shelf-life transparency.
              Consumers shop with confidence knowing best-before, batch traceability, and fresh-stock signals.
            </p>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Acme Inventory Cloud — End-to-end traceability, less waste, smarter replenishment.
      </footer>
    </div>
  );
}
