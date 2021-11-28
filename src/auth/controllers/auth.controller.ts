import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from '../services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Req() req) {
    const user = req.user as User;
    return this.authService.generateJWT(user);
  }
}
