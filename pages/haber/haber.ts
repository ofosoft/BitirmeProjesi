import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import {HaberService} from "./haber.service"

@IonicPage()

@Component({
  selector: 'page-haber',
  templateUrl: 'haber.html',
})

export class HaberPage {

  constructor(
	public navCtrl: NavController, 
	public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public socialSharing: SocialSharing,
    public haberService : HaberService,
	public haber:any
	)
  {
  }

  ionViewDidLoad() {
  	 this.haberService.haber(this.navParams.get('haberId')).subscribe(
        data => {
            this.haber = data; 
            console.log(data);

        },
        err => {
            console.log(err);
        }
    );
    console.log('ionViewDidLoad HaberPage');
  }

}
