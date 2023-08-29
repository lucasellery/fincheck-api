import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dtos/signin';
import { SignupDto } from './dtos/signup';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signin(signinDto);
  }

  @Post('signup')
  create(@Body() createUserDto: SignupDto) {
    return this.authService.signup(createUserDto);
  }
}
