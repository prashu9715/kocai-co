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
  display = false;
  categoryData: Array<{ category: string; status: boolean }> = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.categoryData = changes['categories'].currentValue;
    this.createCategoryData();
  }

  createCategoryData() {
    this.categoryData = this.categories.map((category) => {
      return { category, status: false };
    });
  }

  togglePopup() {
    this.display = !this.display;
  }

  // createCategories() {
  //   console.log(this.categories);
  //   return this.categories.map((category) => {
  //     return { category, status: false };
  //   });
  // }

  onFilterChange(status: boolean, category: string) {
    this.categoryData.find((cat) => cat.category === category)!.status = status;
    this.onChange.emit(
      this.categoryData
        .filter((category) => category.status)
        .map((category) => category.category)
    );
  }

  getSelectedCategoryCount() {
    return this.categoryData.filter((category) => category.status).length;
  }
}
