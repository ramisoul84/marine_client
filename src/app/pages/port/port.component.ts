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
  operationsBefore: string[] = [
    'Holds cleanliness',
    'Grain quality',
    'Draft',
    'Holds disinfection',
    'Ballast operations',
    'Draft Fixiation',
  ];
  operationsAfter: string[] = [
    'Grain sample by inspector',
    "Captain's signature",
    'Holds disinfection',
    'Payment',
  ];

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

  onApply(order: Order, val: string) {
    let newStatus = val;
    let newStage = val === 'Payment' ? 10 : 9;

    let updatedOrder: Order = { ...order, stage: newStage, status: newStatus };
    this.orderService.updateOrder(order.id, updatedOrder).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
