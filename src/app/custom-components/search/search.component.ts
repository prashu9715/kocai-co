import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input({ required: true }) placeholder!: string;
  @Output() onSearch = new EventEmitter<string>();

  // will be called when typing
  onType(searchString: string) {
    this.onSearch.emit(searchString);
  }
}
