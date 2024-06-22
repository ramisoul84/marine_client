import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../_models/order';

const URL = 'http://localhost:3000/order';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}

  getAllOrders() {
    return this.http.get<Order[]>(URL);
  }

  addOrder(order: Order) {
    return this.http.post(URL, order);
  }
}
