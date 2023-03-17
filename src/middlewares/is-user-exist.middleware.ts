import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { UserService } from "src/user/user.service";

@Injectable()
export class IsUserExistsMiddleware implements NestMiddleware {
    constructor(private userService: UserService) {}

    use(
        req: Request,
        res: Response,
        next: NextFunction
        ) {
            const userId = 1
            const user = this.userService.getUserById(userId)
            next()
            console.log(JSON.stringify(user, null, 2))
        }
}