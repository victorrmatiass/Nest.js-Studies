import { Controller, Get} from '@nestjs/common'

@Controller('users')
export class UserController {
    @Get()
    getUsers() {
        const users = [
            {
                id: 1,
                nome: 'Victor Matias'
            }
        ];
        return users
    }
}