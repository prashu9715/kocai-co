import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() placeholder!: string;
  @Output() onSearch = new EventEmitter<string>();
  onType(searchString: string) {
    this.onSearch.emit(searchString);
  }
}
