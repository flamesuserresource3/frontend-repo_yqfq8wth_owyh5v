import { Package, Store, Building2, BarChart3 } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
            <Package className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium text-slate-500">Expiry-aware Inventory</p>
            <h1 className="text-base font-semibold tracking-tight text-slate-900">ShelfSense</h1>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#overview" className="flex items-center gap-2 hover:text-slate-900">
            <BarChart3 className="h-4 w-4" /> Dashboard
          </a>
          <a href="#inventory" className="flex items-center gap-2 hover:text-slate-900">
            <Store className="h-4 w-4" /> Inventory
          </a>
          <a href="#b2b" className="flex items-center gap-2 hover:text-slate-900">
            <Building2 className="h-4 w-4" /> B2B
          </a>
        </nav>
      </div>
    </header>
  );
}
