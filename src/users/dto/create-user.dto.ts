import { Roles } from '../entities/user.entity';

export class CreateUserDto {
  username: string;
  password: string;
  role?: Roles = Roles.summer;
}
