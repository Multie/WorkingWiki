import { Component, OnInit, Input } from '@angular/core';
import { WikiServicePageContentTeaser } from 'src/app/wikiClasses';

@Component({
  selector: 'app-wiki-page-teaser',
  templateUrl: './wiki-page-teaser.component.html',
  styleUrls: ['./wiki-page-teaser.component.scss'],
})
export class WikiPageTeaserComponent implements OnInit {

  @Input() content:WikiServicePageContentTeaser;
  constructor() { }

  ngOnInit() {}

}
