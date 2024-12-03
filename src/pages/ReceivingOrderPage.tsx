import React from 'react';
import { Header } from '../components/ReceivingOrder/Header';
import { ReferenceNumber } from '../components/ReceivingOrder/ReferenceNumber';
import { SearchPurchaseOrder } from '../components/ReceivingOrder/SearchPurchaseOrder';
import { OrderDetails } from '../components/ReceivingOrder/OrderDetails';
import { ItemsTable } from '../components/ReceivingOrder/ItemsTable';
import { Summary } from '../components/ReceivingOrder/Summary';
import { PurchaseOrder } from '../types';
import { mockPurchaseOrders, mockPurchaseOrderItems } from '../data/mockData';

export function ReceivingOrderPage() {
  const [purchaseOrder, setPurchaseOrder] = React.useState<PurchaseOrder | null>(null);

  const handleSelectOrder = (order: PurchaseOrder) => {
    setPurchaseOrder(order);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchPurchaseOrder 
          orders={mockPurchaseOrders}
          onSelect={handleSelectOrder}
        />
        
        {purchaseOrder ? (
          <>
            <ReferenceNumber />
            <OrderDetails purchaseOrder={purchaseOrder} />
            <ItemsTable items={mockPurchaseOrderItems[purchaseOrder.id] || []} />
            <Summary 
              purchaseOrder={purchaseOrder} 
              items={mockPurchaseOrderItems[purchaseOrder.id] || []} 
            />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Search for a purchase order to start receiving items
            </p>
          </div>
        )}
      </div>
    </div>
  );
}