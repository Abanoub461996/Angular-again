import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Category, categoryInit } from 'src/app/core/interfaces/category';
import { Product } from 'src/app/core/interfaces/product';
import { CategoriesService } from 'src/app/core/services/api/categories/categories.service';

@Component({
  selector: 'app-home-catigory',
  templateUrl: './home-catigory.component.html',
  styleUrls: ['./home-catigory.component.css']
})
export class HomeCatigoryComponent {
  categorySamples:Product[];
  @Input() category:Category = categoryInit;
  
  constructor(private categoriesService:CategoriesService,private router:Router){}
  ngOnInit():void{
    this.categoriesService.getCategorySamples(this.category.id).pipe(map(data=>{
      return data;
    })
    )
    .subscribe(data =>{
      this.categorySamples = data;
    })
    
  }
  showCategory(){
    this.router.navigate([`categories/`,this.category.id])
  }

}
