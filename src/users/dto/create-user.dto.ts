import { Role } from 'src/auth/models/role.model';

export class CreateUserDto {
  username: string;
  password: string;
  role?: Role = Role.SUMMER;
}
