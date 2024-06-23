import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../_services/order.service';
import { Order } from '../../_models/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-port',
  templateUrl: 'port.component.html',
  styleUrl: 'port.component.scss',
})
export class PortComponent implements OnInit {
  dataSource!: Order[];
  constructor(private orderService: OrderService, private router: Router) {}
  ngOnInit(): void {
    this.orderService.getAllOrders();
    this.orderService.orders.subscribe((data) => {
      this.dataSource = data.filter(
        (item) => item.stage === 8 || item.stage === 9
      );
    });
  }

  onConfirm(order: Order) {
    this.orderService.updateOrder(order.id, order).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
