import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderNewComponent } from '../order-new/order-new.component';
import { Order } from '../../../_models/order';
import { OrderService } from '../../../_services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.component.html',
  styleUrl: 'orders.component.scss',
})
export class OrdersComponent implements OnInit {
  dataSource!: Order[];
  displayedColumns: string[] = [
    'id',
    'from',
    'to',
    'cargo',
    'weight',
    'status',
    'actions',
  ];

  constructor(public dialog: MatDialog, private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService
      .getAllOrders()
      .subscribe((data) => (this.dataSource = data));
  }

  openOrderNewtDialog() {
    const dialogRef = this.dialog.open(OrderNewComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.orderService
        .getAllOrders()
        .subscribe((data) => (this.dataSource = data));
    });
  }
}
