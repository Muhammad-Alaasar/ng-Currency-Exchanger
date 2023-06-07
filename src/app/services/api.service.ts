import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyConverted } from '../interfaces/currency-converted';
import { StoredData } from '../interfaces/stored-data';
import { CurrenciesFullName } from '../interfaces/currencies-full-name';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  storedData: StoredData = {
    data: {
      EUR: {
        code: '',
        value: 0
      },
      USD: {
        code: '',
        value: 0
      },
      JPY: {
        code: '',
        value: 0
      },
      GBP: {
        code: '',
        value: 0
      },
      AUD: {
        code: '',
        value: 0
      },
      CAD: {
        code: '',
        value: 0
      },
      CHF: {
        code: '',
        value: 0
      },
      CNY: {
        code: '',
        value: 0
      },
      HKD: {
        code: '',
        value: 0
      }
    },
    amount: 0,
    from: '',
    to: '',
    totalConverted: 0
  };

  getData(currency: string) {
    return this.http.get<CurrencyConverted>(
      `https://api.currencyapi.com/v3/latest?apikey=1xA1ZR6k0M2VB5Ey8TsdslqkhMuZcgAadHYc9InX&currencies=EUR%2CUSD%2CCAD%2CGBP%2CJPY%2CAUD%2CCHF%2CCNY%2CHKD&base_currency=${currency}`
      // "http://data.fixer.io/api/latest?access_key=1534c899e9e72b9a64c65c94e991c350"
    );
  }

  setData(data: any) {
    this.storedData = data;
  }

  getStoredData() {
    return this.storedData;
  }

  getSpecificCurrency() {
    return this.http.get(
      'http://data.fixer.io/api/latest?access_key=1534c899e9e72b9a64c65c94e991c350&base=USD&symbols=USD,GBP,JPY,EUR,AUD,CAD,CHF,CNH,HKD'
    );
  }

  getCurrenicesFullName() {
    return this.http.get<CurrenciesFullName>(
      'https://api.currencyapi.com/v3/currencies?apikey=1xA1ZR6k0M2VB5Ey8TsdslqkhMuZcgAadHYc9InX&currencies=USD%2CGBP%2CJPY%2CEUR%2CAUD%2CCAD%2CCHF%2CCNY%2CHKD'
      // 'https://data.fixer.io/api/symbols?access_key=1534c899e9e72b9a64c65c94e991c350'
    );
  }
}
