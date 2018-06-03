import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HakkimizdaPage } from './hakkimizda';

@NgModule({
  declarations: [
    HakkimizdaPage,
  ],
  imports: [
    IonicPageModule.forChild(HakkimizdaPage),
  ],
  exports: [
    HakkimizdaPage
  ]
})
export class HakkimizdaPageModule {}
