import { Component, OnInit, Input, Output } from '@angular/core';
import { WikiServicePageContent, WikiServicePageContentTitle } from 'src/app/wikiClasses';

@Component({
  selector: 'app-wiki-page-edit-title',
  templateUrl: './wiki-page-edit-title.component.html',
  styleUrls: ['./wiki-page-edit-title.component.scss'],
})
export class WikiPageEditTitleComponent implements OnInit {

  @Input() content:WikiServicePageContentTitle;

  constructor() { 

  }

  ngOnInit() {

  }

}
