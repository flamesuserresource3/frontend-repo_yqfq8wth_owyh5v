import { Search, Filter, CheckCircle, AlertTriangle } from "lucide-react";

const data = [
  {
    sku: "ACM-CHIP-200",
    name: "Acme Crispy Chips 200g",
    location: "WH-A",
    qty: 820,
    lots: [
      { lot: "L2309A", exp: "2025-01-14", shelfLeft: 70 },
      { lot: "L2308C", exp: "2024-12-05", shelfLeft: 30 },
    ],
    status: "ok",
  },
  {
    sku: "ACM-GRAN-500",
    name: "Acme Granola 500g",
    location: "WH-B",
    qty: 210,
    lots: [
      { lot: "G2401B", exp: "2024-11-20", shelfLeft: 18 },
    ],
    status: "near",
  },
  {
    sku: "ACM-JUICE-1L",
    name: "Acme Orange Juice 1L",
    location: "WH-A",
    qty: 65,
    lots: [
      { lot: "O2402Z", exp: "2024-11-10", shelfLeft: 12 },
      { lot: "O2403K", exp: "2025-02-02", shelfLeft: 96 },
    ],
    status: "near",
  },
];

const StatusPill = ({ status }) => {
  if (status === "near")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-700 px-2 py-0.5 text-xs">
        <AlertTriangle className="h-3.5 w-3.5" /> Near expiry
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs">
      <CheckCircle className="h-3.5 w-3.5" /> Healthy
    </span>
  );
};

export default function InventoryTable() {
  return (
    <section className="mt-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <h2 className="text-base font-semibold text-slate-900">Inventory</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              placeholder="Search SKU, lot, product..."
              className="pl-9 pr-3 py-2 rounded-lg border border-slate-200 bg-white text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 text-sm hover:bg-slate-50">
            <Filter className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="text-left font-medium px-4 py-3">SKU</th>
              <th className="text-left font-medium px-4 py-3">Product</th>
              <th className="text-left font-medium px-4 py-3">Location</th>
              <th className="text-left font-medium px-4 py-3">Quantity</th>
              <th className="text-left font-medium px-4 py-3">Lots & Expiry</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.sku} className="border-t border-slate-100">
                <td className="px-4 py-3 font-mono text-slate-800">{row.sku}</td>
                <td className="px-4 py-3 text-slate-900">{row.name}</td>
                <td className="px-4 py-3">{row.location}</td>
                <td className="px-4 py-3">{row.qty.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    {row.lots.map((l) => (
                      <span key={l.lot} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-2 py-1">
                        <span className="text-xs font-mono text-slate-700">{l.lot}</span>
                        <span className="text-xs text-slate-500">exp {l.exp}</span>
                        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                          l.shelfLeft < 20 ? "bg-rose-100 text-rose-700" : l.shelfLeft < 40 ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"
                        }`}>
                          {l.shelfLeft}d left
                        </span>
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <StatusPill status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
