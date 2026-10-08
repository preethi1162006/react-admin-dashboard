export default function StatusBadge({ status }) {
  const getBadgeStyle = () => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 ring-emerald-500/20';
      case 'pending':
        return 'bg-amber-50 text-amber-700 border-amber-200 ring-amber-500/20';
      case 'cancelled':
        return 'bg-rose-50 text-rose-700 border-rose-200 ring-rose-500/20';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200 ring-slate-500/20';
    }
  };

  const getDotColor = () => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'bg-emerald-500';
      case 'pending':
        return 'bg-amber-500';
      case 'cancelled':
        return 'bg-rose-500';
      default:
        return 'bg-slate-400';
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getBadgeStyle()}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${getDotColor()}`}></span>
      {status}
    </span>
  );
}
