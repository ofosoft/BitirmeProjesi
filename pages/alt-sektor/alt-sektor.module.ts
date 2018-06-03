import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AltSektorPage } from './alt-sektor';

@NgModule({
  declarations: [
    AltSektorPage,
  ],
  imports: [
    IonicPageModule.forChild(AltSektorPage),
  ],
  exports: [
    AltSektorPage
  ]
})
export class AltSektorPageModule {}
