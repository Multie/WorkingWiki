import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { WikiPageEditTitleComponent } from './wiki-page-edit-title/wiki-page-edit-title.component';
import { WikiPageEditTextComponent } from './wiki-page-edit-text/wiki-page-edit-text.component';
import { WikiPageEditTeaserComponent } from './wiki-page-edit-teaser/wiki-page-edit-teaser.component';
import { WikiPageEditImageComponent } from './wiki-page-edit-image/wiki-page-edit-image.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    WikiPageEditTitleComponent,
    WikiPageEditTextComponent,
    WikiPageEditImageComponent,
    WikiPageEditTeaserComponent
  ],
  exports: [
    WikiPageEditTitleComponent,
    WikiPageEditTextComponent,
    WikiPageEditImageComponent,
    WikiPageEditTeaserComponent
  ]
})
export class EditComponentsModule {}
