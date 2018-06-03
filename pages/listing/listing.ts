import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { FeedPage } from '../feed/feed';
import { ContactCardPage } from '../contact-card/contact-card';
import { AltSektorPage } from '../alt-sektor/alt-sektor';

import 'rxjs/Rx';

import { ListingModel } from './listing.model';
import { ListingService } from './listing.service';


@Component({
  selector: 'listing-page',
  templateUrl: 'listing.html',
})
export class ListingPage {
  listing: ListingModel = new ListingModel();
  loading: any;
 
  constructor(
    public nav: NavController,
    public listingService: ListingService,
    public loadingCtrl: LoadingController
  ) {
    this.loading = this.loadingCtrl.create({
      content: "Lütfen Bekleyiniz...",
      dismissOnPageChange: true
    });
  }


  ionViewDidLoad() {
    this.loading.present();
    

    this.listingService.haberler().subscribe(
        data => {
            this.listing.haberler = data; 

        },
        err => {
            console.log(err);
        }
    );

    this.listingService.anasayfa_vitrin_firmalar().subscribe(
        data => {
            this.listing.populerFirmalar = data; 
        },
        err => {
            console.log(err);
        }
    );

    this.listingService.sektorler().subscribe(
        data => {
            this.listing.sektorler = data; 
            console.log(data);

        },
        err => {
            console.log(err);
        }
    );



    this.loading.dismiss();
  }



  altSektorGit(sektor: any) {
    console.log("Sektore Git:", sektor.sektorId);
    this.nav.push(AltSektorPage, { sektorId: sektor.sektorId });
  }

  firmayaGit(firma: any) {
    console.log("Firmaya Git:", firma.firmaId);
    this.nav.push(ContactCardPage, { firmaId: firma.firmaId });
  }

}
