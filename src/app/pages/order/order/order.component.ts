import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../_services/order.service';
import { Order } from '../../../_models/order';
import { Cargo } from '../../../_models/cargo';
import { CargoService } from '../../../_services/cargo.service';
import { Ship } from '../../../_models/ship';
import { ShipService } from '../../../_services/ship.service';

@Component({
  selector: 'app-order',
  templateUrl: 'order.component.html',
  styleUrl: 'order.component.scss',
})
export class OrderComponent implements OnInit {
  selectedOrder!: Order;
  selectedCargo!: Cargo;
  selectedShip!: Ship;
  constructor(
    private orderService: OrderService,
    private cargoService: CargoService,
    private shipService: ShipService
  ) {}
  ngOnInit(): void {
    this.orderService.selectedOrder$.subscribe((data) => {
      this.orderService
        .getOrderById(data)
        .subscribe((data) => (this.selectedOrder = data));

      this.cargoService
        .getCargo(data)
        .subscribe((data) => (this.selectedCargo = data));

      this.shipService
        .getShip(data)
        .subscribe((data) => (this.selectedShip = data));
    });
  }
}
