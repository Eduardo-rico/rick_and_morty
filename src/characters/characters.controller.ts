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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/models/role.model';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@ApiTags('Characters')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Roles(Role.RICK)
  @Post()
  @ApiOperation({
    summary: "Create new character ofcourse only if you're Rick",
  })
  create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.charactersService.create(createCharacterDto);
  }
  @Roles(Role.RICK, Role.MORTY, Role.SUMMER)
  @Get()
  @ApiOperation({ summary: 'Get all characters.' })
  findAll() {
    return this.charactersService.findAll();
  }
  @Roles(Role.RICK, Role.MORTY, Role.SUMMER)
  @Get(':id')
  @ApiOperation({ summary: 'Get one character by id.' })
  findOne(@Param('id') id: string) {
    return this.charactersService.findOne(+id);
  }
  @Roles(Role.RICK)
  @Patch(':id')
  @ApiOperation({
    summary: "Update a character by id, ofcourse only if you're Rick.",
  })
  update(
    @Param('id') id: string,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    return this.charactersService.update(+id, updateCharacterDto);
  }
  @Roles(Role.RICK)
  @Delete(':id')
  @ApiOperation({
    summary: "Delete a character by id, ofcourse only if you're Rick.",
  })
  remove(@Param('id') id: string) {
    return this.charactersService.remove(+id);
  }
}
