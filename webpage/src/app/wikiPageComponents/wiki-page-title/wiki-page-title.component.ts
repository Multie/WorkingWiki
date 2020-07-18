import { Component, OnInit, Input } from '@angular/core';
import { WikiServicePageContentTitle } from 'src/app/wikiClasses';

@Component({
  selector: 'app-wiki-page-title',
  templateUrl: './wiki-page-title.component.html',
  styleUrls: ['./wiki-page-title.component.scss'],
})
export class WikiPageTitleComponent implements OnInit {

  @Input() content:WikiServicePageContentTitle;

  constructor() { 
  }

  ngOnInit() {}

}
