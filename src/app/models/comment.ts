import { Product } from "./product";

export class ProductComment {
    idCommentaire!: number;

    idClient!: number;

    comment!: string;

    likes!: number;

    procom!: Product;

    dateCreated!: Date;

    lastUpdated!: Date;
}
