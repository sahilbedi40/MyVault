import { Component } from '@angular/core';
import {NewsService} from '../../app/Services/newsService';
import { BaseController } from '../Base/basecontroller';
import { NavController } from 'ionic-angular';
import {NewsDetailPage} from './newsdetail';
@Component({
  selector: 'news',
  templateUrl: 'news.html'
})
export class NewsPage  {
    items:any;
  constructor(private service:NewsService,private baseCntrl:BaseController,private navCtrl: NavController) {
        
  }

ngOnInit(){
 this.getAllNews();
}

showDetail(item:any)
{
  this.navCtrl.push(NewsDetailPage,{
    item:item
  });
}

getAllNews()
{
  this.baseCntrl.presentLoading(); 
  this.baseCntrl.checkNetwork(); 
    this.service.getAllNews().subscribe(response=>{
       this.items=response.articles;
    });
    
}

doRefresh(refresher){
this.getAllNews();
setTimeout(() => {      
      refresher.complete();
    }, 1000);
}

}