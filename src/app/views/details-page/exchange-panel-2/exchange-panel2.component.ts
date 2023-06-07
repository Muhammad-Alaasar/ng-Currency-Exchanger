import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { CurrenciesFullName } from 'src/app/interfaces/currencies-full-name';
import { CurrencyWillConvert } from 'src/app/interfaces/currency-will-convert';
import { StoredData } from 'src/app/interfaces/stored-data';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-exchange-panel-2',
  templateUrl: './exchange-panel2.component.html',
  styleUrls: ['./exchange-panel2.component.css']
})
export class ExchangePanel2Component implements OnInit {
  
  constructor(private apiService: ApiService, private route: Router){}

  @Input() storedData: StoredData = {
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
  }

  currenciesFullName :CurrenciesFullName = {
    data: {
      AUD: {
        symbol: '',
        name: '',
        symbol_native: '',
        decimal_digits: 0,
        rounding: 0,
        code: '',
        name_plural: ''
      },
      CAD: {
        symbol: '',
        name: '',
        symbol_native: '',
        decimal_digits: 0,
        rounding: 0,
        code: '',
        name_plural: ''
      },
      CHF: {
        symbol: '',
        name: '',
        symbol_native: '',
        decimal_digits: 0,
        rounding: 0,
        code: '',
        name_plural: ''
      },
      CNY: {
        symbol: '',
        name: '',
        symbol_native: '',
        decimal_digits: 0,
        rounding: 0,
        code: '',
        name_plural: ''
      },
      EUR: {
        symbol: '',
        name: '',
        symbol_native: '',
        decimal_digits: 0,
        rounding: 0,
        code: '',
        name_plural: ''
      },
      GBP: {
        symbol: '',
        name: '',
        symbol_native: '',
        decimal_digits: 0,
        rounding: 0,
        code: '',
        name_plural: ''
      },
      HKD: {
        symbol: '',
        name: '',
        symbol_native: '',
        decimal_digits: 0,
        rounding: 0,
        code: '',
        name_plural: ''
      },
      JPY: {
        symbol: '',
        name: '',
        symbol_native: '',
        decimal_digits: 0,
        rounding: 0,
        code: '',
        name_plural: ''
      },
      USD: {
        symbol: '',
        name: '',
        symbol_native: '',
        decimal_digits: 0,
        rounding: 0,
        code: '',
        name_plural: ''
      }
    }
  };
  displayedCurrency :string = "EUR"
  faRotate = faRotate
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
  totalConverted: number = 0;
  oneCoin: number = 0;

  ngOnInit(): void {
    this.apiService.getCurrenicesFullName().subscribe({
      next: res => {
        this.currenciesFullName = res
        type DisplayedCurrency = keyof typeof res.data
        const fromValue = this.storedData.from as DisplayedCurrency
        this.displayedCurrency = res.data[fromValue].name
        type OneCoin = keyof typeof res.data
        const toValue = this.storedData.to as DisplayedCurrency
        this.oneCoin = this.storedData.data[toValue].value
        this.totalConverted = this.storedData.totalConverted
      },
      error: error => console.log(error)
    })
  }
  
  onBack(){
    this.route.navigateByUrl('/');
  }

  onSubmit(formData: CurrencyWillConvert){
    [this.storedData.amount, this.storedData.from, this.storedData.to] = [formData.amount, formData.from, formData.to];
    let toConvert: string = formData.to;

    this.apiService.getData(formData.from).subscribe({
      next: (res) => {
        type CurreniesRates = keyof typeof this.storedData.data;
        let toValue = toConvert as CurreniesRates;

        this.storedData.data = res.data;
        this.totalConverted =
          formData.amount * this.storedData.data[toValue]['value'];
        this.oneCoin = this.storedData.data[toValue]['value'];
      },
      error: (error) => console.log(error),
    });
  }

  swapCurrencies() {
    [this.storedData.from, this.storedData.to] = [
      this.storedData.to,
      this.storedData.from,
    ];
    let { amount, from, to } = this.storedData;
    let formData = {amount, from, to};
    this.onSubmit(formData);
  }
}
