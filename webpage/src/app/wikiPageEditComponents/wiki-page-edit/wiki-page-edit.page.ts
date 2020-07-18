import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiServicePage, WikiServicePageContent, WikiServicePageContentTitle, WikiServicePageContentImage, WikiServicePageContentText } from 'src/app/wikiClasses';
import { WikiService } from 'src/app/wiki.service';
import { cpus } from 'os';

@Component({
  selector: 'app-wiki-page-edit',
  templateUrl: './wiki-page-edit.page.html',
  styleUrls: ['./wiki-page-edit.page.scss'],
})
export class WikiPageEditPage implements OnInit {

  page: WikiServicePage;
  OutputText:string;
  constructor(private activatedRoute: ActivatedRoute, private wiki: WikiService) {
    this.page = new WikiServicePage();
    this.OutputText = "";
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var url = params["id"];
      console.log(url);
      if (url != undefined) {
        this.wiki.getPage(url).then(value => {
          this.page = value;
          if (this.page.content == null) {
            this.page.content = [];
          }
        });
      }
    });
  }

  // Add Conent
  addContentValue: any;
  addContentEvent() {
    console.log("change:" + this.addContentValue);
    var ele = new WikiServicePageContent();
    switch (this.addContentValue) {
      case "title":
        ele = new WikiServicePageContentTitle();
        break;
      case "text":
        ele = new WikiServicePageContentText();
        break;
      case "image":
        ele = new WikiServicePageContentImage();
        break;
      case "teaser":
        ele = new WikiServicePageContentTitle();
        break;
    }
    this.page.content.push(ele);
    this.addContentValue = "";
    console.log(this.page);
  }

  
  stringifyPage() {
    this.OutputText = JSON.stringify(this.page);
  }
  parsePage() {
    var parsed:WikiServicePage = JSON.parse(this.OutputText);
    if (parsed != null) {
      this.page = parsed;
    }
  }
  storePage() {
    
  }
}
