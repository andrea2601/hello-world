import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(public http: HttpClient) { }
  people: any;
  loading: boolean = false;

  loadPeopleList() {
    this.loading = true;
    this.http.get("http://localhost:3000/people").subscribe((data) => {
      this.people = data
      this.loading = false;
    });
  }
}
