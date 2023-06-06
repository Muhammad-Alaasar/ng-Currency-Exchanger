import { Component, Input } from '@angular/core';
import { CurrencyConverted } from 'src/app/interfaces/currency-converted';
import { CurrencyWillConvert } from 'src/app/interfaces/currency-will-convert';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-popular-currencies',
  templateUrl: './popular-currencies.component.html',
  styleUrls: ['./popular-currencies.component.css'],
})
export class PopularCurrenciesComponent {
  constructor(private apiService: ApiService) {}

  @Input() currencyConverted: CurrencyConverted = {
    data: {
      EUR: {
        code: '',
        value: 0,
      },
      USD: {
        code: '',
        value: 0,
      },
      JPY: {
        code: '',
        value: 0,
      },
      GBP: {
        code: '',
        value: 0,
      },
      AUD: {
        code: '',
        value: 0,
      },
      CAD: {
        code: '',
        value: 0,
      },
      CHF: {
        code: '',
        value: 0,
      },
      CNY: {
        code: '',
        value: 0,
      },
      HKD: {
        code: '',
        value: 0,
      },
    },
  };
  @Input() currencyWillConvert: CurrencyWillConvert = {
    amount: 0,
    from: '',
    to: '',
  };
}
