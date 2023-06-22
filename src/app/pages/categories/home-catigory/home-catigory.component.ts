import { Component, Input } from '@angular/core';
import { Category, categoryInit } from 'src/app/core/interfaces/category';

@Component({
  selector: 'app-home-catigory',
  templateUrl: './home-catigory.component.html',
  styleUrls: ['./home-catigory.component.css']
})
export class HomeCatigoryComponent {
  @Input() category:Category = categoryInit;
  constructor(){}
  ngOnInit():void{
    console.log(this.category);
    
  }

}
