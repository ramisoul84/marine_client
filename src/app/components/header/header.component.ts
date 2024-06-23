import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../_services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
})
export class HeaderComponent implements OnInit {
  cargoOrders!: number;
  shipOrders!: number;
  portOrders!: number;

  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.orderService.orders.subscribe((data) => {
      this.cargoOrders = data.filter(
        (item) => item.stage === 1 || item.stage === 2 || item.stage === 3
      ).length;
      this.shipOrders = data.filter(
        (item) =>
          item.stage === 4 ||
          item.stage === 5 ||
          item.stage === 6 ||
          item.stage === 7
      ).length;
      this.portOrders = data.filter(
        (item) => item.stage === 8 || item.stage === 9
      ).length;
    });
  }
}
