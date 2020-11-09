import { Component, OnInit, } from '@angular/core';
import { CurrencyService } from 'src/app/_services/currency.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currencies: any[] = [];
  foreignExchangeRates: any = {};
  isProcessing = false;
  selectedCountry = "undefined";
  selectedCountryCode = "";
  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getAllCurrencies();
  }

  getAllCurrencies() {
    this.isProcessing = true;
    this.currencyService.getAllCurrencies().subscribe((response: any) => {
      // copy response into local obj.
      this.currencies = response;
      for (let i = 0; i < this.currencies.length; i++) {
        this.currencies[i].currencyName = `${this.currencies[i].name} (${this.currencies[i].code})`;
      }
      console.log(this.currencies)
      this.isProcessing = false;
    }, error => {
      console.log(error);
      this.isProcessing = false;
    });
  }

  setCurrency(code) {
    this.selectedCountryCode = code;
    this.isProcessing = true;
    this.currencyService.getForeignExchangeRates().subscribe((response: any) => {
      // copy response into local obj.
      if (response && response.rates) {
        this.foreignExchangeRates = response.rates;
      }
      this.isProcessing = false;
    }, error => {
      console.log(error);
      this.isProcessing = false;
    });
  }

}
