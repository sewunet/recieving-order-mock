import React from 'react';
import { Save, FileCheck, X } from 'lucide-react';

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-end space-x-4">
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