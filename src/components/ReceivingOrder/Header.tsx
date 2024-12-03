import React from 'react';
import { Save, FileCheck, X } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white">
      <h1 className="text-2xl font-semibold text-gray-800">Receiving Order</h1>
      <div className="flex space-x-4">
        <button className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors">
          <FileCheck className="w-4 h-4 mr-2" />
          Confirm Receipt
        </button>
        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
          <X className="w-4 h-4 mr-2" />
          Cancel
        </button>
      </div>
    </div>
  );
}