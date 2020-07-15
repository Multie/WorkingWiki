import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { strict } from 'assert';
import { Observable } from 'rxjs';
import { error, element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  pages = {};
  menulist: Array<WikiServiceMenuEntry> = [];

  language = "";

  constructor(private http: HttpClient) {
    //this.pages["test"] = true;
    this.language = navigator.language;

    this.getMenuEntrys();


    var test = new WikiServicePage();
    test.function = "var erg = 0;data.forEach(element => {erg += element;});return erg;";
    console.log(this.runPageFunction(test,[100,2]));
  }


  getMenuEntrys() {
    this.http.get("assets/wiki/" + this.language + "/pages.json").subscribe((value: Array<WikiServiceMenuEntry>) => {
      value.forEach(list => {
        this.getMenuItems(this.pages, list);
        this.menulist.push(list);
      });
    });
  }

  getMenuItems(pages, menuItem: WikiServiceMenuEntry) {
    var url = this.toWikiUrl(menuItem.url);
    pages[url] = menuItem;
    if (menuItem.list != undefined) {
      if (menuItem.list.length != null) {
        menuItem.list.forEach(element => {
          this.getMenuItems(pages, element);
        });
      }
    }
  }

  getPage(url: string): Promise<WikiServicePage> {
    url = this.toWikiUrl(url);
    return new Promise<WikiServicePage>((resolve, reject) => {
      //console.log("abfrage");
      //console.log(url);
      //console.log(Object.keys(this.pages));
      if (this.existPage(url)) {
        if (!this.pages[url].loaded) {
          //console.log("get: " + "assets/wiki/" + this.language + "/" + url + ".json")
          this.http.get("assets/wiki/" + this.language + "/" + url + ".json").subscribe((value:WikiServicePage) => {
            value.loaded = true;
            if (value.thumbnail == undefined) {
              value.thumbnail = "";
            }
            this.pages[url] = value;
          }, error => {
            console.log(error);
            // Error Page
            reject("json not found");
          });
        }
        resolve(this.pages[url]);
      }
      else {
        var error = new WikiServicePage();
        error.name = "Page not found";
        error.url = "/wiki/404";
        error.loaded = true;
        error.description = "Page not found";
        error.content = [];
        resolve(error);
      }
    });
  }

  existPage(url) {
    return Object.keys(this.pages).includes(url);
    //return this.pages.hasOwnProperty(url);
  }

  toWikiUrl(url:string):string {
    url = url.replace("/wiki/", "");
    url = url.replace("/", "_");
    return url;
  }

  runPageFunction(page:WikiServicePage,data) {
    var func = Function('"use strict";return ({ func:function(data){' + page.function + '} })')();
    return func.func(data);
  }
}

export class WikiServiceMenuEntry {
  name: string;
  url: string;
  thumbnail: string;
  description: string;
  loaded: boolean;
  list: Array<WikiServiceMenuEntry>;
  constructor() {
    this.name = "";
    this.thumbnail = "";
    this.description = "";
    this.url = "";
    this.loaded = false;
  }
}

export class WikiServicePage extends WikiServiceMenuEntry {
  content: Array<WikiServicePageContent>;
  function:string;
  constructor() {
    super();
  }

}
export class WikiServicePageContent {
  type: string;
  content: string;
  constructor() {

  }
}