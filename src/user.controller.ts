import { Controller, Get, Param, NotFoundException} from '@nestjs/common'
import { Query } from '@nestjs/common/decorators';
import { UserQueryDto } from './dto/user-query.dto';

@Controller('users')
export class UserController {
    users = [
        {
            id: 1,
            firstName: 'Victor',
            age: 20
        },
        {
            id: 2,
            firstName: 'Peterson',
            age: 19
        }
    ];

    @Get()
    getUsers(@Query() query: UserQueryDto) {
      let users = this.users
            
        if (query?.firstName) {
            users = users.filter((user) => user.firstName === query.firstName)
        }

        if (query?.age) {
            users = users.filter((user) => user.age === Number(query.age))
        }

        if (users.length === 0) {
            throw new NotFoundException()
        }

        return users



        }
 
  
    @Get(':id')
    getUserById(@Param('id') id: string) {
        const user = this.users.find((user) => user.id === Number(id))

        if (user) {
            return user
        }

       
    };
}