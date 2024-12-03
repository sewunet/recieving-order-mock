import { PurchaseOrder, PurchaseOrderItem } from '../types';

export const mockPurchaseOrders: PurchaseOrder[] = [
  {
    id: 1,
    supplier_id: 4,
    purchase_order_number: "20240830-001",
    purchase_order_date: "2024-08-30 14:39:59",
    total_ordered_qty: 2191,
    order_status: "Not recvd",
    created_at: "2024-08-30T14:39:59.000000Z",
    updated_at: "2024-08-30T14:39:59.000000Z",
    supplier: {
      id: 4,
      name: "US Foods",
      account: null,
      address: null,
      note: null,
      sales_person: null,
      is_active: 1,
      created_at: "2024-08-07T14:28:21.000000Z",
      updated_at: "2024-08-07T14:28:21.000000Z"
    }
  },
  {
    id: 2,
    supplier_id: 4,
    purchase_order_number: "20240830-002",
    purchase_order_date: "2024-08-30 15:00:00",
    total_ordered_qty: 150,
    order_status: "Not recvd",
    created_at: "2024-08-30T15:00:00.000000Z",
    updated_at: "2024-08-30T15:00:00.000000Z",
    supplier: {
      id: 4,
      name: "US Foods",
      account: null,
      address: null,
      note: null,
      sales_person: null,
      is_active: 1,
      created_at: "2024-08-07T14:28:21.000000Z",
      updated_at: "2024-08-07T14:28:21.000000Z"
    }
  }
];

export const mockPurchaseOrderItems: Record<number, PurchaseOrderItem[]> = {
  1: [
    {
      id: 1,
      ordered_qty: 17,
      order_status: "Not recvd",
      supplieringredient: {
        id: 14,
        ingredient_id: 75,
        supplier_id: 4,
        supplier_item_number: "5386086",
        supplier_item_desc: "POTATO, FF SC 3/8\" SKNLS BRINE",
        sold_by: "case",
        price_per_sold_by: 26.45,
        packs_per_sold_by: 6,
        pack_unit_measure: "lb",
        pack_unit_size: 5,
        pack_unit_desc: null,
        price_per_item: 0,
        price_opt: "op",
        price_opt_price: 0,
        price_opt_measure: null,
        conv_factor: 1,
        created_at: "2024-08-07T15:42:51.000000Z",
        updated_at: "2024-08-07T15:42:51.000000Z",
        min_order_qty: null
      },
      receiveorderitem: [],
      received_qty: 0,
      remaining_qty: 17,
      voided_qty: 0
    },
    {
      id: 2,
      ordered_qty: 39,
      order_status: "Not recvd",
      supplieringredient: {
        id: 11,
        ingredient_id: 117,
        supplier_id: 4,
        supplier_item_number: "5228275",
        supplier_item_desc: "BRUSSEL SPROUT",
        sold_by: "case",
        price_per_sold_by: 44.65,
        packs_per_sold_by: 1,
        pack_unit_measure: "lb",
        pack_unit_size: 15,
        pack_unit_desc: null,
        price_per_item: 0,
        price_opt: "op",
        price_opt_price: 0,
        price_opt_measure: null,
        conv_factor: 1,
        created_at: "2024-08-07T15:35:23.000000Z",
        updated_at: "2024-08-07T15:35:23.000000Z",
        min_order_qty: null
      },
      receiveorderitem: [],
      received_qty: 0,
      remaining_qty: 39,
      voided_qty: 0
    }
  ],
  2: [
    {
      id: 3,
      ordered_qty: 25,
      order_status: "Not recvd",
      supplieringredient: {
        id: 15,
        ingredient_id: 76,
        supplier_id: 4,
        supplier_item_number: "5386087",
        supplier_item_desc: "CHICKEN BREAST, BONELESS",
        sold_by: "case",
        price_per_sold_by: 89.99,
        packs_per_sold_by: 4,
        pack_unit_measure: "lb",
        pack_unit_size: 10,
        pack_unit_desc: null,
        price_per_item: 0,
        price_opt: "op",
        price_opt_price: 0,
        price_opt_measure: null,
        conv_factor: 1,
        created_at: "2024-08-07T15:42:51.000000Z",
        updated_at: "2024-08-07T15:42:51.000000Z",
        min_order_qty: null
      },
      receiveorderitem: [],
      received_qty: 0,
      remaining_qty: 25,
      voided_qty: 0
    }
  ]
};