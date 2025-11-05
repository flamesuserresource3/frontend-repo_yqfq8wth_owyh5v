import { AlertTriangle, ArrowUpRight } from "lucide-react";

const alerts = [
  { sku: "ACM-GRAN-500", lot: "G2401B", daysLeft: 18, qty: 210, location: "WH-B" },
  { sku: "ACM-JUICE-1L", lot: "O2402Z", daysLeft: 12, qty: 40, location: "WH-A" },
  { sku: "ACM-CHIP-200", lot: "L2308C", daysLeft: 30, qty: 120, location: "WH-A" },
];

export default function AlertsPanel() {
  return (
    <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-slate-900 inline-flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" /> Near-expiry alerts
            </h3>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1">
              View all <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <ul className="divide-y divide-slate-100">
            {alerts.map((a) => (
              <li key={`${a.sku}-${a.lot}`} className="py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900 font-mono">{a.sku} • Lot {a.lot}</p>
                  <p className="text-xs text-slate-500">{a.qty} units at {a.location}</p>
                </div>
                <div className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  a.daysLeft < 14 ? "bg-rose-100 text-rose-700" : "bg-amber-100 text-amber-700"
                }`}>
                  {a.daysLeft} days left
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="text-base font-semibold text-slate-900 mb-2">FEFO picking</h3>
        <p className="text-sm text-slate-600 mb-4">
          Outbound orders prioritize items with the earliest expiry (First-Expiring-First-Out).
          This reduces waste and improves freshness at delivery.
        </p>
        <div className="text-xs text-slate-500 space-y-2">
          <p>• Auto-warnings if an order includes lots under 14 days.</p>
          <p>• Discounting rules for nearly-expired lots.</p>
          <p>• Transfer suggestions to balance stock across locations.</p>
        </div>
      </div>
    </section>
  );
}
