import { Repository } from 'typeorm';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { Character } from './entities/character.entity';
export declare class CharactersService {
    private characterRepository;
    constructor(characterRepository: Repository<Character>);
    create(createCharacterDto: CreateCharacterDto): Promise<void>;
    findAll(): Promise<CreateCharacterDto[]>;
    findOne(id: number): Promise<CreateCharacterDto>;
    update(id: number, updateCharacterDto: UpdateCharacterDto): Promise<void>;
    remove(id: number): Promise<void>;
}
