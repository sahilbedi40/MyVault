import { Injectable } from '@angular/core';
import { LoadingController, AlertController , Platform } from 'ionic-angular';
import {Network} from 'ionic-native';

@Injectable()
export class BaseController{
isDisconnect:boolean=false;
    constructor(private loadingCtrl: LoadingController,private pfm:Platform,private alertController:AlertController){}    

   // loader
   public presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  // Internet Connection
  public checkNetwork() {
   
    this.pfm.ready().then(() => {     
      let test = Network.onDisconnect().subscribe(() =>{
            this.isDisconnect=true;    
      });      
      if(this.isDisconnect){  
        
        let alert1 =this.alertController.create({ title: "Connection Status",subTitle: "No Internet Connection :(",buttons: ["OK"] });
          alert1.present();  
          test.unsubscribe();
          this.isDisconnect=false;
      }            
    });
}

   

}
