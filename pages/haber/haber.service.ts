import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

let baseUrl:string = "http://www.sivasrehberim.net/servis";

@Injectable()
export class HaberService {
  constructor(public http: Http) {}

  haber(haberId) {
    return this.http.get(baseUrl + "/haber/"+haberId).map(res => res.json());
  }
  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
