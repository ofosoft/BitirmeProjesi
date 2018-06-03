import { Component, Pipe, PipeTransform  } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DomSanitizer } from '@angular/platform-browser';

import { ContactModel } from './contact.model';
import { ContactService } from './contact.service';
import 'rxjs/Rx';

@Pipe({ name: 'safe' })
@Component({
  selector: 'contact-card-page',
  templateUrl: 'contact-card.html'
})
export class ContactCardPage implements PipeTransform {
  contact: ContactModel = new ContactModel();
  firma:any;
  loading:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public ContactService: ContactService,
    private emailComposer: EmailComposer,
    public inAppBrowser: InAppBrowser,
    public domSanitizer: DomSanitizer
  ) {
   /* this.ContactService.firma(this.navParams.get('firmaId')).subscribe(
        data => {
            this.firma = data; 
            console.log(this.firma);

        },
        err => {
            console.log(err);
        }
    );*/
    this.ContactService
      .firma(this.navParams.get('firmaId'))
      .then(data => {
       this.firma = data; 
        console.log(this.firma);
      });
  }
    transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
   ionViewDidLoad() {
     
    /* this.ContactService.firma(this.navParams.get('firmaId')).subscribe(
        data => {
            this.firma = data; 
            console.log(this.firma);

        },
        err => {
            console.log(err);
        }
    );*/
   }

  //Note: we commented this method because the Call Number plugin was unstable and causing lots of errors. If you want to use it please go: https://ionicframework.com/docs/native/call-number/
  /* call(number: string){
     this.callNumber.callNumber(number, true)
     .then(() => console.log('Launched dialer!'))
     .catch(() => console.log('Error launching dialer'));
   }*/

  sendMail(){
    //for more option please go here: http://ionicframework.com/docs/native/email-composer/
     let email = {
      to: 'contact@ionicthemes.com',
      subject: 'This app is the best!',
      body: "Hello, I'm trying this fantastic app that will save me hours of development"
    };
    // Send a text message using default options
    this.emailComposer.open(email);
  }

  openInAppBrowser(website: string){
    if(website!="http://" && website!=""){
       this.inAppBrowser.create(website, '_blank', "location=yes");
    }
   
  }

  googleUrl(){
    return this.domSanitizer.bypassSecurityTrustUrl("https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1562838.8527110727!2d38.338999!3d40.088356!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDDCsDA1JzE4LjEiTiAzOMKwMjAnMjAuNCJF!5e0!3m2!1str!2sus!4v1503476825375");
  }



}
