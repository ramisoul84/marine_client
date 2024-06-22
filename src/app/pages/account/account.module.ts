import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
];

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    ...materialModules,
  ],
  declarations: [LoginComponent, RegisterComponent],
})
export class AccountModule {}
