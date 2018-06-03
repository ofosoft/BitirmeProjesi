import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirmalarPage } from '../firmalar/firmalar';
import { ContactCardPage } from '../contact-card/contact-card';

import { AltSektorService } from './alt-sektor.service';



@IonicPage()
@Component({
  selector: 'page-alt-sektor',
  templateUrl: 'alt-sektor.html',
})

export class AltSektorPage {
  sponsorFirmalar:any;
  altSektorler:any;
  sektorAd:string;
  constructor(public nav: NavController,public altSektorService: AltSektorService, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    this.altSektorService.sponsor_firmalar(this.navParams.get('sektorId')).subscribe(
        data => {
            this.sponsorFirmalar = data; 
        },
        err => {
            console.log(err);
        }
    );

    this.altSektorService.alt_sektorler(this.navParams.get('sektorId')).subscribe(
        data => {
            this.altSektorler = data; 
            this.sektorAd = this.altSektorler[0].sektorAd
            console.log();

        },
        err => {
            console.log(err);
        }
    );

  }

  firmayaGit(firma: any) {
    console.log("Firmaya Git:", firma.firmaId);
    this.nav.push(ContactCardPage, { firmaId: firma.firmaId });
  }

  firmalarGit(altSektor: any) {
    console.log("AltSektor Git:", altSektor.asId);
    this.nav.push(FirmalarPage, { asId: altSektor.asId });
  }


}
