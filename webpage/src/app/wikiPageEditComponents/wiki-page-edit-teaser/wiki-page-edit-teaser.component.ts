import { Component, OnInit, Input } from '@angular/core';
import { WikiServicePageContentTeaser } from 'src/app/wikiClasses';

@Component({
  selector: 'app-wiki-page-edit-teaser',
  templateUrl: './wiki-page-edit-teaser.component.html',
  styleUrls: ['./wiki-page-edit-teaser.component.scss'],
})
export class WikiPageEditTeaserComponent implements OnInit {

  @Input() content:WikiServicePageContentTeaser;


  constructor() { }

  ngOnInit() {}

}
