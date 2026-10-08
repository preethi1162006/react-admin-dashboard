import {
  Users,
  ShoppingBag,
  DollarSign,
  Clock,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';

const iconMap = {
  Users: Users,
  ShoppingBag: ShoppingBag,
  DollarSign: DollarSign,
  Clock: Clock,
};

const colorMap = {
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-100',
  },
  emerald: {
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-100',
  },
  indigo: {
    bg: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'border-indigo-100',
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-100',
  },
};

export default function DashboardCard({
  title,
  value,
  change,
  isPositive = true,
  subtitle = 'vs last month',
  iconName = 'Users',
  color = 'blue',
}) {
  const IconComponent = iconMap[iconName] || Users;
  const colorStyles = colorMap[color] || colorMap.blue;

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">{title}</span>
        <div
          className={`w-11 h-11 rounded-lg flex items-center justify-center border ${colorStyles.bg} ${colorStyles.text} ${colorStyles.border} group-hover:scale-105 transition-transform duration-200`}
        >
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
          {value}
        </h3>
        <div className="mt-2 flex items-center gap-1.5 text-xs">
          <span
            className={`inline-flex items-center gap-0.5 font-semibold px-1.5 py-0.5 rounded ${
              isPositive
                ? 'text-emerald-700 bg-emerald-50'
                : 'text-rose-700 bg-rose-50'
            }`}
          >
            {isPositive ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            {change}
          </span>
          <span className="text-slate-400">{subtitle}</span>
        </div>
      </div>
    </div>
  );
}
