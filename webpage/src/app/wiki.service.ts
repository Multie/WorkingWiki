import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { strict } from 'assert';
import { Observable } from 'rxjs';
import { error, element } from 'protractor';
import { ThrowStmt } from '@angular/compiler';
import { WikiServicePage, WikiServiceMenuEntry } from './wikiClasses';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  pages = {};
  menulist: Array<WikiServiceMenuEntry> = [];

  language = "";
  load = true;
  constructor(private http: HttpClient) {
    //this.pages["test"] = true;
    this.language = navigator.language;
    //this.loadPages();
    this.getMenuEntrys();


    //var test = new WikiServicePage();
    //test.function = "var erg = 0;data.forEach(element => {erg += element;});return erg;";
    //console.log(this.runPageFunction(test,[100,2]));
  }

  setPage(page: WikiServicePage) {
    this.pages[this.toWikiUrl(page.name)] = page;
    localStorage.setItem("pages", JSON.stringify(this.pages));
  }

  loadPages() {
    var text = localStorage.getItem("pages");
    if (text != null) {
      console.log(text);
      this.pages = JSON.parse(text);
    }
  }

  getMenuEntrys() {
    this.http.get("assets/wiki/" + this.language + "/pages.json").subscribe((value: Array<WikiServiceMenuEntry>) => {
      value.forEach(list => {
        this.getMenuItems(this.pages, list);
        this.menulist.push(list);
      });
      this.load = false;
    });
    
  }

  getMenuItems(pages, menuItem: WikiServiceMenuEntry) {
    var url = this.toWikiUrl(menuItem.url);
    if (menuItem.list != undefined) {
      if (menuItem.list.length != null) {
        menuItem.list.forEach(element => {
          this.getMenuItems(pages, element);
        });
      }
    }
  }

  getPage(url: string, force: boolean = false): Promise<WikiServicePage> {
    url = this.toWikiUrl(url);
    return new Promise<WikiServicePage>((resolve, reject) => {

      //console.log(url);
      //console.log(Object.keys(this.pages));
      if (this.existPage(url) || force) {
        resolve(this.pages[url]);
      }
      else {
        this.http.get("assets/wiki/" + this.language + "/" + url + ".json").subscribe((value: WikiServicePage) => {
          if (value.thumbnail == undefined) {
            value.thumbnail = "";
          }
          this.setPage(value);
          resolve(value);
        }, error => {
          console.log(error);
          var error1 = new WikiServicePage();
          error1.name = "Page not found";
          error1.url = "/wiki/404";
          error1.description = "Page not found";
          error1.content = [];
          resolve(error1);
        });
      }
    });
  }

  existPage(url) {
    return Object.keys(this.pages).includes(url);
    //return this.pages.hasOwnProperty(url);
  }

  toWikiUrl(url: string): string {
    url = url.replace("/wiki/", "");
    url = url.replace("/", "_");
    return url;
  }

  runPageFunction(page: WikiServicePage, data) {
    var func = Function('"use strict";return ({ func:function(data){' + page.function + '} })')();
    return func.func(data);
    
  }
}



