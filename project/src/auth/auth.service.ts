import { IUSerService } from './../users/user';
import { Services } from '../utils/constants';
import { IAuthService } from './auth';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService implements IAuthService {
  validateUser() {}
}
