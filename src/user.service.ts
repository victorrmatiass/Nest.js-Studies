import { NotFoundException } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";
import { UserQueryDto } from "./dto/user-query.dto";

@Injectable()
export class UserService {
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
    getUsers(query: UserQueryDto) {
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

    getUserById(id: number){
        
        const user = this.users.find((user) => user.id === (id))

        if (!user) {
            throw new NotFoundException()
        }
        
        return user
    }
    
}