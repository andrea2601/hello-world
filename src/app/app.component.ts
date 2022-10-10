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
  obj: any = []
  constructor(public service: ServiceService) { }

  ngOnInit(): void {
    this.service.loadPeople().subscribe((data: any) => {
      this.obj = data;
      this.service.loading = false;
    });

  }

  recivedFilter(value: string) {
    this.filter = value;
  }
}
