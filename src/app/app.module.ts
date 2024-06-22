import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatBadgeModule } from '@angular/material/badge';

const materialModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatBadgeModule,
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ...materialModules,
  ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
