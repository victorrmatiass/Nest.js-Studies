import { Module } from '@nestjs/common';
import { OrderModule } from 'src/order/order.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [OrderModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
