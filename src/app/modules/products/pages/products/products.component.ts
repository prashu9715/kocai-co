import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  searchKeyword: string = '';
  categoryList: string[] = [];

  selectedCategories: string[] = [];

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getProducts();
  }

  // creates distinct category list
  createCategoryList() {
    this.categoryList = Array.from(
      new Set(this.products.map((product) => product.category))
    );
  }

  // will be called when typing in search bar
  onSearch(keyword: string) {
    this.searchKeyword = keyword;
  }

  // will be called with list of selected categories
  onCategorySelect(categories: string[]) {
    this.selectedCategories = categories;
  }

  // this getter helps filtering the original data without modifying it
  get filteredProducts() {
    return this.products.filter(
      (product) =>
        product.label
          .toLowerCase()
          .includes(this.searchKeyword.trim().toLowerCase()) &&
        (this.selectedCategories.length
          ? this.selectedCategories.includes(product.category)
          : true)
    );
  }

  // gets product from json. Usually we use services to fetch data
  // since it is a mock, I fetched data in component itself
  getProducts() {
    this.httpClient.get<Product[]>('/assets/mock-data/products.json').subscribe(
      (products) => {
        this.products = products;
        this.createCategoryList();
      },
      (err) => {
        throw new Error('Failed to load products');
      }
    );
  }
}
