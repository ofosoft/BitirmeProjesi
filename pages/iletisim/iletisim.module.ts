import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IletisimPage } from './iletisim';

@NgModule({
  declarations: [
    IletisimPage,
  ],
  imports: [
    IonicPageModule.forChild(IletisimPage),
  ],
  exports: [
    IletisimPage
  ]
})
export class IletisimPageModule {}
