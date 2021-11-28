import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDTO } from 'src/users/dto/login.dto';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from '../services/auth/auth.service';

@ApiTags('Login')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiBody({ type: [LoginDTO] })
  @ApiOperation({ summary: 'Login into this fantastic API'})
  login(@Req() req) {
    const user = req.user as User;
    return this.authService.generateJWT(user);
  }
}
