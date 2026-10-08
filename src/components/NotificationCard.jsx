import {
  Bell,
  CheckCheck,
  ShoppingBag,
  UserPlus,
  CheckCircle2,
  DollarSign,
  AlertTriangle,
} from 'lucide-react';

export default function NotificationCard({
  notifications = [],
  onToggleRead,
  onMarkAllRead,
}) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'order':
        return <ShoppingBag className="w-3.5 h-3.5 text-blue-600" />;
      case 'user':
        return <UserPlus className="w-3.5 h-3.5 text-indigo-600" />;
      case 'completed':
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
      case 'payment':
        return <DollarSign className="w-3.5 h-3.5 text-teal-600" />;
      case 'warning':
        return <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />;
      default:
        return <Bell className="w-3.5 h-3.5 text-slate-600" />;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-5">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold text-slate-800">Notifications</h3>
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 text-[11px] font-bold bg-blue-100 text-blue-700 rounded-full">
              {unreadCount} new
            </span>
          )}
        </div>

        {unreadCount > 0 && (
          <button
            onClick={onMarkAllRead}
            className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            Mark all read
          </button>
        )}
      </div>

      <div className="divide-y divide-slate-100 mt-1">
        {notifications.map((item) => (
          <div
            key={item.id}
            className={`py-3 px-2 rounded-lg transition-colors flex items-start gap-3 group ${
              item.read ? 'opacity-70 hover:opacity-100' : 'bg-blue-50/40'
            }`}
          >
            <div className="mt-0.5 p-2 rounded-lg bg-white border border-slate-200/80 shadow-xs shrink-0">
              {getNotificationIcon(item.type)}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <p className="text-xs font-semibold text-slate-800 truncate">
                  {item.title}
                </p>
                <span className="text-[10px] text-slate-400 shrink-0">
                  {item.time}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                {item.message}
              </p>
            </div>

            <button
              onClick={() => onToggleRead(item.id)}
              title={item.read ? 'Mark as unread' : 'Mark as read'}
              className="mt-0.5 text-slate-400 hover:text-blue-600 cursor-pointer p-1"
            >
              <span
                className={`w-2 h-2 rounded-full block transition-transform group-hover:scale-125 ${
                  item.read ? 'bg-slate-300' : 'bg-blue-600'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
