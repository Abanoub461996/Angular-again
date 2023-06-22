import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Category, categoryInit } from 'src/app/core/interfaces/category';
import { CategoriesService } from 'src/app/core/services/api/categories/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories:Category[]=[];
  constructor(private categoriesService: CategoriesService){}

  ngOnInit(){
    this.categoriesService.getCategories().pipe(map(data=>{
      return data;
    })
    )
    .subscribe(data =>{
      this.categories = data;
    })
  }
  ngDoChange(){
    console.log(this.categories,'<=changes');
    
  }

}
