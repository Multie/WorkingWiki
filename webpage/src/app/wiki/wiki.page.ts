import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WikiService, WikiServicePage } from '../wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.page.html',
  styleUrls: ['./wiki.page.scss'],
})
export class WikiPage implements OnInit {
  page:WikiServicePage;
  constructor(private router: Router,private wiki:WikiService) {
    this.page = new WikiServicePage();
    //console.log(this.router.url);
    //console.log(wiki.pages);
    wiki.getPage(this.router.url).then(value=> {
      this.page = value;
    },error=> {
      
     this.router.navigateByUrl("404");
     
    });
   }

  ngOnInit() {
  }

}
