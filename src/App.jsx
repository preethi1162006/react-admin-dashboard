import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import {
  initialStatsData,
  initialOrdersData,
  initialNotificationsData,
  initialActivitiesData,
  initialUserData,
} from './data/dashboardData.js';
import { AlertCircle } from 'lucide-react';

export default function App() {
  // Mobile sidebar toggle state
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Active navigation menu state
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

  // Search input state
  const [searchQuery, setSearchQuery] = useState('');

  // Dashboard dataset states
  const [stats] = useState(initialStatsData);
  const [orders] = useState(initialOrdersData);
  const [notifications, setNotifications] = useState(initialNotificationsData);
  const [activities] = useState(initialActivitiesData);
  const [user, setUser] = useState(initialUserData);

  // Logout modal state
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Toggle single notification read status
  const handleToggleNotification = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: !notif.read } : notif
      )
    );
  };

  // Mark all notifications as read
  const handleMarkAllNotificationsRead = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    );
  };

  // Update profile user data
  const handleUpdateUser = (updatedData) => {
    setUser((prev) => ({
      ...prev,
      ...updatedData,
    }));
  };

  const unreadNotificationCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased">
      <div className="flex-1 flex overflow-hidden">
        {/* 1. Sidebar Component */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activeItem={activeMenuItem}
          onSelectItem={(item) => setActiveMenuItem(item)}
          onLogout={() => setShowLogoutModal(true)}
        />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {/* 2. Top Navigation Bar */}
          <Navbar
            onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            unreadCount={unreadNotificationCount}
            user={user}
            onNotificationClick={() => {
              const el = document.getElementById('notifications-section');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />

          {/* Page Contents */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
            <Dashboard
              stats={stats}
              orders={orders}
              notifications={notifications}
              activities={activities}
              user={user}
              searchQuery={searchQuery}
              activeTab={activeMenuItem}
              onToggleNotification={handleToggleNotification}
              onMarkAllNotificationsRead={handleMarkAllNotificationsRead}
              onUpdateUser={handleUpdateUser}
            />
          </main>

          {/* Simple Clean Footer */}
          <footer className="border-t border-slate-200/80 bg-white/60 py-4 px-6 text-center text-xs text-slate-500">
            Task 1 &bull; React Admin Dashboard &bull; Week 1 Frontend Development Project
          </footer>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-sm w-full p-6 text-center animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">
              Confirm Logout
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-5">
              Are you sure you want to end your current session, {user.name}?
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowLogoutModal(false);
                  setUser((prev) => ({ ...prev, status: 'Logged Out' }));
                }}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-700 text-white cursor-pointer shadow-xs"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
