import { Address } from './address';
import { User } from './user';
import { Order } from './order';
import { OrderItem } from './order-item';

export class Purchase {
    customer!: User;
    shippingAddress!: Address;
    billingAddress!: Address;
    order!: Order;
    orderItems!: OrderItem[]; 
}