import { useState } from 'react';
import { UserCheck, Mail, MapPin, Edit3, X, Check } from 'lucide-react';

export default function ProfileCard({ user, onUpdateUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name || 'Alex Johnson',
    email: user.email || 'alex.johnson@admindash.io',
    department: user.department || 'Operations & Management',
    location: user.location || 'San Francisco, CA',
  });

  const handleSave = (e) => {
    e.preventDefault();
    if (onUpdateUser) {
      onUpdateUser(formData);
    }
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-5 relative overflow-hidden">
      {/* Decorative top pattern */}
      <div className="h-16 bg-gradient-to-r from-blue-600 to-indigo-600 -mx-5 -mt-5 mb-4 relative">
        <span className="absolute right-4 top-3 inline-flex items-center gap-1 text-[11px] font-medium bg-white/20 text-white backdrop-blur-xs px-2 py-0.5 rounded-full">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
          {user.status || 'Active'}
        </span>
      </div>

      <div className="flex flex-col items-center text-center -mt-12">
        {/* Circular Avatar */}
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm"
          />
          <span className="absolute bottom-1 right-1 bg-blue-600 text-white p-1 rounded-full shadow-xs" title="Admin Account">
            <UserCheck className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Profile Info */}
        <h3 className="mt-3 text-lg font-bold text-slate-800">{user.name}</h3>
        <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-0.5">
          Role: {user.role || 'Admin'}
        </p>

        <div className="mt-4 w-full space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4 text-left">
          <div className="flex items-center gap-2 text-slate-500">
            <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{user.email}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{user.location || 'San Francisco, CA'}</span>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button
          onClick={() => setIsEditing(true)}
          className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
        >
          <Edit3 className="w-3.5 h-3.5" />
          Edit Profile
        </button>
      </div>

      {/* Edit Profile Modal Dialog */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-sm w-full p-5 relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h4 className="text-sm font-semibold text-slate-800">Edit Profile</h4>
              <button
                onClick={() => setIsEditing(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-md cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 mt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg cursor-pointer shadow-xs"
                >
                  <Check className="w-3.5 h-3.5" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
