import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
    orders = [
        {
            id: 1,
            userId: 1,
            amout: 1000
        }
    ]

    findAll(){
        return this.orders
    }

    getUserOrdersById(userId: Number) {
        return this.orders.filter((order) => order.userId === userId)
    }
}
