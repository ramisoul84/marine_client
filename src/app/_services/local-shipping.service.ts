import { Injectable } from '@angular/core';
import { Subject, map } from 'rxjs';
import { OrderService } from './order.service';

@Injectable({ providedIn: 'root' })
export class LocalShippingService {
  pendingOrders = new Subject<number>();
  constructor(private orderService: OrderService) {
    this.orderService
      .getAllOrders()
      .subscribe((data) => this.pendingOrders.next(data.length));
  }
}
