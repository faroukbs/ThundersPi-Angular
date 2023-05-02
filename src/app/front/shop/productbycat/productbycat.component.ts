import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-productbycat',
  templateUrl: './productbycat.component.html',
  styleUrls: ['./productbycat.component.css']
})
export class ProductbycatComponent implements OnInit {
  products: Product[] = [];
  files: any = [];
  id!: number;

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private whishListService: WishListService
  ) {}

  ngOnInit(): void {
    //relodaing page
    this.route.params.subscribe((params) => {
      this.getProductByCategory();
    });
  //  this.getProductImages();
  }
  getProductByCategory() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductByCategory(this.id).subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
  getProductImages() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getImagesByProducts(this.id).subscribe((data) => {
      this.files = data;
    });
  }
  addToFav(id: number){
    this.whishListService.addWishList(id).subscribe(data => {})
  }
}
