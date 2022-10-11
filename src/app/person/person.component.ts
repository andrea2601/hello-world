import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../model/people';
import { PeopleService } from '../services/service.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: People = { id: 0, name: "Nome", surname: "Cognome", age: 0, location: "Location", description: "am libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere" };
  endpointURL: string = "people/";
  index: string = "0";
  constructor(public service: PeopleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.paramMap.get("id")!;
    this.service.loadPerson(this.endpointURL, this.index).subscribe((data: People) => {
      this.person = data;
    })
  }

}
