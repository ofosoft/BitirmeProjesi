import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirmalarService } from './firmalar.service';
import { ContactCardPage } from '../contact-card/contact-card';

@IonicPage()
@Component({
  selector: 'page-firmalar',
  templateUrl: 'firmalar.html',
})
export class FirmalarPage {
  
  firmalar:any;
  constructor(public nav: NavController, public navParams: NavParams,public firmalarService:FirmalarService) {
  }

  ionViewDidLoad() {
     this.firmalarService.firmalar(this.navParams.get('asId')).subscribe(
        data => {
            this.firmalar = data; 
        },
        err => {
            console.log(err);
        }
    );

  }

  firmaGit(firma: any) {
    console.log("Firmaya Git:", firma.firmaId);
    this.nav.push(ContactCardPage, { firmaId: firma.firmaId });
  }

}
