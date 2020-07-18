import { Component, OnInit, Input } from '@angular/core';
import { WikiServicePageContentText } from 'src/app/wikiClasses';

@Component({
  selector: 'app-wiki-page-edit-text',
  templateUrl: './wiki-page-edit-text.component.html',
  styleUrls: ['./wiki-page-edit-text.component.scss'],
})
export class WikiPageEditTextComponent implements OnInit {
  @Input() content:WikiServicePageContentText;

  constructor() { }

  ngOnInit() {}

}
