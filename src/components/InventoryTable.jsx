import { useMemo, useState } from "react";
import { Search, Filter, Package } from "lucide-react";

const mockData = [
  { sku: "PROD-001", name: "Vitamin C 500mg", lot: "A1-23", qty: 120, location: "NYC-01", expiry: "2025-02-15", status: "OK" },
  { sku: "PROD-002", name: "Probiotic Complex", lot: "B4-11", qty: 18, location: "DAL-02", expiry: "2024-12-01", status: "LOW" },
  { sku: "PROD-003", name: "Organic Baby Food", lot: "X7-09", qty: 64, location: "SFO-03", expiry: "2024-11-12", status: "NEAR" },
  { sku: "PROD-004", name: "Cold Brew Concentrate", lot: "C9-88", qty: 230, location: "NYC-01", expiry: "2025-06-05", status: "OK" },
];

const statusStyles = {
  OK: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  LOW: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  NEAR: "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
};

export default function InventoryTable() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("ALL");

  const filtered = useMemo(() => {
    return mockData.filter((row) => {
      const matchesQuery = [row.sku, row.name, row.lot, row.location]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesFilter = filter === "ALL" ? true : row.status === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <section id="inventory" className="mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-3 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-900">
          <Package className="h-5 w-5" /> Inventory by lot
        </h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search SKU, name, lot, location"
              className="h-9 w-64 rounded-md border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300"
            />
          </div>
          <div className="relative">
            <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="h-9 appearance-none rounded-md border border-slate-200 bg-white pl-9 pr-8 text-sm outline-none focus:border-slate-300"
            >
              <option value="ALL">All</option>
              <option value="OK">OK</option>
              <option value="LOW">Low stock</option>
              <option value="NEAR">Near expiry</option>
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">▾</span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr className="text-left text-xs font-medium uppercase tracking-wide text-slate-500">
              <th className="px-4 py-3">SKU</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Lot</th>
              <th className="px-4 py-3">Qty</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Expiry</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white text-sm">
            {filtered.map((row) => (
              <tr key={`${row.sku}-${row.lot}`} className="hover:bg-slate-50/60">
                <td className="px-4 py-3 font-mono text-[13px] text-slate-700">{row.sku}</td>
                <td className="px-4 py-3 font-medium text-slate-900">{row.name}</td>
                <td className="px-4 py-3">
                  <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200">
                    {row.lot}
                  </span>
                </td>
                <td className="px-4 py-3 tabular-nums text-slate-700">{row.qty}</td>
                <td className="px-4 py-3 text-slate-700">{row.location}</td>
                <td className="px-4 py-3 text-slate-700">{row.expiry}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[row.status]}`}>
                    {row.status === "NEAR" ? "Near expiry" : row.status === "LOW" ? "Low stock" : "OK"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
