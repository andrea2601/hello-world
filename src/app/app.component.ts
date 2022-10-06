import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
  filter = "";
  obj = [
    {
    name: "Andrea",
    surname: "Lo Giudice",
    age: "24",
    location: "Palermo"
    },
    {
    name: "Marco",
    surname: "Rossi",
    age: "27",
    location: "Milano"
    },
    {
    name: "Giulio",
    surname: "Genova",
    age: "32",
    location: "Milano"
    },
    {
    name: "Genoveffa",
    surname: "Romano",
    age: "24",
    location: "Roma"
    },
    {
    name: "Giovanni",
    surname: "Giannone",
    age: "18",
    location: "Catania"
    },
]

recivedFilter(value: string){
  this.filter=value;
}
}
