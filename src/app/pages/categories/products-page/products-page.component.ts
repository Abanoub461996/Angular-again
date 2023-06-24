import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  categoryProds: Product[] = [];
  constructor(
    private activeRote: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}
  ngOnInit(): void {
    this.activeRote.paramMap.pipe().subscribe(paramMap=>{this.id = +(paramMap?.get('id') ?? -1) })
    console.log(this.id);
    this.categoriesService.getCategoryProducts(this.id).pipe(
      map(data=>data)
      )
      .subscribe(data=>this.categoryProds = data)
  }

  receiveProduct(e: any){
    
  }
}
