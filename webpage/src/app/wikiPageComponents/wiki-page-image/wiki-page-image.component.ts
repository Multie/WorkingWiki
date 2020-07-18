import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wiki-page-image',
  templateUrl: './wiki-page-image.component.html',
  styleUrls: ['./wiki-page-image.component.scss'],
})
export class WikiPageImageComponent implements OnInit {

  @Input() content:WikiPageImageComponent;
  constructor() { }

  ngOnInit() {}

}
