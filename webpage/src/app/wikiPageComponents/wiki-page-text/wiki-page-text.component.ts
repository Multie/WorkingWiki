import { Component, OnInit , Input } from '@angular/core';
import { WikiServicePageContentText } from 'src/app/wikiClasses';

@Component({
  selector: 'app-wiki-page-text',
  templateUrl: './wiki-page-text.component.html',
  styleUrls: ['./wiki-page-text.component.scss'],
})
export class WikiPageTextComponent implements OnInit {

  @Input() content:WikiServicePageContentText;
  constructor() { }

  ngOnInit() {}

}
