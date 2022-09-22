import { ValidateUserDetails } from './../utils/types';
import { IUSerService } from './../users/user';
import { Services } from '../utils/constants';
import { IAuthService } from './auth';
import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { compareHash } from 'src/utils/helpers';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(Services.USERS) private readonly userService: IUSerService,
  ) {}
  async validateUser(userDetails: ValidateUserDetails) {
    const user = await this.userService.findUser({ email: userDetails.email });
    if (!user)
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED);
    return compareHash(userDetails.password, user.password);
  }
}
