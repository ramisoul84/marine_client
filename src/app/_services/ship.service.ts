import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ship } from '../_models/ship';

const URL = 'http://localhost:3000/ship';

@Injectable({ providedIn: 'root' })
export class ShipService {
  constructor(private http: HttpClient) {}

  addShip(ship: Ship) {
    return this.http.post(URL, ship);
  }

  getShip(id: number) {
    return this.http.get<Ship>(URL + `/${id}`);
  }
}
