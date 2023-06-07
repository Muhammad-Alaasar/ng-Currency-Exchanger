import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StoredData } from 'src/app/interfaces/stored-data';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {
  storedData: StoredData = {
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
    amount: 0,
    from: '',
    to: '',
    totalConverted: 0,
  };

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.storedData = this.apiService.getStoredData();
  }
}
