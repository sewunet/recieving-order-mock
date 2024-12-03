import React from 'react';
import { Search } from 'lucide-react';
import { PurchaseOrder } from '../../types';

interface SearchPurchaseOrderProps {
  onSelect: (order: PurchaseOrder) => void;
  orders: PurchaseOrder[];
}

export function SearchPurchaseOrder({ onSelect, orders }: SearchPurchaseOrderProps) {
  const [query, setQuery] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(false);

  const filteredOrders = orders.filter(order => 
    order.purchase_order_number.toLowerCase().includes(query.toLowerCase()) ||
    order.supplier.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="relative">
        <div className="flex items-center border rounded-md">
          <Search className="w-5 h-5 text-gray-400 ml-3" />
          <input
            type="text"
            className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            placeholder="Search purchase order by number or supplier..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>
        
        {isOpen && filteredOrders.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onSelect(order);
                  setIsOpen(false);
                  setQuery('');
                }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{order.purchase_order_number}</p>
                    <p className="text-sm text-gray-600">{order.supplier.name}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(order.purchase_order_date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}