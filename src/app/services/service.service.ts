import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { People } from '../model/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(public http: HttpClient) { }
  baseURL: string = "http://localhost:3000/";

  loadPeopleList(endpointURL: string) {
    return this.http.get<People[]>(this.baseURL + endpointURL);
  }

  loadPerson(endpointURL: string, index: string) {
    return this.http.get<People>(this.baseURL + endpointURL + index);
  }
}
