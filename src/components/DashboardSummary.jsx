import { Package, AlertTriangle, Clock, BarChart3, Truck } from "lucide-react";

const SummaryCard = ({ icon: Icon, label, value, trend, tone }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent pointer-events-none" />
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-xl grid place-content-center text-white ${
          tone === "danger" ? "bg-rose-500" : tone === "warn" ? "bg-amber-500" : tone === "ok" ? "bg-emerald-500" : "bg-indigo-600"
        }`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
          <p className="text-xl font-semibold text-slate-900">{value}</p>
        </div>
      </div>
      {trend && (
        <span className={`text-xs font-medium ${trend > 0 ? "text-emerald-600" : "text-rose-600"}`}>
          {trend > 0 ? "+" : ""}{trend}%
        </span>
      )}
    </div>
  </div>
);

export default function DashboardSummary() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <SummaryCard icon={Package} label="Total SKUs" value="1,284" trend={3.2} />
      <SummaryCard icon={AlertTriangle} label="Low Stock" value="37" trend={-1.1} tone="warn" />
      <SummaryCard icon={Clock} label="Near Expiry (<14d)" value="62" tone="danger" />
      <SummaryCard icon={Truck} label="Warehouse Turnover" value="4.8x" tone="ok" />
    </section>
  );
}
