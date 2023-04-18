import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css',
  '../../../../assets/cart/css/ui.css',
  '../../../../assets/cart/css/responsive.css',
  '../../../../assets/cart/css/bootstrap.css',
  '../../../../assets/cart/css/all.min.css'
]
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems') || '{}');
  // localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '{}') : [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  product: Product = new Product();
  files: any = [];
  id!: number;

  constructor(
    public productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listCartDetails();
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
    console.log(this.cartItems);
    console.log(this.totalPrice);
    this.getProductImages();
  }

  listCartDetails() {
    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe((data) => (this.totalPrice = data));

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      (data) => (this.totalQuantity = data)
    );

    // compute cart total price and quantity
    this.cartService.computeCartTotals();
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCart(theCartItem);
    console.log(this.cartItems);
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '{}');
  }
  getProductImages() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getImagesByProducts(this.id).subscribe((data) => {
      this.files = data;
    });
  }
}

