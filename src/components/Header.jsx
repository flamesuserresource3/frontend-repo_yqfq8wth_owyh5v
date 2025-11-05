import { Package, Store, Building2, BarChart3 } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500" />
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-slate-900">Acme Inventory Cloud</h1>
              <p className="text-xs text-slate-500 -mt-0.5">Expiry-aware OMS • B2B & B2C</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <Package className="h-4 w-4" /> Inventory
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <Building2 className="h-4 w-4" /> Warehouses
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <Store className="h-4 w-4" /> B2B / B2C
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <BarChart3 className="h-4 w-4" /> Analytics
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <button className="px-3 py-1.5 text-sm rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700">Docs</button>
            <button className="px-3 py-1.5 text-sm rounded-lg bg-slate-900 text-white hover:bg-slate-800">Sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
}
