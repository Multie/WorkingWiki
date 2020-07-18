import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WikiPageRoutingModule } from './wiki-routing.module';

import { WikiPage } from './wiki.page';
import { ComponentsModule } from '../components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WikiPageRoutingModule,
    ComponentsModule
  ],
  declarations: [WikiPage]
})
export class WikiPageModule {}
