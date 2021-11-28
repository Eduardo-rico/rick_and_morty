import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private usersRespository;
    constructor(usersRespository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<{
        message: any;
    }>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByUsername(username: string): Promise<User>;
}
