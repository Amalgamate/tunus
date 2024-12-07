import React from 'react';
import { Users, ShoppingBag, CreditCard, BarChart2 } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <p className="text-gray-500">Total Users</p>
              <h3 className="text-2xl font-bold">1,234</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-gray-500">Active Deals</p>
              <h3 className="text-2xl font-bold">56</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <CreditCard className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-gray-500">Revenue</p>
              <h3 className="text-2xl font-bold">$12,345</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <BarChart2 className="h-8 w-8 text-yellow-500" />
            <div className="ml-4">
              <p className="text-gray-500">Conversion Rate</p>
              <h3 className="text-2xl font-bold">8.5%</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Members</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Email</th>
                  <th className="text-left py-2">Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">John Doe</td>
                  <td className="py-2">john@example.com</td>
                  <td className="py-2">Premium</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Popular Perks</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Premium Headphones Deal</span>
              <span className="text-green-500">89% claimed</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Fitness Membership</span>
              <span className="text-green-500">76% claimed</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Restaurant Vouchers</span>
              <span className="text-green-500">65% claimed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;