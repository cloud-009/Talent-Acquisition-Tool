import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000'


 person = [{
    name:'max',
    age:23,
  }]
  constructor(private http: HttpClient) { }

  getBoardData() {
    return this.http.get(`${this.url}/BoardData`)
  }


  getCandidateStatusData() {
    return this.http.get(`${this.url}/CandidateStatusData`);
  }

  sendPerson() {

    return this.person;
  }


}
