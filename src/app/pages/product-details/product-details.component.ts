import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id:number = 0;
  constructor(private activeRote:ActivatedRoute){

  }
  ngOnInit(){
    this.id = this.activeRote.snapshot.params['id'];
  }

}
