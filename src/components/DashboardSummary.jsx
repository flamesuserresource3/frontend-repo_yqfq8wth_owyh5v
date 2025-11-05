import { AlertTriangle, CheckCircle, Clock, Truck } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, tone }) => {
  const tones = {
    neutral: "bg-slate-50 text-slate-800 border-slate-200",
    good: "bg-emerald-50 text-emerald-800 border-emerald-200",
    warn: "bg-amber-50 text-amber-800 border-amber-200",
    danger: "bg-rose-50 text-rose-800 border-rose-200",
  };
  return (
    <div className={`flex items-center gap-3 rounded-xl border ${tones[tone]} p-4`}> 
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/70 shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-medium text-slate-500">{label}</p>
        <p className="text-lg font-semibold tracking-tight">{value}</p>
      </div>
    </div>
  );
};

export default function DashboardSummary() {
  return (
    <section id="overview" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={CheckCircle} label="In-stock SKUs" value="1,248" tone="neutral" />
        <StatCard icon={AlertTriangle} label="Low stock" value="37" tone="warn" />
        <StatCard icon={Clock} label="Near expiry (30d)" value="22" tone="danger" />
        <StatCard icon={Truck} label="Inbound shipments" value="8" tone="good" />
      </div>
    </section>
  );
}
