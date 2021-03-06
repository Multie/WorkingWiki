import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WikiPageEditPageRoutingModule } from './wiki-page-edit-routing.module';

import { WikiPageEditPage } from './wiki-page-edit.page';
import { EditComponentsModule } from '../editComponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WikiPageEditPageRoutingModule,
    EditComponentsModule,
  ],
  declarations: [WikiPageEditPage]
})
export class WikiPageEditPageModule {}
