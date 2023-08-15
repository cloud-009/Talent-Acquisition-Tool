import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  screened: any;


  constructor(public _http: HttpClient, public http: HttpClient) { }

  private screeningData = new Subject<any>();
  data$ = this.screeningData.asObservable();

  sendScreeningData(data: any) {
    this.screeningData.next(data);
  }


  get() {
    return this.http.get('http://localhost:3000/RequisitionForm');
  }
  getData() {
    return this._http.get("http://localhost:3000/orgdata")
  }

  getAnotherData() {
    return this._http.get("http://localhost:3000/businessData")

  }

  getLanding() {
    return this._http.get('http://localhost:3000/');
  }
  getfilterData() {
    return this.http.get("http://localhost:3000/filterData")
  }
  getCandidate() {
    return this._http.get('http://localhost:3000/hero');
  }


  sendCandidate() {
    this._http.get('http://localhost:3000/hero').subscribe({
      next: (res) => {
        this.screened = res;
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  fetchCandidate() {
    return this._http.get('http://localhost:3000/candidates');
  }

  createCandidate(data: any) {
    return this._http.post('http://localhost:3000/candidates', data);
  }

}
