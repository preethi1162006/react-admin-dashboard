import { Menu, Search, Bell, X, ShieldCheck } from 'lucide-react';

export default function Navbar({
  onToggleSidebar,
  searchQuery,
  onSearchChange,
  unreadCount = 0,
  user,
  onNotificationClick,
}) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between gap-3 max-w-7xl mx-auto">
        {/* Left: Mobile hamburger menu toggle & Mobile brand badge */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden sm:flex items-center gap-2 lg:hidden">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              AD
            </div>
            <span className="font-semibold text-sm text-slate-800">
              AdminDash
            </span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-md mx-2 sm:mx-4">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search orders, customers, products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right: Notification bell & User Profile Chip */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Notification Button */}
          <button
            onClick={onNotificationClick}
            className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                {unreadCount}
              </span>
            )}
          </button>

          <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>

          {/* User profile section */}
          <div className="flex items-center gap-2.5 pl-1">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
              alt={user?.name || 'Alex Johnson'}
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
            />
            <div className="hidden md:block text-left">
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  {user?.name || 'Alex Johnson'}
                </span>
                <ShieldCheck className="w-3 h-3 text-blue-600" />
              </div>
              <span className="text-[11px] text-slate-500 block leading-tight">
                {user?.role || 'Admin'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
