import { Product } from 'src/app/common/product';
export class Comment {
    
  idCommentaire!: number;

  idClient!: number;

  comment!: string;

  likes!: number;

  produit!: Product;

  dateCreated!: Date;

  lastUpdated!: Date;
}
