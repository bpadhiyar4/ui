import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  constructor(
    private http: HttpClient
  ) { }

  server = 'http://localhost:5000';

  makePrediction(userData) {
    return this.http.post(`${this.server}/predict`, userData);
  }
}
