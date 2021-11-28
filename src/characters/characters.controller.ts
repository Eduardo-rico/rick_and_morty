import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/models/role.model';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Roles(Role.RICK)
  @Post()
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.charactersService.create(createCharacterDto);
  }
  @Roles(Role.RICK, Role.MORTY, Role.SUMMER)
  @Get()
  findAll() {
    return this.charactersService.findAll();
  }
  @Roles(Role.RICK, Role.MORTY, Role.SUMMER)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.charactersService.findOne(+id);
  }
  @Roles(Role.RICK)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    return this.charactersService.update(+id, updateCharacterDto);
  }
  @Roles(Role.RICK)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charactersService.remove(+id);
  }
}
