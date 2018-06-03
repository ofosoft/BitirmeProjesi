import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

 
let baseUrl:string = "http://www.sivasrehberim.net/servis";

@Injectable()
export class AltSektorService {

  constructor(public http: Http) {}

  alt_sektorler(sektorId) {
    return this.http.get(baseUrl + "/alt_sektorler/"+sektorId).map(res => res.json());
  }
  
  sponsor_firmalar(sektorId){
    return this.http.get(baseUrl + "/sponsor_firmalar/"+sektorId).map(res => res.json());
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
