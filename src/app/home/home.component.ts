import { Component, OnInit } from '@angular/core';
import { People } from '../model/people';
import { PeopleService } from '../services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filter = "";
  endpointURL: string = "people";
  people: People[] = [];
  loading: boolean = false;

  constructor(public service: PeopleService) { }

  ngOnInit(): void {
    this.loading = true;
    this.service.loadPeopleList(this.endpointURL).subscribe((data: People[]) => {
      this.people = data;
      this.loading = false;
    });;
  }

  recivedFilter(value: string) {
    this.filter = value;
  }

}
