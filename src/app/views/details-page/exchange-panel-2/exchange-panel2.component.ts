import { Component, Input } from '@angular/core';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import { CurrencyConverted } from 'src/app/interfaces/currency-converted';

@Component({
  selector: 'app-exchange-panel-2',
  templateUrl: './exchange-panel2.component.html',
  styleUrls: ['./exchange-panel2.component.css']
})
export class ExchangePanel2Component {
  faRotate = faRotate
  @Input() currencyConverted : CurrencyConverted = {
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
    }
  }
}
