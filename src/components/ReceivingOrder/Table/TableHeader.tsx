import React from 'react';
import { Plus, Check } from 'lucide-react';

interface TableHeaderProps {
  onReceiveAll: () => void;
  onAddItem: () => void;
}

export function TableHeader({ onReceiveAll, onAddItem }: TableHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-gray-800">Order Items</h2>
      <div className="flex gap-3">
        <button
          onClick={onReceiveAll}
          className="flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-50 border border-green-600 rounded-md transition-colors"
        >
          <Check className="w-4 h-4 mr-2" />
          Receive All
        </button>
        <button
          onClick={onAddItem}
          className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 border border-blue-600 rounded-md transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </button>
      </div>
    </div>
  );
}