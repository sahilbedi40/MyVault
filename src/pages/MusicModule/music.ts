import { Component } from '@angular/core';
import {MusicService} from '../../app/Services/musicService';
import { BaseController } from '../Base/basecontroller';
import { NavController } from 'ionic-angular';
import {MusicDetailPage} from './musicdetail';
@Component({
  selector: 'music',
  templateUrl: 'music.html'
})
export class MusicPage{
    items:any;
  constructor(private service:MusicService,private baseCntrl:BaseController,private navCtrl: NavController) {
       
  }

ngOnInit(){
 this.getAlbums();
}

getAlbums()
{
  this.baseCntrl.presentLoading();
  this.baseCntrl.checkNetwork();
    this.service.getAlbums().subscribe(response=>{
       this.items=response.dataset;
    });
    
}

showDetail(id:number){
   this.navCtrl.push(MusicDetailPage,{
     id:id
   });
}

}