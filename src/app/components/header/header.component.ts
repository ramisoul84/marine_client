import { Component, OnInit } from '@angular/core';
import { LocalShippingService } from '../../_services/local-shipping.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.scss',
})
export class HeaderComponent implements OnInit {
  pendingOrders!: number;
  constructor(private localShippingService: LocalShippingService) {}
  ngOnInit(): void {
    this.localShippingService.pendingOrders.subscribe(
      (data) => (this.pendingOrders = data)
    );
  }
}
