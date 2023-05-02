import { Component, Input, OnInit } from '@angular/core';
import { ProductComment } from 'src/app/models/comment';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-rev',
  templateUrl: './rev.component.html',
  styleUrls: ['./rev.component.css']
})
export class RevComponent implements OnInit {

  edit = false;
  c2!: ProductComment;
  bad = false;
  str!: string;
  j!: number;
  user: User = localStorage.getItem('currentUser')
    ? JSON.parse(localStorage.getItem('currentUser') || '{}')
    : null;
  u: User = new User();
  @Input() produit!: Product;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    console.log(this.produit);
  }

  eventEdit(i: number) {
    this.edit = true;
    this.j = i;
  }

  deleteCom(c: ProductComment) {
    this.productService.deleteCom(c.idCommentaire).subscribe(
      (data) => {
        this.getProdById(this.produit.id);
      },
      (error) => {}
    );
    this.edit = false;
  }

  likeModifyCom(c : ProductComment, prod : Product) {
    this.bad = false;
    c.likes = c.likes + 1;
    this.productService.getByIDCom(c.idCommentaire).subscribe((data) => {
      this.c2 = data;
      this.c2.likes = c.likes;
      this.c2.procom = prod;
      this.productService.modifyCom(this.c2).subscribe(
        (data) => {},
        (error) => {}
      );
    });

    this.edit = false;
  }

  modifyCom(c : ProductComment,prod :Product){
    this.bad=false;
    this.productService.getByIDCom(c.idCommentaire).subscribe(
      (data) =>{this.c2=data;this.c2.comment=c.comment;this.c2.procom=prod;
        this.productService.modifyCom(this.c2).subscribe(
          (data) =>{},
          (error) =>{if(error.status==406){alert("bad Word")}}

        )
      }
    );

    this.edit=false;

  }

  addCom(prod: Product) {
    let c3 = new ProductComment();
    c3.idClient = this.user.id;
    //aModifier
    c3.comment = this.str;
    c3.likes = 0;
    c3.procom = prod;
    this.bad = false;
    console.log(c3);
    this.productService.addCom(c3).subscribe(
      (data) => {
        console.log(c3);
        this.getProdById(prod.id);
      },
      (error) => {
        if (error.status == 500) {
          alert('Empty  Comment');
        } else if (error.status == 406) {
          alert('Bad  Word');
        } else if (error.status == 404) {
          alert('Duplicated');
        }
      },
      () => {}
    );

    this.edit = false;
    this.str = '';
  }

  getProdById(id: any) {
    this.productService.getProductById(id).subscribe((data) => {
      this.produit = data;
    });
  }

  getCommentUser(id: any) {
    this.productService.getByIDComUser(id).subscribe((data) => {
      this.u = data;
    });
  }
}

