export interface Ship {
  orderId: number;
  shipCapacity: number;
  dateBroker: Date;
  dateOwner: Date;
  bid: number;
  demurrage: number;
  russianFlag: boolean;
  loadingWeight: number;
  from: string;
  to: string;
}
