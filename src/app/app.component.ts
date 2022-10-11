import { Component, OnInit } from '@angular/core';
import { PeopleService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-world';

  constructor(public service: PeopleService) { }

  ngOnInit(): void { }
}
