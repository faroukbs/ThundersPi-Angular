import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart-item';
import { CategoryProduct } from 'src/app/models/category-product';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CategoryProductService } from 'src/app/services/category-product.service';
import { ProductService } from 'src/app/services/product.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: [
    './category-product.component.css',
    '../../../../assets/front/css/style.css',
    '../../../../assets/front/css/slick.css',
    '../../../../assets/front/css/responsive.css',
    '../../../../assets/front/css/nice-select.css',
    '../../../../assets/front/css/magnific-popup.css',
    '../../../../assets/front/css/jquery.nice-number.min.css',
    '../../../../assets/front/css/font-awesome.min.css',
    '../../../../assets/front/css/default.css',
    '../../../../assets/front/css/bootstrap.min.css',
    '../../../../assets/front/css/animate.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CategoryProductComponent implements OnInit {
  categories!: CategoryProduct[];
  @Input() products!: Product[];
 
  constructor(private categoryProductService: CategoryProductService,public productService:ProductService) { }

  ngOnInit(): void {
    this.categoriesProductList();
  }
  categoriesProductList() {
    this.categoryProductService.getProductCategories().subscribe(data => {
      this.categories = data
    })
  }
  getProductByCategory(id: number){
    this.productService.getProductByCategory(id).subscribe(data => {
      this.products = data
    })
  }

  showProductByCategory(id: number){
    
    this.getProductByCategory(id);
    console.log(this.products);
  }

}
