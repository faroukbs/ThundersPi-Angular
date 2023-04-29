import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { WishList } from 'src/app/models/wish-list';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css',
  '../../../../assets/shop/css/ui.css',
  '../../../../assets/shop/css/responsive.css' ,
  '../../../../assets/shop/css/bootstrap.css',
  '../../../../assets/shop/css/all.min.css' ,

],
})
export class WishlistComponent implements OnInit {
  products: Product[] = [];
  wishlistItems!: WishList[];
  fav!:Product[];
  p:number=1;

  constructor(private whishListService: WishListService,
    public productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute, ) {}

  ngOnInit(): void {
    this.getfav();
  }

  removeFromWhishList(id: number) {
    this.whishListService.deleteWishList(id).subscribe(
      () => (this.fav = this.fav.filter((t) => t.id !== id)))
  }

  getfav(){
    this.whishListService.getWishLists().subscribe(data => {
      console.log(data);
      this.fav = data;
    }
  )}

  addToCart(product: Product) {
    const theCartItem = new CartItem(product);
    this.cartService.addToCart(theCartItem);
  }
}
