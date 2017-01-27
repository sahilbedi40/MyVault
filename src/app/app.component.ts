import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';


import { NewsPage } from '../pages/NewsModule/news';
import { UsersPage } from '../pages/UserModule/users';
import { MusicPage } from '../pages/MusicModule/music';
import { ScanPage } from '../pages/ScanModule/scan';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = NewsPage;
  pages: Array<{title: string, component: any,iconName:string}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'News', component: NewsPage,iconName:'calendar' },
      { title: 'Users', component: UsersPage,iconName:'people' },
      {title:'Music', component:MusicPage,iconName:'musical-notes'},
      {title:'Scanner', component:ScanPage,iconName:'barcode'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
