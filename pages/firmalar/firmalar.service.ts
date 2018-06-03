import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

 
let baseUrl:string = "http://www.sivasrehberim.net/servis";

@Injectable()
export class FirmalarService {

  constructor(public http: Http) {}

  firmalar(asId) {
    return this.http.get(baseUrl + "/firmalar/"+asId).map(res => res.json());
  }

  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
