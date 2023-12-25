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
  categories: string[] = [];

  selectedCategories: string[] = [];
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.getProducts();
  }

  createCategories() {
    this.categories = Array.from(
      new Set(this.products.map((product) => product.category))
    );
  }

  onSearch(keyword: string) {
    this.searchKeyword = keyword;
  }

  onCategorySelect(categories: string[]) {
    this.selectedCategories = categories;
  }

  get filteredProducts() {
    return this.products.filter(
      (prod) =>
        prod.label
          .toLowerCase()
          .includes(this.searchKeyword.trim().toLowerCase()) &&
        (this.selectedCategories.length
          ? this.selectedCategories.includes(prod.category)
          : true)
    );
  }

  getProducts() {
    this.httpClient
      .get<Product[]>('/assets/mock-data/products.json')
      .subscribe((products) => {
        this.products = products;
        this.createCategories();
      });
  }
}
