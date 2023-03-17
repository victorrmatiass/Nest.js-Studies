import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { IsUserExistsMiddleware } from './middlewares/is-user-exist.middleware';

@Module({
  imports: [UserModule, OrderModule],
})
export class AppModule implements NestModule {
  configure(consume: MiddlewareConsumer) {
    consume.apply(LoggerMiddleware, IsUserExistsMiddleware).forRoutes('users/:id', 'users/:id/orders')
  }
}
