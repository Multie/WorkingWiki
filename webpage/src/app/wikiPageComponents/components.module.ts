import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WikiPageTitleComponent } from './wiki-page-title/wiki-page-title.component';
import { WikiPageTextComponent } from './wiki-page-text/wiki-page-text.component';
import { WikiPageImageComponent } from './wiki-page-image/wiki-page-image.component';
import { WikiPageTeaserComponent } from './wiki-page-teaser/wiki-page-teaser.component';
import { WikiPageEditTitleComponent } from '../wikiPageEditComponents/wiki-page-edit-title/wiki-page-edit-title.component';
import { WikiPageEditTextComponent } from '../wikiPageEditComponents/wiki-page-edit-text/wiki-page-edit-text.component';
import { WikiPageEditImageComponent } from '../wikiPageEditComponents/wiki-page-edit-image/wiki-page-edit-image.component';
import { WikiPageEditTeaserComponent } from '../wikiPageEditComponents/wiki-page-edit-teaser/wiki-page-edit-teaser.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    WikiPageTitleComponent,
    WikiPageTextComponent,
    WikiPageImageComponent,
    WikiPageTeaserComponent,
  ],
  exports: [
    WikiPageTitleComponent,
    WikiPageTextComponent,
    WikiPageImageComponent,
    WikiPageTeaserComponent,
  ]
})
export class ComponentsModule {}
