import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cargo } from '../_models/cargo';

const URL = 'http://localhost:3000/cargo';

@Injectable({ providedIn: 'root' })
export class CargoService {
  constructor(private http: HttpClient) {}

  addCargo(cargo: Cargo) {
    return this.http.post(URL, cargo);
  }

  getCargo(id: number) {
    return this.http.get<Cargo>(URL + `/${id}`);
  }
}
