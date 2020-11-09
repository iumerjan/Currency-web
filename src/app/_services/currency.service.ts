import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  baseUrl = `${environment.baseURL}currency/get-all`;
  exchangeUrl = environment.exchangeURL;

  constructor(private httpClient: HttpClient) { }

  // fetch all currencies
  getAllCurrencies() {
    return this.httpClient.get(this.baseUrl);
  }
  
  getForeignExchangeRates() {
    return this.httpClient.get(this.exchangeUrl);
  }
}
