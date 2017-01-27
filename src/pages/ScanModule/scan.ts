import { Component } from '@angular/core';
//import { BaseController } from '../Base/basecontroller';
import { BarcodeScanner } from 'ionic-native';

@Component({
  selector: 'scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
    detail:any;
    format:any;
    isRead:boolean=false;
  constructor() {  }

 scanDocument()
 {
    BarcodeScanner.scan().then((barcodeData) => {
        if (!barcodeData.cancelled) {
            this.detail=barcodeData.text;
            this.format=barcodeData.format;
            this.isRead=true;
         }
 // Success! Barcode data is here
       }, (err) => {
    // An error occurred
    alert(err);
    });
 }

}