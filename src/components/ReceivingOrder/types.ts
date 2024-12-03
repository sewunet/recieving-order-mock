export interface Item {
  id: string;
  code: string;
  description: string;
  orderedQty: number;
  receivedQty: number;
  receivingQty: number;
  uom: string;
  supplierUnitPrice: number;
  receivingUnitPrice: number;
}