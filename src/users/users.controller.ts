import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.model';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Public()
  @Post()
  @ApiOperation({
    summary: 'Create a new user, go ahead, Gus! try with a RICK role to list all users and stuff',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Roles(Role.RICK)
  @ApiBearerAuth()
  @Get()
  @ApiOperation({
    summary: 'List all users.',
  })
  findAll() {
    return this.usersService.findAll();
  }
  @Roles(Role.RICK)
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({
    summary: 'Get one user by id.',
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}
