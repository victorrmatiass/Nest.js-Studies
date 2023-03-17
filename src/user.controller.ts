import { Controller, Get, Param, NotFoundException} from '@nestjs/common'
import { Query } from '@nestjs/common/decorators';
import { UserQueryDto } from './dto/user-query.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}


    @Get()
    getUsers(@Query() query: UserQueryDto) {
        return this.userService.getUsers(query)
    }
   
  
    @Get(':id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(Number(id))
    };
}