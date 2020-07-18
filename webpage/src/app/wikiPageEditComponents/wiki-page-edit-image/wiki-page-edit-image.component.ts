import { Component, OnInit, Input } from '@angular/core';
import { WikiServicePageContentImage } from 'src/app/wikiClasses';

@Component({
  selector: 'app-wiki-page-edit-image',
  templateUrl: './wiki-page-edit-image.component.html',
  styleUrls: ['./wiki-page-edit-image.component.scss'],
})
export class WikiPageEditImageComponent implements OnInit {
  @Input() content:WikiServicePageContentImage;

  constructor() { }

  ngOnInit() {}

}
