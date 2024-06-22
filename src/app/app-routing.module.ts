import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocalShippingComponen } from './pages/local-shipping/local-shipping.component';
import { PortComponent } from './pages/port/port.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'local_shipping', component: LocalShippingComponen },
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
