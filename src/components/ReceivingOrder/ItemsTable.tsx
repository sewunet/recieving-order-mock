import React from 'react';
import { TableHeader } from './Table/TableHeader';
import { TableRow } from './Table/TableRow';
import { Item } from './types';

export function ItemsTable() {
  const [items, setItems] = React.useState<Item[]>([
    {
      id: '1',
      code: '5386087',
      description: 'CHICKEN BREAST, BONELESS',
      orderedQty: 35,
      receivedQty: 20,
      receivingQty: 0,
      uom: 'lb',
      supplierUnitPrice: 10.00,
      receivingUnitPrice: 10.00,
    },
    {
      id: '2',
      code: '5228275',
      description: 'BRUSSEL SPROUT',
      orderedQty: 50,
      receivedQty: 18,
      receivingQty: 0,
      uom: 'lb',
      supplierUnitPrice: 10.00,
      receivingUnitPrice: 10.00,
    },
  ]);

  const addRow = () => {
    setItems([
      ...items,
      {
        id: Date.now().toString(),
        code: '',
        description: '',
        orderedQty: 0,
        receivedQty: 0,
        receivingQty: 0,
        uom: '',
        supplierUnitPrice: 0,
        receivingUnitPrice: 0,
      },
    ]);
  };

  const deleteRow = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const receiveAll = () => {
    setItems(items.map(item => ({
      ...item,
      receivingQty: item.orderedQty - item.receivedQty
    })));
  };

  const updateReceivingQty = (id: string, value: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          receivingQty: value
        };
      }
      return item;
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
      <TableHeader onReceiveAll={receiveAll} onAddItem={addRow} />
      <div className="overflow-x-auto ring-1 ring-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Item Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ordered Qty
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Received Qty
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Receiving Qty
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                UOM
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Supplier Unit Price
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Receiving Unit Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item) => (
              <TableRow
                key={item.id}
                item={item}
                onUpdateReceivingQty={updateReceivingQty}
                onDeleteRow={deleteRow}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}