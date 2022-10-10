import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(public http: HttpClient) { }

  loading: boolean = false;

  loadPeople() {
    this.loading = true;
    return this.http.get("http://localhost:3000/people");
  }
}
