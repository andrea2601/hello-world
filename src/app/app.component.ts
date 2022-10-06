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
    {
    name: "John",
    surname: "Brown",
    age: "45",
    location: "Londra"
    },
    {
    name: "Claudia",
    surname: "Rossi",
    age: "18",
    location: "Parigi"
    },
    {
    name: "Mery",
    surname: "Verdi",
    age: "56",
    location: "Palermo"
    },
    {
    name: "Giuseppe",
    surname: "Peppe",
    age: "88",
    location: "Lucca"
    },
]

recivedFilter(value: string){
  this.filter=value;
}
}
