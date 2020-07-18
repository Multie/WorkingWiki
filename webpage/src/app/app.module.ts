import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { WikiPageTeaserComponent } from './wikiPageComponents/wiki-page-teaser/wiki-page-teaser.component';
import { WikiPageTitleComponent } from './wikiPageComponents/wiki-page-title/wiki-page-title.component';
import { WikiPageImageComponent } from './wikiPageComponents/wiki-page-image/wiki-page-image.component';
import { WikiPageTextComponent } from './wikiPageComponents/wiki-page-text/wiki-page-text.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
