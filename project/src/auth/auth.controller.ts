import { AuthGuard } from '@nestjs/passport';
import { Routes, Services } from '../utils/constants';
import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { IAuthService } from './auth';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { IUSerService } from 'src/users/user';
import { instanceToPlain } from 'class-transformer';
import { LocalAuthGuard } from 'src/utils/Guards';
@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH) private authService: IAuthService,
    @Inject(Services.USERS) private userService: IUSerService,
  ) {}

  @Post('register')
  @UsePipes()
  async registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return instanceToPlain(await this.userService.createUser(createUserDto));
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login() {}

  @Get('status')
  status() {}

  @Get('logout')
  logout() {}
}
