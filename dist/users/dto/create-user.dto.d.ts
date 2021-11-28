import { Role } from 'src/auth/models/role.model';
export declare class CreateUserDto {
    username: string;
    password: string;
    role?: Role;
}
