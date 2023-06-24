import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Category, categoryInit } from 'src/app/core/interfaces/category';
import { CategoriesService } from 'src/app/core/services/api/categories/categories.service';

@Component({
  selector: 'app-categories-main',
  templateUrl: './categories-main.component.html',
  styleUrls: ['./categories-main.component.css'],
})
export class CategoriesMainComponent {
  categories: Category[];
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categoriesService
      .getCategories()
      .pipe(
        map((data) => {
          return data;
        })
      )
      .subscribe((data) => {
        this.categories = data;
      });
  }
}
