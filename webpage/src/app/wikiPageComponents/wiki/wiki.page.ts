import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WikiService  } from '../../wiki.service';
import { WikiServicePage } from '../../wikiClasses';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.page.html',
  styleUrls: ['./wiki.page.scss'],
})
export class WikiPage implements OnInit {
  page:WikiServicePage;
  constructor(private router: Router,private wiki:WikiService) {
    this.page = new WikiServicePage();
    wiki.getPage(this.router.url).then(value=> {
      this.page = value;
    },error=> {
      
     
     
    });
   }

  ngOnInit() {
  }

}
