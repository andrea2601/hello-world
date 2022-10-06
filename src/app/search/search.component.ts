import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() sendFilter = new EventEmitter<string>()

  inputContent: string = "";

  onChange(e: Event){
    this.sendFilter.emit((<HTMLInputElement>e.target).value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
