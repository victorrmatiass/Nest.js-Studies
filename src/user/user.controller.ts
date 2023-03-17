import { Controller, Get, Query, Param} from '@nestjs/common'
import { OrderService } from 'src/order/order.service';
import { UserQueryDto } from './dto/user-query.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private userService: UserService,
        private orderService: OrderService) {}

    @Get()
    getUsers(@Query() query: UserQueryDto) {
        return this.userService.getUsers(query)
    }
  
    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(Number(id))
    }

    @Get(':id/orders')
    getUserOrdersById(@Param('id') id: string) {
        return this.orderService.getUserOrdersById(Number(id))
    }
}