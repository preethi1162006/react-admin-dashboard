import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Package,
  BarChart3,
  Settings,
  LogOut,
  X,
  Layers,
} from 'lucide-react';

export default function Sidebar({
  isOpen,
  onClose,
  activeItem,
  onSelectItem,
  onLogout,
}) {
  const menuItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'Users', label: 'Users', icon: Users, badge: '2.4k' },
    { id: 'Orders', label: 'Orders', icon: ShoppingCart, badge: '86' },
    { id: 'Products', label: 'Products', icon: Package },
    { id: 'Reports', label: 'Reports', icon: BarChart3 },
    { id: 'Settings', label: 'Settings', icon: Settings },
  ];

  const handleItemClick = (id) => {
    onSelectItem(id);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-200"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Aside */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-800 text-base tracking-tight block">
                AdminDash
              </span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider block">
                Week 1 Workspace
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-5 px-3 overflow-y-auto space-y-1">
          <div className="px-3 pb-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Menu Navigation
          </div>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer group ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer / Logout Button */}
        <div className="p-4 border-t border-slate-100">
          <button
            onClick={() => {
              if (onLogout) onLogout();
              if (window.innerWidth < 1024) onClose();
            }}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-rose-600 hover:bg-rose-50 hover:text-rose-700 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>

          <div className="mt-3 pt-3 border-t border-slate-100/60 text-center">
            <p className="text-[10px] text-slate-400">
              Task 1 &bull; Frontend Dev v1.0
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
