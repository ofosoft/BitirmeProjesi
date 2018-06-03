import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { ContactModel } from './contact.model';
 
let baseUrl:string = "http://www.sivasrehberim.net/servis";
@Injectable()
export class ContactService {

  constructor(public http: Http) {}

  /*firma(firmaId) {
    return this.http.get(baseUrl + "/firma/"+firmaId).map(res => res.json());
  }*/
 
 firma(firmaId): Promise<any> {
    return this.http.get(baseUrl + "/firma/"+firmaId)
     .toPromise()
     .then(response => response.json())
     .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
