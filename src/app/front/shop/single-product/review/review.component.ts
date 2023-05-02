import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() product ='';
  @Input() produit!: Product;
  h=false;
  d=true;
  constructor() { }
  desc(){
    this.d=!this.d;
    this.h=!this.h
  }
  swap(){
    this.h=!this.h
    this.d=!this.d;
  }
  ngOnInit(): void {
    console.log(this.product);
  }

}
