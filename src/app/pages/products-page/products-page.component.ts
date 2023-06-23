import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Product } from 'src/app/core/interfaces/product';
import { CategoriesService } from 'src/app/core/services/api/categories/categories.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {
  id: number = 0;
  categoryProds: Product[]=[];
  constructor(private activeRote: ActivatedRoute,private categoriesService:CategoriesService) {}
  ngOnInit():void{
    this.id = this.activeRote.snapshot.params['id'];
    this.categoriesService.getCategoryProducts(this.id).pipe(map(data=>{
      return data;
    })
    )
    .subscribe(data =>{
      this.categoryProds = data;
    })
    
  }

}
