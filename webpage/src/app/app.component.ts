import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { WikiService} from './wiki.service';
import { Router , NavigationEnd } from '@angular/router';
import { WikiServiceMenuEntry } from './wikiClasses';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = "";

  public labels = ['Family', 'Friends'];

  menulist:Array<WikiServiceMenuEntry>;
  


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private wiki:WikiService
  ) {
    
    this.menulist = wiki.menulist;
    var pages = wiki.pages;
    //console.log(pages);
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    //const path = window.location.pathname.split('folder/')[1];
    //if (path !== undefined) {
    //  this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    //}
  }

  titleClick() {
    this.router.navigateByUrl("/wiki/home");
  }

  categoryOpen(event,i) {
    this.selectedIndex = i;
    event.stopPropagation();
  }

  categoryClose(event) {
    this.selectedIndex = "";
    event.stopPropagation();
  }
}
