import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirmalarPage } from './firmalar';

@NgModule({
  declarations: [
    FirmalarPage,
  ],
  imports: [
    IonicPageModule.forChild(FirmalarPage),
  ],
  exports: [
    FirmalarPage
  ]
})
export class FirmalarPageModule {}
