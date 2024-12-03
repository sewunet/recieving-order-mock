export interface Supplier {
  id: number;
  name: string;
  account: string | null;
  address: string | null;
  note: string | null;
  sales_person: string | null;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface SupplierIngredient {
  id: number;
  ingredient_id: number;
  supplier_id: number;
  supplier_item_number: string;
  supplier_item_desc: string;
  sold_by: string;
  price_per_sold_by: number;
  packs_per_sold_by: number;
  pack_unit_measure: string;
  pack_unit_size: number;
  pack_unit_desc: string | null;
  price_per_item: number;
  price_opt: string;
  price_opt_price: number;
  price_opt_measure: string | null;
  conv_factor: number;
  min_order_qty: number | null;
  created_at: string;
  updated_at: string;
}

export interface ReceiveOrderItem {
  id: number;
  purchase_order_item_id: number;
  receipt_number: string | null;
  receive_date: string;
  receive_order_qty: number;
  receive_price: number;
  type: string;
  created_at: string;
  updated_at: string;
}

export interface PurchaseOrderItem {
  id: number;
  ordered_qty: number;
  order_status: string;
  supplieringredient: SupplierIngredient;
  receiveorderitem: ReceiveOrderItem[];
  received_qty: number;
  remaining_qty: number;
  voided_qty: number;
}

export interface PurchaseOrder {
  id: number;
  supplier_id: number;
  purchase_order_number: string;
  purchase_order_date: string;
  total_ordered_qty: number;
  order_status: string;
  created_at: string;
  updated_at: string;
  supplier: Supplier;
}