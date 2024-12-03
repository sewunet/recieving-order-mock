import React from 'react';
import { PurchaseOrder, PurchaseOrderItem } from '../../types';

interface SummaryProps {
  purchaseOrder: PurchaseOrder;
  items: PurchaseOrderItem[];
}

export function Summary({ purchaseOrder, items }: SummaryProps) {
  const totalItems = items.length;
  const totalOrderedQty = items.reduce((sum, item) => sum + item.ordered_qty, 0);
  const totalReceivedQty = items.reduce((sum, item) => sum + item.received_qty, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-gray-50 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Items
          </label>
          <p className="text-2xl font-bold text-gray-900">{totalItems}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Ordered Quantity
          </label>
          <p className="text-2xl font-bold text-gray-900">{totalOrderedQty}</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Receiving Quantity
          </label>
          <p className="text-2xl font-bold text-gray-900">{totalReceivedQty}</p>
        </div>
      </div>
    </div>
  );
}