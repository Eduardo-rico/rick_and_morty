import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string) {
    const user: User = await this.usersService.findOneByUsername(username);
    const isValid = await bcrypt.compare(password, user.password);
    if (user && isValid) {
      return user;
    }
    return null;
  }
}
