import { Clock } from 'lucide-react';

export default function ActivityList({ activities = [] }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-5">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div>
          <h3 className="text-base font-semibold text-slate-800">Recent Activity</h3>
          <p className="text-xs text-slate-500 mt-0.5">Latest actions across team members</p>
        </div>
        <Clock className="w-4 h-4 text-slate-400" />
      </div>

      <div className="mt-4 space-y-4">
        {activities.map((act, index) => (
          <div key={act.id} className="flex items-start gap-3 relative">
            {/* Timeline connector line */}
            {index < activities.length - 1 && (
              <div className="absolute left-4 top-8 bottom-0 w-[1.5px] bg-slate-100 -mb-4" />
            )}

            {/* User Initials Avatar */}
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center shrink-0 z-10">
              {act.initials}
            </div>

            <div className="flex-1 min-w-0 pt-0.5">
              <p className="text-xs text-slate-700 leading-snug">
                <span className="font-semibold text-slate-900">{act.user}</span>{' '}
                <span className="text-slate-600">{act.description}</span>
              </p>
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                {act.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
