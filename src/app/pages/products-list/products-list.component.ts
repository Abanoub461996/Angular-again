import { Component, ViewChild } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product';
import { ProductCardComponent } from '../products-list/product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})

export class ProductsListComponent {
  
  products: Product[] = [{"id":1,"title":"Small Granite Bike","price":114,"description":"The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design","images":["https://picsum.photos/640/640?r=1430",
  "https://picsum.photos/640/640?r=2601","https://picsum.photos/640/640?r=983"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-27T04:00:20.000Z","category":{"id":1,"name":"new ","image":"https://picsum.photos/640/640?r=701","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-27T04:42:16.000Z"}},{"id":3,"title":"Modern Plastic Shirt","price":162,"description":"The Football Is Good For Training And Recreational Purposes","images":["https://picsum.photos/640/640?r=2391","https://picsum.photos/640/640?r=6332","https://picsum.photos/640/640?r=3954"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-27T04:01:48.000Z","category":{"id":5,"name":"Others","image":"https://picsum.photos/640/640?r=4766","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":4,"title":"Premium Metal Tuna","price":826,"description":"Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support","images":["https://picsum.photos/640/640?r=2193","https://picsum.photos/640/640?r=7622","https://picsum.photos/640/640?r=7545"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-27T04:06:33.000Z","category":{"id":2,"name":"Electronics","image":"https://picsum.photos/640/640?r=8896","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":5,"title":"Refined Concrete Bike","price":648,"description":"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles","images":["https://picsum.photos/640/640?r=7671","https://picsum.photos/640/640?r=5231","https://picsum.photos/640/640?r=2066"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":1,"name":"new ","image":"https://picsum.photos/640/640?r=701","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-27T04:42:16.000Z"}},{"id":6,"title":"Fantastic Concrete Pizza","price":633,"description":"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016","images":["https://picsum.photos/640/640?r=6886","https://picsum.photos/640/640?r=3437","https://picsum.photos/640/640?r=306"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":1,"name":"new ","image":"https://picsum.photos/640/640?r=701","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-27T04:42:16.000Z"}},{"id":7,"title":"Ergonomic Frozen Shoes","price":520,"description":"Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles","images":["https://picsum.photos/640/640?r=6077","https://picsum.photos/640/640?r=5772","https://picsum.photos/640/640?r=3376"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":4,"name":"Shoes","image":"https://picsum.photos/640/640?r=687","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":8,"title":"Sleek Bronze Soap","price":271,"description":"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality","images":["https://picsum.photos/640/640?r=9374","https://picsum.photos/640/640?r=5168","https://picsum.photos/640/640?r=2295"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":4,"name":"Shoes","image":"https://picsum.photos/640/640?r=687","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":9,"title":"Modern Steel Hat","price":948,"description":"New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart","images":["https://picsum.photos/640/640?r=2712","https://picsum.photos/640/640?r=2882","https://picsum.photos/640/640?r=7042"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":4,"name":"Shoes","image":"https://picsum.photos/640/640?r=687","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":10,"title":"Oriental Steel Chips","price":850,"description":"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality","images":["https://picsum.photos/640/640?r=7951","https://picsum.photos/640/640?r=5641","https://picsum.photos/640/640?r=5225"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":3,"name":"Furniture","image":"https://picsum.photos/640/640?r=769","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":11,"title":"Refined Metal Ball","price":467,"description":"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016","images":["https://picsum.photos/640/640?r=5797","https://picsum.photos/640/640?r=1817","https://picsum.photos/640/640?r=3468"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":4,"name":"Shoes","image":"https://picsum.photos/640/640?r=687","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":12,"title":"Handmade Plastic Computer","price":28,"description":"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality","images":["https://picsum.photos/640/640?r=2661","https://picsum.photos/640/640?r=1898","https://picsum.photos/640/640?r=7656"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":1,"name":"new ","image":"https://picsum.photos/640/640?r=701","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-27T04:42:16.000Z"}},{"id":13,"title":"Elegant Steel Hat","price":955,"description":"The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design","images":["https://picsum.photos/640/640?r=665","https://picsum.photos/640/640?r=3447","https://picsum.photos/640/640?r=4575"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":4,"name":"Shoes","image":"https://picsum.photos/640/640?r=687","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":14,"title":"Recycled Rubber Ball","price":891,"description":"The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality","images":["https://picsum.photos/640/640?r=8947","https://picsum.photos/640/640?r=7790","https://picsum.photos/640/640?r=8593"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":2,"name":"Electronics","image":"https://picsum.photos/640/640?r=8896","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":15,"title":"Gorgeous Wooden Mouse","price":324,"description":"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016","images":["https://picsum.photos/640/640?r=9511","https://picsum.photos/640/640?r=4470","https://picsum.photos/640/640?r=8805"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":3,"name":"Furniture","image":"https://picsum.photos/640/640?r=769","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":16,"title":"Practical Cotton Cheese","price":97,"description":"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016","images":["https://picsum.photos/640/640?r=4637","https://picsum.photos/640/640?r=6747","https://picsum.photos/640/640?r=289"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":5,"name":"Others","image":"https://picsum.photos/640/640?r=4766","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":17,"title":"Licensed Plastic Bacon","price":594,"description":"Carbonite web goalkeeper gloves are ergonomically designed to give easy fit","images":["https://picsum.photos/640/640?r=932","https://picsum.photos/640/640?r=3047","https://picsum.photos/640/640?r=1405"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":3,"name":"Furniture","image":"https://picsum.photos/640/640?r=769","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":18,"title":"Bespoke Soft Mouse","price":337,"description":"The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive","images":["https://picsum.photos/640/640?r=2642","https://picsum.photos/640/640?r=1230","https://picsum.photos/640/640?r=4523"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":3,"name":"Furniture","image":"https://picsum.photos/640/640?r=769","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":19,"title":"Sleek Granite Pizza","price":563,"description":"New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016","images":["https://picsum.photos/640/640?r=1457","https://picsum.photos/640/640?r=50","https://picsum.photos/640/640?r=4945"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":3,"name":"Furniture","image":"https://picsum.photos/640/640?r=769","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}},{"id":20,"title":"Elegant Soft Mouse","price":642,"description":"The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients","images":["https://picsum.photos/640/640?r=285","https://picsum.photos/640/640?r=6291","https://picsum.photos/640/640?r=8156"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":1,"name":"new ","image":"https://picsum.photos/640/640?r=701","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-27T04:42:16.000Z"}},{"id":21,"title":"Practical Bronze Towels","price":283,"description":"New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart","images":["https://picsum.photos/640/640?r=713","https://picsum.photos/640/640?r=7670","https://picsum.photos/640/640?r=4960"],"creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z","category":{"id":2,"name":"Electronics","image":"https://picsum.photos/640/640?r=8896","creationAt":"2023-05-26T21:24:59.000Z","updatedAt":"2023-05-26T21:24:59.000Z"}}]
@ViewChild(ProductCardComponent) child: any;
  constructor() {}
  receiveProduct(e: any){
    // console.log(e);
    
  }
  ngAfterViewInit() {
    // console.log(this.child.product);
  }

}
