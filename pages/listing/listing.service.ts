import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { ListingModel } from './listing.model';
 
let baseUrl:string = "http://www.sivasrehberim.net/servis";

@Injectable()
export class ListingService {

  constructor(public http: Http) {}

  haberler() {
    return this.http.get(baseUrl + "/haberler").map(res => res.json());
  }

  sektorler() {
    return this.http.get(baseUrl + "/sektorler").map(res => res.json());
  }
  
  anasayfa_vitrin_firmalar(){
    return this.http.get(baseUrl + "/anasayfa_vitrin_firmalar").map(res => res.json());
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
