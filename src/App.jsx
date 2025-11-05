import Header from "./components/Header";
import Hero3D from "./components/Hero3D";
import DashboardSummary from "./components/DashboardSummary";
import InventoryTable from "./components/InventoryTable";
import AlertsPanel from "./components/AlertsPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />

      <main className="space-y-8 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero3D />
        </div>

        <DashboardSummary />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AlertsPanel />
        </div>

        <InventoryTable />

        <section id="b2b" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-8 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">B2B and B2C ready</h3>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Multi-location stock, lot-level expiry tracking, and FEFO picking across wholesale and retail workflows.
              Add supplier pricing, MOQs, and create orders from the same inventory truth.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-6">
        <div className="mx-auto max-w-7xl px-4 text-sm text-slate-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} ShelfSense — expiry-aware inventory for modern ops.
        </div>
      </footer>
    </div>
  );
}
