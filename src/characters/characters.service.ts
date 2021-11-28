import { HttpCode, Injectable, NotFoundException, ServiceUnavailableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';

@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character)
    private characterRepository: Repository<Character>,
  ) {}

  async create(createCharacterDto: CreateCharacterDto) {
    try {
      this.characterRepository.insert(createCharacterDto);
    } catch (error) {
      throw new ServiceUnavailableException('I fuck up, Morty');
    }
  }

  async findAll(): Promise<CreateCharacterDto[]> {
    return await this.characterRepository.find();
  }

  async findOne(id: number): Promise<CreateCharacterDto> {
    return await this.characterRepository.findOne(id);
  }

  async update(id: number, updateCharacterDto: UpdateCharacterDto) {
    try {
      await this.characterRepository.update(id, updateCharacterDto);
    } catch (error) {
      throw new NotFoundException("I don't know that shit, Morty");
    }
  }

  async remove(id: number) {
    try {
      await this.characterRepository.delete(id);
    } catch (error) {
      throw new NotFoundException('Wubba lubba dub dub');
    }
  }
}
