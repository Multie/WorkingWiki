import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WikiPageTitleComponent } from './wikiPageComponents/wiki-page-title/wiki-page-title.component';
import { WikiPageTextComponent } from './wikiPageComponents/wiki-page-text/wiki-page-text.component';
import { WikiPageImageComponent } from './wikiPageComponents/wiki-page-image/wiki-page-image.component';
import { WikiPageTeaserComponent } from './wikiPageComponents/wiki-page-teaser/wiki-page-teaser.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    WikiPageTitleComponent,
    WikiPageTextComponent,
    WikiPageImageComponent,
    WikiPageTeaserComponent
  ],
  exports: [
    WikiPageTitleComponent,
    WikiPageTextComponent,
    WikiPageImageComponent,
    WikiPageTeaserComponent
  ]
})
export class ComponentsModule {}
