import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { ProductComment } from 'src/app/models/comment';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css',
  '../../../../assets/front/css/style.css',
  '../../../../assets/front/css/slick.css',
  '../../../../assets/front/css/responsive.css',
  '../../../../assets/front/css/nice-select.css',
  '../../../../assets/front/css/magnific-popup.css',
  '../../../../assets/front/css/jquery.nice-number.min.css',
  '../../../../assets/front/css/font-awesome.min.css',
  '../../../../assets/front/css/default.css',
  '../../../../assets/front/css/bootstrap.min.css',
  '../../../../assets/front/css/animate.css'
],
  encapsulation: ViewEncapsulation.None,
})
export class SingleProductComponent implements OnInit {

  product: Product = new Product();
  productt: Product = new Product();
  products! : Product[];
  comment:ProductComment = new ProductComment();
  files: any = [];
  id!: number;
  sttr: string = '0';
  user: any = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser') || '{}')
    : null;

  constructor(
    public productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.productById();
    });
    // this.getProductImages();
    this.getAllProd();
  }

  productById() {
    const routeParams = this.route.snapshot.paramMap; //getting id from the route
    const productIdFromRoute = Number(routeParams.get('id')); //stocking the product into this variable
    this.productService.getProductById(productIdFromRoute).subscribe((data) => {
      this.product = data;
      this.productt = data;
    });
  }

  addToCart() {
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }

  getProductImages() {
    this.id = this.route.snapshot.params['id'];
    this.productService.getImagesByProducts(this.id).subscribe((data) => {
      this.files = data;
    });
  }
  addetoile() {
    this.productService
      .etoile(this.product.id, this.user.id, this.sttr)
      .subscribe((data) => {
        this.productById();
      });
  }
  getAllProd(){
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    } );
  }
}

