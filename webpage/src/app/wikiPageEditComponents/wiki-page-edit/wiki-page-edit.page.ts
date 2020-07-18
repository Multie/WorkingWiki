import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiServicePage, WikiServicePageContent } from 'src/app/wikiClasses';
import { WikiService } from 'src/app/wiki.service';

@Component({
  selector: 'app-wiki-page-edit',
  templateUrl: './wiki-page-edit.page.html',
  styleUrls: ['./wiki-page-edit.page.scss'],
})
export class WikiPageEditPage implements OnInit {

  page: WikiServicePage;

  constructor(private activatedRoute: ActivatedRoute, private wiki: WikiService) {
    this.page = new WikiServicePage();

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var url = params["id"];
      console.log(url);
      if (url != undefined) {
        this.wiki.getPage(url).then(value => {
          this.page = value;
        });
      }
    });
  }

  // Add Conent
  addContentValue: any;
  addContentEvent() {
    console.log("change:" + this.addContentValue);
    var ele = new WikiServicePageContent();
    ele.type = this.addContentValue;
    this.page.content.push(ele);
    this.addContentValue = "";
  }
}
