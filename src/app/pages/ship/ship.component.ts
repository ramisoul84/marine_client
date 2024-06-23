import { Component, OnInit, model } from '@angular/core';
import { Order } from '../../_models/order';
import { OrderService } from '../../_services/order.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ship } from '../../_models/ship';
import { ShipService } from '../../_services/ship.service';

@Component({
  selector: 'app-ship',
  templateUrl: 'ship.component.html',
  styleUrl: 'ship.component.scss',
})
export class ShipComponent implements OnInit {
  dataSource!: Order[];
  brokerForm!: FormGroup;
  ownerForm!: FormGroup;
  flagForm!: FormGroup;
  portForm!: FormGroup;
  constructor(
    private orderService: OrderService,
    private shipService: ShipService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.brokerForm = this.fb.group({
      capacity: this.fb.control('', [Validators.required]),
      date: this.fb.control('', [Validators.required]),
    });
    this.ownerForm = this.fb.group({
      date: this.fb.control('', [Validators.required]),
      bid: this.fb.control('', [Validators.required]),
      demurrage: this.fb.control('', [Validators.required]),
    });
    this.flagForm = this.fb.group({
      flag: this.fb.control('', [Validators.required]),
    });
    this.portForm = this.fb.group({
      weight: this.fb.control('', [Validators.required]),
      from: this.fb.control('', [Validators.required]),
      to: this.fb.control('', [Validators.required]),
    });
    this.orderService.getAllOrders();
    this.orderService.orders.subscribe((data) => {
      this.dataSource = data.filter(
        (item) =>
          item.stage === 4 ||
          item.stage === 5 ||
          item.stage === 6 ||
          item.stage === 7
      );
    });
  }

  onApply(order: Order) {
    let newStatus = 'Grain has delivered to port';
    let newStage = 4;
    if (
      this.brokerForm.valid &&
      this.ownerForm.valid &&
      this.flagForm.valid &&
      this.portForm.valid
    ) {
      newStatus = 'Loading Instruction';
      newStage = 8;
      let newShip: Ship = {
        orderId: order.id,
        shipCapacity: this.brokerForm.controls['capacity'].value,
        dateBroker: this.brokerForm.controls['date'].value,
        dateOwner: this.ownerForm.controls['date'].value,
        bid: this.ownerForm.controls['bid'].value,
        demurrage: this.ownerForm.controls['demurrage'].value,
        russianFlag: this.flagForm.controls['flag'].value,
        loadingWeight: this.portForm.controls['weight'].value,
        from: this.portForm.controls['from'].value,
        to: this.portForm.controls['to'].value,
      };
      this.shipService.addShip(newShip).subscribe();
    } else if (
      this.brokerForm.valid &&
      this.ownerForm.valid &&
      this.flagForm.valid
    ) {
      newStatus = 'Coordinated with port';
      newStage = 7;
    } else if (this.brokerForm.valid && this.ownerForm.valid) {
      newStatus = 'Agrement with the ship owner';
      newStage = 6;
    } else if (this.brokerForm.valid) {
      newStatus = 'Application has send to broker';
      newStage = 5;
    }
    let updatedOrder: Order = { ...order, stage: newStage, status: newStatus };
    this.orderService.updateOrder(order.id, updatedOrder).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
