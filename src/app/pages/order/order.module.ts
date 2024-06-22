import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { OrderNewComponent } from './order-new/order-new.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatDialogModule,
];

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'order', component: OrderComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
  declarations: [OrdersComponent, OrderComponent, OrderNewComponent],
})
export class OrderModule {}
