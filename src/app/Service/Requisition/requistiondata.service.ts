import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequistiondataService {

  
  url: string = ""


  constructor(private _http: HttpClient) { }

  requisitionForm = new Subject<any>(); //Decalring new RxJs Subject

  sendFormData(form: any) {
    this.requisitionForm.next(form);
  }


  postFormData(data: any) {
    return this._http.post(`${this.url}/RequisitionForm`, data)
  }


  getFormData() {
    return this._http.get(`${this.url}/RequisitionForm`)
  }

  editFormData(data: any, id: any) {
    return this._http.put(`${this.url}/RequistionForm/` + id, data)
  }

  deleteFormData(id: any) {
    return this._http.delete(`${this.url}/RequisitionForm/` + id)
  }


  getTimelineData() {
    return this._http.get(`${this.url}/timelineEvents`);
  }

  postPopupFormData(data: any) {
    return this._http.post(`${this.url}/referalFormData`, data);
  }

}
