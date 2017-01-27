import { Component } from '@angular/core';
import {NewsService} from '../../app/Services/newsService';
import { BaseController } from '../Base/basecontroller';
import {NavParams } from 'ionic-angular';
@Component({
  selector: 'newsdetail',
  templateUrl: 'newsdetail.html'
})
export class NewsDetailPage  {
    item:any;
  constructor(private service:NewsService,private baseCntrl:BaseController, public param:NavParams) {
        this.item=param.get("item");
  }

ngOnInit(){
 
}


}