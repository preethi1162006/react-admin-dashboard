import { useState } from 'react';
import StatusBadge from './StatusBadge.jsx';
import { PackageX, ArrowUpDown } from 'lucide-react';

export default function OrdersTable({ orders = [], searchQuery = '' }) {
  const [statusFilter, setStatusFilter] = useState('All');

  // Filter orders by search query across customer, order ID, and product
  const filteredOrders = orders.filter((order) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      order.customer.toLowerCase().includes(query) ||
      order.id.toLowerCase().includes(query) ||
      order.product.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === 'All' || order.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const filterOptions = ['All', 'Completed', 'Pending', 'Cancelled'];

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-xs overflow-hidden">
      {/* Table Header Controls */}
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-slate-800">Recent Orders</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Showing {filteredOrders.length} of {orders.length} total orders
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {filterOptions.map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                statusFilter === status
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Scrollable Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="bg-slate-50/75 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4 text-right">
                <span className="inline-flex items-center justify-end gap-1">
                  Amount <ArrowUpDown className="w-3 h-3 text-slate-400" />
                </span>
              </th>
              <th className="py-3 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-slate-50/80 transition-colors duration-150"
                >
                  <td className="py-3.5 px-4 font-medium text-blue-600">
                    {order.id}
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={order.avatar}
                        alt={order.customer}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200"
                      />
                      <span className="font-medium text-slate-800">
                        {order.customer}
                      </span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">
                    {order.product}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">
                    {order.date}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-slate-800 text-right">
                    {order.amount}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-10 text-center">
                  <div className="flex flex-col items-center justify-center text-slate-400">
                    <PackageX className="w-10 h-10 mb-2 stroke-[1.5]" />
                    <p className="text-sm font-medium text-slate-600">
                      No matching orders found
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Try searching with a different keyword or reset status filter
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Simple Footer Info */}
      <div className="p-3.5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>Updated in real-time</span>
        <button
          onClick={() => {
            setStatusFilter('All');
          }}
          className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
