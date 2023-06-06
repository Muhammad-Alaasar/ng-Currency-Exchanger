import { Component, Input, OnInit } from '@angular/core';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { CurrencyConverted } from 'src/app/interfaces/currency-converted';
import { CurrencyWillConvert } from 'src/app/interfaces/currency-will-convert';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-exchange-panel',
  templateUrl: './exchange-panel.component.html',
  styleUrls: ['./exchange-panel.component.css'],
})
export class ExchangePanelComponent implements OnInit {
  faRotate = faRotate;
  currencies: string[] = [
    'EUR',
    'USD',
    'CAD',
    'GBP',
    'JPY',
    'AUD',
    'CHF',
    'CNY',
    'HKD',
  ];

  currencyConverted: CurrencyConverted = {
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

  currencyWillConvert: CurrencyWillConvert = {
    amount: 1,
    from: 'EUR',
    to: 'USD',
  };

  totalConverted: number = 0;
  oneCoin: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getData(this.currencyWillConvert.from).subscribe({
      next: (res) => {
        this.currencyConverted = res;
        this.totalConverted = this.oneCoin = res.data['USD'].value;
      },
      error: (error) => console.log(error),
    });
  }

  onSubmit(formData: CurrencyWillConvert) {
    this.currencyWillConvert = formData;
    let toConvert: string = formData.to;
    let currenciesRates: {} = {};

    this.apiService.getData(formData.from).subscribe({
      next: (res) => {
        type CurreniesRates = keyof typeof this.currencyConverted.data;
        let toValue = toConvert as CurreniesRates;

        this.currencyConverted = res;
        this.totalConverted =
          formData.amount * this.currencyConverted.data[toValue]['value'];
        this.oneCoin = this.currencyConverted.data[toValue]['value'];
      },
      error: (error) => console.log(error),
    });
  }

  swapCurrencies() {
    [this.currencyWillConvert.from, this.currencyWillConvert.to] = [
      this.currencyWillConvert.to,
      this.currencyWillConvert.from,
    ];
    this.onSubmit(this.currencyWillConvert);
  }
}
