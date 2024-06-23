export interface Cargo {
  orderId: number;
  grain: string;
  weight: number;
  date: Date;
  price: number;
  delivery: string;
}

export const CARGO = ['Rice', 'Wheat', 'Barley', 'Oats', 'Corn'];
