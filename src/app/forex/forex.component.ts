import { Component, AfterViewInit, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';

declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrl: './forex.component.css'
})

export class ForexComponent implements OnInit, AfterViewInit {
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient) { }
  
  ngAfterViewInit(): void {
    this.renderer.removeClass(document.body, "sidebar-open");
    this.renderer.addClass(document.body, "sidebar-closed");

    this._table1 = $("#table1").DataTable
    (
      {
        "columnDefs" :
        [
          {
          "targets" : 2,
          "className" : "text-right",
          },
        ],
      }
    );

    this.getData();
  }

  ngOnInit(): void {
  }

getData(): void {
  console.log("getData()");

  var url = "https://openexchangerates.org/api/latest.json?app_id=495d180bba314b8781a3b03ea743aa95";

  this.http.get(url)
  .subscribe((data : any) => {
    console.log(data);

    var rates = data.rates;
    console.log(rates);

    var idr = rates.IDR;
    var idr2 = formatCurrency(idr, "en-US", "", "USD");
    console.log("USD : " + idr2);
    var row = [ 1, "USD", idr2 ];
    this._table1.row.add(row);

    var sgd = rates.IDR / rates.SGD;
    var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
    console.log("SGD : " + sgd2);
    var row = [ 2, "SGD", sgd2 ];
    this._table1.row.add(row);

    var bnd = rates.IDR / rates.BND;
    var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
    console.log("bnd : " + bnd2);
    var row = [ 3, "BND", bnd2 ];
    this._table1.row.add(row);

    var hkd = rates.IDR / rates.HKD;
    var hkd2 = formatCurrency(hkd, "en-US", "", "HKD");
    console.log("HKD : " + hkd2);
    var row = [ 4, "HKD", hkd2 ];
    this._table1.row.add(row);

    var btc = rates.IDR / rates.BTC;
    var btc2 = formatCurrency(btc, "en-US", "", "BTC");
    console.log("SGD : " + btc2);
    var row = [ 5, "SGD", btc2 ];
    this._table1.row.add(row);

    var myr = rates.IDR / rates.MYR;
    var myr2 = formatCurrency(myr, "en-US", "", "MYR");
    console.log("MYR : " + myr2);
    var row = [ 6, "MYR ", myr2 ];
    this._table1.row.add(row);

    var bsd = rates.IDR / rates.BSD;
    var bsd2 = formatCurrency(bsd, "en-US", "", "BSD");
    console.log("BSD : " + bsd2);
    var row = [ 7, "BSD", bsd2 ];
    this._table1.row.add(row);

    var all = rates.IDR / rates.ALL;
    var all2 = formatCurrency(all, "en-US", "", "ALL");
    console.log("ALL : " + all2);
    var row = [ 8, "ALL", all2 ];
    this._table1.row.add(row);

    var dkk = rates.IDR / rates.DKK;
    var dkk2 = formatCurrency(dkk, "en-US", "", "DKK");
    console.log("DKK : " + dkk2);
    var row = [ 9, "DKK", dkk2 ];
    this._table1.row.add(row);

    var bmd = rates.IDR / rates.BMD;
    var bmd2 = formatCurrency(bmd, "en-US", "", "BMD");
    console.log("SMD : " + bmd2);
    var row = [ 10, "BMD", bmd2 ];
    this._table1.row.add(row);
    

    this._table1.draw(false);
  });
}
}
