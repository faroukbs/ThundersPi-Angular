import { CategoryProduct } from "./category-product";
import { ProductComment } from "./comment";

export class Product {
    id!: number;
    name!: string;
    description!: string;
    image!: string;
    prix!: number;
    quantity!: number;
    createdDate!: Date;
    updatedDate!: Date;
    category!: CategoryProduct;
    comments!: Array<ProductComment>;
    clientEtoile!: Map<number, number>;
    etoile!: number;
}
