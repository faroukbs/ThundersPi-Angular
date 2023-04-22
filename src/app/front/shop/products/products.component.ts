import { Product } from './../../../models/product';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css',
  '../../../../assets/shop/css/ui.css',
  '../../../../assets/shop/css/responsive.css' ,
  '../../../../assets/shop/css/bootstrap.css',
  '../../../../assets/shop/css/all.min.css' ,

],
encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {

  @Input() products: Product[] = [];
  files: any = [];
  id!: number;
  fav!:Product[];
  p:number=1;
  
 

  constructor(
   
    public productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private whishListService: WishListService
  ) {}

  ngOnInit(): void {
    this.listProducts();
    this.productService.getProductList()
    .subscribe((data: Product[]) => {
      this.products = data;
    });
  }
  listProducts() {
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
    });
    this.getProductImages();
    this.getfav();
  }

  addToCart(product: Product) {
    const theCartItem = new CartItem(product);
    this.cartService.addToCart(theCartItem);
  }

  getProductImages() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getImagesByProducts(this.id).subscribe((data) => {
      this.files = data;
    });
  }

  addToFav(id: number){
    this.whishListService.addWishList(id).subscribe(data => {
      console.log(data);
    })
  }
  getfav(){
    this.whishListService.getWishLists().subscribe(data => {
      console.log(data);
      this.fav = data;
    }
  )}

 

}

