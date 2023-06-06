import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyConverted } from '../interfaces/currency-converted';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(currency: string) {
    return this.http.get<CurrencyConverted>(
      `https://api.currencyapi.com/v3/latest?apikey=1xA1ZR6k0M2VB5Ey8TsdslqkhMuZcgAadHYc9InX&currencies=EUR%2CUSD%2CCAD%2CGBP%2CJPY%2CAUD%2CCHF%2CCNY%2CHKD&base_currency=${currency}`
      // "http://data.fixer.io/api/latest?access_key=1534c899e9e72b9a64c65c94e991c350"
    );
  }

  getSpecificCurrency() {
    return this.http.get(
      'http://data.fixer.io/api/latest?access_key=1534c899e9e72b9a64c65c94e991c350&base=USD&symbols=USD,GBP,JPY,EUR,AUD,CAD,CHF,CNH,HKD'
    );
  }

  getCurrenicesFullName() {
    return this.http.get(
      'https://data.fixer.io/api/symbols?access_key=1534c899e9e72b9a64c65c94e991c350'
    );
  }
}
