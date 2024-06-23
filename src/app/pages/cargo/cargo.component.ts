import { Component, OnInit, model } from '@angular/core';
import { OrderService } from '../../_services/order.service';
import { Order } from '../../_models/order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cargo } from '../../_models/cargo';
import { CargoService } from '../../_services/cargo.service';

interface Checked {
  id: number;
  checked: boolean;
}

@Component({
  selector: 'app-cargo',
  templateUrl: 'cargo.component.html',
  styleUrl: 'cargo.component.scss',
})
export class CargoComponent implements OnInit {
  dataSource!: Order[];
  readonly checked = model(false);
  checkedDocuments!: Checked;
  supplyContractForm!: FormGroup;
  deliveryForm!: FormGroup;
  constructor(
    private orderService: OrderService,
    private cargoService: CargoService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.supplyContractForm = this.fb.group({
      weight: this.fb.control('', [Validators.required]),
      date: this.fb.control('', [Validators.required]),
      price: this.fb.control('', [Validators.required]),
    });
    this.deliveryForm = this.fb.group({
      deliveryType: this.fb.control('', [Validators.required]),
    });
    this.orderService.getAllOrders();
    this.orderService.orders.subscribe((data) => {
      this.dataSource = data.filter(
        (item) => item.stage === 1 || item.stage === 2 || item.stage === 3
      );
    });
  }

  onApply(order: Order) {
    let newStatus = 'Pending';
    let newStage = 1;

    if (
      this.checked() &&
      this.supplyContractForm.valid &&
      this.deliveryForm.valid
    ) {
      newStatus = 'Grain has delivered to port';
      newStage = 4;
      let newCargo: Cargo = {
        orderId: order.id,
        grain: order.grain,
        weight: this.supplyContractForm.controls['weight'].value,
        date: this.supplyContractForm.controls['date'].value,
        price: this.supplyContractForm.controls['price'].value,
        delivery: this.deliveryForm.controls['deliveryType'].value,
      };
      this.cargoService.addCargo(newCargo).subscribe();
    } else if (this.checked() && this.supplyContractForm.valid) {
      newStatus = 'Grain has purchased';
      newStage = 3;
    } else if (this.checked()) {
      newStatus = 'Electronic documents has Accepted';
      newStage = 2;
    }

    let updatedOrder: Order = { ...order, stage: newStage, status: newStatus };
    this.orderService.updateOrder(order.id, updatedOrder).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
