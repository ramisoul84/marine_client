import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { PortComponent } from './pages/port/port.component';
import { CargoComponent } from './pages/cargo/cargo.component';
import { ShipComponent } from './pages/ship/ship.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cargo', component: CargoComponent },
  { path: 'ship', component: ShipComponent },
  { path: 'port', component: PortComponent },
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/account/account.module').then(
        (m) => m.AccountModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/order/order.module').then((m) => m.OrderModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
