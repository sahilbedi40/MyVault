import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NewsPage } from '../pages/NewsModule/news';
import { UsersPage } from '../pages/UserModule/users';
import { MusicPage } from '../pages/MusicModule/music';
import { ScanPage } from '../pages/ScanModule/scan';
import {MusicDetailPage} from '../pages/MusicModule/musicdetail';
import { NewsDetailPage } from '../pages/NewsModule/newsdetail';
import { BaseController } from '../pages/Base/basecontroller';

import {NewsService} from './Services/newsService';
import {UserService} from './Services/userService';
import {MusicService} from './Services/musicService';
import {ApiConfig} from './Services/apiConfig';


@NgModule({
  declarations: [
    MyApp,    
    NewsPage,
    UsersPage,
    MusicPage,
    ScanPage,
    MusicDetailPage,
    NewsDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    NewsPage,
    UsersPage,
    MusicPage,
    ScanPage,
    MusicDetailPage,
    NewsDetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},NewsService,UserService,MusicService,BaseController,ApiConfig]
})
export class AppModule {}
