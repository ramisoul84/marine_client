import { Component } from '@angular/core';
import { CARGO } from '../../../_models/cargo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { OrderService } from '../../../_services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-new',
  templateUrl: 'order-new.component.html',
  styleUrl: 'order-new.component.scss',
})
export class OrderNewComponent {
  orderNewForm: FormGroup;
  cargo: string[] = CARGO;
  constructor(
    public dialogRef: MatDialogRef<OrderNewComponent>,
    private fb: FormBuilder,
    private orderService: OrderService,
    private _snackBar: MatSnackBar
  ) {
    this.orderNewForm = this.fb.group({
      from: this.fb.control('', [Validators.required]),
      to: this.fb.control('', [Validators.required]),
      grain: this.fb.control('', [Validators.required]),
      weight: this.fb.control('', [Validators.required]),
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
    this.orderService.addOrder(this.orderNewForm.value).subscribe(() => {
      this.dialogRef.close();
      this.openSnackBar('A new Order has added', 'OK');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, { duration: 2000 });
  }
}
