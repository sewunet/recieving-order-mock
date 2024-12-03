import React from 'react';
import { Calendar } from 'lucide-react';

export function OrderDetails() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Purchase Order Number
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md bg-gray-50"
            placeholder="PO-2024-001"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Supplier Name
          </label>
          <select className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Select Supplier</option>
            <option value="supplier1">Acme Corp</option>
            <option value="supplier2">TechSupply Inc</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Receiving Date
          </label>
          <div className="relative">
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              defaultValue={new Date().toISOString().split('T')[0]}
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}