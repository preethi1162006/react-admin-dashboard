# Task 1 – React Dashboard Development (Week 1)

A clean, modern, and responsive SaaS-style Admin Dashboard built with **React**, **Vite**, and **Tailwind CSS**. Designed for a Week 1 frontend development internship/course milestone, emphasizing clean component architecture, functional hooks, responsive layout, and practical UI interactions without unnecessary complexity.

---

## 🌟 Key Features

1. **Responsive Sidebar Navigation**
   - Navigation links: Dashboard, Users, Orders, Products, Reports, Settings, and Logout.
   - Interactive active states and icon integration with Lucide React.
   - Mobile slide-out drawer with backdrop overlay.

2. **Top Navigation Bar**
   - Mobile hamburger menu toggle.
   - Live search bar filtering recent orders across customer name, order ID, and product name.
   - Notification button with unread count badge.
   - User profile badge displaying "Alex Johnson" (Admin).

3. **Statistics Cards**
   - **Total Users**: 2,450 (+12% vs last month)
   - **Total Orders**: 1,280 (+8% vs last month)
   - **Revenue**: $24,500 (+15.4% vs last month)
   - **Pending Orders**: 86 (-3% vs last month)
   - Interactive hover elevation and accent colored icons.

4. **Recent Orders Table**
   - Responsive, horizontally-scrollable table on mobile.
   - Filterable by keyword (Customer, Order ID, Product) and status (All, Completed, Pending, Cancelled).
   - Custom status badges (`Completed`, `Pending`, `Cancelled`).

5. **User Profile Card**
   - Profile image avatar, role indicator, email, and location.
   - Interactive **Edit Profile** modal with real-time state updates.

6. **Interactive Notifications**
   - Sample notification feed (New orders, customer signups, completed deliveries, alerts).
   - Toggle notification read/unread status.
   - "Mark all as read" button.

7. **Recent Activity Timeline**
   - Real-time team updates with user avatar initials, activity description, and timestamps.

---

## 📁 Project Folder Structure

```text
react-admin-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── dashboardData.js
    ├── pages/
    │   └── Dashboard.jsx
    └── components/
        ├── Sidebar.jsx
        ├── Navbar.jsx
        ├── DashboardCard.jsx
        ├── OrdersTable.jsx
        ├── ProfileCard.jsx
        ├── NotificationCard.jsx
        ├── ActivityList.jsx
        └── StatusBadge.jsx
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation Steps

1. Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/react-admin-dashboard.git
   cd react-admin-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## 📤 GitHub Upload Guide

1. Initialize git in your project root:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Week 1 React Admin Dashboard task"
   ```

2. Create a new repository on [GitHub](https://github.com) named `react-admin-dashboard`.

3. Link your remote repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/react-admin-dashboard.git
   git push -u origin main
   ```

---

## 🌐 Deploying to Vercel

1. Push your code to GitHub (see above).
2. Go to [Vercel](https://vercel.com) and sign in with GitHub.
3. Click **Add New...** -> **Project**.
4. Select your `react-admin-dashboard` repository.
5. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Your app will be live with a free `.vercel.app` URL in under a minute!

---

## 📸 Recommended Screenshots for Submission

1. **Desktop Overview**: Full dashboard showing the Sidebar, 4 Stat Cards, Orders Table, Profile, Notifications, and Activity feed.
2. **Interactive Search & Filter**: Searching for a customer name or filtering orders by "Pending" status.
3. **Mobile Responsive View**: Responsive layout with collapsed view or mobile sidebar slide-out opened.
4. **Interactive Profile Edit Modal**: The Edit Profile modal opened and editing user information.
5. **Notification Interaction**: Notification count badge updated after marking items as read.

---

## 💼 LinkedIn Post Template

```text
🚀 Excited to share my Week 1 Frontend Development project: A modern SaaS Admin Dashboard built with React and Tailwind CSS!

Key features implemented:
✅ Responsive dashboard layout (Mobile slide-over menu & Desktop sidebar)
✅ Key KPI statistic cards with percentage change indicators
✅ Interactive Recent Orders table with real-time multi-field search and status filtering
✅ Dynamic Notifications panel with read/unread state management
✅ User profile card with modal-based live profile updates
✅ Clean, beginner-friendly component hierarchy using React Hooks

🛠️ Tech Stack: React.js, Vite, Tailwind CSS, Lucide Icons

Check out the live preview & GitHub repo below! Feedback and suggestions are always welcome.

#React #WebDevelopment #Frontend #TailwindCSS #JavaScript #LearningInPublic #CodingJourney
```
