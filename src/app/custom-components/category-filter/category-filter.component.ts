import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent implements OnChanges {
  @Input() categories: string[] = [];
  @Output() onChange = new EventEmitter<string[]>();

  displayPopup = false;
  categoryData: Array<{ name: string; status: boolean }> = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.categoryData = changes['categories'].currentValue;
    this.createCategoryData();
  }

  // creates category data for select/unselect
  createCategoryData() {
    this.categoryData = this.categories.map((category) => {
      return { name: category, status: false };
    });
  }

  // shows or hides popup
  togglePopup() {
    this.displayPopup = !this.displayPopup;
  }

  // called when selection change
  onFilterChange(status: boolean, name: string) {
    this.categoryData.find((cat) => cat.name === name)!.status = status;
    this.onChange.emit(
      this.categoryData
        .filter((category) => category.status)
        .map((category) => category.name)
    );
  }

  // gets total selected category count
  getSelectedCategoryCount() {
    return this.categoryData.filter((category) => category.status).length;
  }
}
