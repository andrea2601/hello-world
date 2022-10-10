import { Component, OnInit } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-world';
  filter = "";
  constructor(public service: ServiceService) { }

  ngOnInit(): void {
    this.service.loadPeopleList();
  }

  recivedFilter(value: string) {
    this.filter = value;
  }
}
