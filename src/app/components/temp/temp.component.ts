import { Component } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
  counter: number = 0;
  isActive: boolean=true;
  books:Array<string>=['a','b','c','d','e','f','g','h','i'];
  constructor(){
  }
  increment(){
    this.counter +=1;
    this.isActive = !this.isActive
    console.log("event Called", this.counter);
  }
  ngOnInit(){
    console.log("Dom Ready")
  }

}
