import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRespository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
      createUserDto.password = hashedPassword;
      this.usersRespository.insert(createUserDto);
    } catch (error) {
      return { message: error };
    }
  }

  findAll() {
    return this.usersRespository.find({ select: ['username', 'role'] });
  }

  findOne(id: number) {
    return this.usersRespository.findOne({
      where: { id },
      select: ['username', 'role'],
    });
  }

  findOneByUsername(username: string) {
    return this.usersRespository.findOne({
      where: { username },
      select: ['username', 'role', 'password'],
    });
  }
}
