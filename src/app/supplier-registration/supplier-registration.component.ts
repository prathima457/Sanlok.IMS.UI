import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-supplier-registration',
  standalone: true,
  imports: [],
  templateUrl: './supplier-registration.component.html',
  styleUrl: './supplier-registration.component.css',
})
export class SupplierRegistrationComponent {
  //readonly APIUrl = 'http://localhost:5240/api/stock/';
  readonly APIUrl = environment.API_URL;
  errorMessage: any;
  constructor(private http: HttpClient, private location: Location) {}
  stocks: any = [];
  saveStock() {
    debugger;
    var _symbol = (<HTMLInputElement>document.getElementById('txtSymbol'))
      .value;
    var _stockName = (<HTMLInputElement>document.getElementById('txtstockName'))
      .value;
    var _price = (<HTMLInputElement>document.getElementById('txtPrice')).value;
    var _lastDiv = (<HTMLInputElement>(
      document.getElementById('txtLastDivident')
    )).value;
    var _industry = (<HTMLInputElement>document.getElementById('txtIndustry'))
      .value;
    var _marketCap = (<HTMLInputElement>(
      document.getElementById('txtMarketCapital')
    )).value;

    var _location = this.location;
    var data = new Array();
    data = data.concat(
      JSON.stringify({
        symbol: _symbol,
        stockName: _stockName,
        price: _price,
        lastDiv: _lastDiv,
        industry: _industry,
        marketCap: _marketCap,
      })
    );
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post<any>(this.APIUrl + "/api/stock/", data[0], { headers }).subscribe({
      next: (data) => {
        //this.postId = data.id;
        if (data != null) {
          alert('Registration Successful.');
        }
      },
      error: (error) => {
        debugger;
        this.errorMessage = error.message;
        console.error('There was an error!' + this.errorMessage);
      },
    });
  }
}
