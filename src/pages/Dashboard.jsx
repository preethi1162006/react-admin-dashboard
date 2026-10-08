import { useState } from 'react';
import DashboardCard from '../components/DashboardCard.jsx';
import OrdersTable from '../components/OrdersTable.jsx';
import ProfileCard from '../components/ProfileCard.jsx';
import NotificationCard from '../components/NotificationCard.jsx';
import ActivityList from '../components/ActivityList.jsx';
import {
  Calendar,
  Sparkles,
  Download,
  Filter,
  CheckCircle,
} from 'lucide-react';

export default function Dashboard({
  stats,
  orders,
  notifications,
  activities,
  user,
  searchQuery,
  activeTab,
  onToggleNotification,
  onMarkAllNotificationsRead,
  onUpdateUser,
}) {
  const [toastMessage, setToastMessage] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleToggleRead = (id) => {
    onToggleNotification(id);
    triggerToast('Notification status updated');
  };

  const handleMarkAllRead = () => {
    onMarkAllNotificationsRead();
    triggerToast('All notifications marked as read');
  };

  const handleUserUpdate = (updatedData) => {
    onUpdateUser(updatedData);
    triggerToast('User profile updated successfully');
  };

  return (
    <div className="space-y-6">
      {/* Toast feedback pill */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-lg shadow-lg border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Welcome & Actions Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Task 1 &bull; Week 1 Frontend</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
            Welcome back, {user.name}!
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Here is your daily overview and activity summary for today.
          </p>
        </div>

        <div className="flex items-center gap-2.5 self-start sm:self-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium border border-slate-200/60">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>Oct 07, 2026</span>
          </div>
          <button
            onClick={() => triggerToast('Exporting summary report...')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition-colors shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* View Filter Notice if user selected something other than Dashboard in sidebar */}
      {activeTab !== 'Dashboard' && (
        <div className="p-3 bg-blue-50/70 border border-blue-200 text-blue-800 rounded-xl flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-blue-600" />
            <span>
              Viewing section: <strong className="font-semibold">{activeTab}</strong>. Showing focused perspective.
            </span>
          </div>
          <span className="text-[11px] font-medium text-blue-600">Single Page Admin View</span>
        </div>
      )}

      {/* 3. Dashboard Statistics Cards */}
      <section aria-label="Key Statistics">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <DashboardCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              isPositive={stat.isPositive}
              subtitle={stat.subtitle}
              iconName={stat.iconName}
              color={stat.color}
            />
          ))}
        </div>
      </section>

      {/* Main Grid: Orders & Activity on Left, Profile & Notifications on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2 Cols on Desktop) */}
        <div className="lg:col-span-2 space-y-6">
          {/* 4. Recent Orders Table */}
          <section id="orders-section">
            <OrdersTable orders={orders} searchQuery={searchQuery} />
          </section>

          {/* 7. Simple Activity Section */}
          <section id="activity-section">
            <ActivityList activities={activities} />
          </section>
        </div>

        {/* Right Column (1 Col on Desktop) */}
        <div className="space-y-6">
          {/* 5. User Profile Card */}
          <section id="profile-section">
            <ProfileCard user={user} onUpdateUser={handleUserUpdate} />
          </section>

          {/* 6. Notifications */}
          <section id="notifications-section">
            <NotificationCard
              notifications={notifications}
              onToggleRead={handleToggleRead}
              onMarkAllRead={handleMarkAllRead}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
