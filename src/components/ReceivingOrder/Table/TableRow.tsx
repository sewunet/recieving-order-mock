import React from 'react';
import { Trash2 } from 'lucide-react';
import { Item } from '../types';

interface TableRowProps {
  item: Item;
  onUpdateReceivingQty: (id: string, value: number) => void;
  onDeleteRow: (id: string) => void;
}

export function TableRow({ item, onUpdateReceivingQty, onDeleteRow }: TableRowProps) {
  const remainingQty = item.orderedQty - item.receivedQty;
  
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">{item.code}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">{item.description}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <span className="text-sm text-gray-900">{item.orderedQty}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <span className="text-sm text-gray-900">{item.receivedQty}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="number"
          className="w-full px-3 py-2 text-sm border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={item.receivingQty}
          onChange={(e) => onUpdateReceivingQty(item.id, parseFloat(e.target.value))}
          min="0"
          max={remainingQty}
        />
        {remainingQty > 0 && (
          <span className="text-xs text-gray-500 mt-1 block">
            Max: {remainingQty}
          </span>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="text-sm text-gray-900">{item.uom}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <span className="text-sm text-gray-900">${item.supplierUnitPrice.toFixed(2)}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <span className="text-sm text-gray-900">${item.receivingUnitPrice.toFixed(2)}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button
          onClick={() => onDeleteRow(item.id)}
          className="text-red-600 hover:text-red-800 p-1 rounded-md hover:bg-red-50 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </td>
    </tr>
  );
}