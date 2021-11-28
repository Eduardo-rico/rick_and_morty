import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
export declare class CharactersController {
    private readonly charactersService;
    constructor(charactersService: CharactersService);
    create(createCharacterDto: CreateCharacterDto): Promise<void>;
    findAll(): Promise<CreateCharacterDto[]>;
    findOne(id: string): Promise<CreateCharacterDto>;
    update(id: string, updateCharacterDto: UpdateCharacterDto): Promise<void>;
    remove(id: string): Promise<void>;
}
