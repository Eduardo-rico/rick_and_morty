import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/auth/models/role.model';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the main character.'
  })
  username: string;
  @ApiProperty({
    description: 'Password of the main character who wants to get in the api.'
  })
  password: string;
  @ApiProperty({
    description: "There are only three roles here. ",
    enum: Role,
  })
  role?: Role = Role.SUMMER;
}
