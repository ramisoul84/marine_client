export interface Order {
  id: number;
  from: string;
  to: string;
  grain: string;
  weight: number;
  stage: number;
  status: string;
  createdAt: Date;
}
