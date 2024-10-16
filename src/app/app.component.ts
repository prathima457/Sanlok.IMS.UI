import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly APIUrl = 'http://localhost:5001/api/stock/';
  
  /**
   *
   */
  constructor(private http: HttpClient, 
    private location: Location
  ) {}

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

    var formData = new FormData();
    formData.append('symbol', _symbol);
    formData.append('stockName', _stockName);
    formData.append('price', _price);
    formData.append('lastDiv', _lastDiv);
    formData.append('industry', _industry);
    formData.append('marketCap', _marketCap);
    debugger;
    var _location = this.location;
    var data = new Array();
    data = data.concat(
      JSON.stringify({
        symbol: _symbol,
        stockName: _stockName,
        price: _price,
        lastDiv: _lastDiv,
        industry: _industry,
        marketCap: _marketCap
      })
    );

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http
      .post(this.APIUrl, data[0], { headers })
      .subscribe((data) => {
        alert(data);
      });
  }
  title = 'AngularSol';
}
