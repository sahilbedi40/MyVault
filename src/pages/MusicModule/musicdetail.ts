import { Component } from '@angular/core';
import {MusicService} from '../../app/Services/musicService';
import { BaseController } from '../Base/basecontroller';
import {NavParams } from 'ionic-angular';
@Component({
  selector: 'musicdetail',
  templateUrl: 'musicdetail.html'
})
export class MusicDetailPage{
  id:number;
  items:any;
  constructor(private service:MusicService,private baseCntrl:BaseController, public param:NavParams) {
       this.id=param.get("id");
  }

ngOnInit(){
 this.getTracksByAlbumID();
}

getTracksByAlbumID(){
  this.baseCntrl.presentLoading();
  this.baseCntrl.checkNetwork();
  return this.service.getTracksByAlbumID(this.id).subscribe(res=>{
   this.items=res.dataset;
  });
}

}