import { Role } from 'src/auth/models/role.model';
export declare class User {
    id?: number;
    username: string;
    password: string;
    role: Role;
}
