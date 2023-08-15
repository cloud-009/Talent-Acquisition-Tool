import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor(private _http: HttpClient) { }

  get() {
    return this._http.get('http://localhost:3000/rahuldata')
  }

  postAccordian(data: any) {
    return this._http.post('http://localhost:3000/AccordianData', data)
  }


  UpdateAccordian(id: any, data: any) {
    return this._http.put('http://localhost:3000/AccordianData/' + id, data)
  }

  
  getAccordian() {
    return this._http.get('http://localhost:3000/AccordianData')
  }




}
