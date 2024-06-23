import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../_models/order';
import { BehaviorSubject } from 'rxjs';

const URL = 'http://localhost:3000/order';

@Injectable({ providedIn: 'root' })
export class OrderService {
  orders = new BehaviorSubject<Order[]>([]);
  selectedOrder = new BehaviorSubject<number>(0);
  selectedOrder$ = this.selectedOrder.asObservable();
  constructor(private http: HttpClient) {}

  getAllOrders() {
    return this.http
      .get<Order[]>(URL)
      .subscribe((data) => this.orders.next(data));
  }

  getOrderById(id: number) {
    return this.http.get<Order>(URL + `/${id}`);
  }

  addOrder(order: Order) {
    return this.http.post(URL, order);
  }

  updateOrder(id: number, updatedOrder: Order) {
    return this.http.patch(URL + `/${id}`, updatedOrder);
  }
}
