import { Component, EventEmitter, Output } from '@angular/core';
//this import things from angular library

@Component({  //decorator that defines the component metadata 
  selector: 'app-search-bar', //html tag used to represent the component in the template
  standalone: false,
  templateUrl: './search-bar.html', //path to the html
  styleUrl: './search-bar.css', //path to the css
})
export class SearchBarComponent { //class that defines the component logic
  @Output() searchChanged: EventEmitter<string> = new EventEmitter<string>();
   //decorator that defines an output property that emits events to the parent component
  onSearch(searchTerm: string) { //method that is called when the user types in the search bar
    this.searchChanged.emit(searchTerm); //emit the search term to the parent component
  }

}