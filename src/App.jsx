import Header from "./components/Header";
import DashboardSummary from "./components/DashboardSummary";
import InventoryTable from "./components/InventoryTable";
import AlertsPanel from "./components/AlertsPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Operations Dashboard</h2>
          <p className="text-sm text-slate-500 mt-1">
            Real-time, expiry-aware inventory across all locations with B2B & B2C visibility.
          </p>
        </div>

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
