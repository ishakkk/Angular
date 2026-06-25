import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  @Input() id:number=0;
  @Input() name:string="";

}
