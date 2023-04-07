import { CategoryProduct } from "./category-product";

export class Product {
    id!: number;
    name!: string;
    description!: string;
    image!: string;
    nprix!: number;
    gprix!: number;
    quantity!: number;
    createdDate!: Date;
    updatedDate!: Date;
    category!: CategoryProduct;
    commentaire!: Array<Comment>;
    clientEtoile!: Map<number, number>;
    etoile!: number;
}
