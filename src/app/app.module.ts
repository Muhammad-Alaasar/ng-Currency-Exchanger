import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ExchangePanelComponent } from './views/home-page/exchange-panel/exchange-panel.component';
import { ExchangePanel2Component } from './views/details-page/exchange-panel-2/exchange-panel2.component';
import { PopularCurrenciesComponent } from './views/home-page/popular-currencies/popular-currencies.component';
import { HistoricalComponent } from './views/details-page/historical/historical.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './views/home-page/home-page.component';
import { DetailsPageComponent } from './views/details-page/details-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExchangePanelComponent,
    PopularCurrenciesComponent,
    ExchangePanel2Component,
    HistoricalComponent,
    HomePageComponent,
    DetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
