import { TypeOrmModule } from '@nestjs/typeorm';
import { Services } from '../utils/constants';
import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from 'src/utils/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [{ provide: Services.USERS, useClass: UserService }],
  exports: [{ provide: Services.USERS, useClass: UserService }],
})
export class UsersModule {}
