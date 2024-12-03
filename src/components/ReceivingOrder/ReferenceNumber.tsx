import React from 'react';

export function ReferenceNumber() {
  const [receiptNumber] = React.useState(() => 
    `RCV-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Receiving Reference No
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-md bg-gray-50"
          value={receiptNumber}
          readOnly
        />
      </div>
    </div>
  );
}